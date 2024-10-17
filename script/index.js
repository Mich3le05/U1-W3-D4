const tabellone = document.getElementById('tabellone')
const estraiButton = document.getElementById('estraiButton')

// Array che contiene i numeri estratti
const numeriEstratti = []

// Funzione per creare il tabellone con le 76 celle
const tabelloneCelle = () => {
  for (let i = 1; i <= 76; i++) {
    const cellaNum = document.createElement('div')
    cellaNum.classList.add('cellaNum')
    cellaNum.textContent = i
    tabellone.appendChild(cellaNum)
  }
}

// invoco la funzione che dovrà venire eseguita all'avvio della pagina
tabelloneCelle()

// funzione per estrarre un numero casuale
const numeroCasuale = () => {
  if (numeriEstratti.length >= 76) {
    console.log('Numeri estratti')
    return
  }
  let randomNum = Math.floor(Math.random() * 76) + 1
  //   Senza il +1, il numero generato sarebbe compreso tra 0 e 75

  // con ciclo while prima viene generato un numero, e se è già stato estratto, continua a generarne di nuovi finché non ne trova uno non estratto.
  while (numeriEstratti.includes(randomNum)) {
    randomNum = Math.floor(Math.random() * 76) + 1
  }
  // aggiungo numero estratto all'array
  numeriEstratti.push(randomNum)

  // Evidenzio la cella corrispondente al numero che viene estratto
  const celle = document.querySelectorAll('.cellaNum')
  celle[randomNum - 1].classList.add('evidenziaCella')
}

estraiButton.addEventListener('click', numeroCasuale)
