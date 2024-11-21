const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const resultsDiv = document.getElementById('results-div');

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

const checkNumber = (input) => 
{ 
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }
  if (!phoneRegex.test(input)) {
    resultsDiv.textContent = `Invalid US number: ${input}`;
    return;
  }
  resultsDiv.textContent = `Valid US number: ${input}`;
};

checkBtn.addEventListener('click', () => {
  checkNumber(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});
