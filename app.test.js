// STRING COUNT
// const stringLength = require('./app.js');

// test('string length should display count', () => {
//     expect(stringLength('hello')).toBe(true)
//  })

// ************************************************************************

// REVERSE STRING

// const stringReverse = require('./app.js')

// test('string lenght to dispaly the reverse', () => {
//     expect(stringReverse('cremy')).toBe('ymerc');
// }) 

// ***************************************************************************
// CALCULATOR 

// const Calculator = require('./app.js')

// function addition (){
//     const add = this.num1 + this.num2;
//       return add
//   };

//   function subtraction (){
//     const sub = this.num1 - this.num2;
//       return sub
//   };

//   function multipulation (){
//     const mul = this.num1 * this.num2;
//       return mul
//   };

//   function division (){
//     const div = this.num1 / this.num2;
//       return div
//   };

  
  
//   Calculator.prototype.add = addition;
//   Calculator.prototype.sub = subtraction;
//   Calculator.prototype.mul = multipulation;
//   Calculator.prototype.div = division;
  
  
//   const calculatenumbers = new Calculator(4 ,5);

// describe('my calculation', () => {
//     test('is additing', () => {
//         expect(calculatenumbers.add()).toBe(9)

//     })

//     test('is subtracting', () => {
//         expect(calculatenumbers.sub()).toBe(-1)
//     })

//     test('is multipying', () => {
//         expect(calculatenumbers.mul()).toBe(20)
//     })

//     test('is dividing', () => {
//         expect(calculatenumbers.div()).toBe(0.8)
//     })

// })


// ***************************************************************************
// CAPITALIZE STRING
const capitalizeString = require('./app.js')

test('is captalize', () => {
    expect(capitalizeString('henry')).toBe('HENRY')
})