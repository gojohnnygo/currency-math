import {Currency} from './src/currency';

describe('Instatiation', () => {
  it('expects instatiation', () => {  
    var currency = new Currency();
    expect(currency.constructor.name).toEqual('Currency');
  }  

  it('expects instatiation with a number', () => {  
    var currency = new Currency(4);
    expect(currency).toEqual('$4.00');
  }

  it('expects instatiation with string', () => {  
    var currency = new Currency('$4.00');
    expect(currency).toEqual('$4.00');
  }
});

// describe('Addition', () => {
//   it('expects number arguments to be added to currency value', () => {  
//     var currency = new Currency();
//     currency.sum([10.95, 11.00, 3.25]);
//     currency.sum(1);
//     expect(num).toEqual('$26.20');
//   });

//   it('expects string arguments to be added to currency value', () => {
//     var currency = new Currency();
//     currency.sum(['$10.95', '$11.00', '$3.25']);
//     currency.sum('$1.00');
//     expect(currency).toEqual('$26.20');
//   });
// });

// describe('Multiplication', () => {
//   it('expects number arguments to be multiplied by currency value', () => {
//     var currency = new Currency(2);
//     currency.multiply([3, 3]);
//     currency.multiply(3)
//     expect(product).toEqual('$54.00');
//   });

//   it('expects string values multiplied by multipliers array', () => {
//     var product = currency.multiply("$4.00", true, '50%', '25%');
//     expect(product).toEqual('$7.50');
//   });
// });

// describe('Division', () => {
//   it('expects string value divided by divisor', () => {
//     var product = currency.divide("$10.00", 2);
//     expect(product).toEqual(['$5.00', '$5.00']);
//   });  

//   it('expects string value divided by divisor', () => {
//     var product = currency.divide("$10.00", 3);
//     expect(product).toEqual(['$3.34', '$3.33', '$3.33']);
//   });  
// });

// describe('Percent Of', () => {
//   it('expects percet of value and result', () => {
//     var product = currency.percentOf("$10.00", "$5.00");
//     expect(product).toEqual('50%');
//   });
// });