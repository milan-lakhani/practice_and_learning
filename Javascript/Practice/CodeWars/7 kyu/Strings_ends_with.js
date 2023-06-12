// 7 kyu - String ends with?
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    for (let i = 0; i < ending.length; i++) {
      if (str[str.length - ending.length + i] !== ending[i]) {
        return false
      }

      return true
    }
  }



// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false