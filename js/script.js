// mail
const emailUtente = prompt("Scrivi la tua email.");
const emailRegistrate = ["q@gmail.com", "w@gmail.com", "e@gmail.com", "r@gmail.com", "t@gmail.com", "y@gmail.com",] 

console.log(emailUtente, emailRegistrate);
let mailtrovata = false;
let messaggio = "accesso negato ";
for(i = 0; i < emailRegistrate.length; i++){
  const email = emailRegistrate[i];
  console.log(email);

  if(emailUtente === email){
    console.log("va bene ");
    mailtrovata = true;
  }
}
if(mailtrovata){
 messaggio = "email trovata"
}
document.querySelector("h1").innerHTML +=  messaggio
// Dadi
const bottone = document.querySelector(".btn");
const reset = document.querySelector(".reset")
bottone.addEventListener("click", function(){
  const utente = Math.floor(Math.random() * 6) + 1;
  const computer = Math.floor(Math.random() * 6) + 1;
  console.log(utente, computer);
  
  if(utente > computer){
    console.log("vince l'utente");
    document.querySelector("h2").innerHTML =
    `
    vince l'utente con ${utente} rispetto a ${computer} del computer
    `;
    
    
  }else if(computer > utente){
    console.log("vince il computer");
    document.querySelector("h2").innerHTML =
    `
    vince il computer con ${computer} rispetto a ${utente} dell'utente
    `
  }else{
  console.log("riprova");
  document.querySelector("h2").innerHTML =
    `
    Pareggio Ritenta schiacciando di nuovo il pulsante
    `
  }

})


  



