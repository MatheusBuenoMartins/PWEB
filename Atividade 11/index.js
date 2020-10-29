const radioUpper = document.getElementById("upper");
const radioLower = document.getElementById("lower");
const inputText = document.getElementById("text");
function changeTextCase (element) {
  const text = inputText.value;
  if (element.value == "upper" ) {
    inputText.value = text.toUpperCase();
  } else {
    inputText.value = text.toLowerCase();
  }
}
