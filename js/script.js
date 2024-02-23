// mail
const emailUtente = [prompt("Scrivi la tua email.")];
const emailRegistrate = ["q@gmail.com", "w@gmail.com", "e@gmail.com", "r@gmail.com", "t@gmail.com", "y@gmail.com",] 

console.log(emailUtente, emailRegistrate);

if(emailUtente[0] === emailRegistrate[0]){
  console.log("correwtto");
  console.log(emailRegistrate.at(0, 1 ,2 ,3));
}else if(emailUtente[0] === emailRegistrate[1]){
  console.log("correwtto");

}else if(emailUtente[0] === emailRegistrate[2]){
  console.log("correwtto");

}else if(emailUtente[0] === emailRegistrate[3]){
  console.log("correwtto");

}else if(emailUtente[0] === emailRegistrate[4]){
  console.log("correwtto");

}else if(emailUtente[0] === emailRegistrate[5]){
  console.log("correwtto");

}else{
  console.log("SBAGLIATO");
  document.querySelector("h1").innerHTML += 
  `
  Hai sbagliato email oppure non ti sei ancora registrato.
  `
}
// Dadi
const bottone = document.querySelector(".btn");
bottone.addEventListener("click", function(){
  const utente = Math.floor(Math.random() * 6) + 1;
  const computer = Math.floor(Math.random() * 6) + 1;
  console.log(utente, computer);
  
  if(utente > computer){
    console.log("vince l'utente");
    document.querySelector("h2").innerHTML +=
    `
    vince l'utente con ${utente} rispetto a ${computer} del computer
    `;
    
    
  }else if(computer > utente){
    console.log("vince il computer");
    document.querySelector("h2").innerHTML +=
    `
    vince il computer con ${computer} rispetto a ${utente} dell'utente
    `
  }else{
  console.log("riprova");
  document.querySelector("h2").innerHTML +=
    `
    Pareggio Ritenta schiacciando di nuovo il pulsante
    `
  }

})


