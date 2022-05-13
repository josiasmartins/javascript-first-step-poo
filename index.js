import User from './user.js';
import Docente from './Docente.js';
import Admin from './Admin.js';

const novoUser = new User('Mariana', 'm@m.com', '1999-01-01');
// console.log(novoUser.exibirInfos());

// const novoAdmin = new Admin('Ibag', 'r@r.com', '2021-01-01');
// console.log(novoAdmin.nome);
// novoAdmin.nome = "";
// console.log(novoAdmin.nome);

const novoDocente = new Docente('Guilerme', 'g@g.com', '2021-01-01');
console.log(novoDocente.exibirInfos());