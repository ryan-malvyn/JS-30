//Panels
const panels = document.querySelectorAll('.panel');

//Function
function toggleOpen() {
    console.log('hello')
    this.classList.toggle('open');
}

function toggleOpenActive(e) {
    console.log(e.propertyName); //logging the changes and which property has changed after toggling the open active class.
    if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
    }
}

//Event Listener
panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleOpenActive));

/*
Explanation :

    1. We register the individual panels that we are going to add classes to at line 1.

    2. We declare 2 functions, toggleOpen to enlarge the panel and change the font size.

    3. toggleOpenActive will then take an input of the e.propertyName = which is going to show,
        what part of the event target just got changed after the end of the toggleOpen function / transition.
        Then, it will check if the e.propertyName includes 'flex' because there should be a
        flex-grow propertyName after we toggleOpen function.

        Then, it will add the open-active class to execute the transform(translateY(0)) of the
        two words above and below the main word.
    
    4. Last, we have 2 event listeners, we need forEach because we need each item
        to listen for an event. Furthermore, the toggleOpen will run with click,
        and the toggleOpenActive runs after the toggleOpen transition ends.
*/