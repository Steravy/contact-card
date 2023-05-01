const dateParagraph = document.querySelector("#date");

const date = new Date().getFullYear();

dateParagraph.textContent += date;

console.log(date);