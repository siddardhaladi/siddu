let age = 12;
if (age < 18) {
  console.log("child");
}

let pet = "dog";
switch (pet) {
  case "donkey":
    console.log("i want dog");
    break;
  case "cat":
    console.log("i am dog");
    break;
  default:
    console.log("i want a dog");
}

const pets = ["cat", "dog", "donkey"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

let x = 1;
do {
  console.log("siddu");
  x++;
} while (x < 5);

// arrays
const nets = [];
nets[0] = "cat";
nets[1] = "bat";
nets[2] = "rat";
console.log(nets);

const cricket = nets[1];
console.log(cricket);
console.log(nets.pop());
console.log(pets.push("fish"));
