export class DadosPessoaisModel{
    constructor(
        public nome:string, public sobrenome:string, public sexo:string, 
        public email:string, public telefone:string, public celular:string,
        public estado_civil:string, public filhos:string, public data_nasc:string
    ){}
}