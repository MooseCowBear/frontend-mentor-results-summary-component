/*const url = "./data.json";

const fetchJson = async () => {
    try {
      const data = await fetch(url);
      const response = await data.json();  
      console.log("try executed");
    } catch (error) {
      console.log(error);
    }
}; 

const data = fetchJson();
console.log(data); */ 

const data = [ //temp, will read from file later....
    {
      category: "Reaction",
      score: 80,
      icon: "./assets/images/icon-reaction.svg"
    },
    {
      category: "Memory",
      score: 92,
      icon: "./assets/images/icon-memory.svg"
    },
    {
      category: "Verbal",
      score: 61,
      icon: "./assets/images/icon-verbal.svg"
    },
    {
      category: "Visual",
      score: 72,
      icon: "./assets/images/icon-visual.svg"
    }
  ];

  /* plan: id= "right" is what we will attach children to. loop the array of data from json.
    (believe the children should attach in order, so div first, p second)

    create: 1. section with class = "summary" id = arr[index].category.toLowerCase(). 

    2. section has two children a. a div with class = "summary-content", and b. a <p> (WILL NEED ID?). 

    3. div has two children: IMG (img src = arr[index].icon, alt = arr[index].category + "icon" ) and P. 
    (P = arr[index].category)

    4. <p> (b. above) has a span child, whose innerHTML = arr[index].score. 
    (so, <p> should be add span with text as child of <p>)
    (then <p>'s innerHTML += "  / 100") -- will need to test that this works as intended...
  */

    /* but want to do it above the button, so move button out of section - update syling to reflect */ 

console.log(data);
console.log(Array.isArray(data));

const colors = [
    {font: "hsl(0, 100%, 67%)", background: "hsla(0, 100%, 67%, 5%)"}, 
    {font: "hsl(39, 100%, 56%)", background: "hsla(39, 100%, 56%, 5%)"}, 
    {font: "hsl(166, 100%, 37%)", background: "hsla(166, 100%, 37%, 5%)"}, 
    {font: "hsl(234, 85%, 45%)", background: "hsla(234, 85%, 45%, 5%)"}
    ];

const scores = [];
const summarySection = document.getElementById("right");

for (const index in data) {
    scores.push(data[index].score); //for calculating cumulative score and displaying 
    const newSection = document.createElement("section");

    newSection.setAttribute("class", "summary");
    newSection.style.backgroundColor = colors[index % colors.length].background;

    //the first child of the new section, who exists for styling purposes
    const newSectionChildDiv = document.createElement("div");
    newSectionChildDiv.setAttribute("class", "summary-content"); 

    //which, has its own two children
    const divImage = document.createElement("img"); 
    divImage.setAttribute("src", data[index].icon);
    divImage.setAttribute("alt", `$(data[index].category) icon`);

    const divDescription = document.createElement("p"); 
    divDescription.innerHTML = data[index].category;
    divDescription.style.color = colors[index % colors.length].font;

    newSectionChildDiv.appendChild(divImage); 
    newSectionChildDiv.appendChild(divDescription); 

    //the second child of new section
    const scoreReport = document.createElement("p"); 

    //who has one child
    const scoreSpan = document.createElement("span");
    scoreSpan.innerHTML = data[index].score;

    scoreReport.appendChild(scoreSpan);
    scoreReport.innerHTML += " / 100";

    //attach section's children
    newSection.appendChild(newSectionChildDiv);
    newSection.appendChild(scoreReport);

    //attach the newly created section
    summarySection.appendChild(newSection); 
}

/* also need the "score" in the circle div to be calculated. */

console.log("scores", scores);

const totalScore = calculateTotalScore(scores);
const totalScoreReport = document.getElementById("total-score");
totalScoreReport.innerHTML = totalScore;

function calculateTotalScore(scores) {
    const numScores = scores.length;
    const sum = scores.reduce((a, b) => a + b, 0); 

    return Math.round(sum/numScores);
}