var initialPrice = document.querySelector("#initial-price");
var numberOfStocks = document.querySelector("#numberOf-stocks");
var currentPrice = document.querySelector("#current-price")
var btnEl = document.querySelector("#btn-el");
var output = document.querySelector("#result")
function calculate(){
  var totalInvestment = Number(initialPrice.value)*Number(numberOfStocks.value);
  
  var currentPortfolioPrice =Number(currentPrice.value)*Number(numberOfStocks.value);
 
  var profit = Number(currentPortfolioPrice) - Number(totalInvestment);
  

  if (Number(totalInvestment) > Number(currentPortfolioPrice)){
    var loss = (totalInvestment - currentPortfolioPrice);
    var lossPercentage = ( loss / totalInvestment) * 100;
    console.log(loss)
    console.log(lossPercentage)
    output.innerText= `your portfolio is down by ${loss} rs. or ${lossPercentage}%`
    output.style.color='red';
  }
  else{
    var profit  = (Number(currentPortfolioPrice) - Number(totalInvestment));
    var profitPercentage = ( profit / currentPortfolioPrice) * 100;
    output.innerText= `your portfolio is up by ${profit} rs. or ${profitPercentage}%`
    output.style.color='green';
  }
}


btnEl.addEventListener("click", calculate)