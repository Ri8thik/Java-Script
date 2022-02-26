function ageInDays() {
    var yearBorn = prompt("Enter your born Years ");
    var ageInDayss = (2022 - yearBorn) * 365;
    var h1 = document.createElement('h1');
    var textAnswers = document.createTextNode("your are " + ageInDayss + " Days old .");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswers);
    document.getElementById("div__result").appendChild(h1);

}

function reset() {
    document.getElementById("ageInDays").remove();
}