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

const summarySection = document.getElementById("right");

for (const index in data) {
    console.log("category", data[index].category);
    const newSection = document.createElement("section");

    newSection.setAttribute("class", "summary");
    console.log("should be lowercase", data[index].category.toLowerCase()); //undefined...
    newSection.setAttribute("id", data[index].category.toLowerCase()); 

    const newSectionChildDiv = document.createElement("div");
    newSectionChildDiv.setAttribute("class", "summary-content");

    const divImage = document.createElement("img");
    divImage.setAttribute("src", data[index].icon);
    divImage.setAttribute("alt", `$(data[index].category) icon`);

    const divParagraph = document.createElement("p");
    divParagraph.innerHTML = data[index].category;

    newSectionChildDiv.appendChild(divImage);
    newSectionChildDiv.appendChild(divParagraph);

    newSection.appendChild(newSectionChildDiv);

    const newSectionParagraph = document.createElement("p");

    const paragraphSpan = document.createElement("span");
    paragraphSpan.innerHTML = data[index].score;

    newSectionParagraph.appendChild(paragraphSpan);
    newSectionParagraph.innerHTML += " / 100";

    newSection.appendChild(newSectionParagraph);

    summarySection.appendChild(newSection);
}