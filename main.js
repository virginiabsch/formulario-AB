const form = document.getElementById('form-matricula');

form.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault();

    //obtendo valores dos inputs
    const campoA = document.getElementById('campo-A').value;
    const campoB = document.getElementById('campo-B').value;

    //convertendo valores para números inteiros
    const campoAInt = parseInt(campoA);
    const campoBInt = parseInt(campoB);

    //verificando conversão
    if (!isNaN(campoAInt) && !isNaN(campoBInt)) {

        //comparando números inteiros
        if (campoBInt > campoAInt) {
            alert("Matrícula realizada com sucesso");
        } else if ('campoAInt'>'campoBInt') {
            alert ("O ano de matrícula deve ser posterior ao ano de nascimento");
        } else {
            alert("O ano de matrícula deve ser posterior ao ano de nascimento");
        }    
    }
})
console.log(form);