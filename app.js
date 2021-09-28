var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');

var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);




function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}


function calculateProfitAndLoss(initial, quantity,current){
    if(initial > current){
        var loss = (initial-current)*quantity;
        var lossPercentage = ((initial-current)/ initial)* 100;

        showOutput(`Hey the loss is ${loss}  and the percentage is ${lossPercentage.toFixed(2)}%`);
        outputBox.style.color = 'red';
    }else if (current > initial){
        var profit = (current-initial)*quantity;
        var profitPercentage = ((current-initial)/initial)*100;

        showOutput(`Hey the profit is ${profit}  and the percentage is ${profitPercentage.toFixed(2)}%`);
        outputBox.style.color = 'green';
    } else {

        showOutput("Hey! No Profit, No Loss");



    }

}
function showOutput(message) {
    outputBox.innerHTML = message;
}


