

export class Pessoa {
  codigo?: number;
  nome?: string;
  ativo = true;
}





export class Maquina {
  codigo?: number;
}

export class Lancamento {
  codigo?: number;
  tipo = 'RECEITA';
  descricao?: string;
  dataFinalizacao?: Date;
  dataProducao?: Date;
  quantidade?: number;
  observacao?: string;
  pessoa = new Pessoa();
maquina = new Maquina();
}
