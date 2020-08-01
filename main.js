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
        document.querySelectorAll('.clock').forEach(item => {
            item.textContent = realTime;
        });

        // set AM -- PM
        if(hrs >= 12){
            document.querySelectorAll('.am_pm').forEach(am => {
                am.textContent = ' PM';
            });

        }else{
            document.querySelectorAll('.am_pm').forEach(pm => {
                pm.textContent = ' AM';
            });
        }
         

        // add zeros
        function addZero(n){
            return (parseInt(n, 10) < 10 ? '0' : '') + n;
        }

            // move the clock hand with css animation
        if(sec == 00){
            document.querySelectorAll('.clock_hand').forEach(clockHand => {
                clockHand.classList.add('move');
            });
            document.querySelectorAll('.clock_container').forEach(container => {
                container.classList.add('colors');
            });

            setTimeout(() => {
                document.querySelectorAll('.clock_container').forEach(container => {
                    container.classList.remove('colors');
                });
            }, 500);
        }


        // get day -- month -- year
        let [day, month, year] = [time.getDay(), time.getMonth(), time.getFullYear()];
        // days
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
        // months
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
            case 7: month = 'August';
            break;
            case 8: month = 'September';
            break;
            case 9: month = 'October';
            break;
            case 10: month = 'November';
            break;
            case 11: month = 'December';
            break;
        }

        
        const realDate = `${day} ${month} ${year}`;
        document.querySelectorAll('.date').forEach(calendar => {
            calendar.textContent = realDate;
        });
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
    const [one, two, three, four, five, six, seven, eight] = [document.querySelector('.proj_a'), document.querySelector('.proj_b'), document.querySelector('.proj_c'), document.querySelector('.proj_d'), document.querySelector('.proj_e'), document.querySelector('.proj_f'), document.querySelector('.proj_g'), document.querySelector('.proj_h')]
    const profile = document.querySelector('.profile');
    // images
    const [imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH] = ['./img/pricing.jpg', './img/static.jpg', './img/dark.jpg', './img/manage.jpg', './img/dashboard.jpg', './img/easybank.jpg', './img/four-card.jpg', './img/testimonials.jpg'];    
    // project descriptions
    const describe = {
        projectA: 'Pricing component with toggle button to change pricing. Built with html, css and vanilla javascript.',
        projectB: 'Static job listing with filter, search jobs by clicking tags or simply typing job title, language or skill level.',
        projectC: 'A dark themed landing page with basic form validation.',
        projectD: 'Manage landing page with slides and form validation.',
        projectE: 'Social media dashboard with toggle dark mode.',
        projectF: 'Easybank landing page.',
        projectG: 'Four-card fetured layout intro component.',
        projectH: 'Coding bootcamp testimonial slides component.'
    }

    // languages
    const [html, css, js] = [document.querySelector('.html .bar'), document.querySelector('.css .bar'), document.querySelector('.js .bar')]

    // overview field
    const overview = document.querySelector('.project_overview');

    // display project info when EACH project is clicked  
    one.addEventListener('click', (e) => {
        profile.classList.add('hide');
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgA}">`;
        overview.querySelector('p').textContent = describe.projectA;
        // update language level use
        html.style.width = '70%';
        css.style.width = '70%';
        js.style.width = '40%';
        // update the links
        document.querySelector('.live').setAttribute('href', 'https://pricing-component-sigma.now.sh');
        document.querySelector('.code').setAttribute('href', 'https://github.com/lifeoncode/pricing-component');
    })
    
    two.addEventListener('click', (e) => {
        profile.classList.add('hide');
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgB}">`;
        overview.querySelector('p').textContent = describe.projectB;
        // update language level use
        html.style.width = '90%';
        css.style.width = '70%';
        js.style.width = '60%';
        // update the links
        document.querySelector('.live').setAttribute('href', 'https://static-job-listings-mu.now.sh');
        document.querySelector('.code').setAttribute('href', 'https://github.com/lifeoncode/static-job-listings');
    })
    
    three.addEventListener('click', (e) => {
        profile.classList.add('hide');
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgC}">`;
        overview.querySelector('p').textContent = describe.projectC;
        // update language level use
        html.style.width = '90%';
        css.style.width = '80%';
        js.style.width = '20%';
        // update the links
        document.querySelector('.live').setAttribute('href', 'https://dark-theme-landing-page.now.sh');
        document.querySelector('.code').setAttribute('href', 'https://github.com/lifeoncode/dark-theme-landing-page');
    })

    four.addEventListener('click', (e) => {
        profile.classList.add('hide');
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgD}">`;
        overview.querySelector('p').textContent = describe.projectD;
        // update language level use
        html.style.width = '95%';
        css.style.width = '75%';
        js.style.width = '25%';        
        // update the links
        document.querySelector('.live').setAttribute('href', 'https://manage-landing-page-taupe.now.sh');
        document.querySelector('.code').setAttribute('href', 'https://github.com/lifeoncode/manage-landing-page');
    })

    five.addEventListener('click', (e) => {
        profile.classList.add('hide');
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgE}">`;
        overview.querySelector('p').textContent = describe.projectE;
        // update language level use
        html.style.width = '80%';
        css.style.width = '90%';
        js.style.width = '20%';        
        // update the links
        document.querySelector('.live').setAttribute('href', 'https://social-media-dashboard-ten-ruddy.now.sh');
        document.querySelector('.code').setAttribute('href', 'https://github.com/lifeoncode/social-media-dashboard');
    })

    six.addEventListener('click', (e) => {
        profile.classList.add('hide');
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgF}">`;
        overview.querySelector('p').textContent = describe.projectF;
        // update language level use
        html.style.width = '95%';
        css.style.width = '85%';
        js.style.width = '10%';
        // update the links
        document.querySelector('.live').setAttribute('href', 'https://easybank-landing-page-kappa.now.sh');
        document.querySelector('.code').setAttribute('href', 'https://github.com/lifeoncode/easybank-landing-page');
    })

    seven.addEventListener('click', (e) => {
        profile.classList.add('hide');
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgG}">`;
        overview.querySelector('p').textContent = describe.projectG;
        // update language level use
        html.style.width = '70%';
        css.style.width = '85%';
        js.style.width = '0%';
        // update the links
        document.querySelector('.live').setAttribute('href', 'https://four-card-feature-ashy.now.sh');
        document.querySelector('.code').setAttribute('href', 'https://github.com/lifeoncode/four-card-feature');
    })

    eight.addEventListener('click', (e) => {
        profile.classList.add('hide');
        overview.classList.remove('hide');
        overview.classList.add('fade_in');
        overview.querySelector('.image').innerHTML = `<img src="${imgH}">`;
        overview.querySelector('p').textContent = describe.projectH;
        // update language level use
        html.style.width = '80%';
        css.style.width = '90%';
        js.style.width = '30%';
        // update the links
        document.querySelector('.live').setAttribute('href', 'https://testimonial-slides.now.sh');
        document.querySelector('.code').setAttribute('href', 'https://github.com/lifeoncode/testimonial-slides');
    })




    document.querySelectorAll('.project').forEach(item => {
        item.addEventListener('click', function(e){
            document.querySelector('.aside').style.transform = 'scale(1)';
        });
    });


    document.querySelector('.aside .escape').addEventListener('click', function(e){
        document.querySelector('.aside').style.transform = 'scale(0)';
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    




    
    
    
    
    
    
    
    
    
    
    

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




    // if any nav link is clicked --- close the menu
    const links = document.querySelectorAll('.fixed_nav img');
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // toggle fontsize
    // grab all text elements
    const [allH1, allH2, allH3, allH4, paragraphs] = [document.querySelectorAll('h1'), document.querySelectorAll('h2'), document.querySelectorAll('h3'), document.querySelectorAll('h4'), document.querySelectorAll('p')];

    // grab the buttons to toggle sizes
    const [small, medium, large] = [document.querySelector('.small'), document.querySelector('.medium'), document.querySelector('.large')];

    // add event listeners for each button
    // for small
    small.addEventListener('click', function(e){
        // first add background color to btn
        this.classList.add('current');
        medium.classList.remove('current');
        large.classList.remove('current');

        // then change the font sizes of the page
        allH1.forEach(h1 => {
            h1.style.fontSize = '2rem';
        });
        allH2.forEach(h2 => {
            h2.style.fontSize = '1.5rem';
        });
        allH3.forEach(h3 => {
            h3.style.fontSize = '1rem';
        });
        allH4.forEach(h4 => {
            h4.style.fontSize = '0.9rem';
        });
        paragraphs.forEach(p => {
            p.style.fontSize = '0.75rem';
        });
    })

    // for medium
    medium.addEventListener('click', function(e){
        // first add background color to btn
        this.classList.add('current');
        small.classList.remove('current');
        large.classList.remove('current');

        // then change the font sizes of the page
        allH1.forEach(h1 => {
            h1.style.fontSize = '2.5rem';
        });
        allH2.forEach(h2 => {
            h2.style.fontSize = '2rem';
        });
        allH3.forEach(h3 => {
            h3.style.fontSize = '1.6rem';
        });
        allH4.forEach(h4 => {
            h4.style.fontSize = '1.2rem';
        });
        paragraphs.forEach(p => {
            p.style.fontSize = '0.9rem';
        });
    })

    // for large
    large.addEventListener('click', function(e){
        // first add background color to btn
        this.classList.add('current');
        small.classList.remove('current');
        medium.classList.remove('current');

        // then change the font sizes of the page
        allH1.forEach(h1 => {
            h1.style.fontSize = '3rem';
        });
        allH2.forEach(h2 => {
            h2.style.fontSize = '2.5rem';
        });
        allH3.forEach(h3 => {
            h3.style.fontSize = '2rem';
        });
        allH4.forEach(h4 => {
            h4.style.fontSize = '1.5rem';
        });
        paragraphs.forEach(p => {
            p.style.fontSize = '1.1rem';
        });
    })


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    // control auto swicth theme
    const [on, off] = [document.querySelector('.on'), document.querySelector('.off')]

    let status = true;

    on.addEventListener('click', function(e){
        this.classList.add('current');
        off.classList.remove('current');
        
        status = true;
    });
    off.addEventListener('click', function(e){
        this.classList.add('current');
        on.classList.remove('current');

        status = false;
    });

    setInterval(() => checkStatus(), 1)


    function checkStatus(e){
        if(status){
            autoChangeMode();
            document.querySelector('.toggle_btn').classList.add('no_click');
            document.querySelector('.switch').classList.add('no_click');
            
        }else{
            document.querySelector('.toggle_btn').classList.remove('no_click');
            document.querySelector('.switch').classList.remove('no_click');
        }
    }
    // change page themes based on current time
    function autoChangeMode(e){
        let hrs = new Date().getHours();
        hrs >= 07 && hrs < 18 ? lightMode() : darkMode();
    }
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    // manually switch themes
    // toggle btn
    const toggleBtn = document.querySelector('.switch');

    // add event
    toggleBtn.addEventListener('click', darkMode);

    // dark mode function
    function darkMode(e){
        toggleBtn.style.left = '32px';
        document.querySelector('.toggle_btn').style.border = '1px solid var(--headers)';
        toggleBtn.style.backgroundColor = 'var(--dark-grad)';
        settings.style.boxShadow = '5px 10px 30px #000';
        const spans = document.querySelectorAll('.define span');

        // change text colors
        allH1.forEach(h1 => {
            h1.style.color = 'var(--white)';
        });
        allH2.forEach(h2 => {
            h2.style.color = 'var(--white)';
        });
        allH3.forEach(h3 => {
            h3.style.color = 'var(--white)';
        });
        allH4.forEach(h4 => {
            h4.style.color = 'var(--white)';
        });
        paragraphs.forEach(p => {
            p.style.color = 'var(--whitish)';
        });
        spans.forEach(span => {
            span.style.color = 'var(--bg-color)';
        });
        // divs and elements
        const [...allSolid] = [document.querySelector('body'), document.querySelector('.fixed_nav'), document.querySelector('.aside'), document.querySelector('.settings')];
        const [...allGrad] = [document.querySelector('.aside .header'), document.querySelector('.center'), document.querySelector('.about_me'), document.querySelector('.photo')];
        const timeline = document.querySelectorAll('.timeline li');
        const stamps = document.querySelectorAll('.timeline span');
        const [...buttons] = [small, medium, large];
        const [...dateAndClock] = [document.querySelector('.date'), document.querySelector('.clock'), document.querySelector('.am_pm')];
        const clockContainer = document.querySelectorAll('.clock_container');
        const hand = document.querySelector('.clock_container div');
        
        allSolid.forEach(solid => {
            solid.style.backgroundColor = 'var(--dark-bg)';
        });
        allGrad.forEach(grad => {
            grad.style.backgroundColor = 'var(--darkish-grad)';
        });
        timeline.forEach(line => {
            line.style.backgroundColor = 'var(--dark-bg)';
            line.style.boxShadow = '1px 2px 5px var(--black-bg)';
        });
        stamps.forEach(stamp => {
            stamp.style.color = 'var(--white)';
        });
        buttons.forEach(button => {
            button.style.boxShadow = '0 0 2px var(--whitish)';
            button.style.color = 'var(--whitish)';
        });
        dateAndClock.forEach(item => {
            item.style.color = 'var(--whitish)';
        });
        document.querySelectorAll('.date').forEach(item => {
            item.style.color = 'var(--whitish)';
        });
        document.querySelectorAll('.clock').forEach(item => {
            item.style.color = 'var(--whitish)';
        });

        clockContainer.forEach(item => {
            item.style.boxShadow = '1px 2px 10px var(--black-bg)';
        });
        hand.style.backgroundColor = 'var(--darker-bg)';
        
        
        // remove THIS event listener
        toggleBtn.removeEventListener('click', darkMode);
        // add new events
        toggleBtn.addEventListener('click', lightMode);
    }


    
    // light mode function
    function lightMode(e){
        toggleBtn.style.left = '0px';
        document.querySelector('.toggle_btn').style.border = '1px solid var(--headers)';
        toggleBtn.style.backgroundColor = 'var(--headers)';
        settings.style.boxShadow = '5px 5px 20px var(--blue-text)';
        const spans = document.querySelectorAll('.define span');

        // change text colors
        allH1.forEach(h1 => {
            h1.style.color = 'var(--headers)';
        });
        allH2.forEach(h2 => {
            h2.style.color = 'var(--headers)';
        });
        allH3.forEach(h3 => {
            h3.style.color = 'var(--headers)';
        });
        allH4.forEach(h4 => {
            h4.style.color = 'var(--headers)';
        });
        paragraphs.forEach(p => {
            p.style.color = 'var(--blue-text)';
        });
        spans.forEach(span => {
            span.style.color = 'var(--blue-text)';
        });

        // divs and elements
        const [...allSolid] = [document.querySelector('body'), document.querySelector('.fixed_nav'), document.querySelector('.aside'), document.querySelector('.settings')];
        const [...allGrad] = [document.querySelector('.aside .header'), document.querySelector('.center'), document.querySelector('.about_me'), document.querySelector('.photo')];
        const timeline = document.querySelectorAll('.timeline li');
        const stamps = document.querySelectorAll('.timeline span');
        const [...buttons] = [small, medium, large];
        const [...dateAndClock] = [document.querySelector('.date'), document.querySelector('.clock'), document.querySelector('.am_pm')];
        const clockContainer = document.querySelector('.clock_container');
        const hand = document.querySelector('.clock_container div');

        allSolid.forEach(solid => {
            solid.style.backgroundColor = 'var(--bg-color)';
        });
        allGrad.forEach(grad => {
            grad.style.backgroundColor = 'var(--light-grad)';
        });
        timeline.forEach(line => {
            line.style.backgroundColor = 'var(--bg-color)';
            line.style.boxShadow = '1px 2px 5px var(--blue-text)';
        });
        stamps.forEach(stamp => {
            stamp.style.color = '#000';
        });
        buttons.forEach(button => {
            button.style.boxShadow = '0 0 2px var(--blue-text)';
            button.style.color = 'var(--blue-text)';
        });
        dateAndClock.forEach(item => {
            item.style.color = 'var(--headers)';
        });
        clockContainer.style.boxShadow = '1px 2px 10px var(--shadow-color)';
        hand.style.backgroundColor = 'var(--secondary-blue)';
        

        // remove THIS event listener
        toggleBtn.removeEventListener('click', lightMode);
        // add new events
        toggleBtn.addEventListener('click', darkMode);
    }























































    // hamburger menu
    const [menuBtn, nav, main, content, aside] = [document.querySelector('#menu-btn'), document.querySelector('.fixed_nav'), document.querySelector('main'), document.querySelector('.center'), document.querySelector('.aside')];

    menuBtn.addEventListener('click', openMenu);

    function openMenu(e){
        // animate the bars
        menuBtn.firstElementChild.classList.add('animate_top_bar');
        menuBtn.lastElementChild.classList.add('animate_bottom_bar');

        // after animation ends
        setTimeout(() => {
            // fix the style
            menuBtn.firstElementChild.style.transform = 'rotate(-45deg)';
            menuBtn.lastElementChild.style.transform = 'rotate(45deg)';
            // remove animation classes
            menuBtn.firstElementChild.classList.remove('animate_top_bar');
            menuBtn.lastElementChild.classList.remove('animate_bottom_bar');
        }, 500);
        

        // show the navigation
        showNav();
        
        // add a new event listener to the btn
        menuBtn.removeEventListener('click', openMenu);
        menuBtn.addEventListener('click', closeMenu);
    }

    // close menu
    function closeMenu(e){
        // animate the bars
        menuBtn.firstElementChild.classList.add('reverse_top_bar');
        menuBtn.lastElementChild.classList.add('reverse_bottom_bar');

        // after animation ends
        setTimeout(() => {
            // fix the style
            menuBtn.firstElementChild.style.transform = 'rotate(0)';
            menuBtn.lastElementChild.style.transform = 'rotate(0)';
            // remove animation classes
            menuBtn.firstElementChild.classList.remove('reverse_top_bar');
            menuBtn.lastElementChild.classList.remove('reverse_bottom_bar');
        }, 500);


        // hide the navigation
        hideNav();
        
        

        // return the previous event listener to the btn
        menuBtn.removeEventListener('click',closeMenu);
        menuBtn.addEventListener('click', openMenu);
    }
    


    // hide the menu nav to show project overview when any of the projects is clicked
    const [...allProjects] = [one, two, three, four, five, six];
    allProjects.forEach(proj => {
        proj.addEventListener('click', closeMenu);
    });


    // show nav function
    function showNav(e){
        nav.style.opacity = '1';
        aside.style.opacity = '0';
        // main.style.padding = '2rem 2rem 2rem 10rem';
        content.style.top = '50px';
        content.style.left = '25%';
        content.style.borderTopLeftRadius = '2rem';
        content.style.borderBottomLeftRadius = '2rem';
    }

    // hide nav function
    function hideNav(e){
        // nav.style.opacity = '0';
        aside.style.opacity = '1';
        // main.style.padding = '0 20rem 0 0';
        content.style.top = '0';
        content.style.left = '0';
        content.style.borderTopLeftRadius = '0';
        content.style.borderBottomLeftRadius = '0';
    }
    
    
    
    
    
    
    
}



