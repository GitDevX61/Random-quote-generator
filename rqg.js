const btnEl = document.querySelector('.js-btn')
const quoteEl = document.querySelector('.js-quote')
const authorEl = document.querySelector('.js-author')
const leftQuote = document.querySelector('.fa-quote-left')
const rightQuote = document.querySelector('.fa-quote-right')

const apiKey = "/1YEnqw32o3z4MFpvAqcjA==Ut4JucW9TvKI2Rti"
const apiURL = "https://api.api-ninjas.com/v1/quotes"

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey
  }
}

async function getQuote() {
  try {
    leftQuote.style.display = "none";
    rightQuote.style.display = "none";
    quoteEl.innerHTML = "Updating...";
    authorEl.style.display = "none";
    btnEl.innerHTML = "Updating...";
    btnEl.disabled = true;

    const response = await fetch(apiURL, options)
    const data = await response.json()

    leftQuote.style.display = "initial";
    rightQuote.style.display = "initial";
    quoteEl.innerHTML = data[0].quote;
    authorEl.innerHTML = "~ " + data[0].author;
  
    btnEl.innerHTML = "Get a Quote";
    btnEl.disabled = false;
    authorEl.style.display = "block";
  } catch (error) {
    quoteEl.innerHTML = "An error occurred, please try again later."
    btnEl.disabled = false;
    btnEl.innerHTML = "Get a Quote";
  }
};

getQuote();

btnEl.addEventListener('click', getQuote);

