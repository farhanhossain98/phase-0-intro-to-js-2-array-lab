// Write your solution here!
const cats = ["Milo","Otis", "Garfield"];
const copyofcats = [...cats];
function destructivelyAppendCat() {
cats.push("Ralph");
}
const copyofcats2 = [...cats];
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
const copyofcats3 = [...cats];
function destructivelyRemoveLastCat() {
    cats.pop();
}
const copyofcats4 = [...cats];
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
   const newcats= [...cats, name] 
return newcats;
}
function prependCat(name) {
    const newcats = [name, ...cats]
    return newcats
}
function removeLastCat(name) {
    return cats.slice(0,-1);
} 
function removeFirstCat(name) {
    return cats.slice(1);
}