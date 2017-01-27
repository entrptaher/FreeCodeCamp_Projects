
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/(\s([A-Z]))/g, "-$1").replace(/(([A-Z]))/g, "-$1").replace(/\s/g, "-").replace(/_/g, "").replace(/--/g, "").replace(/^-/g, "").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
