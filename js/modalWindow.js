const temp2 = 'Дата народження: 14.11.2018<br><br>Окрас: Блакитний з Білим<br><br>Атаксія - Чисто;<br>Дисплазія - A/0;<br>Гіперурикозурія - Чисто;<br>УЗД серця 2022 - Відмінно.<br><br>Титули: Юний Чемпіон України<br>Юний Гранд Чемпіон України<br>3*Чемпіон України<br>2* Кращий Представник Породи в Україні<br>Кандидат в Інтер Чемпіони'
function showParrents(showIt, dogTitle, maleParentTitle, femaleParentTitle, dogImg, maleParentImg, femaleParentImg, dogText = temp2, maleParentText = temp2, femaleParentText = temp2) {
    const modalWindow = document.querySelector(".blackscreen");
    const titleDog = document.querySelector(".titleDogMain");
    const titleMaleParent = document.querySelector(".titleMaleDog");
    const titleFemaleParent = document.querySelector(".titleFemaleDog");
    const imgDog = document.querySelector(".imgDog");
    const imgMaleParent = document.querySelector(".imgMale");
    const imgFemaleParent = document.querySelector(".imgFemale");
    const textDog = document.querySelector(".dogText");
    const textMaleParent = document.querySelector(".maleText");
    const textFemaleParent = document.querySelector(".femaleText");
    let arrayObjs = [titleDog, titleMaleParent, titleFemaleParent, imgDog, imgMaleParent, imgFemaleParent, textDog, textMaleParent, textFemaleParent];
    let arrayData = [dogTitle, `Батько: ${maleParentTitle}`, `Мати: ${femaleParentTitle}`, dogImg, maleParentImg, femaleParentImg, dogText, maleParentText, femaleParentText];
    if (showIt){
        for (let i = 0; i < arrayObjs.length; i++){
            if(arrayObjs[i] == arrayObjs[3] || arrayObjs[i] == arrayObjs[4] || arrayObjs[i] == arrayObjs[5]){
                arrayObjs[i].style.backgroundImage = `url(${arrayData[i]})`;
            }
            else{
                arrayObjs[i].innerHTML = arrayData[i];
            } 
        }
        modalWindow.style.display = 'block';
    } else{
        modalWindow.style.display = 'none';
    }
}