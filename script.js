
const newCandidates = [

  { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
  { name: "Mario", skills: ["Python", "AWS"] },
  { name: "Jacquline", skills: ["JavaScript", "Azure"] },
  { name: "Kathy", skills: ["JavaScript", "Java"] },
  { name: "Anna", skills: ["JavaScript", "AWS"] },
  { name: "Matt", skills: ["PHP", "AWS"] },
  { name: "Matt", skills: ["PHP", ".Net", "Docker"] },
];


/*The function takes a skill parameter and returns all candidates that match the required skill*/
function displayCandiatesBySkill(skill) {

  const newCandidatesTable = createNewCandidateTable();

  removeRowsFromTable(newCandidatesTable);
  createTableSkillHeading(skill);

  const newTbody = newCandidatesTable.getElementsByTagName('tbody')[0];

  addCandidatesToTable(newTbody, filterCandidateBySkill(newCandidates, skill))

  document.body.appendChild(newCandidatesTable);

}


function createNewCandidateTable() {

    var candidatesTable = getCurrentCandidateSkillTable();
    return newCandidatesTable = candidatesTable.cloneNode(true);
}


function getCurrentCandidateSkillTable(){
   return document.getElementById("candidates_example");
}


function removeRowsFromTable(table) {
  const rows = table.getElementsByTagName("tr");

  while (rows.length > 1) {
    table.deleteRow(1);
  }
}


function createTableSkillHeading (skill) {

    var hOneHeading = document.createElement("H2");
    const headingName = "All candidates possessing " + skill + " skills"

    var textNode = document.createTextNode(headingName);

    hOneHeading.appendChild(textNode);
    document.body.appendChild(hOneHeading);
}


function addCandidatesToTable(table, candidates) {
  candidates.forEach(candidate => insertCandidate(table, candidate.name, candidate.skills));
}


function insertCandidate(tbody, name, skills) {

  const newRow = tbody.insertRow();
  const nameCell = newRow.insertCell();
  const skillCell = newRow.insertCell();

  const candidateName = document.createTextNode(name);
  const candidateSkills = document.createTextNode(skills.join(', '));

  nameCell.appendChild(candidateName);
  skillCell.appendChild(candidateSkills);
}


function filterCandidateBySkill(candidates, skill) {

      var row, newCandidates = [];

      for (row = 0; row < candidates.length; row++ ) {
          var col;
          for (col = 0; col <= candidates[col].skills.length; col++) {
             if (candidates[row].skills[col] === skill) {
               newCandidates.push(candidates[row])
             }
          }
      }

      return newCandidates

}


displayCandiatesBySkill("JavaScript");
displayCandiatesBySkill("Ruby");
displayCandiatesBySkill("Azure");
displayCandiatesBySkill("AWS");
displayCandiatesBySkill("Python")
displayCandiatesBySkill("PHP");
displayCandiatesBySkill(".Net");
displayCandiatesBySkill("Docker");
