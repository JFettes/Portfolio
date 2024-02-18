//Function to update the page content based on user input
const updatePageContent = (day) => {
    const outputElement = document.getElementById('output');
    outputElement.textContent = `Your favorite day of the week is ${day}!`;
  };
  
  //Event listener for a button click
  const buttonElement = document.getElementById('submitBtn');
  buttonElement.addEventListener('click', () => {
    //Variable that gets data from the user
    const userFavoriteDay = prompt('What is your favorite day of the week?');
    
    //Modifys the content of the paragragh element
    updatePageContent(userFavoriteDay);
  });
  
  //Loop to change background color
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      document.body.style.backgroundColor = i % 2 === 0 ? 'blue' : 'green';
    }, i * 1000);
  }