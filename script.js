alert("Hello!");
var result = confirm("Do you want play with me?")
if (result == false) {
    alert("END")
}
else {
    var name = prompt("What is your name?")
    var surname = prompt("What is your surname?")
    var old = prompt("How old are you?")
    var R = prompt("What is in the middle of Paris?")
    var M = prompt("What occurs once in a minute, twice in a moment and never in a thousand years?")
    var hair = prompt("What is found over your head but under your hat?")
    var tables_and_chairs = prompt("We have legs but cannot walk")
    var stamp = prompt("What goes around the world but stays in a corner?")
    const POINTS = 2 ** 2
    console.log(POINTS)
    var score = 0
    if (R == "R") {
        score += 1 * POINTS;
    }

    if (M == "M") {
        score += 2 * POINTS
    }

    if (hair == "hair") {
        score += 3 * POINTS
    }

    if (tables_and_chairs == "tables_and_chairs") {
        score += 4 * POINTS

    }

    if (stamp == "stamp") {
        score += 5 * POINTS;
    }

    alert(score);
}