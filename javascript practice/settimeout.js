

let count = 0;

function increaseCount(){

    count ++;
    if(count===3){
        clearTimeout(id); 
        console.log('setTimeout is stopped.');
    }
    else{
        console.log(count)
        increaseCount()
    }
    
}

let id = setTimeout(increaseCount, 3000);
console.log(count)
console.log("wait for 3 seconds :")



