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
        hrs >= 12 ? document.querySelector('.am_pm').textContent = ' PM' : document.querySelector('.am_pm').textContent = ' AM';

        // add zeros
        function addZero(n){
            return (parseInt(n, 10) < 10 ? '0' : '') + n;
        }

            // move the clock hand with css animation
        if(sec == 00){
            document.querySelector('.clock_hand').classList.add('move');
            document.querySelector('.clock_container').classList.add('colors');
            setTimeout(() => {
                document.querySelector('.clock_container').classList.remove('colors');
            }, 500);
        }

        // get day -- month -- year
        let [day, month, year] = [time.getDay(), time.getMonth(), time.getFullYear()];
        switch(day){
            case 0: day = 'sun';
            break;
            case 1: day = 'mon';
            break;
            case 2: day = 'tue';
            break;
            case 3: day = 'wed';
            break;
            case 4: day = 'thur';
            break;
            case 5: day = 'fri';
            break;
            case 6: day = 'sat';
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











    // dynamically add a class
    // to the recent progress update
    document.querySelector('.timeline').firstElementChild.classList.add('today');



    // projects
    const projects = document.querySelectorAll('.project');

    
    projects.forEach(project => {
        project.addEventListener('mouseover', function(e){
            this.querySelector('h3').style.opacity = '1';
        })
        project.addEventListener('mouseout', function(e){
            this.querySelector('h3').style.opacity = '0';
        })
    })

    // project fields
    const [one, two, three, four, five, six] = [document.querySelector('.proj_a'), document.querySelector('.proj_b'), document.querySelector('.proj_c'), document.querySelector('.proj_d'), document.querySelector('.proj_e'), document.querySelector('.proj_f')]
    // images
    const [imgA, imgB, imgC, imgD, imgE, imgF] = ['./img/pricing.jpg', './img/static.jpg', './img/dark.jpg', './img/manage.jpg', './img/dashboard.jpg', './img/easybank.jpg'];    
    // project descriptions
    const describe = {
        projectA: 'Pricing component with toggle button to change pricing. Built with html, css and vanilla javascript.',
        projectB: 'Static job listing with filter, search jobs by clicking tags or simply typing job title, language or skill level.',
        projectC: 'A dark themed landing page with basic form validation.',
        projectD: 'Manage landing page with slides and form validation.',
        projectE: 'Social media dashboard with toggle dark mode.',
        projectF: 'Easybank landing page.'
    }

    // languages
    const [html, css, js] = [document.querySelector('.html .bar'), document.querySelector('.css .bar'), document.querySelector('.js .bar')]

    // overview field
    const overview = document.querySelector('.project_overview');
    

     
    one.addEventListener('click', (e) => {
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgA}">`;
        overview.querySelector('p').textContent = describe.projectA;
        // update language level use
        html.style.width = '70%';
        css.style.width = '70%';
        js.style.width = '40%';
        // update the links
        document.querySelector('.live').setAttribute('src', 'https://pricing-component-sigma.now.sh');
        document.querySelector('.code').setAttribute('src', 'https://github.com/lifeoncode/pricing-component');
    })
    two.addEventListener('click', (e) => {
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgB}">`;
        overview.querySelector('p').textContent = describe.projectB;
        // update language level use
        html.style.width = '90%';
        css.style.width = '70%';
        js.style.width = '60%';
        // update the links
        document.querySelector('.live').setAttribute('src', 'https://static-job-listings-mu.now.sh');
        document.querySelector('.code').setAttribute('src', 'https://github.com/lifeoncode/static-job-listings');
    })
    three.addEventListener('click', (e) => {
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgC}">`;
        overview.querySelector('p').textContent = describe.projectC;
        // update language level use
        html.style.width = '90%';
        css.style.width = '80%';
        js.style.width = '20%';
        // update the links
        document.querySelector('.live').setAttribute('src', 'https://dark-theme-landing-page.now.sh');
        document.querySelector('.code').setAttribute('src', 'https://github.com/lifeoncode/dark-theme-landing-page');
    })
    four.addEventListener('click', (e) => {
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgD}">`;
        overview.querySelector('p').textContent = describe.projectD;
        // update language level use
        html.style.width = '95%';
        css.style.width = '75%';
        js.style.width = '25%';        
        // update the links
        document.querySelector('.live').setAttribute('src', 'https://manage-landing-page.now.sh');
        document.querySelector('.code').setAttribute('src', 'https://github.com/lifeoncode/manage-landing-page');
    })
    five.addEventListener('click', (e) => {
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgE}">`;
        overview.querySelector('p').textContent = describe.projectE;
        // update language level use
        html.style.width = '80%';
        css.style.width = '90%';
        js.style.width = '20%';        
        // update the links
        document.querySelector('.live').setAttribute('src', 'https://social-media-dashboard-ten-ruddy.now.sh');
        document.querySelector('.code').setAttribute('src', 'https://github.com/lifeoncode/social-media-dashboard');
    })
    six.addEventListener('click', (e) => {
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgF}">`;
        overview.querySelector('p').textContent = describe.projectF;
        // update language level use
        html.style.width = '95%';
        css.style.width = '85%';
        js.style.width = '10%';
        // update the links
        document.querySelector('.live').setAttribute('src', 'https://easybank-landing-page-kappa.now.sh');
        document.querySelector('.code').setAttribute('src', 'https://github.com/lifeoncode/easybank-landing-page');
    })






    // settings
    const settingsBtn = document.querySelector('.settings_btn');
    const settings = document.querySelector('.settings');
    const overlay = document.querySelector('.body_overlay');

    settingsBtn.addEventListener('click', function(e){
        settings.style.transform = 'scale(1)';
        setTimeout(() => {
            overlay.style.transform = 'scale(1)';
        }, 200);
    })

    document.querySelector('.escape').addEventListener('click', function(e){
        settings.style.transform = 'scale(0)';
        setTimeout(() => {
            overlay.style.transform = 'scale(0)';
        }, 200);
    })
}