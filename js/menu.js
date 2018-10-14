const menu_promise = api.get("/menu").then(res => res.json());
let menu_container = document.getElementById("menu-cont");
menu_promise.then(res => {
	if(res.message === "success"){
		let final = "";
		for(let item of res.menu){
			const menu_item = `<div class="menu-item">
			<div class="details">
			<h4>${item.name}</h4>
			<p>${item.description}</p>
                </div>
                <div class="price">
                    <h4>${item.price}</h4>
                </div>
                <div class="actions">
                    <a class="E" href="#" onclick="getwhich(this)"><i class="fa fa-plus-circle"></i> </a>
                </div>
                <input type="number" value="${item.menu_id}" class="hidden1">
            </div>`;
			final += menu_item;
		}
		menu_container.innerHTML = "<br>";
		menu_container.innerHTML = final;
	} else{
		menu_container.innerText = res.message;
	}
}).catch(error => {
	menu_container.innerHTML = "<em><h4>Something went wrong. Check back later.</h4></em>";
});
