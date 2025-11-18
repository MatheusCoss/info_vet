document.addEventListener('DOMContentLoaded', async function(){
    
    let lixeira_button = document.getElementById('lixeira_button')
    console.log(lixeira_button)
    lixeira_button.addEventListener('click', () => {
        let confirmacao = confirm('Deseja apagar o dataset?')
        if (confirmacao == true){
        alert('Dataset Excluido')
        window.location.href = '../index.html'
        }
    })

})


