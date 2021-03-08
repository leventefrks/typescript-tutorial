"use strict";
// class
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details + "!";
    };
    return Invoice;
}());
var invoiceOne = new Invoice('john rambo', 'medicine', 400);
var invoiceTwo = new Invoice('super ninja', 'swords', 100);
console.log(invoiceOne, invoiceTwo);
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
