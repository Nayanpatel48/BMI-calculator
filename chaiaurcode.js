//selecting form
const form = document.querySelector('form');
//this will give you empty values
// const height = parseInt(document.querySelector('#hight'));

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const resultsSentence = document.querySelector('#results-sentence');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height.`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight.`;
  } else {
    const bmi = weight / (height * height);
    results.innerHTML = `<span>${bmi.toFixed(4)}</span>`;
  }
});
