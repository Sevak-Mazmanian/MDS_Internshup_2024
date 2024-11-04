const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  fetch(url)//this will make a request
    .then(data => data.json())// this will turn the  response of the fetch to a json array
    .then(item => {
      jokeContainer.textContent = `${item.joke}`; // this will print the joke that is inside the json array
    });
};

btn.addEventListener("click", getJoke);
