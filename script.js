fetch('https://raw.githubusercontent.com/MooseCowBear/frontend-mentor-results-summary-component/main/data.json')
  .then(response => response.json())
  .then(data => displayData(data))
  .catch(error => displayError(error));

const colors = [
    {font: "hsl(0, 100%, 67%)", background: "hsla(0, 100%, 67%, 5%)"}, 
    {font: "hsl(39, 100%, 56%)", background: "hsla(39, 100%, 56%, 5%)"}, 
    {font: "hsl(166, 100%, 37%)", background: "hsla(166, 100%, 37%, 5%)"}, 
    {font: "hsl(234, 85%, 45%)", background: "hsla(234, 85%, 45%, 5%)"}
    ];


function displayData(data) {
    console.log(data);

    const scores = [];
    const summarySection = document.getElementById("right");

    for (const index in data) {
        scores.push(data[index].score); 
        createNewSection(summarySection, index, data);
    }

    const totalScore = calculateTotalScore(scores);
    const totalScoreReport = document.getElementById("total-score");
    totalScoreReport.innerHTML = totalScore;
}

function createNewSection(parent, index, data) {
    const newSection = document.createElement("section");
    newSection.setAttribute("class", "summary");
    newSection.style.backgroundColor = colors[index % colors.length].background;

    createInnerSectionDiv(newSection, index, data);
    createScoreReport(newSection, index, data);

    parent.appendChild(newSection);
}

function createInnerSectionDiv(parent, index, data) {
    const newSectionChildDiv = document.createElement("div");
    newSectionChildDiv.setAttribute("class", "summary-content"); 

    createDivImage(newSectionChildDiv, index, data);
    createDescription(newSectionChildDiv, index, data);

    parent.appendChild(newSectionChildDiv);
}

function createDivImage(parent, index, data) {
    const divImage = document.createElement("img"); 
    divImage.setAttribute("src", data[index].icon); 
    divImage.setAttribute("alt", `$(data[index].category) icon`);

    parent.appendChild(divImage); 
}

function createDescription(parent, index, data) {
    const divDescription = document.createElement("p"); 
    divDescription.innerHTML = data[index].category;
    divDescription.style.color = colors[index % colors.length].font;

    parent.appendChild(divDescription); 
}

function createScoreReport(parent, index, data) {
    const scoreReport = document.createElement("p"); 
    const scoreSpan = document.createElement("span");
    scoreSpan.innerText = data[index].score;

    scoreReport.appendChild(scoreSpan);
    scoreReport.insertAdjacentText("beforeend", " / 100");

    parent.appendChild(scoreReport);
}

function calculateTotalScore(scores) {
    const numScores = scores.length;
    const sum = scores.reduce((a, b) => a + b, 0); 

    return Math.round(sum/numScores);
}

//in case the data doesn't load for some reason, give a visual alert to user
function displayError(error) {
    console.log(error);
    const summarySection = document.getElementById("right");
    const errorMessage = document.createElement("p");
    errorMessage.setAttribute("id", "error");
    errorMessage.innerText = "Oh no! Something went wrong.";
    summarySection.appendChild(errorMessage);
}