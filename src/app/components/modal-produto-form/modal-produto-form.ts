import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Produto, ProdutoPayload } from '../../models/pedido.models';

@Component({
  selector: 'app-modal-produto-form',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-produto-form.html',
  styleUrl: './modal-produto-form.scss',
})
export class ModalProdutoForm implements OnChanges {
  @Input() produto: Produto | null = null;
  @Input() isSaving = false;
  @Output() readonly closed = new EventEmitter<void>();
  @Output() readonly saved = new EventEmitter<ProdutoPayload>();

  private readonly formBuilder = inject(FormBuilder);

  readonly form = this.formBuilder.nonNullable.group({
    imagemUrl: ['', [Validators.required]],
    nome: ['', [Validators.required, Validators.maxLength(80)]],
    descricao: ['', [Validators.required, Validators.maxLength(300)]],
    precoUnitario: [0, [Validators.required, Validators.min(0.01)]],
  });

  imageError = '';

  get isEditing(): boolean {
    return this.produto !== null;
  }

  get imagePreview(): string {
    return this.form.controls.imagemUrl.value?.trim() || '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['produto']) {
      this.imageError = '';
      this.form.reset({
        imagemUrl: this.produto?.imagemUrl ?? '',
        nome: this.produto?.nome ?? '',
        descricao: this.produto?.descricao ?? '',
        precoUnitario: this.produto?.precoUnitario ?? 0,
      });
    }
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.item(0);

    this.imageError = '';

    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      this.form.controls.imagemUrl.setValue('');
      this.form.controls.imagemUrl.markAsTouched();
      this.imageError = 'Selecione um arquivo de imagem válido.';
      input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;

      if (typeof imageDataUrl === 'string') {
        // Atualiza diretamente o valor no FormGroup.
        // O get imagePreview() vai ler esse valor automaticamente!
        this.form.controls.imagemUrl.setValue(imageDataUrl);
        this.form.controls.imagemUrl.markAsDirty();
        this.form.controls.imagemUrl.markAsTouched();
      }
    };
    reader.onerror = () => {
      this.form.controls.imagemUrl.setValue('');
      this.imageError = 'Não foi possível ler a imagem selecionada.';
    };
    reader.readAsDataURL(file);
  }

  save(): void {
    if (this.form.invalid || this.isSaving) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    this.saved.emit({
      imagemUrl: value.imagemUrl.trim(),
      nome: value.nome.trim(),
      descricao: value.descricao.trim(),
      precoUnitario: value.precoUnitario,
    });
  }
}
