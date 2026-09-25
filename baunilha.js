console.clear();
const alunos = [
  { nome: "João", sobrenome: "Silva", nota: 7 },
  { nome: "Ana", sobrenome: "Clara", nota: 9.5 },
  { nome: "Elian", sobrenome: "Maciel", nota: 2 },
  { nome: "Maria Alice", sobrenome: "Prigolli Milan", nota: 8.5 },
  { nome: "Davi Luís", sobrenome: "Variani", nota: 5.7 },
  { nome: "Maria Eduarda", sobrenome: "Maciel Da Rosa", nota: 2.1 },
  { nome: "Eliéser", sobrenome: "Júnior", nota: 5.1 },
  { nome: "Gabrielly Eloísa", sobrenome: "Montegutti", nota: 7.9 },
  { nome: "Lucas", sobrenome: "Aurélio Bruscato", nota: 10 },
  { nome: "Eloísa Tressoldi", sobrenome: "Nervo", nota: 9.5 },
];

alunos.forEach((aluno) => {
  if (aluno.nota >= 7) {
    console.log(aluno.nome + " " + aluno.sobrenome + " - Aprovado!");
  } else {
    console.log(aluno.nome + " " + aluno.sobrenome + " - Reprovado!");
  }
});
