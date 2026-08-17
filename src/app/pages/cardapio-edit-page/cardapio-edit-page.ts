import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { finalize } from 'rxjs';
import { BtnBack } from '../../components/btn-back/btn-back';
import { ModalProdutoForm } from '../../components/modal-produto-form/modal-produto-form';
import { Produto, ProdutoPayload } from '../../models/pedido.models';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-cardapio-edit-page',
  imports: [CurrencyPipe, BtnBack, ModalProdutoForm],
  templateUrl: './cardapio-edit-page.html',
  styleUrl: './cardapio-edit-page.scss',
})
export class CardapioEditPage implements OnInit {
  private readonly produtosService = inject(ProdutosService);

  produtos: readonly Produto[] = [];
  produtoSelecionado: Produto | null = null;
  isLoading = true;
  isSaving = false;
  isModalOpen = false;
  errorMessage = '';

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.produtosService
      .listar()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (produtos) => (this.produtos = produtos),
        error: () => (this.errorMessage = 'Não foi possível carregar o cardápio.'),
      });
  }

  openCreateModal(): void {
    this.produtoSelecionado = null;
    this.isModalOpen = true;
  }

  openEditModal(produto: Produto): void {
    this.produtoSelecionado = produto;
    this.isModalOpen = true;
  }

  closeModal(): void {
    if (!this.isSaving) {
      this.isModalOpen = false;
      this.produtoSelecionado = null;
    }
  }

  saveProduto(payload: ProdutoPayload): void {
    const produtoSelecionado = this.produtoSelecionado;
    const request = produtoSelecionado
      ? this.produtosService.atualizar(produtoSelecionado.id, payload)
      : this.produtosService.criar(payload);

    this.isSaving = true;
    this.errorMessage = '';
    request.pipe(finalize(() => (this.isSaving = false))).subscribe({
      next: (produto) => {
        this.produtos = produtoSelecionado
          ? this.produtos.map((item) => (item.id === produto.id ? produto : item))
          : [...this.produtos, produto];
        this.isModalOpen = false;
        this.produtoSelecionado = null;
      },
      error: () => (this.errorMessage = 'Não foi possível salvar o produto. Tente novamente.'),
    });
  }

  deleteProduto(produto: Produto): void {
    this.errorMessage = '';
    this.produtosService.excluir(produto.id).subscribe({
      next: () => (this.produtos = this.produtos.filter((item) => item.id !== produto.id)),
      error: () => (this.errorMessage = 'Não foi possível excluir o produto. Tente novamente.'),
    });
  }
}
