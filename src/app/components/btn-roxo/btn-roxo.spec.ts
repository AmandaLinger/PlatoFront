import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRoxo } from './btn-roxo';

describe('BtnRoxo', () => {
  let component: BtnRoxo;
  let fixture: ComponentFixture<BtnRoxo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnRoxo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnRoxo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
