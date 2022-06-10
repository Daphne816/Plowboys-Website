// Function takes details element id and summary text id
function addUnderline(elId, txtId)
    {
    var element = document.getElementById(elId)
    var text = document.getElementById(txtId);
    // If details element is already open, clicking on the summary element removes the underline
    if(element.open)
        {
        text.style.textDecoration="none";    
        }
    // If details element isn't already open when clicked, an underline is added to the summary text
    else
        {
        text.style.textDecoration="underline";    
        }
    }


// When a link is clicked this function opens the detail element with the linked word's definition in it and highlights it
// After 1.5 seconds, the definition is unhighlighted
function showDfn(def)
    {
    // Opens detail element with linked word's definition
    var dictionary = document.getElementById("q3El");
    dictionary.open = true;
    // Adds underline to opened detail element's summary text
    var text = document.getElementById('q3Txt'); 
    text.style.textDecoration="underline";
    // Highlights linked word 
    var word = document.getElementById(def);
    word.style.backgroundColor="yellow";
    // After 1.5 seconds background color goes back to white
    setTimeout(function()
        {
        var word = document.getElementById(def);
        word.style.backgroundColor="white";
        }, 1500);
    }

