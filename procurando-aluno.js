const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  const [alunos, medias] = listaDeAlunosEMedias;

  //includes verifica se o parametro passado está incluido na lista
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    //indexOf retorna o indice passado no parametro
    const indice = alunos.indexOf(aluno);
    const mediaDoAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaDoAluno}.`);
  } else {
    console.log("Aluno não cadastrado.");
  }
}

exibeNomeENota("Ana");
