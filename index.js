function reverse(word) {
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord
}



function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)

  if (word === reversedWord) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
* if the word is the same as the word in reverse order, it should return true.
if not, it should return false.
needto reverse the input string
if the input is the same as the reversed input 
return true
else
return false 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("boob"));
}

module.exports = isPalindrome;
