export interface Curriculo{

    key?: string;

    usuario?:{
        key?: string;
        imagem?: ImageBitmap,
        email: string,
        senha: string
    }

    pessoal?:{
        nome?: string,
        sobrenome?: string,
        sexo?: string,
        telefone?: string,
        celular?: string,
        estadoCivil?: string,
        filhos?:string,
        dataNascimento?: string,
        paisOrigem?: string,
        historia?: string
    }

    endereco?:{
        cep?: string;
        pais?: string;
        estado?: string;
        cidade?: string;
        bairro?: string;
        rua?: string;
        numero?: string;
    }

    profissional?:{

        objetivo?: string,
        grauFormacao?: string,
        formacao?:{
            curso?: string,
            intituicao?: string,
            conclusao?: string,
            area?: string,
            descricao?: string
        }

    }
}





