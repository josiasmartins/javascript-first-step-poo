import User from './User.js';

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role = 'admin', ativo = true);
    }   

    criarCurso(nomeDoCurso, vagas) {
        return `Curso criado ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
console.log(novoAdmin.criarCurso('js', 30));