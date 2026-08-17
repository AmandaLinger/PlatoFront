import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FuncionarioCadastro } from '../../models/configuracoes.models';

@Component({
  selector: 'app-modal-funcionario-form',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-funcionario-form.html',
  styleUrl: './modal-funcionario-form.scss',
})
export class ModalFuncionarioForm {
  @Output() readonly closed = new EventEmitter<void>();
  @Output() readonly saved = new EventEmitter<FuncionarioCadastro>();
  private readonly formBuilder = inject(FormBuilder);

  readonly form = this.formBuilder.nonNullable.group({
    nome: ['', [Validators.required, Validators.maxLength(100)]],
    telefone: ['', [Validators.required, Validators.maxLength(30)]],
    cargo: ['', [Validators.required, Validators.maxLength(80)]],
  });

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    this.saved.emit({ nome: value.nome.trim(), telefone: value.telefone.trim(), cargo: value.cargo.trim() });
  }
}
