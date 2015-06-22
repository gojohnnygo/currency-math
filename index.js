var _value = Symbol('value');
var _currency = Symbol('currency');
var _thousands = Symbol('thousands');
var _decimal = Symbol('decimal');

class Currency {
  constructor(value, currency = '$', thousands = ',', decimal = '.') {
    this[_value] = toFloat(value);
    this[_currency] = currency;
    this[_thousands] = thousands;
    this[_decimal] = decimal;
  }

  toFloat(value) {
    if (this.currencyEnum[value[0]]) { 
      value = value.substr(1);
    }
    
    if (value[value.length - 1] === '%') { 
      value = value.substr(0, value.length - 1);
      value = parseFloat(value) / 100;
    }

    return parseFloat(value);
  }

  toString() {
    return this[_currency] + this[_value].toFixed(2);
  }

  valueOf() {
    return this[_value];
  }

  get currencyEnum() {
    return {
      '$': 'Dollar',
      '£': 'Pound',
      '€': 'Euro',
      '¥': 'Yuen/Yen'
    }
  }

  get thousandsEnum() {
    return {
      ' ': 'Space',
      ',': 'Comma'
    }
  }

  get decimalEnum() {
    return {
      ' ': 'Space',
      '.': 'Period'
    }
  }

  set currency(currency) {
    this.checkEnum('currency', currency);
  }

  set thousands(thousands) {
    this.checkEnum('thousands', thousands);
  }

  set decimal(decimal) {
    this.checkEnum('decimal', decimal);
  }

  checkEnum(type, value) {
    let enum = type + 'Enum';
    let _enum = '_' + type;
    
    if (this[enum][value]) {
      this[_enum] = value;
    } else {
      console.log(type + ', is not supported.');
    }
  }

  add(...incrementors) {
    this[_value] = incrementors.reduce(function(prev, curr) {
      return prev + this.toFloat(curr);
    }, this[_value]);

    return this.toString();
  }

  subtract(...decrementors) {
    this[_value] = decrementors.reduce(function(prev, curr) {
      curr = this.toFloat(curr);
      curr = -Math.abs(curr);
      return prev + curr;
    }, this[_value]);

    return this.toString();
  }

  multiply(x, ...multipliers) {
    let multiplier;

    if (x.constructor.name === "Boolean") {
      multiplier = 1;
    } else {
      multiplier = 0;
      multipliers.unshift(x);
    }

    this[_value] = multipliers.reduce(function(prev, curr) {
      curr = toFloat(curr);
      curr += multipler;
      return prev * curr;
    }, this[_value]);

    return this.toString();
  }

  divide(...divisors) {
    this[_value] = divisors.reduce(function(prev, curr) {
      return prev / toFloat(curr);
    }, this[_value]);

    return this.toString();
  }

  static add() {

  }

  static subtract() {

  }

  static multiply() {

  }

  static divide() {

  }
}

var c = new Currency(5);
console.log(c);

c.currency = '£';
console.log(c);



// 'use strict';

// var util = require('util');

// var currency = '$';
// var currencyEnum = {
//   '$': 'Dollar',
//   '£': 'Pound',
//   '€': 'Euro',
//   '¥': 'Yuen/Yen'
// }

// /**
//  * Set currency symbol. Symbol must be supported in currencyEnum. The
//  * symbol is prepended to the returned value.
//  * @param {String} symbol Currency symbol
//  */
// exports.setCurrency = function(symbol) {
//   if (symbol === undefined) {
//     currency = '';
//   } else if (currencyEnum[symbol]) {
//     currency = symbol;
//   } else {
//     var currencyEnumStr = util.inspect(currencyEnum, {showHidden: false, depth: null});
//     console.log('Currency symbol "' + symbol + '" is not supported. Currently, the following is supported: \n' + currencyEnumStr + '.');
//   }
// }

