const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validUSNumberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?\d{3})([\s-]?\d{4})$/;

checkBtn.addEventListener("click", () => {
  const phone = input.value.trim();
  if (phone === "") {
    alert("Please provide a phone number");
    return;
  }

  if (validUSNumberRegex.test(phone)) {
    resultsDiv.textContent = `Valid US number: ${phone}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${phone}`;
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
  input.value = "";
});
