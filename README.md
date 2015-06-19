# Currency Math
Why use currency-math? Because handling currency in strings is a pain.

## Adding String Values WITHOUT currency-math
```
var product;
var value1 = '$10.50'
var value2 = '$1.00'

value1 = value1.substr(1);
value2 = value2.substr(1);

product = parseFloat(value1) + parseFloat(value2);

// incase JavaScript gets weird with floats
product = Math.round(+(product + 'e' + 2));
product = +(product + 'e' + (-2));

product = '$' + product.toFixed(2);
console.log(product) // '$11.50'
```

## Adding String Values WITH currency-math
```
var currency = require('currency-math');
var product = currency.sum('$10.50', '$1.00'); 
console.log(product) // '$11.50'
```

## Examples
```
var currency = require('currency-math');

var sum = currency.sum('$10.50', '$1.00', '$3.20'); // '$14.70'

var multiply = currency.multiply('$4.00', 4); // '$16.00'
var multiply = currency.multiply('$4.00', 4, 4); // '$64.00'
var multiply = currency.multiply('$4.00', '50%', '25%'); // '$.50'
var multiply = currency.multiply('$4.00', true, '50%', '25%'); // '$7.50'

var divide = currency.divide('$10.00', 2); // ['$5.00', '$5.00']
var divide = currency.divide('$10.00', 3); // ['$3.34', '$3.33', '$3.33']

var percentOf = currency.percentOf('$10.00', '$5.00') // '50%' 
```