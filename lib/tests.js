/**
 * @name update
 * @desc validates the input data and excutes numberToWords()
 * @param {Number} - value of input
 * @returns {string} - result
 */
function update(num) {
  var displayResult = document.getElementById('result');

  displayResult.innerHTML = numberToWords(num);
}

/**
 * @name runTests
 * @desc tests to ensure is library working
 * @param {Number} - value of input
 * @returns {string} - result
 */
function runTests() {
  var tests = [
    {
      number: 999999999,
      word: 'nine hundred and ninety nine million nine hundred and ninety nine thousand nine hundred and ninety nine'
    },
    {
      number: 56945781,
      word: 'fifty six million nine hundred and fourty five thousand seven hundred and eighty one'
    },
    {
      number: 1105,
      word: 'one thousand one hundred and five'
    },
    {
      number: 1105,
      word: 'one thousand one hundred and five'
    },
    {
      number: 1042,
      word: 'one thousand and fourty two'
    },
    {
      number: 1005,
      word: 'one thousand and five'
    },
    {
      number: 123,
      word: 'one hundred and twenty three'
    },
    {
      number: 105,
      word: 'one hundred and five'
    },
    {
      number: 21,
      word: 'twenty one'
    },
    {
      number: 1,
      word: 'one'
    },
    {
      number: 0,
      word: 'zero'
    }
  ];

  for (var i = 0; i < tests.length; i++) {
    var testWord = numberToWords(tests[i].number);

    console.log('Testing conversion of number ' + tests[i].number);

    if (testWord === tests[i].word) {
      console.log('passed');
    } else {
      console.log('failed');
      console.log('Expected: ' + tests[i].word + ' Generated: ' + testWord);
      console.log('Expected Length: ' + tests[i].word.length + ' Generated Length: ' + testWord.length);
    }
  }
}

runTests();
