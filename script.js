const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const resultsDiv = document.getElementById('results-div');

// Регулярное выражение для проверки российских номеров
const phoneRegex = /^(\+7|7|8)?\s*\(?(\d{3})\)?[\s-]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/;

const checkNumber = (input) => { 
  if (input === '') {
    alert('Пожалуйста, укажите номер телефона');
    return;
  }
  
  // Проверка номера на соответствие регулярному выражению
  if (!phoneRegex.test(input)) {
    resultsDiv.textContent = `Неверный российский номер: ${input}`;
    return;
  }
  
  resultsDiv.textContent = `Верный российский номер: ${input}`;
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
