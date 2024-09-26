let contador = 0 ;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

btnAdd.addEventListener('click', addTarefa);

function addTarefa() {
    // pegar valor do input
    let valorInput= input.value;

    // se não for fazio nem nulo nem indefinido
    if((valorInput !== "") && (valorInput !== null) && (valorInput  !== undefined ) ){
        
        ++contador;
        
        let novoItem = `<div id="${contador}" class="item">

            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="bi bi-record"></i>
            </div>

            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>

            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">
                    <i class="bi bi-trash-fill"></i>
                    Deletar
                </button>
            </div>
            
        </div>`
        
        //Adiciona novo item no main
        main.innerHTML += novoItem;

        //zerar os campos
        input.value = "";
        input.focus();

    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == "item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('bi-record');
        icone.classList.add('bi-check2-circle');


        item.parentNode.appendChild(item);
    }else{
        item.classList.remove ('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('bi-check2-circle');
        icone.classList.add('bi-record');
    } 
    
}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { // Verifica se a tecla Enter foi pressionada
        event.preventDefault(); // Impede o comportamento padrão da tecla Enter
        btnAdd.click(); // Aciona o botão de adicionar
    }
});
