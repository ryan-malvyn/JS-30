//Registering Objects
const inputs = document.querySelectorAll('.controls input');

//Functions
function handleUpdate(){
    const suffix = this.dataset.sizing || '';

    /* 
    Dataset is basically all the data-attributes in an html tag, saved into an object
    and is returned through the console. 
    Example = <h1 data-number='1' data-digit='2'> 
    dataset = {number='1',digit='2'}
    */

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

    /* 
    document.documentElement returns the element that is the root element of the document,
    added with .style = the root style of the document which is the *root{} part of the CSS.
    */

    /* 
    
    this.name is the name of the function is called against. The name property in the HTML's root is :
    --base
    --blur
    --spacing
    this.name depends on which input is being activated. 

    this.value is the value being changed through the input.
    */
}

//Event Listeners
inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));