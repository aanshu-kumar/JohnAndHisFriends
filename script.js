// /** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {

  arr.map((element)=>
    {
      if(element.profession=="developer")
      console.log(`id : ${element.id}, Name : ${element.name}, Age : ${element.age}, Profession : ${element.profession}`)
    });
}

function PrintDeveloperbyForEach() {

  arr.forEach((element)=>
    {
      if(element.profession=="developer")
        console.log(`id : ${element.id}, Name : ${element.name}, Age : ${element.age}, Profession : ${element.profession}`)
    });
}

function addData() {

  let obj={id:4, name:"susan", age:"20", profession:"intern"};
  arr.push(obj);
  arr.forEach((element)=>console.log(`id : ${element.id}, Name : ${element.name}, Age : ${element.age}, Profession : ${element.profession}`));
}

function removeAdmin() {

  let newarr=arr.filter((item)=>item.profession!="admin")

  newarr.forEach((element)=>console.log(`id : ${element.id}, Name : ${element.name}, Age : ${element.age}, Profession : ${element.profession}`));

}

function concatenateArray() {

  let arr2 = [
    { id: 5, name: "ash", age: "20", profession: "designer" },
    { id: 6, name: "vishal", age: "21", profession: "devops" },
    { id: 7, name: "avi", age: "18", profession: "lead" },
  ];

  arr=arr.concat(arr2);
  arr.forEach((element)=>console.log(`id : ${element.id}, Name : ${element.name}, Age : ${element.age}, Profession : ${element.profession}`));

}
