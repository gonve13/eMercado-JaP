const currentCategory = window.localStorage.getItem("catID");
const container = document.getElementById("card-container")
const catURL = "/" + currentCategory + ".json"
let arrayProductos =[];


function showProductList(){
	arrayProductos.forEach(
	(producto) => {
	const templateToAppend = `
			<div class="col">
				<div class="card border-secondary">
					<h5 class="card-header">${producto.name}</h5>
					<img src="${producto.image}" class="card-img-top" alt="Imagen de ${producto.name}">
					<div class="card-body">
					<p class="card-text">${producto.description}</p>
					<p class="text-muted text-end fs-6">${producto.soldCount} Unidades vendidas</p>
					</div>
					<div class="card-footer text-end">${producto.currency}: ${producto.cost}</div>
				</div>
			</div> `;
			
	container.innerHTML += templateToAppend;
	}
	
	)
}
function createCard(){

}

document.addEventListener("DOMContentLoaded", 
	(e) => {
		getJSONData(PRODUCTS_URL + catURL).then(
		(objetoFull) => {
			if (objetoFull.status === "ok"){
				arrayProductos = objetoFull.data.products;
				showProductList();
				//console.log(arrayProductos)
			}
		})
	}
)