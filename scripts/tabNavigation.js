const tabList = document.querySelector('.contentNavigation ul');
tabList.addEventListener('click',(event)=>{
    //find content div by id+"Content" and add him class showStory and remove class hideStorie
    const idPushElement = event.target.getAttribute('id');

    //first change nav menu
    const nodeListNavMenu = document.querySelectorAll('.contentNavigation div[id^=story]');
    for(let nodeElement of nodeListNavMenu){
        if(nodeElement.getAttribute('id') === idPushElement){
            nodeElement.classList.add('activeItem');
            nodeElement.classList.remove('passiveItem');
        }else{
            nodeElement.classList.add('passiveItem');
            nodeElement.classList.remove('activeItem');
        }
    }

    const nodeListContentStories = document.querySelectorAll(`.content .storyData`);
    for(let nodeElement of nodeListContentStories){
        if(nodeElement.getAttribute('id') === idPushElement+'Content'){
            nodeElement.classList.add('showStory');
            nodeElement.classList.remove('hideStory');
        }else{
            nodeElement.classList.add('hideStory');
            nodeElement.classList.remove('showStory');
        }
    }
    console.log(nodeListContentStories);

});
