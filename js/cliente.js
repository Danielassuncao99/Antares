var enderecoForm = document.querySelector(".form-body");
var cepInput = document.querySelector("#cep");
var ruaInput = document.querySelector("#rua");
var bairroInput = document.querySelector("#bairro");
var cidadeInput = document.querySelector('#cidade')
var estadoInput = document.querySelector("#estado")
var formInput = document.querySelector("[data-input]")

cepInput.addEventListener("keyup"), (e) =>{
    const inputValue = e.target.value;

    if (inputValue.length === 8){

    };
};

var getAddress = async (cep) =>{

    const apiURL = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    console.log(formInput);
    console.log(data.erro);

    ruaInput.value = data.logradouro;
    cidadeInput.value = data.localidade;
    bairroInput.value = data.bairro;
    estadoInput.value = data.uf;
};












































/*cepInput.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/;
    const tecla = String.fromCharCode(e.keyCode);

    if(!onlyNumbers.test(tecla)){
        e.preventDefault();
        return;
    }
});

cepInput.addEventListener("keyup", (e) =>{
    const inputValue = e.target.value;
    if (inputValue.length === 8){
        //fazer alguma coisa - rodar aplicação
        getEndereço(inputValue);
        
    }

});

const getEndereço = async (cep) =>{

    const apiURL = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fecth(apiURL);
    const data = await response.json();
    console.log(data);
}*/
