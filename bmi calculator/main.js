function calculate(){
    let weight=document.getElementById('weight').value
    let height=document.getElementById('height').value
    let height_in_meter=height/100
    let bmi=weight/(height_in_meter*height_in_meter)
    let bmi_span=document.getElementById('bmi')
    bmi_span.innerHTML=bmi

    if( bmi <= 18.5){
        document.getElementById("result").innerHTML='You are in <b>under weight range</b> <br>Being underweight could be a sign you are not eating enough or you may be ill. If you are underweight, your GP can help.</br> <br><i>(This BMI result is applicable only for adults.)</i></br>'
    }else if(bmi >= 18.5 && 24.9>=bmi){
        document.getElementById("result").innerHTML='<b>Great</b>, you are in the <b>healthy weight range</b> <br>Keep up the good work! For tips on maintaining a healthy weight, check out with certified dietery & fitness experts near you.</br> <br><i>(This BMI result is applicable only for adults.)</i></br>'
    }else if(25<=bmi && 29.9>=bmi){
        document.getElementById("result").innerHTML='You are in the <b>overweight range</b> <br>The best way to lose weight if you are overweight is through a combination of diet and exercise</br> <br><i>(This BMI result is applicable only for adults.)</i></br>' 
    }else if(30<=bmi && 39.9>=bmi){
        document.getElementById("result").innerHTML='You are in the <b>obese range</b>. <br> The best way to lose weight if you are obese, is through a combination of diet and exercise, and, in some cases, medicines. See your GP for help and advice.</br> <br><i>(This BMI result is applicable only for adults.)</i></br>'  
    }else{
        document.getElementById("result").innerHTML='You are at <b>Obesity class III</b> <br> You are at very high risk and should contact your GP for suitable help and advice.</br> <br><i>(This BMI result is applicable only for adults.)</i></br>' 
    }
    
}