const sumMsg=document.getElementById('sumMsg');
const multMsg=document.getElementById('multMsg');
const divisionMsg=document.getElementById('divisionMsg');
const errMsg=document.getElementById('errMsg');

function operations(){
    const num1=document.getElementById('num1').value;
    const num2=document.getElementById('num2').value;
    const num3=document.getElementById('num3').value;
    let arr=[];
    arr.push(parseInt(num1));
    arr.push(parseInt(num2));
    arr.push(parseInt(num3));
  if(num1==='' || num2==='' || num3===''){
    errMsg.textContent='please Enter the values';
    errMsg.style.color='red'
  }else{
    errMsg.textContent='';
    let sum=arr[0]+arr[1]+arr[2];
    sumMsg.textContent=`sum of the 3 values ${num1}+${num2}+${num3} = ${sum}`;
    sumMsg.style.color='green'
    let multiplay=arr[0]*arr[1]*arr[2];
    multMsg.textContent=`multiplication of the 3 values ${num1}*${num2}*${num3} = ${multiplay}`;
    multMsg.style.color='green'
    let division=arr[0]/arr[1]/arr[2];
    divisionMsg.textContent=`division of the 3 values ${num1}/${num2}/${num3} = ${division}`;
    divisionMsg.style.color='green'

  }
}

