// 1 Red: Write a failing test

const assert = require("chai").assert;
const sum = require("./sum");
describe('sum', function(){
// test 1
it('return total sales per day > 100',function(){
assert.equal(sum(500,500), 1000); })

it('return total credit sales per day < 100',function(){
    assert.equal(sum(5,5), 10); })
}) 

 


// Test 2

// it("test2",()=>{
// assert.equal(multiply(2, 2), 4); })   

// // test 3
// it("test3",()=>{
// assert.equal(multiply(3, 3), 9); })   

// // test 4
// it("test4",()=>{
// assert.equal(multiply(4,4 ), 16); })   

// // test 5
// it("test5",()=>{
// assert.equal(multiply(23, 45), 23*45); })
// })   
