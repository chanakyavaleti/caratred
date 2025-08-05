// first it 
let a=[10,20,44,66,88];

let b=a.reduce( function(pre,sum){ 
    console.log(pre,sum)
    return pre+sum
})
console.log(b)