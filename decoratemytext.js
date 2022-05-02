
let decorate = document.getElementById("biger");
let textArea = document.getElementById("textArea");
let bling = document.getElementById("bling");
let body = document.getElementsByTagName("body")[0];
let pigLatin = document.getElementById("pigLatin");
let malkovitch = document.getElementById("malkovitch");


decorate.addEventListener("click", function () {
    let val = parseInt(window.getComputedStyle(textArea, null).fontSize);
    setInterval(() => {
        val += 2;
        textArea.style.fontSize = val + "pt";
    }, 500);
});
bling.addEventListener("change", function () {
    if (bling.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "green";
        textArea.style.textDecoration = "underline";
        body.style.backgroundImage = "url('100Dollar.jpg')";
        body.style.backgroundSize = "20%";

    }
    else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
        body.style.backgroundImage = "none";
    }
});

pigLatin.addEventListener("click", function () {
    let newWord = "";
    let word = textArea.value.split(" ");
    let indexOfVowel;
    for (let i = 0; i < word.length; i++) {
        indexOfVowel = 0;
        let letters = word[i].split("");
        for (let index = 0; index < letters.length; index++) {
            if (letters[index].match("[AEIOUaeiou]")) {
                indexOfVowel = index;
                break;
            }

        }
        if (indexOfVowel > 0) {
            newWord += word[i].slice(indexOfVowel) + word[i].slice(0, indexOfVowel) + "ay" + " ";
        }
        else {
            newWord += word[i] + "ay" + " ";
        }
    }


    textArea.value = newWord.trim();


});

malkovitch.addEventListener("click", function () {
   
    let newWords = "";
    let word = textArea.value.split(" ");
    console.log(word)
    for (let index = 0; index < word.length; index++) {
        
        if (word[index].length >= 5) {
            newWords += "nahom" + " ";
        }
        else{
            newWords += word[index] + " ";
        }
    }
    textArea.value = newWords.trim();
});
