let carts =document.querySelectorAll('.add-cart');

let products =[
    { 
        name:'louis vuitton',
        tag: 'printed mens shirt',
        price:599,
        inCart:0
    },
    { 
        name:'FENDI',
        tag: 'printed mens shirt',
        price:599,
        inCart:0
    },
    { 
        name:'Dior',
        tag: 'printed mens shirt',
        price:599,
        inCart:0
    },
    { 
        name:'LACOSTE',
        tag: 'printed mens shirt',
        price:599,
        inCart:0
    },
    { 
        name:'VERSACE',
        tag: 'printed mens shirt',
        price:599,
        inCart:0
    },
    { 
        name:'GUCCI',
        tag: 'printed mens shirt',
        price:599,
        inCart:0
    },
    { 
        name:'Zara',
        tag: 'printed mens shirt',
        price:599,
        inCart:0
    },
    { 
        name:'PRADA',
        tag: 'printed mens shirt',
        price:599,
        inCart:0
    },
    { 
        name:'D&G',
        tag: 'light blue washed denim jeans',
        price:999,
        inCart:0
    },
    { 
        name:'HUGO BOSS',
        tag: 'Mens Graffiti print straight Jeans',
        price:1099,
        inCart:0
    },
    { 
        name:'VERSACE',
        tag: 'pinstripe slim fit suit trousers',
        price:1299,
        inCart:0
    },
    { 
        name:'Calvin kelin',
        tag: 'cargo pants',
        price:999,
        inCart:0
    },
    { 
        name:'AOTEMAN',
        tag: 'Mens Winter Jacket',
        price:1499,
        inCart:0
    },
    { 
        name:'CAPMAKER',
        tag: 'Urban effort mesh back Cap',
        price:350,
        inCart:0
    },
    { 
        name:'NIKE',
        tag: 'NIKE Airforce 1',
        price:7495,
        inCart:0
    },
    { 
        name:'H&M',
        tag: 'MENS HOODIE',
        price:650,
        inCart:0
    },
    { 
        name:'ZARA',
        tag: 'bomber jacket',
        price:1199,
        inCart:0
    },
    { 
        name:'H&M',
        tag: 'SILVER NECKLACE',
        price:350,
        inCart:0
    },
    { 
        name:'NIKE',
        tag: 'Costumed airforce 1',
        price:8000,
        inCart:0
    },
    { 
        name:'POLORIZED',
        tag: 'ROUND Sunglasses',
        price:500,
        inCart:0
    }
    
];

for(let i=0;i<carts.length;i++ ){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.icon span').textContent =productNumbers 
    }
}

function cartNumbers(products) {
    console.log("The product click is", products);
    let productNumbers = localStorage.getItem('cartNumbers');
  

    productNumbers=parseInt(productNumbers);


    if( productNumbers ) {
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.icon span').textContent =productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.icon span').textContent =1;
    }

    setItem(product);
}

function setItem(product){
   let cartItems =localStorage.getItem('productsInCart');
   cartItems=JSON.parse(cartItems)
   console.log("My cartItems are",cartItems);

   if(cartItems !=null){
       if(cartItems[product.tag] !=undefined){
        cartItems={
            cartItems,
            [product.tag]:product
        }
       }
       cartItems[product.tag].inCart +=1;
   } else{
        product.inCart =1;  

        cartItems={
          [product.tag]:product
        }
   }
    

    localStorage.setItem("productIncart",JSON.stringify
    (cartItems));
}

onLoadCartNumbers();