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

async function getUser(url) {
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


document.addEventListener('DOMContentLoaded', async function() {
    const dataset = await getDatasets("http://localhost:8080/datasets/dataset/"+ sessionStorage.getItem("dataset_id"));

    const user = await getDatasets("http://localhost:8080/usuarios/"+ dataset.autor);


    const dataset_name = document.getElementById("nome-dataset")
    const dataset_desc = document.getElementById("desc-dataset")
    const dataset_autor_name = document.getElementById("autor-dataset")

    dataset_name.textContent = dataset.nome
    dataset_desc.textContent = dataset.desc
    dataset_autor_name.textContent = user.login

    

})