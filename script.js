document.addEventListener('DOMContentLoaded', () => {

    const questions = ['2+2?','3+3?', '4+4?'];

    const options = [
        ['1','2','3','4'],
        ['5','6','7','8'],
        ['8','10','12','11']
    ];

    const answers = ['4','6','8'];

    const introContainer = document.querySelector('.intro');
    const ingameContainer = document.querySelector('.ingame');
    const endContainer = document.querySelector('.end');
    const confirmButton = document.querySelector('.confirm');
    const question = document.querySelector('.question');
    let answer1s = document.querySelectorAll('input[type=radio]');
    let optionTexts = document.querySelectorAll('.optionText');
    const scoreText = document.querySelector('.score');
    const outcomeText = document.querySelector('.outcome');

    let questionIndex = 0;

    let score = 0;


    setInterval(() => {

        question.innerHTML = questions[questionIndex];


        for(let e = 0; e < answer1s.length; e++){
    
            answer1s[e].value = options[questionIndex][e];
    
            optionTexts[e].innerHTML = options[questionIndex][e];
    
        }

        score = score;

        scoreText.innerHTML = "Score: " + score + "/" + questions.length;

    }, 100);


    confirmButton.addEventListener('click', (event) => {

        event.preventDefault();

        let answer1;

        for(let i = 0; i < answer1s.length; i++){

            if(answer1s[i].checked){

                answer1 = answer1s[i].value;

            } 

        }

        if(answer1 == undefined){

            alert("You are proceeding without an answer. \nThis can't be undone");
            
        }


        let answer = answers[questionIndex];

        if(answer1 == answer){

            score++;

            outcomeText.innerHTML = 'Correct';

            outcomeText.classList.remove('hide');

            outcomeText.classList.add('correct');

        } else {

            outcomeText.innerHTML = 'Incorrect';

            outcomeText.classList.remove('hide');

            outcomeText.classList.add('wrong');

        }

        confirmButton.classList.add('hide');

        nextButton.classList.remove('hide');


    })


    const startButton = document.querySelector('.start');

    startButton.addEventListener('click', (event) => {

        event.preventDefault();

        introContainer.classList.add('hide');

        ingameContainer.classList.remove('hide');

    })


    const nextButton = document.querySelector('.next');

    nextButton.addEventListener('click', (event) => {

        event.preventDefault();

        outcomeText.classList.add('hide');

        outcomeText.classList.remove('wrong');

        outcomeText.classList.remove('correct');

        questionIndex++;

        if(questionIndex >= questions.length){

            ingameContainer.classList.add('hide');

            endContainer.classList.remove('hide');

        }

        nextButton.classList.add('hide');

        confirmButton.classList.remove('hide');

    })




    const againButton = document.querySelector('.again');

    againButton.addEventListener('click', () => {

        window.location.reload();

    })

})