var initialPrice = document.querySelector("#initial-price");
var numberOfStocks = document.querySelector("#numberOf-stocks");
var currentPrice = document.querySelector("#current-price")
var btnEl = document.querySelector("#btn-el");
var output = document.querySelector("#result");
var socialLink1 = document.querySelector("#social-link1");
var socialLink2 = document.querySelector("#social-link2");
var contaierEl = document.querySelector(".contaier")

socialLink1.style.display="none"
socialLink2.style.display="none"


function calculate(){
  var totalInvestment = Number(initialPrice.value)*Number(numberOfStocks.value);
  
  var currentPortfolioPrice =Number(currentPrice.value)*Number(numberOfStocks.value);
 
  var profit = Number(currentPortfolioPrice) - Number(totalInvestment);
  

  if (Number(totalInvestment) > Number(currentPortfolioPrice)){
    var loss = (totalInvestment - currentPortfolioPrice);
    var lossPercentage = ( loss / totalInvestment) * 100;
    console.log(loss)
    console.log(lossPercentage)
    output.innerText= `your portfolio is down by ${loss} rs. or ${lossPercentage.toFixed(2)}%`
    
    contaierEl.style.backgroundColor='#ed5f5f';
    socialLink1.style.display="block"
    socialLink2.style.display="block"
  }
  else{
    var profit  = (Number(currentPortfolioPrice) - Number(totalInvestment));
    var profitPercentage = ( profit / currentPortfolioPrice) * 100;
    output.innerText= `your portfolio is up by ${profit} rs. or ${profitPercentage.toFixed(2)}%`
    
    contaierEl.style.backgroundColor='#85ed5f';
    socialLink1.style.display="block"
    socialLink2.style.display="block"
  }
}


btnEl.addEventListener("click", calculate)