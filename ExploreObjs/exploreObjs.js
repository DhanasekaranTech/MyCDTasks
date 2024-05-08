const obj = {
    name:"dhanush",
    age:22,
    gender: "male",
    favclr:"blue",
    attendance:true
}

//Obj.entries--- It returns the key value as a pair in an array.
console.log(Object.entries(obj))


const arr = [["name","dhanush"],["age",22],["gender","male"]]

//Obj.fromEntries--- It makes paired of array into keys and values.
console.log(Object.fromEntries(arr));



//Obj.keys--- it returns the keys
console.log(Object.keys(obj));


//Obj.values--- it returns the obj values
console.log(Object.values(obj));
