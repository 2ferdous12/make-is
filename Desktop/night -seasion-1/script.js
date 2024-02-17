const addbtn = document.getElementsByClassName('add-btn');
let count = 0;
for(const btn of addbtn){
    btn.addEventListener('click', function(e){
        count = count + 1;
const placeName = (e.target.parentNode.childNodes[1].innerText);
const price = (e.target.parentNode.childNodes[3].childNodes[1].innerText);

const selectContainer = document.getElementById('selected-place-container');
const li = document.createElement('li');

const p = document.createElement('p');
p.innerText = placeName;
const p2 = document.createElement('p');
p2.innerText = price;
li.appendChild(p);
li.appendChild(p2);

const budget =document.getElementById('budget').innerText;
const convert = parseInt(budget);

if(convert - parseInt(price)<0){
    alert('low budget');
    return;
}
document.getElementById('budget').innerText = convert - parseInt(price);


selectContainer.appendChild(li);



   
// }
// const totalcost = document.getElementById('total-cost').innerText;
// const convert = parseInt(totalcost);
// const sum = convert + parseInt(price);


// const grandTotal = document.getElementById('grand-total').innerText;
// const convert2 = parseInt(grandTotal);
// const sum2 = convert2 + parseInt(price);

totalcostGrand('total-cost', parseInt(price));

totalcostGrand2("other")


    setinnerText('cart-count', count);
    })
}

function totalcostGrand(id, value){
    const totalcost = document.getElementById(id).innerText;
const convert = parseInt(totalcost);
const sum = convert + parseInt(value);
setinnerText('total-cost', sum);
}

function totalcostGrand2(catagory){
    const totalcost = document.getElementById('total-cost').innerText;
    const convert = parseInt(totalcost);
    
    setinnerText('grand-total', convert);
if(catagory === 'bus'){
    setinnerText('grand-total', convert + 100);
   
}
else if (catagory === "train"){
    setinnerText('grand-total', convert + 200);
}

else if(catagory ==='flight'){
    setinnerText('grand-total', convert + 500);
}

else{
    setinnerText('grand-total', convert);
}



}


function setinnerText(id, value){
    document.getElementById(id).innerText = value;
}
