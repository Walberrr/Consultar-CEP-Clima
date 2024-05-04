    function consultaEndereço() {
        let cep = document.querySelector('#cep').value;

        if (cep.length !== 8) {
            alert('O CEP digitado é inválido');
            return;
        }
        let url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url).then(function(response){
            response.json().then(mostrarEndereço); 
            });
        }

    function mostrarEndereço(dados) {
        let resultado = document.querySelector('#resultadoCEP');

        if (dados.erro) {
            resultado.innerHTML = "Não foi possível localizar endereço!";

        } else {
        resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                               <p>Complemento: ${dados.complemento}</p>
                               <p>Bairro: ${dados.bairro}</p>
                               <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`
        }
    }
    
    function consultaClima() {
        let cidade = document.querySelector('#cidade').value;
    
        if (cidade.length === 0) {
            alert('Por favor, digite o nome de uma cidade');
            return;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=8364aea38c06c47a44e628ebf7fb3630`;
    
        fetch(url).then(function(response){
            response.json().then(mostrarClima); 
        });
    }
    
    function mostrarClima(dados) {
        let resultado = document.querySelector('#resultadoClima');
    
        if (dados.cod !== 200) {
            resultado.innerHTML = "Não foi possível localizar essa cidade!";
        } else {
            let temperatura = dados.main.temp - 273.15;
            resultado.innerHTML = `<p>Cidade: ${dados.name} - ${dados.sys.country}</p>
                                   <p>Temperatura: ${temperatura.toFixed(2)}°C</p>`
        }
    }
    
    