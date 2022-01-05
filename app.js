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
    total=Math.abs(bill-cash)
    console.log(total)
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
})
if(twoTs.value===undefined){
        console.log("inside und")
        twoTs.innerHTML=""
    }
if(oneTs.value===undefined){
        console.log("inside und")
        oneTs.innerHTML=""
    }
function twoT(total){
    while(total>=2000){
        var quotienttwo=Math.floor(total/2000)
        total=Math.abs((2000*quotienttwo)-total)
    }
   
    twoTs.innerHTML=quotienttwo
    // if(twoTs.value===undefined){
    //     console.log("inside und")
    //     twoTs.innerHTML=""
    // }
    return total
}
function oneT(total){
    while(total>=1000){
        var quotientone=Math.floor(total/500)
        total=Math.abs((1000*quotientone)-total)
    }
   
    oneTs.innerHTML=quotientone
    // if(oneTs.value===undefined){
    //     console.log("inside und")
    //     oneTs.innerHTML=""
    // }
    return total
}
function hundred(total){
    while(total>=100){
        var quotientH=Math.floor(total/100)
        total=Math.abs((100*quotientH)-total)
    }
hundredTs.innerHTML=quotientH
// if(hundredTs.value===undefined){
//     console.log("inside und")
//     hundredTs.innerHTML=""
// }
    
    return total
}
function fifty(total){
    while(total>=50){
        var quotientF=Math.floor(total/50)
        total=Math.abs((50*quotientF)-total)
    }
    // if(fiftyTs.value===undefined){
    //     console.log("inside und")
    //     fiftyTs.innerHTML=""
    // }
    fiftyTs.innerHTML=quotientF
    
    
    return total
}
function twenty(total){
    while(total>=20){
        var quotientTw=Math.floor(total/20)
        total=Math.abs((20*quotientTw)-total)
    }
   
    twentyTs.innerHTML=quotientTw
    // if(twentyTs.value===undefined){
    //     console.log("inside und")
    //     twentyTs.innerHTML=""
    // }
    return total
}
function ten(total){
    while(total>=10){
        var quotientTe=Math.floor(total/10)
        total=Math.abs((20*quotientTe)-total)
    }
   
    tenTs.innerHTML=quotientTe
    // if(tenTs.value===undefined){
    //     console.log("inside und")
    //     tenTs.innerHTML=""
    // }
    return total
}
function five(total){
    while(total>=5){
        var quotientF=Math.floor(total/5)
        total=Math.abs((5*quotientF)-total)
    }
   
    fiveTs.innerHTML=quotientF
    // if(fiveTs.value===undefined){
    //     console.log("inside und")
    //     fiveTs.innerHTML=""
    // }
    return total
}
function one(total){
    while(total>=1){
        var quotientO=Math.floor(total/1)
        total=Math.abs((1*quotientO)-total)
    }
    oneR.innerHTML=quotientO
    // if(oneR.value===undefined){
    //     console.log("inside und")
    //     oneR.innerHTML=""
    // }
    return total
}
