var USD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
var BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'});

console.log(USD.format(1910109291.40));
console.log(BRL.format(1910109291.40));