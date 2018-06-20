// O VAR possui um problema de escopo , dentro do if o var vaza o escopo da variavel
// O LET Conserta o Problema de Escopo do Var, o escopo é mantido
// O CONST Não aceita a atribuiçao de novo valor, durante o tempo de execução
function imprimeNome() {
    if (true) {
        var nome = 'Luna';
    }
    if (true) {
        let nome = 'Luna';
    }
    console.log('Dentro', nome);
}

imprimeNome();