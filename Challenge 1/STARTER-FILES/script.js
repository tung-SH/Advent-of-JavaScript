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
     console.log( randomInteract('start timer') )
 
     uneditable()
     setStart()
 
     let minutesValue = minutes.value
     let secondsValue = seconds.value
 
     interval = setInterval(minus, 1000);
 
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
     console.log( randomInteract('pause timer') )
 
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
     console.log( randomInteract('editable') )
 
     pauseTimer()
     isWorking = false;
 
     minutes.disabled = false;
     seconds.disabled = false;
 
     seconds.value = '00';
 }
 function uneditable() {
     minutes.disabled = true;
     seconds.disabled = true;
 }
 
 
 
 
 
 
 
 // ri??ng c???a m??nh
 function randomInteract(name) {
     // console.log('???? random interact ch???y ???n ?? nha')
 
     let x = Math.floor( Math.random() * 3 )
     // bao nhi??u tr?????ng h???p l???p th?? con ng?????i ko ????? ?? ????n 
     // ???? l?? m??y m??c n???a        -> ni s??? l?? c??u h???i c???n ????nh gi?? d???a tr??n th???i gian l???p l???i v?? s??? tr?????ng h???p
 
     if (x == 2)      return `v?? ???????c h??m ${name} r???i ??ng ????????
     `;
     else if (x == 0) return `h??m ${name} v?? ???????c r???i ??ng ???????? 
     `
     else             return `???? ${name} ch???y ???n ?? nha ????????
     ` 
 }