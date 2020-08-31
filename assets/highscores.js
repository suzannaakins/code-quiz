var highScores = []

var showScores = function () {
    var storage = JSON.parse(localStorage.getItem("highScores"));
    console.log(storage);
    var scoreContainer = document.getElementById("highscores")
    for (var i = 0; i < storage.length; i++) {
        var li = document.createElement("li")
        li.textContent = storage[i].initials + " " + storage[i].score;
        scoreContainer.appendChild(li);
    }
};

showScores();