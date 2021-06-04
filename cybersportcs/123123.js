let BodyPart = ['очі','вуха', 'руки', 'ноги', 'губи', 'коліна', 'брови'];
let Adjectives = ['прекрасні',"чудові","неперевершені ","фантастичні","заворожуючі"];
let Words = ["зорі","космос","небо","квіти","сонечко","Троянди","захід сонця"];

function randomWord(parametr){
    return parametr[Math.floor(Math.random() * parametr.length)];
}

document.querySelector('.b-1').onclick = () => {
    let s = " В тебе " + randomWord(BodyPart) + " " + randomWord(Adjectives) + " Наче " + randomWord(Words);
    document.querySelector('.out-1').innerHTML = s;
}
function pickWord(){
    let Words = ["програма","чудово","молодець","сюрприз","мавпочка"];
    return Words[Math.floor(Math.random() * Words.length)];
}
// 2
function setupAnswerArray(word){
    let answer = []
    for (let i=0; i< word.length;i++){
        answer[i] = "_"
    }
    return answer
}
// 3
let getGuess = function (){
    return prompt("вгадай букву")
}
// 4
function showPlayerProgress  (answer) {
    alert(answer.join(" "))
}


//5. Перевіряти чи введена буква є в слові і підставляти її
function updateGameState (letter, word, answerArray) {
    let count = 0;//кількість вгаданих букв
    for (let j = 0; j < word.length; j++) {
if (letter == word[j]) {//якщо буква дорівнює якійсь з загаданого слова 
            answerArray[j] = letter;//записуємо її в масив відповідей
            count++;//збільшуємо кількість вгаданих букв
        }
    }
    return count;
}


//6. Останнє виведення
let showAnswerAndCongratulatePlayer = function (answerArray, word) {
    alert("Вітаємо, ви вгадали слово: " + answerArray.join(" ")
     + " загадано: " + word)
}
     document.querySelector(".b-2").onclick = () => {
        let word = pickWord();//загадуємо слово
        let answerArray = setupAnswerArray(word);//генеруємо масив
        let dovzunaSlova = word.length;//вирахуємо довжину слова
        while (dovzunaSlova > 0 ){
            showPlayerProgress(answerArray)
        let guess = getGuess();
        if (guess == null){
            break;
        }
        else if (guess.length != 1){
            alert("введыть,будь ласка,одну букву");
        }
        else {
            let correctGuesses = updateGameState(guess, word,answerArray);
            dovzunaSlova = dovzunaSlova -correctGuesses;
        }
        }
        showAnswerAndCongratulatePlayer(answerArray,word);
    }
