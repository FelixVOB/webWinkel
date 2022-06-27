import products from "./products.js"; 
import CartItem from "./cart-item.js";

// Objecten van deze klasse stellen een winkelkar voor.
// Wordt enkel door de backend gebruikt om de kostprijs inclusief korting te berekenen.
export default class Cart {
    constructor(cartItems) {
        if (cartItems) {
            this._items = cartItems;
        } else {
            this._items = [];
        }        
    } 

    get totalPriceWithReduction() {
        let ourBestPrice = 0;
        this._items.forEach((item) => {
            ourBestPrice += (item.amount * products.find(p => p.id === item.productId).cost);
        });
        if (ourBestPrice >= 30) {
            ourBestPrice = ourBestPrice - ourBestPrice * 0.10;
        }
        return ourBestPrice;
    }

    addToCart(productId, amount) {
        let itemInCart = this._items.find(ci => ci.productId === productId);
        if (!itemInCart) {
            itemInCart = new CartItem(productId, amount ? amount : 1);
            this._items.push(itemInCart);
        } else {
            itemInCart.amount += (amount ? amount : 1);
        }
    }
}