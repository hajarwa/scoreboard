let count = 0 
/*-------------------------------------------HOME ------------------------------*/

let finalScoreHome = document.getElementById("finalScoreHome-el")

//plus one.

function addOne(){
    count += 1
    finalScoreHome.textContent = count
}

//plus two

function addTwo() {
    count += 2
    finalScoreHome.textContent = count
}

//add three

function addThree() {
    count += 3
    finalScoreHome.textContent = count
}
/* ---------------------------------------------------------Guest------------------------------------*/

let finalScoreGuest = document.getElementById("finalScoreGuest-el")

let score = 0
function addOneGuest(){
    
    score += 1
    finalScoreGuest.textContent = score
}

function addTwoGuest(){

    score += 2
    finalScoreGuest.textContent = score
}


function addThreeGuest(){
    
    score += 3
    finalScoreGuest.textContent = score
}

/*-----------------------------------------------------------RESET------------------*/

function reset() {
    count = 0;
    score = count
    finalScoreGuest.textContent = count
    finalScoreHome.textContent = count
}