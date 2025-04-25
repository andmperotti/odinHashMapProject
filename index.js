import LinkedList from "./linked_list.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); //( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

//my invocations:
let newList = new LinkedList();
//add 5 values
newList.append("drew");
newList.append("steven");
newList.append("john");
newList.append("colleen");
newList.append("ursula");
console.log(newList.toString()); //(drew) -> (steven) -> (john) -> (colleen) -> (ursula) -> null

//test each method every which way you can
newList.pop();
console.log(newList.toString()); //(drew) -> (steven) -> (john) -> (colleen) -> null
newList.append("ursula");
console.log(newList.toString()); //(drew) -> (steven) -> (john) -> (colleen) -> (ursula) -> null

newList.prepend("steve");
console.log(newList.toString()); //(steve) -> (drew) -> (steven) -> (john) -> (colleen) -> (ursula) -> null

console.log(newList.size()); //6

console.log(newList.getHead()); //steve
console.log(newList.tail()); //ursula

console.log(newList.at(1)); //drew

console.log(newList.contains("john")); //true
console.log(newList.find("john")); //3

newList.insertAt("gene", 0);
console.log(newList.toString()); //(gene) -> (steve) -> (drew) -> (steven) -> (john) -> (colleen) -> (ursula) -> null

newList.insertAt("john", 1);
console.log(newList.toString()); //(gene) -> (john) -> (steve) -> (drew) -> (steven) -> (john) -> (colleen) -> (ursula) -> null

newList.insertAt("caroline", 8);
console.log(newList.toString()); //(gene) -> (john) -> (steve) -> (drew) -> (steven) -> (john) -> (colleen) -> (ursula) -> (caroline) -> null

newList.removeAt(0);
console.log(newList.toString()); //(john) -> (steve) -> (drew) -> (steven) -> (john) -> (colleen) -> (ursula) -> (caroline) -> null

newList.removeAt(7);
console.log(newList.toString()); //(john) -> (steve) -> (drew) -> (steven) -> (john) -> (colleen) -> (ursula) -> null
