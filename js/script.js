// let emailUtente = prompt("Scrivi la tua email.")
// const emailRegistrate = ["q@gmail.com, w@gmail.com, e@gmail.com, r@gmail.com, t@gmail.com, y@gmail.com,"]
// console.log(emailUtente, emailRegistrate.toString());
// if(emailUtente = emailRegistrate.at(0, 1, 2, 3, 4, 5).toString()){
//   console.log("corretto");
// }else{
//   document.querySelector("h1").innerHTML += 
//   `
//   Hai sbagliato email oppure non ti sei ancora registrato.
//   `
// }


// Dadi

const utente = Math.floor(Math.random() * 6) + 1
const computer = Math.floor(Math.random() * 6) + 1
console.log(utente, computer);

if(utente > computer){
  console.log("vince l'utente");
}else if(computer > utente){
  console.log("vince il computer");

}else{
console.log("riprova");
}