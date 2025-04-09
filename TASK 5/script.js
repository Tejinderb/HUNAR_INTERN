document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const bmi = (weight / (height * height)).toFixed(2);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Your BMI is <strong>${bmi}</strong>. This means you are: <strong>${category}</strong>.`;
  resultDiv.style.opacity = 1; // Make the result visible
});
