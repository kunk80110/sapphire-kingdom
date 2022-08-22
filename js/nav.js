function showAmstf(){
    let btns = [document.querySelector('.amstaff1'), document.querySelector('.amstaff2'), document.querySelector('.amstaff3')];
    for (let i = 0; i < btns.length; i++){
        if(btns[i].style.display == "none"){
            btns[i].style.display = "block";
        }else{
            btns[i].style.display = "none"
        }
    }
}

function showAmBully(){
    let btns = [document.querySelector('.ambully1'), document.querySelector('.ambully2'), document.querySelector('.ambully3')];
    for (let i = 0; i < btns.length; i++){
        if(btns[i].style.display == "none"){
            btns[i].style.display = "block";
        }else{
            btns[i].style.display = "none"
        }
    }
}

function showFrench(){
    let btns = [document.querySelector('.french1'), document.querySelector('.french2'), document.querySelector('.french3')];
    for (let i = 0; i < btns.length; i++){
        if(btns[i].style.display == "none"){
            btns[i].style.display = "block";
        }else{
            btns[i].style.display = "none"
        }
    }
}