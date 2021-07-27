const tabs = document.getElementsByClassName('tab');
const tabContent =  document.getElementsByClassName('tabination-content');


function showTab(tabIndex){
    console.log(tabIndex);

    
    for(x = 0; x < tabContent.length; x++){

        console.log(tabContent[x]); 
        tabContent[x].classList.remove("active-tab");
        
    }
    tabContent[tabIndex].classList.add('active-tab');
    
}