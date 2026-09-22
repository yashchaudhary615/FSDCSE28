const root = document.getElementById("container");
console.log(root);

const button = document.getElementById("btn");
console.log(button);

async function getData() {
   // alert("hiiii...");
   const serverdata = await fetch("https://fakestoreapi.com/products")
    const jsonData = await serverdata.json();
    root.innerHTML=`<h2>${jsonData[0].title}</h2>`
   //console.log(jsonData[0].title);
}

button.addEventListener("click", getData)
