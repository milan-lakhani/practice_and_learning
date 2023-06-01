// 7 kyu - List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// ##################################################################################################################################################
// Solutions

/**
 * Best Solution | My Solution
 * @param {*} l 
 * @returns Filtered list of numbers
 */
function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(a => typeof a === 'number')
}

// ##################################################################################################################################################
// Test Cases
// Run Tests using node_modules/.bin/mocha .\List_Filtering.js

const chai = require('chai');
const assert = chai.assert;

chai.config.truncateThreshold = 0; // disable truncating
describe("Tests", () => {
  it("Fixed tests", () => {
    assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1, 2, "a", "b"]');
    assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1, "a", "b", 0, 15]');
    assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1, 2, "aasf", "1", "123", 123]');
    assert.deepEqual(filter_list(['a','b','1']),[], 'For input ["a", "b", "1"]');
    assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1, 2, "a", "b"]');
  });
  it("Random tests", () => {
    for(let _ = 0; _ < 20; ++_) {
      let length = Math.random()*20|0;
      let input = [];
      let expected = [];
      for(let i = 0; i < length; ++i) {
        if(Math.random() < 0.5) {
          let n = Math.random() * 1000 | 0;
          input.push(n);
          expected.push(n);
        } else {
          if(Math.random() < 0.5) input.push((Math.random() * 1000 | 0).toString());
          else input.push(String.fromCharCode(...[...Array(Math.random()*6|0)].map(()=>(Math.random()*75|0)+48)));
        }
      }
      let msg = `For input [${input.map(v => typeof v === 'string' ? `"${v}"` : v).join(', ')}]`;
      assert.deepEqual(filter_list([...input]), expected, msg);
    }
  });
});