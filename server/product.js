// Objecten van deze klasse stellen de producten van de UCLL webshop voor.
export default class Product {
    constructor(id, name, cost) {
        this._id = id;
        this._name = name;
        this._cost = cost;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get cost() {
        return this._cost;
    }

    // JSON.stringify zal standaard deze methode aanroepen, alvoerens om te zetten naar een JSON string.
    // Op deze manier zorgen we ervoor dat er geen _ in de propertynamen zitten.
    toJSON() {
        return {
            id: this._id,
            name: this._name,
            cost: this._cost
        };
    }
}