/**************************************************
 * 
 *              TOGGLE TIMER
 * 
 */



const btnStart = document.body.querySelector('button.start')

btnStart.addEventListener('click', toggleTimer)

let isWorking = false;
let interval;

function toggleTimer() {
    if (isWorking) {
        pauseTimer()
        isWorking = false
    } else {
        startTimer()
        isWorking = true;
    }
    
    // isWorking = !isWorking;

}


const minutes = document.body.querySelector('.minutes input')
const seconds = document.body.querySelector('.seconds input')

function startTimer() {
    uneditable()
    setStart()

    let minutesValue = minutes.value
    let secondsValue = seconds.value

    interval = setInterval(minus, 10);

    function minus() {
        if (secondsValue == 0 && minutesValue == 0) {
            clearInterval(interval)
        }
        else if (secondsValue == 0) {
            secondsValue = 59
            minutesValue -= 1;
        } else {
            secondsValue -= 1;
        }
        
        output(minutesValue, secondsValue)
    }
}
function pauseTimer() {
    setPause()

    clearInterval(interval)
}





function setStart() {
    btnStart.textContent = 'pause'

}
function setPause() {
    btnStart.textContent = 'start'

}
function output(m, s) {
    minutes.value = (m < 10) ? '0' + m : m;
    seconds.value = (s < 10) ? '0' + s : s;

}



/****************************************************
 * 
 *              CHANGE THE LENGTH OF THE TIMER
 * 
 */
const btnSettings = document.body.querySelector('button.settings')

btnSettings.addEventListener('click', editable)

function editable() {
    pauseTimer()
    isWorking = false;

    minutes.disabled = false;
    seconds.disabled = false;
}
function uneditable() {
    minutes.disabled = true;
    seconds.disabled = true;
}