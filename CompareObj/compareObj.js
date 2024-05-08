//created a obj1
const personOne     = {
    name:"Dhanush",
    age:21,
    work(){
        const work = "developer";
        console.log(`As a ${work}`)
    },
    attendance:true
}


//created a obj2
const personTwo     = {
    name:"sara",
    age:22,
    work(){
        const work = "UI/UX";
        console.log(`As a ${work}`)
    },
    attendance:false
}


//create a function to find those obj is equal or not
function findObjIsEqual(objOne,objTwo){


//store keys of obj in an variable
const objOneKey = Object.keys(personOne);
const objTwoKey = Object.keys(personTwo);


    if(objOneKey.length!=objTwoKey.length){
        return false;
    }
    for(let key of objOneKey){
        if(objOne[key]!=objTwo[key]){
            return false;
        }
        return true;
    }
}


// call the findobjisequal fun and store in var.
const isEqual = findObjIsEqual(personOne,personTwo);


//print answer in console.
console.log(isEqual?"yep obj are equal":"nope they are not equal");