// /**
//  * Takes in any number of string dollar amounts (as arguments or an 
//  * array) and returns the sum. Supports either string or number types.
//  * @return {String} Sum of the arguments
//  */
// exports.sum = function() {
//   var args = getArguments(arguments);

//   return toCurrency(args.reduce(function(prev, curr) {
//     var value = prev + toFloat(curr);
//     return round('round', value);
//   }, 0));
// };

// /**
//  * Takes in a value and any number of multipliers (as arguments or an 
//  * array) and returns the product. Supports either string or number types.
//  * @param  {String} value Initial value
//  * @param  {Bool}   times Multiplier
//  * @return {String}       Product of value times multiplier(s)
//  */
// exports.multiply = function(value, times) {
//   var start = 1;
//   var multipliers;

//   value = toFloat(value);

//   if (times.constructor === Boolean) {
//     start = 2;
//   }

//   multipliers = getArguments(arguments, start);
  
//   if (times.constructor === Boolean) {
//     multipliers.forEach(function(value, i) {  
//       multipliers[i] = toFloat(multipliers[i]) + 1;
//     });
//   }
  
//   return toCurrency(multipliers.reduce(function(prev, curr) {
//     value = value * toFloat(curr);
//     return round('round', value);
//   }, value));
// };

// *
//  * Takes in a value and divides by divisor. If values are not divided
//  * evenly, the first value will be .01 more.
//  * @param  {String} value   Initial string value
//  * @param  {String} divisor Divisor value
//  * @return {Array}          Results array
 
// exports.divide = function(value, divisor) {
//   var values = [];
//   var dividedValue;

//   value = toFloat(value);
//   divisor = toFloat(divisor);
//   dividedValue = value / divisor;
//   dividedValue = round('floor', dividedValue);

//   for (var i = 0; i < divisor; i++) {
//     values.push(toCurrency(dividedValue));
//   }

//   if (value % divisor !== 0) {
//     values[0] = exports.sum(values[0], .01);
//   }

//   return values;
// };

// /**
//  * e.g. percentOf(10, 5); // '50%'
//  * e.g. percentOf(9, 3); // '33%'
//  * @param  {String} subtotal Total amount of ordered items 
//  * @param  {String} tax      The tax total
//  * @return {String}          Tax percent
//  */
// exports.percentOf = function(value, result) {
//   value = toFloat(value);
//   result = toFloat(result);

//   return ((result / value) * 100) + '%';
// };

// /////////////
// // HELPERS //
// /////////////

// /**
//  * Turns currency string or percent into a number.
//  * @param  {String} str String to be turned into a number
//  * @return {Number}     Number value of string
//  */
// var toFloat = function(str) {
//   if (str[0] === '$') { 
//     str = str.substr(1); 
//   }
  
//   if (str[str.length - 1] === '%') { 
//     str = str.substr(0, str.length - 1);
//     str = parseFloat(str) / 100;
//   }

//   return parseFloat(str);
// };

// /**
//  * Takes in a number and returns the currency string.
//  * @param  {Number} value Number to be turned into a string
//  * @return {String}       Currency string value of number
//  */
// var toCurrency = function(value) {
//   return currency + value.toFixed(2);
// }

// /**
//  * Properly rounds the floats to the hundredth place.
//  * @param  {String} type  Math round type
//  * @param  {Number} value Value to be rounded
//  * @return {Number}       Rounded value
//  */
// var round = function(type, value) {
//   value = Math[type](+(value + 'e' + 2));
//   return +(value + 'e' + (-2));
// };

// /**
//  * Turn array-like object to a proper array.
//  * @param  {Arguments} value Array-like object
//  * @param  {Number}    start Starting position
//  * @return {Array}           Arguments as array
//  */
// var getArguments = function(args, start) {
//   start = start || 0;
//   args = Array.prototype.slice.call(args, start); 
//   return Array.prototype.concat.apply([], args); // turns [[args][args]] into [args]
// }