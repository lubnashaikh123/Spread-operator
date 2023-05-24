// alert("hello---");
let cl=console.log;
const spread =document.getElementById("spread");

function wrappspans(text){
    return[...text].map(ele => `<span>${ele}</span>`).join("")
}

spread.innerHTML=wrappspans(spread.textContent);









// let text=[...spread.textContent];
// // cl(text);

// let mappedArr = text.map(ele =>{
//     return `<span>${ele}</span>`
// })

// cl(mappedArr);

// spread.innerHTML=mappedArr.join("");