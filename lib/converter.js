/**
 * @name numberToWords
 * @desc number converter library
 * @param {Number} num - value of input
 * @returns {string} - intergers as words
 */
function numberToWords(num) {
  if (num.length === 0) {
    return 'Please enter a number into the text-box';
  }

  if (isNaN(num)) {
    return 'Only numbers allowed';
  }

  if (num === 0) {
    return 'zero';
  }

  var NUMBER_TO_WORDS = {
    ONE: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    TEENS: ['ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen'],
    TENS: ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  };

  var NUMBER = {
    million : {
      word : 'million',
      value : 1000000
    },
    thousand : {
      word : 'thousand',
      value : 1000
    },
    hundred : {
      word : 'hundred',
      value : 100
    }
  }

  /**
   * @name toWords
   * @desc converts number to words
   * @param {Number} num - value of input
   * @returns {string} - intergers as words
   */
  function toWords(num, scale) {
    var result = '';

    if (num >= NUMBER.million.value) {
      result = toWords(Math.floor(num / NUMBER.million.value), NUMBER.million.word) + ' ';
      num = num % NUMBER.million.value;
    }

    if (num >= NUMBER.thousand.value) {
      result += toWords(Math.floor(num / NUMBER.thousand.value), NUMBER.thousand.word) + ((num % NUMBER.thousand.value === 0 || num >= 1100) ? ' ' : ' and ');
      num = num % NUMBER.thousand.value;
    }

    if (num >= NUMBER.hundred.value) {
      result += toWords(Math.floor(num / NUMBER.hundred.value), NUMBER.hundred.word) + ((num % NUMBER.hundred.value === 0) ? '' : ' and ');
      num = num % NUMBER.hundred.value;
    }

    if(num >= 20){
      result += NUMBER_TO_WORDS.TENS[Math.floor((parseInt(num) / 10)) - 2] + ' ';
      num = num % 10;
    }

    if (num === 0) {
      return result + ' ' + scale;
    }

    if (num < 10) {
      result += NUMBER_TO_WORDS.ONE[parseInt(num)];
    } else if (num < 20) {
      result += NUMBER_TO_WORDS.TEENS[num % 10];
    }

    return result + ' ' + scale;
  }

  return toWords(num, '').replace(/^\s+|\s+$/g, '');
};
