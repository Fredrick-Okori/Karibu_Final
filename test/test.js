// 1 Red: Write a failing test

const assert = require('chai').assert;
const price = require('../sum');
describe('Finding total price of produce', ()=>{

    it('Test 1', ()=>{
        assert.equal(price(1000, 4500),4500000);
    })

    it('Test 2', ()=>{
        assert.equal(price(1200, 2000),2400000);
    })
});
// // test 1
// it('return total sales per day > 100',function(){
// assert.equal(sum(500,500), 1000); })

// it('return total credit sales per day < 100',function(){
//     assert.equal(sum(5,5), 10); })
// })
   

 


