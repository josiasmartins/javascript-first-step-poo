import User from './user.js';

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role = 'admin', ativo);
    }   

    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} aprovado no curso ${curso}`;
    }
}

const novoDocente = new Docente('Mariana', 'm@m.com', '1999-01-01');
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Juliana', 'JS'));