 const inputData = document.getElementById("data");
 const inputNome = document.getElementById("nome");
 const submitBotao = document.querySelector(".submitBotao");
 const items = document.querySelector(".items");

 submitBotao.addEventListener("click", function(e){
    e.preventDefault()

    const nameValue = inputNome.value;
    const dataValue = inputData.value;
    
    const li = document.createElement("li");
    li.classList = "item";
    li.textContent = `Nome: ${nameValue}, Data: ${dataValue}`;

    items.appendChild(li)
 })


 //labelData.addEventListener("click", function (){
     //document.getElementById("data").style.display = "block";
     //inputData.focus();
 //})

 //inputData.addEventListener("click", () =>{
    //document.getElementById("#data").style.display = "block";
 //})

 //labelData.onclick = () => {
    //inputData.style.display = "block"
    //inputData.focus();
 //}
