// swap function is util for sorting algorithms takes two input of 2 DOM elements with .style.height feature
function swap(ele1, ele2){
    let temp = ele1.style.height ;
    ele1.style.height = ele2.style.height ;
    ele2.style.height = temp ;
}

// disable sorting buttons used in conjuction with enable, so that we can disablle during sorting ans enable button after it 
// basically this function will disable all the sorting buttons
function disableSortingBtn(){
    document.querySelector(".selectionSort").disabled = true ;
    document.querySelector(".bubbleSort").disabled = true ;
    document.querySelector(".insertionSort").disabled = true ;
    document.querySelector(".quickSort").disabled = true ;
    document.querySelector(".mergeSort").disabled = true ;
}

// enables sorting buttons used in conjuction with disable
// basically this will enable all the sorting buttons 
function enableSortingBtn(){
    document.querySelector(".selectionSort").disabled = false ;
    document.querySelector(".bubbleSort").disabled = false ;
    document.querySelector(".insertionSort").disabled = false ;
    document.querySelector(".quickSort").disabled = false ;
    document.querySelector(".mergeSort").disabled = false ;
}

// disable the size slider in conjuction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true ;
    // this query selector will select the id arr_sz as the id of the slider is arr_sz
}

// enable the size slider used in conjuction with disable 
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false ;
}

function disableNewArrayBtn(){
    document.querySelector(".newarray").disabled = true ;
}

function enableNewArrayBtn(){
    document.querySelector(".newarray").disabled = false ;
}

// Used in async function so that we can show animations of sorting, takes input time in ms ( 1000 = 1s )
// the delay which is calcualted below by dealyElement function is passed into this during any sorting function call
function waitform(milisec) {
    // resolve() method returns a Promise that is resolved with a given value 
    return new Promise(resolve => {
        setTimeout(() => {resolve('')}, milisec);
    })
}

// selecting size slider from DOM
let arrSize = document.querySelector("#arr_sz") ; 

// event listners to update the bars on the UI
// JavaScript has events to provide a dynamic interface to a webpage. these events are hooked to elements in the document object model(DOM)
arrSize.addEventListener('input', function(){
    console.log(typeof(arrSize.value)) ;
    createNewArray(parseInt(arrSize.value));
    // parseInt() function parases a string argument and returns an integer of the specified radix 
    // basically we are taking the array size from the slider which is in range 10 to 150 and then passing it into the createNewArray function which takes no.of bars as the input 
});

// default input for waitform function (250ms) 
let delay = 250 ;

// selecting the speed from the speed slider DOM
let delayElement = document.querySelector('#speed_input') ;

delayElement.addEventListener('input',function(){
    delay = 320 - parseInt(delayElement.value) ;
});

let array = [] ;

createNewArray() ;

function createNewArray(noOfBars = 60){
    deleteChild() ;

    // creating an array of random numbers
    array = [] ;
    for(let i=0 ; i<noOfBars ; i++){
        // here we are generating the heights of bar, multiplied by 250 
        array.push(Math.floor(Math.random() * 250) + 1) ;
        // Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)  
    }

    const bars = document.querySelector('#bars') ;

    for(let i=0 ; i<noOfBars ; i++){
        const bar = document.createElement("div") ;
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar') ;
        bar.classList.add('flex-item') ;
        bar.classList.add(`barNo${i}`) ;
        bars.appendChild(bar) ;
    }
}


// Helper function to delete all the previous bars so that new can be added
function deleteChild(){
    const bar = document.querySelector("#bars") ;
    bar.innerHTML = '' ;
}

// clicking generate new array Button from DOM and adding event Listener
const newArray = document.querySelector(".newarray") ;

// this event listner is called whenever the generate_new_array button is clicked
newArray.addEventListener("click", function(){
    enableSortingBtn() ; // enabling sorting button
    enableSizeSlider() ; // enabling size silder
    createNewArray(arrSize.value) ; // creating new array using random 
}); 