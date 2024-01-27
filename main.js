const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario')
let formValido = false

function validaNome(nomeCompleto){
   const nomeComoArray = nomeCompleto.split(' ')
   return nomeComoArray.length > 1
}

// não deixa a pag caregar  oq seria normal no form
form.addEventListener('submit',function(e){
    e.preventDefault()

    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const destricao = document.getElementById('descricao')
    const msgSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - contat <b>${numeroContaBeneficiario.value}</b>.`

    formValido = validaNome(nomeBeneficiario.value)

    if (formValido){
        const containerMsg = document.querySelector('.sucesso-msg')
        containerMsg.innerHTML = msgSucesso
        containerMsg.style.display = 'block'

        nomeBeneficiario.value = ''
        numeroContaBeneficiario.value= ''
        valorDeposito.value = ''
        destricao.value = ''
    } else{
        document.querySelector('.errorNome').style.display = 'block'
    }
})

nomeBeneficiario.addEventListener('keyup',function(e){
    console.log(e.target.value)
    formValido = validaNome(e.target.value)

    if (!formValido){
        document.querySelector('.errorNome').style.display = 'block'
    } else{
        document.querySelector('.errorNome').style.display = 'none'
        
    }
})