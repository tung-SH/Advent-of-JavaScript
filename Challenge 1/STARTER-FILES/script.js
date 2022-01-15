/*****************************************
 * 
 *          TOGGLE THE TIMER
 * 
 */

// input 
const btnStart = document.body.querySelector('button.start')

btnStart.addEventListener('click', toggleTimer)


// process
const minutes = document.body.querySelector('.minutes input')
const seconds = document.body.querySelector('.seconds input')

let isWorking = false;

let x = 'variable stores the interval'


function toggleTimer() {
    isWorking = !isWorking

    if (isWorking) {
        startTimer()
    } else {
        stopTimer()
    }
}


function startTimer() {
    let minutesValue = minutes.value
    let secondsValue = seconds.value

    x = setInterval(minus, 10)

    function minus() {
        if (secondsValue == 0 && minutesValue == 0) {
            stopTimer()
        }
        else if (secondsValue == 0) {
            minutesValue -= 1
            secondsValue = 59
        }
        else {
            secondsValue -= 1
        }

        output(minutesValue, secondsValue)
    }
}
function stopTimer() {
    clearInterval(x)

}


// output
function output(minutesValue, secondsValue) {
    minutes.value = (minutesValue < 10) ? '0' + minutesValue : minutesValue
    seconds.value = (secondsValue < 10) ? '0' + secondsValue : secondsValue

}






/*****************************************
 * 
 *     CHANGE THE LENGTH FOR THE TIMER
 * 
 */