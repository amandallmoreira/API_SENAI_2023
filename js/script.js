// API = aplicação que pode ser usada em diversos projetos (Application Programming Interface)

// FETCH = pega a API toda, busca a API

var cep = document.querySelector('#cep');
cep.addEventListener("focusout", consultar);

function consultar(){
    
    let cepValue=document.querySelector("#cep").value;
    fetch(`https://viacep.com.br/ws/${cepValue}/json/`).then((response)=>{
        return response.json()
    }).then((data)=>{
        let localidade = document.querySelector("#localidade");
        localidade.value=data.localidade;
    });
}

