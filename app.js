console.log("hi")
var bill=document.querySelector('#bill')
var cash=document.querySelector('#cash')
var btn=document.querySelector('#btn')
var err=document.querySelector('#err')
var twoTs=document.querySelector('#twoT')
var oneTs=document.querySelector('#oneT')
var hundredTs=document.querySelector('#hundred')
var fiftyTs=document.querySelector('#fifty')
var twentyTs=document.querySelector('#twenty')
var tenTs=document.querySelector('#ten')
var fiveTs=document.querySelector('#five')
var oneR=document.querySelector('#one')
btn.addEventListener('click',function(){
    bill=parseInt(bill.value)
    cash=parseInt(cash.value)
    if(bill<cash){
        while(total!=0){
         total=twoT(total)
         if(total)
         total=oneT(total)
         if(total)
         total=hundred(total)
         if(total)
         total=fifty(total)
        if(total)
        total=twenty(total)
        if(total)
        total=ten(total)
        if(total)
        total=five(total)
        if(total)
        total=one(total)

        }
        
    }
    else{
        err.style.display='block'
    }
})
function twoT(total){
    while(total>=2000){
        var quotienttwo=Math.floor(total/2000)
        total=Math.abs((2000*quotienttwo)-total)
        twoTs.innerHTML=quotienttwo
    }
   
    
    return total
}
function oneT(total){
    while(total>=1000){
        var quotientone=Math.floor(total/500)
        total=Math.abs((1000*quotientone)-total)
        oneTs.innerHTML=quotientone
    }
   
    
    return total
}
function hundred(total){
    while(total>=100){
        var quotientH=Math.floor(total/100)
        total=Math.abs((100*quotientH)-total)
        hundredTs.innerHTML=quotientH
    }

    return total
}
function fifty(total){
    while(total>=50){
        var quotientF=Math.floor(total/50)
        total=Math.abs((50*quotientF)-total)
        fiftyTs.innerHTML=quotientF
    }
    
    
    
    return total
}
function twenty(total){
    while(total>=20){
        var quotientTw=Math.floor(total/20)
        total=Math.abs((20*quotientTw)-total)
        twentyTs.innerHTML=quotientTw
    }
   
    
    return total
}
function ten(total){
    while(total>=10){
        var quotientTe=Math.floor(total/10)
        total=Math.abs((20*quotientTe)-total)
        tenTs.innerHTML=quotientTe
    }
   
    
    return total
}
function five(total){
    while(total>=5){
        var quotientF=Math.floor(total/5)
        total=Math.abs((5*quotientF)-total)
        fiveTs.innerHTML=quotientF
    }
   
    
    return total
}
function one(total){
    while(total>=1){
        var quotientO=Math.floor(total/1)
        total=Math.abs((1*quotientO)-total)
        oneR.innerHTML=quotientO
    }
   
    return total
}

