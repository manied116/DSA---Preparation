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
