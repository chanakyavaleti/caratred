const seat=document.getElementById("seats");
const age=document.getElementById("age");
const aadhar=document.getElementById("aadhar");
const result=document.getElementById("result");

// // let isseats= ;
// let isage=seats.checked;
// let isaadhar=seats.checked;
// console.log(isaadhar);
const add="seats are there but ,"
function action(){
    if(seat.checked ){
        // console.log("sd",seat.checked);
        result.innerText="";

        if(age.checked){
            // console.log("ag",age.checked);
            result.innerText="";

            if(aadhar.checked){
                // console.log("aa",aadhar.checked);
                result.innerText="";
                var cc=confirm("do you want to travel in free bus");
                if(cc){
                    // console.log("true");
                    alert("you can go inside")
                }
                else{
                    result.innerText=add + "you rejected the offer";
                }

            }
            else{
                result.innerText=add + "aadhar is compalsary";
            }
        }
        else{
            result.innerText=add + "age should be above 50";
        }
    }
    else{
        result.innerText=add +"we can't allow you for free bus";
    }
}

