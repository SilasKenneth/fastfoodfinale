const getwhich = (container) => {
    container.addEventListener("click", event => {
    	event.preventDefault();
        const cart = localStorage.getItem("cart");
        let whichItem = container.parentElement.parentElement;
    	const chosen = whichItem.lastChild.previousSibling;
    	const value = chosen.value;
        if(cart === null){
           localStorage.setItem("cart", new Array(value));	
        } else{
        	let current = localStorage.getItem("cart");
        	localStorage.clear();
        	console.log(current);
        	current += ","+value;
        	localStorage.setItem("cart", current);
        }
    })
}