fetch("/api/products")
     .then((response) => {
         return response.json(); 
     })
     .then((products) => {
        var totalPriceNumber = 0;
        let orderIDp = document.getElementById("orderID"); 
        let priceReduced = document.getElementById("totalPriceReduction");
        let bodyShopping = document.getElementById("bodyShoppingCart");
        let bodyProducts = document.getElementById("bodyProductTable");
        let arrayProducts = [];
        for(let i = 0; i < products.length; i++){
        bodyProducts.innerHTML += "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td>" + products[i].cost + "</td><td><button id='buttonAddProduct" + [i] +"' class='btn bg-success'>+</button></td></tr>"
    }
    document.getElementById("buttonAddProduct0").addEventListener("click", ()=>{
        bodyShopping.innerHTML += "<tr><td>" + products[0].id + "</td><td>" + products[0].name + "</td></tr>";
        totalPriceNumber = totalPriceNumber + 10;
        document.getElementById("totalPriceInput").innerHTML = totalPriceNumber.toFixed(1);
        arrayProducts.push(products[0].id);
        sendToBackEnd();
    })
    document.getElementById("buttonAddProduct1").addEventListener("click", ()=>{
        bodyShopping.innerHTML += "<tr><td>" + products[1].id + "</td><td>" + products[1].name + "</td></tr>";
        totalPriceNumber = totalPriceNumber + 0.3;
        document.getElementById("totalPriceInput").innerHTML = totalPriceNumber.toFixed(1);
        arrayProducts.push(products[1].id);
        sendToBackEnd();
    })
    document.getElementById("buttonAddProduct2").addEventListener("click", ()=>{
        bodyShopping.innerHTML += "<tr><td>" + products[2].id + "</td><td>" + products[2].name + "</td></tr>";
        totalPriceNumber = totalPriceNumber + 2;
        document.getElementById("totalPriceInput").innerHTML = totalPriceNumber.toFixed(1);
        arrayProducts.push(products[2].id);
        sendToBackEnd();
    })
    document.getElementById("buttonAddProduct3").addEventListener("click", ()=>{
        bodyShopping.innerHTML += "<tr><td>" + products[3].id + "</td><td>" + products[3].name + "</td></tr>";
        totalPriceNumber = totalPriceNumber + 3;
        document.getElementById("totalPriceInput").innerHTML = totalPriceNumber.toFixed(1);
        arrayProducts.push(products[3].id);
        sendToBackEnd();
    })

    document.getElementById("bestelButton").addEventListener("click", sendOrderID)

    function sendToBackEnd() {
        fetch("/api/cart",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(arrayProducts)
    })

    .then((response) => {
        return response.json();
    })
    .then((prijsReductie)=>{
        priceReduced.innerHTML = prijsReductie.totalPriceWithReduction.toFixed(1)

    })

    }
    function sendOrderID() {
        let user = document.getElementById("userName").value
        if(user.length == 0 && arrayProducts.length == 0){
            orderIDp.innerHTML = "Gelieve een gebruikersnaam in te geven en minstens 1 item in de winkelwagen te plaatsen."
    } else if(arrayProducts.length == 0){
        orderIDp.innerHTML = "Gelieve minstens 1 item in de winkelwagen plaatsen."
        } else if(user.length == 0) {
             orderIDp.innerHTML = "Gelieve een gebruikersnaam in te geven."
            } else {
        let obj = {"username": user, "cartItems": arrayProducts};
        fetch("/api/order",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then((response) =>{
        return response.json();
    })
    .then((orderID)=>{
        console.log(orderID)
        orderIDp.innerHTML = "Bedankt, uw order " + orderID.orderId + " wordt zo snel mogelijk verwerkt."
    })
    .catch((error) => {
        console.error(error);
    });
}
    }
     })