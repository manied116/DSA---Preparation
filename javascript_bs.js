// Online JavaScript compiler (editor)
// Write and run JavaScript online using this JS editor.
const original = {
  name: "Alice",
  skills: ["JS", "React"],
  address: {
    city: "Chennai",
    coordinates: { lat: 13.08, lng: 80.27 },
  },
};

function deepCopyObj(obj) {
  const result = {};

  Object.keys(obj).forEach((key) => {
    result[key] = deepCopy(obj[key]);
  });

  return result;
}

function deepCopy(chobj) {

  // Primitive
  if (chobj === null || typeof chobj !== "object") {
    return chobj;
  }

  // Array
  if (Array.isArray(chobj)) {
    return chobj.map((item) => deepCopy(item));
  }

  // Object
  return deepCopyObj(chobj);
}

let result = deepCopyObj(original)

result.name = "Tester";
result.skills.push("Typescript")
result.address.city = "Bangalore";
result.address.coordinates.lat = 12.97;

console.log(original);
console.log(result)



let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") );

let Name = "mAnIkAnDaN"
console.log(Name[0].toUpperCase() + Name.slice(1).toLowerCase())

function truncate(str,count){
  if(str.length > count){
    return str.slice(0,count-1) + "..."
  }
}
console.log(truncate("What I'd like to tell on this topic is:", 10))

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log( extractCurrencyValue('$120')); 

let input = "heLLo woRLd";

let result = input
  .split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

console.log(result);
// Hello World


let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(sumSalaries(company));


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function showValue(data){
  console.log(data.value)
  if(data.next){
    showValue(data.next)
  }
}

showValue(list)

let obj = { a: 20, b: 30, c: { d: 40, l: { n: 60 } } };

function findLargeNumber(data){
  let result = -Infinity;

  for (const value of Object.values(data)) {
    if (typeof value === "number") {
      result = Math.max(result, value);
    } else if (value && typeof value === "object") {
      result = Math.max(result, findLargeNumber(value));
    }
  }
  return result
}

console.log(findLargeNumber(obj))