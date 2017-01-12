function update() {
  var numberInput = document.getElementById('number').value;
  var displayResult = document.getElementById('result');

  if (numberInput.length === 0) {
      displayResult.innerHTML = 'Please enter a number into the text-box';
      return;
  }

  if (isNaN( numberInput )) {
    displayResult.innerHTML = 'Only numbers allowed';
    return;
  }

  var output = numberToWords(numberInput);
  displayResult.innerHTML = output;
}

function numberToWords(num) {
  var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var teens = ['ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  var tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function toWords(num, scale) {

        var result = '';

        if (num >= 1000000) {
            result = toWords(Math.floor(num / 1000000), 'million') + ' ';
            num = num % 1000000;
        }

        if (num >= 1000) {
            result += toWords(Math.floor(num / 1000), 'thousand') + ((num % 1000 === 0 || num >= 1100) ? ' ' : ' and ');
            num = num % 1000;
        }

        if (num >= 100) {
            result += toWords(Math.floor(num / 100), 'hundred') + ((num % 100 === 0) ? ' ' : ' and ');
            num = num % 100;
        }

        if(num >= 20){
            result += tens[Math.floor(num / 10) - 2] + ' ';
            num = num % 10;
        }

        if (num === 0) {
            return result + ' ' + scale;
        }

        if (num < 10) {
            result += ones[num - 0];
        } else if (num < 20) {
            result += teens[num - 10];
        }

        return result + ' ' + scale;
    }

    var result = toWords(num, '');

    return result;
};
