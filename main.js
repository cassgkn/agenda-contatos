const form = document.getElementById('form-contato');
const nomes = [];
const telefones = [];
let linhas = '';

// escutar ou interceptar os eventos do botão submit
form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarlinha();
    atualizaTabela();
    atualizaSomaContatos()

})

//Esta função tem apenas o objetivo de adiocionar uma linha nova por vez da célula Atividades da tabela e vai se armazenada na variavel "let linhas" que está no escopo geral do codigo.
function adicionarlinha(){

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(nomes.includes(inputNomeContato.value)){
        alert(`Já existe o nome: ${inputNomeContato.value} em sua agenda!`);
    } else {
        nomes.push(inputNomeContato.value);// essa linha está amarrada c/ array "const nomes" fazendo push dentro, ou seja, valores que foram capturados pelo document.getElementById('nome-contato') e armazenados dentro da "const inputNomeContato "
        telefones.push(parseFloat(inputNumeroContato.value));// essa linha está amarrada c/ array "const telefones" fazendo push dentro, ou seja, valores que foram capturados pelo document.getElementById('numero-contato') e armazenados dentro da "const inputNumeroContato ". Usado o parseFloat p/ mudar interpretação do JS de tipo string p/ number e aceitar também como decimal o valor.

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

//Esta função atualiza os dados da tabela. Significa que manterá os dados que forem lançados nos inputs
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

//Esta função retorna a qty total de contatos e joga dentro do html
function atualizaSomaContatos() {
    const somaFinal = somaContatosFinal();

    // externa para dentro do html
    document.getElementById('qty-contatos').innerHTML = somaFinal; 

}

//Esta função é p/ calcular a soma de todas as notas que forem inseridas na tabela
function somaContatosFinal(){
    let somaContatos = 0;

    for (let i = 0; i < nomes.length; i++) {
        somaContatos = somaContatos + nomes[i];
    }

    return nomes.length
}