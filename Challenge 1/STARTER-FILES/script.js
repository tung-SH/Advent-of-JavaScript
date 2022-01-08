/*****************************************
 * 
 *          TOGGLE THE TIMER
 * 
 */
// input
const btnStart = document.body.querySelector('button.start')

btnStart.addEventListener('click', toggleTimer)


// process
const minutes = document.body.querySelector('.time .minutes input')
const seconds = document.body.querySelector('.time .seconds input')

function toggleTimer() {
    let minutesValue = minutes.value;
    let secondsValue = seconds.value;

    let countDownTime = new Date(1000 * secondsValue * minutesValue).getTime();

    var x = setInterval(countdown(countDownTime), 1000)

}

function countdown(countDownTime) {
    if (countDownTime < 0) {
        clearInterval(x)
    }

    countDownTime -= 1000
    console.log(countDownTime)


}

  













/*****************************************
 * 
 *     CHANGE THE LENGTH FOR THE TIMER
 * 
 */