'use strict';

var currency = require('../index.js');

describe('Addition', function() {
  it('expects string arguments to be added', function() {
    var sum = currency.sum('$10.95', '$11.00', '$3.25');
    expect(sum).toEqual('$25.20');
  });

  it('expects string array to be added', function() {
    var sum = currency.sum(['$10.95', '$11.00', '$3.25']);
    expect(sum).toEqual('$25.20');
  });

  it('expects number arguments to be added', function() {
    var sum = currency.sum(10.95, 11, 3.25);
    expect(sum).toEqual('$25.20');
  });  

  it('expects number array to be added', function() {
    var sum = currency.sum([10.95, 11, 3.25]);
    expect(sum).toEqual('$25.20');
  });
});

describe('Multiplication', function() {
  it('expects string value multiplied by multiplier', function() {
    var product = currency.multiply('$10.00', 3);
    expect(product).toEqual('$30.00');
  });  

  it('expects string values multiplied by multipliers', function() {
    var product = currency.multiply('$10.00', 3, 3);
    expect(product).toEqual('$90.00');
  });  

  it('expects string values multiplied by multipliers array', function() {
    var product = currency.multiply("$10.00", [3, 3]);
    expect(product).toEqual('$90.00');
  });  

  it('expects string values multiplied by multipliers array', function() {
    var product = currency.multiply("$4.00", true, '50%', '25%');
    expect(product).toEqual('$7.50');
  });
});

describe('Division', function() {
  it('expects string value divided by divisor', function() {
    var product = currency.divide("$10.00", 2);
    expect(product).toEqual(['$5.00', '$5.00']);
  });  

  it('expects string value divided by divisor', function() {
    var product = currency.divide("$10.00", 3);
    expect(product).toEqual(['$3.34', '$3.33', '$3.33']);
  });  
});

describe('Percent Of', function() {
  it('expects percet of value and result', function() {
    var product = currency.percentOf("$10.00", "$5.00");
    expect(product).toEqual('50%');
  });
});