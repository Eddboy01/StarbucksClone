const tabs = document.getElementsByClassName('tab');
const tabContent =  document.getElementsByClassName('tabination-content');
console.log(tabs);
console.log(tabContent);

function showTab(tabIndex){
    console.log(tabIndex);
    x= 0;
    for(x = 0; x < tabContent.length; x++){
        console.log(tabContent[x]); 
        tabContent[x].classList.remove("active-tab")
    }
    tabContent[tabIndex].classList.add('active-tab');
    
}