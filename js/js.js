function changeBG(colorParameterHo){
    document.body.style.backgroundColor=colorParameterHo;
    let txtSelect=document.getElementsByClassName('text1');
    if(colorParameterHo == '#000000'){
        for(let element of txtSelect){
            element.style.color='white'
        }
    }else{
        for(let element of txtSelect){
            element.style.color='black'
        }
    }
    
}