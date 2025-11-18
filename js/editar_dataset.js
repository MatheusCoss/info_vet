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
    const dataset = await getDatasets("http://localhost:8080/datasets/dataset/"+ sessionStorage.getItem("dataset_edit"));

    


    const dataset_name = document.getElementById("nomeDataset")
    const dataset_desc = document.getElementById("desc")
    
    
    dataset_name.value = dataset.nome
    dataset_desc.textContent = dataset.desc
    

    
    document.getElementById("formDataset").addEventListener("submit", async function (event) {
        event.preventDefault(); 
    

        const resp = await fetch("http://localhost:8080/datasets/" + sessionStorage.getItem("dataset_edit"), {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                autor: dataset.autor,
                nome: dataset_name.value,
                image: "",
                desc: dataset_desc.textContent,
                visible: true
            })
        });

        if (resp.ok) {
            const data = await resp.json();
            console.log("Dataset editado:", data);

            window.location.href = "../dataset.html";
        
        } else {
            alert("Algo deu errado");
        }


    });

})