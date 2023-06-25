const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newq = document.getElementById("new-quotes");
const tweet = document.getElementById("btn_logo");

let realData = "";
let quotesData = "";

const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
  window.open(tweetPost);
};    

const getNewQuotes = () => {
  let rnum = Math.floor(Math.random() * 10);
  quotesData = realData[rnum];
  quotes.innerHTML = `${quotesData.text}`;
  //   author.innerHTML = `${quotesData.author}`;
  quotesData.author == null
    ? (author.innerHTML = "unknown")
    : (author.innerHTML = `${quotesData.author}`);
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();

    getNewQuotes();

    console.log(realData);
  } catch (error) {}
};

tweet.addEventListener("click", tweetNow);

newq.addEventListener("click", getNewQuotes);
getQuotes();
// AOS.init();
