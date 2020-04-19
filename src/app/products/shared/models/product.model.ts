import { BaseEntity } from '../../../core/entities/base-entity';

export class Product extends BaseEntity {
  nome: String;
  preco: Number;
  descricao: String;

  constructor(nome: String, preco: Number, descricao: String ){
    super();
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
  }

}
