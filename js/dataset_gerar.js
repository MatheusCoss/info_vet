async function getDatasets(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    
    return result;
  } catch (error) {
    console.log("Erro bosta");
  }
}

async function processArrayConcurrently(promises) {
  const results = await Promise.all(promises);
  return results;
}


document.addEventListener('DOMContentLoaded', async function() {


    const datasets = await getDatasets("http://localhost:8080/datasets/"+ sessionStorage.getItem("login_id"));


   

    const containerLista = document.getElementById('datasets_user');

    let htmlItens = "";
    
    for (const dataset of datasets) {
        htmlItens += `
                
                <div class="dataset_user dataset-w" id=${dataset.id}>
                    <div class="dataset_infos">
                        <img src="${dataset.image}" alt="" class="dataset_image">
                        <div class="dataset_info">
                            <a class="dataset-link" href="../dataset.html">
                              <h4>${dataset.nome}</h3>
                              <p>${dataset.autor}</p>
                              <p>${dataset.visible}</p>  
                            </a>
                        </div>
                    </div>
                    
                    <div class="icons-dataset">
                        <a class="btn-editar" href="editar_dataset.html"><img src="../../img/pen.svg" alt="" class="pen-icon"></a>
                      <a class="btn-excluir"><img src="../../img/trash2.svg" alt="" class="pen-icon"></a>
                    </div>
                </div>
              
    `;
    }

    
    containerLista.innerHTML = htmlItens


    



    

});


async function delete_dataset(id) {
  
    const resp = await fetch("http://localhost:8080/datasets/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    });

    window.location.href = window.location.href;

    if (resp.ok) {
        const data = await resp.json();
        console.log("Dataset excluido:", data);
       
      } else {
        alert("Erro");
    }

    
}



document.addEventListener('DOMContentLoaded', async function() {

    const listaDeDatasets = document.getElementById('datasets_user');
  

    
    listaDeDatasets.addEventListener('click', async function(event) {
        const itemClicado = event.target.closest('.dataset-link');
        const botaoEditar = event.target.closest('.btn-editar');
        const botaoExcluir = event.target.closest('.btn-excluir');

        if (itemClicado) {
            const dataset_card =  itemClicado.closest(".dataset_info").closest(".dataset_infos").closest(".dataset-w").id
            sessionStorage.setItem("dataset_id", dataset_card);
  
        }

        if (botaoEditar){
          const dataset_card =  botaoEditar.closest(".icons-dataset").closest(".dataset-w").id
          sessionStorage.setItem("dataset_edit", dataset_card);
        }

        if (botaoExcluir) {
          
          
          const dataset_card =  botaoExcluir.closest(".icons-dataset").closest(".dataset-w").id
          let confirmacao = confirm('Deseja apagar o dataset?')
            if (confirmacao == true){


              await delete_dataset(dataset_card)
            
          }
        }
    });


});