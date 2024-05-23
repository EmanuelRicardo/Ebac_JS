var resposta_deposito = window.document.getElementById ('resposta_deposito')

function tentativa_deposito(){
    var nome_beneficiario = window.document.getElementById ('nome_beneficiario')
    var numero_conta = window.document.getElementById ('numero_conta')
    var valor = window.document.getElementById ('valor') 

    if (nome_beneficiario.value.length == 0){
        window.alert ('Digite o seu nome!');
    } else if (numero_conta.value.length == 0){
        window.alert ('Digite o número da conta!')
    } else if (valor.value.length == 0){
        window.alert ('Digite o valor, por gentileza!!')
    } else {
        window.alert (`${nome_beneficiario.value} com a conta de número ${numero_conta.value} está depositando o valor de: ${valor.value}R$`)
    }
}