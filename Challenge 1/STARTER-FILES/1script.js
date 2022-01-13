/*****************************************
 * 
 *          TOGGLE THE TIMER
 * 
 */
// input
const btnStart = document.body.querySelector('button.start')

btnStart.addEventListener('click', toggleTimer)


// process
let timer = {
    isWorking: false
}

let x; // Một dòng đơn giản quyết định cả 1 vấn đề nho nhỏ khiến mình bâng khâng trong vài ngày liền

function toggleTimer() {
    timer.isWorking = !timer.isWorking;

    if (timer.isWorking) {
        startTimer()
    } else {
        stopTimer()
    }
}


// có 1 số trường hợp thì mình nên đặt hàm trong hàm - ví dụ như setInterval
const minutes = document.body.querySelector('.time .minutes input')
const seconds = document.body.querySelector('.time .seconds input')

function startTimer() {
    console.log('inside start timer')
    let minutesValue = minutes.value
    let secondsValue = seconds.value
    
    x = setInterval(minus, 100); //mình muốn nó ở lớp ngoài 

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
    minutes.value = (minutesValue < 10) ? '0' + minutesValue : minutesValue
    seconds.value = (secondsValue < 10) ? '0' + secondsValue : secondsValue

}
// nãy mình mới học là có thể bỏ hàm vào trong hàm mà - khà khà - ko được
function stopTimer() {
    console.log('inside stopTimer')

    // sai từ đoạn này
    clearInterval(x)
} 












/*****************************************
 * 
 *     CHANGE THE LENGTH FOR THE TIMER
 * 
 */