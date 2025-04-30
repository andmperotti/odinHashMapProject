import HashMap from "./hash_map.js";

const test = new HashMap(); // or HashMap() if using a factory

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
//add more entries so the loadFactor is passed, which causes doubling to occur to the array size
test.set("sweatshirt", "black");
test.set("glasses", "brown");
test.set("skin", "tan"); //lie
test.set("bottle", "green");
test.set("sweatpants", "black");
console.log(test.length());
console.log(test.entries());
// test.clear();
// console.log(test.length()); //0
test.set("ice cream", "green");
console.log(test.get("ice cream")); //green
console.log(test.has("apple"));
console.log(test.remove("apple"));
console.log(test.has("apple"));
test.clear();
console.log(test.length());
