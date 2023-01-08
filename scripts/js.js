const currentTime = new Date();

function showTime() {

    function createImg() {
        return document.createElement('img')
    }

      /////  HOURS/////
    let hours = currentTime.getHours()
    let firstHour = parseInt(hours/10);
    let secondNumberOfHours = hours%10;
    ////// /MINUTES/////
    let minutes = currentTime.getMinutes();
    let lastMinute = (minutes % 10);
    let firstMinute = parseInt(minutes / 10);

    ///// SECONDS//////
    let seconds = currentTime.getSeconds();
    let lastSecond = (seconds % 10);
    let firstSecond = parseInt(seconds / 10);



    const firstNumbOfHours = document.querySelector('.first_number_of_hours');
    const secondNumbOfHours = document.querySelector('.second_number_of_hours')

    const firstHoursImg = createImg();


    const SecHoursImg = createImg();



    const firstNumOfMin = document.querySelector('.first_number_of_minutes');
    const secondNumbOfMin = document.querySelector('.second_number_of_minutes');

    const firstMinImg = createImg();


    const secMinImg = createImg();


    const firstNumbOfSec = document.querySelector('.first_number_of_seconds');
    const secondNumbOfSec = document.querySelector('.second_number_of_seconds');

    const firstSecImg = createImg();

    const lastSecImg = createImg();

   function secondChange() {
       firstHoursImg.src = 'images/' + firstHour + '.jpg';
       firstNumbOfHours.appendChild(firstHoursImg);

       SecHoursImg.src = 'images/' + secondNumberOfHours + '.jpg';
       secondNumbOfHours.appendChild(SecHoursImg);

       firstMinImg.src = 'images/' + firstMinute + '.jpg';
       firstNumOfMin.appendChild(firstMinImg);

       secMinImg.src = 'images/' + lastMinute + '.jpg';
       secondNumbOfMin.appendChild(secMinImg);

       lastSecImg.src = 'images/' + lastSecond + '.jpg';
       secondNumbOfSec.appendChild(lastSecImg);

       firstSecImg.src = 'images/' + firstSecond + '.jpg';
       firstNumbOfSec.appendChild(firstSecImg);

       lastSecond++;
       if(lastSecond>=10){
           lastSecond =0;
           firstSecond++
       }else if(firstSecond>=6){
           firstSecond=0;
           lastMinute++;
       }else if(lastMinute>=10){
           lastMinute =0;
           firstMinute++;
       }else if(firstMinute>=6){
           firstMinute = 0;
           secondNumberOfHours++;
       }else if(secondNumberOfHours >= 4 && firstHour ===2){
           secondNumberOfHours = 0;
           firstHour = 0;
       }else if(firstHour===0 && secondNumberOfHours>=10){
           secondNumberOfHours = 0;
           firstHour=1;
       }else if(firstHour ===1 && secondNumberOfHours >9){
           firstHour = 2;
           secondNumberOfHours=0
       }
   }



    setInterval(secondChange,0.1)

}

showTime();