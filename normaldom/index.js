const root = document.getElementById("root");
const button = document.getElementById("btn");

console.log(root);

// const h2 = document.createElement("h2");
// const h3 = document.createElement("h3");
// const img = document.createElement("img");
const loader = document.createElement("div");
loader.innerHTML = "Loading...";

async function showData() {
    try {
//   h2.innerText = "Welcome to DOM manipulation";
//   root.appendChild(h2);

//   h3.innerText = "Hello world!!!!!!!!!";
//   root.appendChild(h3);

//   img.src =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbA6fgJDHod91QLodmlGEW5vBV1bqmdfh0MxKYySfpBp3vjRYvWssETyU&s=10";

//   img.setAttribute("height", "200");
//   img.setAttribute("width", "200");

        root.appendChild(loader);
        const serverdata = await fetch("https://fakestoreapi.com/products");
        const jsonData = await serverdata.json();
        
        // Display the fetched data
        jsonData.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.style.border = "1px solid #ccc";
            productDiv.style.padding = "10px";
            productDiv.style.margin = "10px";
            
            const title = document.createElement("h3");
            title.innerText = product.title;
            
            const price = document.createElement("p");
            price.innerText = `Price: $${product.price}`;
            
            const productImg = document.createElement("img");
            productImg.src = product.image;
            productImg.style.height = "150px";
            productImg.style.width = "150px";
            
            productDiv.appendChild(productImg);
            productDiv.appendChild(title);
            productDiv.appendChild(price);
            root.appendChild(productDiv);
        });
    } catch(e) {
        console.log("Error:", e);
    } finally {
        if (root.contains(loader)) {
            root.removeChild(loader);
        }
    }
}


button.addEventListener("click", showData);
