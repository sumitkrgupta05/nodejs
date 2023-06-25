const bioData = {
  fname: "sumit",
  age: 19,
  college: "rvscet",
};

//creating json from object
const jsonData = JSON.stringify(bioData);

console.log(jsonData);
// {"fname":"sumit","age":19,"college":"rvscet"}

//converting json into object
const objData = JSON.parse(jsonData);

console.log(objData);
// { fname: 'sumit', age: 19, college: 'rvscet' }