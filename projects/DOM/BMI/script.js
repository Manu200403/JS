const form = document.querySelector('form');
//this usecaswe will give you empty
//const height=parseInt(document.querySelecter('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); //this is written to avoid default operations of form event dat the default operation is it sends form as url to server and many

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');


  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter valid value ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please enter valid value ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(3);
    //show result

    if (bmi < 18.6) {
      result.innerHTML = `
        <h3>Your BMI is ${bmi}</h3>
        <p>Underweight</p>
      `;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `
        <h3>Your BMI is ${bmi}</h3>
        <p>Normal Range</p>
      `;
    } else {
      result.innerHTML = `
        <h3>Your BMI is ${bmi}</h3>
        <p>Overweight</p>
      `;
    }

  }
});
