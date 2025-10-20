function validarCadastro(){
    let valorCodigoCadastro = document.getElementById('codigoCadastro').value
    if (valorCodigoCadastro < 0 || isNaN(valorCodigoCadastro)){
        alert("Código invalido");
        return false;
    }


    let valorNumero = document.getElementById('telefoneCadastro').value
    if (valorNumero < 0 || isNaN(valorNumero)){
        alert("Número invalido");
        return false;
    }

    return true;



}

