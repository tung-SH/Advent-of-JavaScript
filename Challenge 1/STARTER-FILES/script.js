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
let isWorking = false;

// dễ dàng như thế sao mình lại ko biết nhỉ 
function toggleTimer() {
    isWorking = !isWorking;

    if (isWorking) {
        startTimer()
    } else {
        stopTimer()
    }
}

  
// có 1 số trường hợp thì mình nên đặt hàm trong hàm 
function startTimer() {
    let minutesValue = minutes.value
    let secondsValue = seconds.value
    
    var x = setInterval(minus, 1000);

    function minus() { 
        if (secondsValue == 0 && minutesValue == 0) { 
            clearInterval(x)
        } else if (secondsValue <= 0) {
            minutesValue -= 1;
            secondsValue = 59;
        } else {
            secondsValue -= 1;
        }
        
        output(minutesValue, secondsValue)
    } 
}

function output(minutesValue, secondsValue) {
    minutes.value = minutesValue
    seconds.value = secondsValue

}
// nãy mình mới học là có thể bỏ hàm vào trong hàm mà - khà khà - ko được
function stopTimer() {
    clearInterval(x)
} 












/*****************************************
 * 
 *     CHANGE THE LENGTH FOR THE TIMER
 * 
 */