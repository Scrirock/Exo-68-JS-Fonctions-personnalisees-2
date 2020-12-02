function random(){
    return Math.trunc(Math.random()*100);
}

let paragraphe = document.getElementsByTagName("p");

for (let i = 0; i<10; i++){
    paragraphe[i].innerHTML = random().toString();
}