// Product List
let products = [
    {
        id: 1,
        name:"Tomatoo",
        price:"50",
        img:"img/product-1.png"
    },
    {
        id: 2,
        name:"Sosha",
        price:"40",
        img:"img/product-2.png"
    },
    {
        id: 3,
        name:"Potol",
        price:"80",
        img:"img/product-3.png"
    },
    {
        id: 4,
        name:"Dharosh",
        price:"90",
        img:"img/product-4.png"
    },
    {
        id: 5,
        name:"Papa",
        price:"120",
        img:"img/product-5.png"
    },
    {
        id: 6,
        name:"Piyaj",
        price:"70",
        img:"img/product-12.png"
    }
]


// Show product List in HTML

let productList = document.getElementById('product-list');

for (i=0; i<products.length; i++){
    let product = document.createElement("div");
    product.innerHTML = `<li class="shadow-md rounded-md p-5 text-center"><div class="flex justify-center items-center"><img src="${products[i].img}" alt=""></div><p class="text-tColor2 font-bold">${products[i].name}</p><p>${products[i].price} tk/kg</p><button class="bg-green-600 text-white rounded-md px-3 py-1 mt-2 add-to">Add to Cart</button><p class="hidden">${products[i].id}</p></li>`;
    productList.appendChild(product);
}

// Cart List Add in HTML

let cartList = document.getElementById('cart-list');

let cartButton = document.querySelectorAll('.add-to');

let productCartArray = [];

let subTotal = 0;

let subtotalElement = document.getElementById('subtotal')


cartButton.forEach(button => {
    button.addEventListener('click', () => {
    let productID = (button.nextElementSibling.innerHTML)-1;
    console.log(productID);
    let cartItems = document.createElement("div");
    cartItems.innerHTML = `<li class="border-b-2 pb-2 flex justify-between items-center"><div class="flex items-center gap-2"><div class="flex items-center justify-center h-14 w-14"><img src="${products[productID].img}" alt=""></div><div><p class="font-bold">${products[productID].name}</p><p id="product-price">${products[productID].price}tk/kg</p></div></div> <p class="font-bold">${products[productID].price}</p></li>`
    cartList.appendChild(cartItems);

    subTotal+=Number(products[productID].price);
    subtotalElement.innerHTML = subTotal;
    });
  });

let clearButton = document.getElementById('clear-btn');

clearButton.addEventListener('click', () =>{
    cartList.innerHTML='';
    subtotalElement.innerHTML = '0';
    subTotal =0;
});


