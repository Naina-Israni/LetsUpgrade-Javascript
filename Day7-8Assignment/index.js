// guys i have made it a id based application as this is how to works in real world
// there are only 2 easy to understand changes read the code carefully

// new function getProductByID() is created check it out

let products = [
  {
    id: 1,
    name: "Indian Kurti",
    size: "XL",
    color: "Blue",
    price: 1200,
    image: "product1.jpg",
    description: "Traditional wear",
  },
  {
    id: 2,
    name: "Western Kurti",
    size: "XL",
    color: "Yellow",
    price: 1500,
    image: "product2.jpg",
    description: "Western tradition wear",
  },

  {
    id: 3,
    name: "Polkar Dots Kurti",
    size: "XL/L",
    color: "White & Black",
    price: 900,
    image: "product3.jpg",
    description: "Ethenic wear",
  },

  {
    id: 4,
    name: "Black Male T-shirt",
    size: "M",
    color: "Black",
    price: 3000,
    image: "product4.jpg",
    description: "Cotton tshirt",
  },

  {
    id: 5,
    name: "White T-shirt",
    size: "S",
    color: "White",
    price: 1300,
    image: "product5.jpg",
    description: "Good looking White Tshirt",
  },

  {
    id: 6,
    name: "Navy Blue Tshirt",
    size: "M",
    color: "Navy Blue",
    price: 1500,
    image: "product6.jpg",
    description: "Good looking Tshirt",
  },
  {
    id: 7,
    name: "Grey Tshirt",
    size: "M",
    color: "Light Grey",
    price: 1500,
    image: "product7.jpg",
    description: "Good looking Tshirt",
  },
  {
    id: 8,
    name: "Militry Print Tshirt",
    size: "M",
    color: "Green Miltiry",
    price: 1000,
    image: "product8.jpg",
    description: "Good looking Tshirt",
  },
  {
    id: 9,
    name: "Strips Shirt",
    size: "M",
    color: "Black",
    price: 1900,
    image: "product9.jpg",
    description: "Good looking White Strips Shirt",
  },
  {
    id: 10,
    name: "Yellow female Tshirt",
    size: "M",
    color: "yellow",
    price: 1500,
    image: "product10.jpg",
    description: "Good looking Tshirt",
  },
  {
    id: 11,
    name: "Black Tshirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "product11.jpg",
    description: "Good looking Tshirt",
  },
  {
    id: 12,
    name: "Green Tshirt",
    size: "M",
    color: "Parrot",
    price: 500,
    image: "product12.jpg",
    description: "Good looking Tshirt",
  },
];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
          <div class="prodimg">
            <img src="images/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
          <div class="prodimg">
            <img src="images/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

function searchMaximumPrice(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    return product.price.indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

function addToCart(id) {
  // getting the product
  let pro = getProductByID(products, id);
  if (cart.length == 0) {
    cart.push(pro);
  } 
  else {
    for (i = 0; i < cart.length; i++) {
      if (pro.id == cart[i].id) {
        alert("already added");
      } 
      else {
        alert("not added")
         cart.push(pro);
      }
    }
  }

  //   putting in cart
  displayProducts(cart, "cart");
  let noofitems = cart.length;
  document.getElementById("noofitems").innerHTML =
    "No Of Items in your cart: " + noofitems;
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  displayProducts(cart, "cart");
}

