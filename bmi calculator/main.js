function calculate(){
    let weight=document.getElementById('weight').value
    let height=document.getElementById('height').value
    let height_in_meter=height/100
    let bmi=weight/(height_in_meter*height_in_meter)
    let bmi_span=document.getElementById('bmi')
    bmi_span.innerHTML=bmi

    if( bmi <= 18.5){
        document.getElementById("result").innerHTML='You are under weight (application for 12+ child)'
    }else if(bmi >= 18.5 && 24.9>=bmi){
        document.getElementById("result").innerHTML='You are Normal'
    }else if(25<=bmi && 29.9>=bmi){
        document.getElementById("result").innerHTML='You are OverWeight' 
    }else if(30<=bmi && 39.9>=bmi){
        document.getElementById("result").innerHTML='You are Obese range' 
    }else{
        document.getElementById("result").innerHTML='You are at Obesity class III, you are at risk' 
    }
    
}