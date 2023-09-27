

const fahrenheitInput = document.getElementById('fahrenheit-input');
const usdInput = document.querySelector("#USD-input");
const milesInput = document.querySelector("#miles-input");

const fToCButton = document.querySelector("#cToFButton")
const usdToCadButton = document.querySelector("#usdToCadButton");
const milesToKmButton = document.querySelector("#milesToKmButton");

const fToCResult = document.querySelector("#fToCResult");
const usdToCadResult2 = document.querySelector("#usdToCadResult");
const milesToKmResult = document.querySelector("#uip");

const apiKey2 = config.MY_KEY
const apiUrl2 = config.MY_URL

fToCButton.onclick = function(){
    const fValue = fahrenheitInput.value;

    let convertedTemp = ((fValue - 32) * 5/9)

    
    fToCResult.innerText = convertedTemp.toFixed(0);
}

usdToCadButton.onclick = function(){
    const usdNum = usdInput.value;

    fetch(apiUrl2, {
        headers: {
            'X-API-KEY': apiKey2
        }
    })
    .then(response => response.json())
    .then(data => {
        const rate = data.exchange_rate;
        var totalAmount = rate * usdNum;
        usdToCadResult2.innerText = totalAmount;
    })

    fToCResult.innetText = totalAmount.toFixed(2);

}

milesToKmButton.onclick = function(){

    userMiles = milesInput.value;
    let convertedDistance = userMiles * 1.60934;
    milesToKmResult.innerText = convertedDistance.toFixed(2);
}



