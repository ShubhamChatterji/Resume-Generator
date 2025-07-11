function addNewSkillsField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter Here");
    let skOb = document.getElementById("sk");
    let skillsAddButtonOb = document.getElementById("skillsAddButton");
    skOb.insertBefore(newNode, skillsAddButtonOb);
}
function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
function addEduField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eduField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");
    let eduOb = document.getElementById("edu");
    let eduAddButtonOb = document.getElementById("eduAddButton");
    eduOb.insertBefore(newNode, eduAddButton);
}
function addProjField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("projectsField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter Here");
    let projOb = document.getElementById("proj");
    let projectsAddButtonOb = document.getElementById("projectsAddButton");
    projOb.insertBefore(newNode, projectsAddButton);
}
// generating Resume
function generateResume() {
    //name T1
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    //name T2
    document.getElementById("nameT2").innerHTML = nameField;
    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    //email
    document.getElementById("emailT").innerHTML =document.getElementById("emailField").value;
    //address
    document.getElementById("addressT").innerHTML =document.getElementById("addressField").value;
    //Linkedin
    document.getElementById("linkedinT").innerHTML =document.getElementById("linkedinField").value;
    //Github
    document.getElementById("githubT").innerHTML =document.getElementById("githubField").value;
    //summary
    let summaryText = document.getElementById("summaryField").value.trim();
let summaryCard = document.getElementById("summaryT").parentElement.parentElement;

if (summaryText === "") {
    summaryCard.style.display = 'none';
} else {
    document.getElementById("summaryT").innerHTML = summaryText;
    summaryCard.style.display = 'block';
}

//work experience
    let wes = document.getElementsByClassName("weField");
let str1 = '';
for (let e of wes) {
    if (e.value.trim() !== "") {
        str1 += `<li>${e.value}</li>`;
    }
}

let weCard = document.getElementById("workT").parentElement.parentElement;
if (str1.trim() === '') {
    weCard.style.display = 'none';
} else {
    document.getElementById("workT").innerHTML = str1;
    weCard.style.display = 'block';
}

    //Education
   let eds = document.getElementsByClassName("eduField");
let str2 = '';
for (let j of eds) {
    if (j.value.trim() !== "") {
        str2 += `<li>${j.value}</li>`;
    }
}

let eduCard = document.getElementById("eduT").parentElement.parentElement;
if (str2.trim() === '') {
    eduCard.style.display = 'none';
} else {
    document.getElementById("eduT").innerHTML = str2;
    eduCard.style.display = 'block';
}

    //Skills experience
   let sks = document.getElementsByClassName("skField");
let str3 = '';
for (let f of sks) {
    if (f.value.trim() !== "") {
        str3 += `<li>${f.value}</li>`;
    }
}

let skCard = document.getElementById("skT").parentElement.parentElement;
if (str3.trim() === '') {
    skCard.style.display = 'none';
} else {
    document.getElementById("skT").innerHTML = str3;
    skCard.style.display = 'block';
}

    //projects
   let prjs = document.getElementsByClassName("projectsField");
let str4 = '';
for (let p of prjs) {
    if (p.value.trim() !== "") {
        str4 += `<li>${p.value}</li>`;
    }
}

let projCard = document.getElementById("projT").parentElement.parentElement;
if (str4.trim() === '') {
    projCard.style.display = 'none';
} else {
    document.getElementById("projT").innerHTML = str4;
    projCard.style.display = 'block';
}

    //code for setting image
    let file=document.getElementById("imgField").files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    // setting img in template
    reader.onloadend=function(){
    document.getElementById('imgT').src=reader.result;
    };
    //code  for  not displaying form after generating resume
    document.querySelector("header").style.display = "none";
    document.querySelector("footer").style.display = "none";
    document.getElementById('resume-form').style.display='none';
    document.getElementById('resume-template').style.display='block';

}
function printResume(){
    window.print();
}
