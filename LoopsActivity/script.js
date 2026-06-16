const favMovie = "Avatar";

let guess = prompt("Guess My Favourite Movie!");

while ((guess != favMovie) ) {
      if(guess == "quit"){
         console.log("you quit!");
        break;

      }

     guess = prompt("Wrong guess please try again!");

}
if (guess == favMovie) {

    console.log("congrates!")

} 