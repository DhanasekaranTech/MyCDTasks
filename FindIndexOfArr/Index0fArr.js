const arr = ["apple","banana","guva","mango","grape","orange","cerry","watermelom","pineapple","papaya"];

function findIndex(arr,element){
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==element){
            return i;
        }
        
    }
    return -1;
   
}

const index = findIndex(arr,"papaya")
console.log(index);