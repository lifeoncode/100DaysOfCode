window.addEventListener('DOMContentLoaded', initiate);


function initiate(e){







    
// stop the form from submitting
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    filterJobs();
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
    filterJobs()
})


// if user clicks a tag
tags.forEach(tag => {
    tag.addEventListener('click', (e) => {
        let text = tag.textContent.toLowerCase();
        search.value = text;
        search.style.color = 'rgb(64, 207, 207)';

        setTimeout(() => {
            filterJobs();
        }, 100);
        
    })
})


// if user clicks titles
titles.forEach(title => {
    title.addEventListener('click', (e) => {
        let text = title.textContent.toLowerCase();
        search.value = text;
        search.style.color = 'rgb(64, 207, 207)';

        
        titles.forEach(title => {
            if(title.textContent.toLowerCase().indexOf(text) !== -1){
                title.parentElement.parentElement.parentElement.style.display = 'block'
            }else{
                title.parentElement.parentElement.parentElement.style.display = 'none'
            }
        })
    })
})




function filterJobs(e){

    let text = search.value.toLowerCase();
    
    titles.forEach(title => {
        if(title.textContent.toLowerCase().indexOf(text) !== -1){
            title.parentElement.parentElement.parentElement.style.display = 'block'
        }else{
            title.parentElement.parentElement.parentElement.style.display = 'none'
        }
    })
        
}


function filterTags(e){

    let text = search.value.toLowerCase();

    tags.forEach(tag => {
        let tagText = tag.textContent.toLowerCase();
        if(tagText.indexOf(text) !== -1){
            tag.parentElement.parentElement.parentElement.parentElement.style.display = 'block'

        }else{
            tag.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
        }
    })
    
}
    
    
    
    
    
    
    
    
    
    
    
}