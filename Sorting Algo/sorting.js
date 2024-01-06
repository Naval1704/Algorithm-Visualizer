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
}