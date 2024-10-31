const state = {
    view: {
        squares: documents.querySelectorAll(".square"),
        enemy: documents.querySelector(".enemy"),
        timeLeft: documents.querySelector("#time-left"),
        score: documents.querySelector("#score"),
    },
    values: {};
    };

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {});
}

function init() {
    alert(ola);
    randomSquare();
}

init();