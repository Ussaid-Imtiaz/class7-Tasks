interface Product {
    id : number,
    name : string,
    price : number,
    category : string
}

type Cart = Product[];

interface Customer {
    id : number,
    name : string,
    email : string
}

type Order = {
    customer : Customer,
    cart :  Cart
}

function calculateTotalPrice (cart : Cart) {
    let totalPrice = 0;
    for (let i = 0; i < myOrder.length; i++) {
        totalPrice += myOrder[i].price;
        // console.log(`Price of ${cart[i].name} is ${cart[i].price}`)
    }
    console.log(`Total Price of your order is ${totalPrice}, Thanks for shopping with us Mr. ${customer.name}`)
    return totalPrice;
}

const myOrder : Cart = [
    {
        id : 1001,
        name : "Laptop",
        price : 999.99,
        category : "Electronics"
    },
    {
        id : 1002,
        name : "T-shirt",
        price : 19.99,
        category : "Clothing"
    },
    {
        id : 1003,
        name : "Book",
        price : 15.50,
        category : "Books"
    },
    {
        id : 1004,
        name : "Smartphone",
        price : 799.00,
        category : "Electronics"
    },
    {
        id : 1005,
        name : "Sneakers",
        price : 69.95,
        category : "Footwear",
    },
];

const customer : Customer = {
    id : 37405,
    name : "Ussaid Imtiaz",
    email : "imtiazussaid@gmail.com"
};

const order: Order = {
  customer: customer,
  cart: myOrder,
};
calculateTotalPrice(order.cart);

