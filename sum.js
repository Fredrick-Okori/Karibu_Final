// module.exports = function sum(a, b) {
//     const total = a + b;
//     return total;  
// }
// // a failing test
    // it('Test 0', ()=>{
    //     assert.equal(price(1000, 4500),4500000);
    // })
    


function producePriceCalculator(unitPrice, quantity) {
    if(quantity < 1000){
        return false;
    }else{
    finalPrice = unitPrice * quantity
        return finalPrice
    }
   
}


module.exports = producePriceCalculator;