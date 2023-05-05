function displayFilter(){
    const filter = document.getElementById("display-filter")
    if(filter.style.display === "none"){
        filter.style.display = "flex"
    }
    else{
        filter.style.display = "none"
    }
}

async function displayData(result){

    const container = document.getElementById("card-container")


    result.forEach((ele) => {
        const card = document.createElement("div")
        card.id = "card" 

        const name = document.createElement("div")
        name.innerText = ele.name
        name.id = "prod-name" 
        card.appendChild(name)

        const img = document.createElement("div")
        img.style.backgroundImage = "url('" + `${ele.imageURL}` + "')"
        img.id = "img" 
        card.appendChild(img)

        const price = document.createElement("div")
        price.innerText = "Price : " + ele.price + ele.currency
        price.id = "price" 
        card.appendChild(price)

        const cart = document.createElement("div")
        cart.innerText = "Add to cart"
        cart.id = "cart" 
        card.appendChild(cart)
        console.log(card)

        container.appendChild(card)
    })
}

async function getData(){

    const url = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    let response = await fetch(url)
    let data = await response.json()
    return data
}


async function loadData(){

    let result = await getData()

    await displayData(result)

    const filter = document.getElementById("filter-icon")
    filter.addEventListener("click", displayFilter)
}
loadData()