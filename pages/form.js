let form = document.getElementById("form")
form.addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    if(name == ""){
        alert("Necesitamos que pongas un nombre")
    }
})