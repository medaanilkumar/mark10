const billamount=document.querySelector("#bill");
const cashgiven=document.querySelector("#cash");
const err=document.querySelector("#err");
const checkbutton=document.querySelector("#btn")
var denominations=[2000,500,100,50,20,10,5,2,1]
const notes=document.querySelectorAll("#row")
const table=document.querySelector("#myTable")
var clickhandler=()=>{

  const billamnt=parseInt(billamount.value);
  const cashamnt=parseInt(cashgiven.value);
  if(billamount.value===''||cashgiven.value==='')
  {
    showmessage("Enter all the fields Please!!");
  }
  else
  {
    err.style.display="none";
    if(billamnt<=0)
    {
      showmessage("Enter a valid Bill Amount!!")
    }
    else
    {
      if(cashamnt < billamnt)
      {
        console.log(table)
        table.style.display="none"
        showmessage("Do you want to wash Dishes !!! ?")
      }
      else{
        table.style.display="block"
        err.style.display="none";
        setAmount(cashamnt-billamnt)
      }
    }
  }
}
var setAmount=(amount)=>{
  for(let i=0;i<9;i++)
  {
    var curamount=Math.trunc(amount/denominations[i]);
    notes[i].innerText=(curamount!="Nan") ? Math.trunc(curamount) : 0;
    amount=amount%denominations[i];
  }
}
var showmessage=(msg)=>{
  err.style.display="block";
  err.innerText=msg;
}
checkbutton.addEventListener("click",clickhandler);