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


    const datasets = await getDatasets("http://localhost:8080/datasets");


   

    const containerLista = document.getElementById('datasets_user');

    let htmlItens = "";
    
    for (const dataset of datasets) {
        htmlItens += `
                <div class="dataset_user" id=${dataset.id}>
                    <div class="dataset_infos">
                        <img src="${dataset.image}" alt="" class="dataset_image">
                        <div class="dataset_info">
                            <h4>${dataset.nome}</h3>
                            <p>${dataset.autor}</p>
                            <p>${dataset.visible}</p>
                        </div>
                    </div>
                    <div>
                        <p>...</p>
                    </div>
                </div>
    `;
    }

    
    containerLista.innerHTML = htmlItens
    

});