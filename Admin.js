import User from './User.js';

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role = 'admin', ativo = true);
    }   

    nomeAdmin() {
        return `${this.nome}`
    }

    exibirInfos() {
        // const object = this.#montaObjeto();
        return `${this.nome}, ${this.role}, ${this.ativo}`;
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso criado ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}

// const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
// console.log(novoAdmin.criarCurso('js', 30));