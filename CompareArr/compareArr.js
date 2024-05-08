const arr1=["apple","banana","guva","mango","grape"]
const arr2=["orange","cerry","watermelom","pineapple","papaya"]

function findIsArrEqual(arr1,arr2){
    arr1.sort((a,b)=>a-b)
    arr2.sort((a,b)=>a-b)

    if(arr1.length!=arr2.length){
        return false;
    }
    for(let i=0; i<arr1.length;i++){
        if(arr1[i]==arr2[i]){
            return true;
        }
    }
}

const isEqual = findIsArrEqual(arr1,arr1)

console.log(isEqual?"yep it is equal":"nope it's not equal");