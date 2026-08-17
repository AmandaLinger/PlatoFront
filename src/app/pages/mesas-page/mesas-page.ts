import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnBack } from '../../components/btn-back/btn-back';

@Component({ selector: 'app-mesas-page', imports: [ReactiveFormsModule, BtnBack], templateUrl: './mesas-page.html', styleUrl: './mesas-page.scss' })
export class MesasPage {
  private readonly formBuilder = inject(FormBuilder);
  readonly form = this.formBuilder.nonNullable.group({ totalMesas: [12, [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')]] });
  totalMesas = 12;
  saved = false;

  save(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.totalMesas = this.form.controls.totalMesas.value;
    this.saved = true;
  }
}
