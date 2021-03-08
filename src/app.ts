// class
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}!`;
  }
}

const invoiceOne = new Invoice('john rambo', 'medicine', 400);
const invoiceTwo = new Invoice('super ninja', 'swords', 100);

console.log(invoiceOne, invoiceTwo);

let invoices: Invoice[] = [];

invoices.push(invoiceOne);
invoices.push(invoiceTwo);
