var _value = Symbol('value');
var _currency = Symbol('currency');
var _thousands = Symbol('thousands');
var _decimal = Symbol('decimal');

class Currency {
  constructor(value, currency = '$', thousands = ',', decimal = '.') {
    this[_value] = value ? this.toFloat([value])[0] : 0;
    this[_currency] = currency;
    this[_thousands] = thousands;
    this[_decimal] = decimal;
  }

  toFloat(values) {
    let formattedValues = [];
    values.forEach(function(value) {
      if (value.constructor.name !== 'Number' && value.constructor.name !== 'String') {
        console.log('Constructor name, ' + value.constructor.name + ', must be "Number" or "String".')
      }

      if (value.constructor.name === "String" && this.currencyEnum[value[0]]) {
        value = value.substr(1);
      }
      
      if (value[value.length - 1] === '%') { 
        value = value.substr(0, value.length - 1);
        value = value / 100;
      }  

      formattedValues.push(value);
    });

    return formattedValues.length ? formattedValues : 0;
  }

  toString() {
    console.log(typeof this[_value]);
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
    let enumeration = type + 'Enum';
    let _symbol = '_' + type;
    
    if (this[enumeration][value]) {
      this[_symbol] = value;
    } else {
      console.log(type + ', is not supported. Must be ' + this.currencyEnum + '.');
    }
  }

  add(...incrementors) {
    incrementors = this.toFloat(incrementors);

    this[_value] = incrementors.reduce(function(prev, curr) {
      return prev + curr;
    }, this[_value]);

    return this.toString();
  }

  subtract(...decrementors) {
    decrementors = this.toFloat(decrementors);

    this[_value] = decrementors.reduce(function(prev, curr) {
      return prev + (-Math.abs(curr));
    }, this[_value]);

    return this.toString();
  }

  multiply(...multipliers) {
    multipliers = this.toFloat(multipliers);

    this[_value] = multipliers.reduce(function(prev, curr) {
      return prev * curr;
    }, this[_value]);

    return this.toString();
  }

  divide(...divisors) {
    divisors = this.toFloat(divisors);

    this[_value] = divisors.reduce(function(prev, curr) {
      return prev / curr;
    }, this[_value]);

    return this.toString();
  }

  static add(...incrementors) {
    console.log(incrementors)
    return this.add(incrementors);
  }

  static subtract(...decrementors) {
    return this.subtract(decrementors);
  }

  static multiply(...multipliers) {
    return this.multiply(multipliers) 
  }

  static divide(...divisors) {
    return this.divide(divisors);
  }
}

export default Currency;

var c1 = new Currency();
console.log(c1);

var c2 = new Currency(2);
console.log(c2);

// console.log(Currency.add(2, 3, 4))