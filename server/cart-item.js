// Objecten van deze klasse stellen items voor in de winkelwagen van een bepaalde klant.
export default class CartItem {
    constructor(productId, amount) {
        this._productId = productId;
        this._amount = amount;        
    } 

    get productId() {
        return this._productId;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }
}