console.log('JS OK');

// MY LADDER
/*
1 Funzione per generare numeri casuali
2 Funzione per visualizzare numeri in pagina
3 Creare  il timer 30 secondi
4 Funzione per ottenere l'input dell'utente
5  Funzione per ottenere l'input dell'utente
*/


const numbersContainer = document.getElementById('numbers-container');
 

const randomNumbers = generateRandomNumbers();
displayNumbers(randomNumbers);
//##### Funzioni ######

// // 1. Funzione per generare numeri casuali
function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * 10) + 1); // Modifica se vuoi un range diverso
    }
    return numbers;
}

// 2. Funzione per visualizzare numeri in pagina
function displayNumbers(numbers) {
    numbersContainer.textContent = numbers.join(' ');
    
    // 3. Creare il timer di 30 secondi
    setTimeout(() => {
        // Chiamare la funzione per la fase di input dell'utente
        getUserInput(numbers);
    }, 3000);
}