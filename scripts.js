// document.getElementsByClassName("menu").onClick = shuffle();

const cards = document.querySelectorAll(".memory-card");

let hasFlipped = false;
let firstCard, secondCard;
let lockBoard = false;
let count = 0;


function flipCard () {
    if(lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if(!hasFlipped) {
        
        //first click
        hasFlipped = true;
        firstCard = this;
        return;
        
        }
        
        //second click
        secondCard = this;

        checkForMatch();
    }


function checkForMatch () {

        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        let isNotMatch = firstCard.dataset.framework !== secondCard.dataset.framework;
        
            isMatch? disableCards():unFlipCards();

            if (isNotMatch) {
                var audio = new Audio("audio/erro.mp3");
                audio.play();
            }
        }


function disableCards () {
            firstCard.removeEventListener("click",flipCard);
            secondCard.removeEventListener("click", flipCard);

            playSound();
            countCardsFlipped();
            resetBoard();
            
        }



function playSound () {

            if (firstCard.dataset.framework === "masha")
            {
                var audio = new Audio("audio/masha.mp3");
                audio.play();
            }else{
                if (firstCard.dataset.framework === "gigante")
            {
                var audio = new Audio("audio/gigante.mp3");
                audio.play();
            }else{
                if (firstCard.dataset.framework === "faisca")
            {
                var audio = new Audio("audio/faisca.mp3");
                audio.play();
            }else{
                if (firstCard.dataset.framework === "jj")
            {
                var audio = new Audio("audio/jj.mp3");
                audio.play();
            }else{
                if (firstCard.dataset.framework === "urso")
            {
                var audio = new Audio("audio/urso.mp3");
                audio.play();
            }else{
                if (firstCard.dataset.framework === "ursoepiano")
            {
                var audio = new Audio("audio/ursoepiano.mp3");
                audio.play();
            }else{
            

            }

            }
           }            
          }
        }
    }
}

function countCardsFlipped () {
            count++;

            if (count == 6) 
            setTimeout(() => {{
                var audio = new Audio("audio/final.mp3");
                audio.play();
                fireworks();
            }
        },1500);
}


function unFlipCards () {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    },1500);

}

function resetBoard () {
        [hasFlipped, lockBoard] = [false,false];
        [firstCard, secondCard] = [null, null];
}

(function shuffle () {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;
    });
}
)();


cards.forEach(card => card.addEventListener("click", flipCard));

