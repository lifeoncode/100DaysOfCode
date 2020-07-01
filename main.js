window.addEventListener('DOMContentLoaded', init);

function init(e){

    setInterval(() => {
        showTime();
    }, 1000)


    // get the current time
    function showTime(){
        const time = new Date();
        const [hrs, min, sec] = [time.getHours(), time.getMinutes(), time.getSeconds()];
        const realTime = `${addZero(hrs)}:${addZero(min)}:${addZero(sec)}`;

        // display time to the page
        document.querySelector('.clock').textContent = realTime;

        // set AM -- PM
        hrs >= 12 ? document.querySelector('.clock').textContent += ' PM' : document.querySelector('.clock').textContent += ' AM';

        // add zeros
        function addZero(n){
            return (parseInt(n, 10) < 10 ? '0' : '') + n;
        }

        // get day -- month -- year
        let [day, month, year] = [time.getDay(), time.getMonth(), time.getFullYear()];
        switch(day){
            case 0: day = 'Sun';
            break;
            case 1: day = 'Mon';
            break;
            case 2: day = 'Tue';
            break;
            case 3: day = 'Wed';
            break;
            case 4: day = 'Thur';
            break;
            case 5: day = 'Fri';
            break;
            case 6: day = 'Sat';
            break;
        }

        switch(month){
            case 0: month = 'January';
            break;
            case 1: month = 'February';
            break;
            case 2: month = 'March';
            break;
            case 3: month = 'April';
            break;
            case 4: month = 'May';
            break;
            case 5: month = 'June';
            break;
            case 6: month = 'July';
            break;
            case 6: month = 'August';
            break;
            case 6: month = 'September';
            break;
            case 6: month = 'October';
            break;
            case 6: month = 'November';
            break;
            case 6: month = 'December';
            break;
        }
        
        const realDate = `${day} ${month} ${year}`;
        

        document.querySelector('.date').textContent = realDate;
    }
}