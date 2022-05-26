const nodeListTitleQuestion = document.querySelectorAll('.questions .someQuestion');

for(itemNode of nodeListTitleQuestion){
    itemNode.addEventListener('click',(event)=>{
        const hiddenElement = event.currentTarget.querySelector('.responseQuestion');
        hiddenElement.classList.toggle('hideResponseQuestion');

        const arrow = event.currentTarget.querySelector('.titleQuestion div:last-child');
        if(arrow.innerHTML === '🡻'){
            arrow.innerHTML = "&#129153";
        }else
        arrow.innerHTML = '🡻';
    })
}