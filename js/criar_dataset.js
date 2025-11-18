document.getElementById("formDataset").addEventListener("submit", async function (event) {
    event.preventDefault(); 
    

    const resp = await fetch("http://localhost:8080/datasets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            autor: sessionStorage.getItem("login_id"),
            nome: document.getElementById("nomeDataset").value,
            image: "",
            desc: document.getElementById("desc").value,
            visible: true
        })
    });

    if (resp.ok) {
        const data = await resp.json();
        console.log("Dataset Criado:", data);

        window.location.href = "../user/dataset.html";
    
    } else {
        alert("Login ou senha incorretos");
    }


});