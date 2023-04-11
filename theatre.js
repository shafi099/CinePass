document.addEventListener("DOMContentLoaded", () => {

const plusminusresult =  document.getElementById("plusminusresult");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const maxminlimittext = document.getElementById("maxminlimittext");
const bookbtn = document.querySelectorAll(".bookbtn");
const costdisplay=document.getElementById("pricecost");
const seatnos = document.getElementById("seatnos");
let num = [];
let cost=0;

let arr =new Array(125).fill(0);
function colorfill(pos){
    const color = document.getElementById(`${pos}`);
    let seatcount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){seatcount=seatcount+1;}
    }
    if(arr[pos]===0 && seatcount<5){
        color.style.backgroundColor = "#d9b138";
        arr[pos]=1;
        plusminusresult.innerText=parseInt(plusminusresult.innerText)+1;
        maxminlimittext.innerText ="";
        displaycost(pos,1);
        num.push(pos);
        seatdisplay();
        if(parseInt(plusminusresult.innerText)===5 ){
            maxminlimittext.innerText ="Maximum no.of seats selected";
        }

    }
    else{
        if(arr[pos]===1){
        color.style.backgroundColor = "transparent";
        arr[pos]=0;
        // minus.click();
        displaycost(pos,0);
        num.pop();
        seatdisplay();
        plusminusresult.innerText=parseInt(plusminusresult.innerText)-1
        maxminlimittext.innerText ="";
        }
    }
}

// let seats = bookbtn;
bookbtn.forEach( btn => {
    btn.onclick = () => {
        colorfill(btn.value);
    }});

plusminusresult.innerText=0;


function displaycost(pos,num) {
    if(pos>=0 && pos<40 && num===1){
        cost=cost+150;
        costdisplay.innerText=`₹ ${cost} /-`
    }
    else if(pos>=0 && pos<40 && num===0){
        cost=cost-150;
        costdisplay.innerText=`₹ ${cost} /-`
    }
    else if(pos>=40 && pos<125 && num===1){
        cost=cost+90;
        costdisplay.innerText=`₹ ${cost} /-`
    }
    else if(pos>=40 && pos<125 && num===0){
        cost=cost-90;
        costdisplay.innerText=`₹ ${cost} /-`
    }
}

function seatdisplay() {
    if(num.length==1){seatnos.innerText=`${num[0]}`}
        else{seatnos.innerText=`${num.join(", ")}`}
}

// plus.onclick = () => {
//     if(parseInt(plusminusresult.innerText)<5){
//         plusminusresult.innerText=parseInt(plusminusresult.innerText)+1;
//         maxminlimittext.innerText ="";
//     }
//     if(parseInt(plusminusresult.innerText)===5 ){
//         maxminlimittext.innerText ="Maximum no.of seats selected";
//     }
// };

// minus.onclick = () => {
//     if(parseInt(plusminusresult.innerText)>1){
//         plusminusresult.innerText=parseInt(plusminusresult.innerText)-1
//         maxminlimittext.innerText ="";
//     }};
    
});