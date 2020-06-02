
// stop the form from submitting
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
})


// Grab DOM Elements
const search = document.querySelector('input.search');
const clear = document.querySelector('button.clear');
const jobs = document.querySelectorAll('.job');
const tags = document.querySelectorAll('.filters li');
const titles = document.querySelectorAll('.job h3');


// Search Event
search.addEventListener('keyup', (e) => {
    if(e.which == 13 || e.keyCode == 13){
        search.style.color = 'rgb(64, 207, 207)';
    }
    filterJobs()
});

// Clear the search bar
clear.addEventListener('click', () => {
    search.value = ''; 
    search.style.color = 'var(--very-dark-cyan)';
})



// onjects
const job_one = {
    id: 1,
    company: 'photosnap',
    position: 'senior frontend developer',
    role: 'frontend',
    level: 'senior',
    offer: 'full time',
    location: 'united states only',
    langauges: ['html', 'css', 'javascript'],
    tools: []
}


const job_two = {
    id: 2,
    company: 'manage',
    position: 'fullstack developer',
    role: 'fullstack',
    level: 'midweight',
    offer: 'part time',
    location: 'remote',
    langauges: ['python'],
    tools: ['react']
}


const job_three = {
    id: 3,
    company: 'account',
    position: 'junior frontend developer',
    role: 'frontend',
    level: 'junior',
    offer: 'part time',
    location: 'united states only',
    langauges: ['javascript'],
    tools: ['react', 'sass']
}


const job_four = {
    id: 4,
    company: 'myhome',
    position: 'junior frontend developer',
    role: 'frontend',
    level: 'junior',
    offer: 'contract',
    location: 'united states only',
    langauges: ['css', 'javascript'],
    tools: []
}


const job_five = {
    id: 5,
    company: 'loop studios',
    position: 'software engineer',
    role: 'fullstack',
    level: 'midweight',
    offer: 'full time',
    location: 'worldwide',
    langauges: ['javascript'],
    tools: ['ruby', 'sass']
}


const job_six = {
    id: 6,
    company: 'faceit',
    position: 'junior backend developer',
    role: 'backend',
    level: 'junior',
    offer: 'full time',
    location: 'united kingdom only',
    langauges: ['ruby'],
    tools: ['ruby on rails']
}


const job_seven = {
    id: 7,
    company: 'shortly',
    position: 'junior developer',
    role: 'frontend',
    level: 'junior',
    offer: 'full time',
    location: 'worldwide',
    langauges: ['html', 'javascript'],
    tools: ['sass']
}


const job_eight = {
    id: 8,
    company: 'insure',
    position: 'junior frontend developer',
    role: 'frontend',
    level: 'junior',
    offer: 'full time',
    location: 'united states only',
    langauges: ['javascript'],
    tools: ['vue', 'sass']
}


const job_nine = {
    id: 9,
    company: 'eyecam co.',
    position: 'fullstack engineer',
    role: 'fullstack',
    level: 'midweight',
    offer: 'full time',
    location: 'worldwide',
    langauges: ['python', 'javascript'],
    tools: ['django']
}


const job_ten = {
    id: 10,
    company: 'the air filter company',
    position: 'frontend dev',
    role: 'frontend',
    level: 'junior',
    offer: 'part time',
    location: 'worldwide',
    langauges: ['javascript'],
    tools: ['react', 'sass']
}



function filterJobs(e){

    let text = search.value.toLowerCase();
    
        

}
