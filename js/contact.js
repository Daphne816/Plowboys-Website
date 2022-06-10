// JavaScript Document

function optChoice()
    {
    // Gets chosen value from select menu
    var select = document.getElementById("contact-method");
    var selection = select.value;
    // Creates variable for placement in empty div
    var newInputPlace = document.getElementById("contact-pref");   
    // If email is chosen in the select menu
    if(selection == "email")
        {
        // If email is the first option chosen
        if(newInputPlace.childNodes.length == 0)
            {
            addEmail();
            }
        // If email is chosen after initially choosing phone
        else
            {
            // Removes phone element and adds email element
            var phone = "phone";
            removeThis(phone);
            addEmail();
            }
        }
        
    // If phone is chosen in the select menu
    if(selection == "phone")
        {
        if(newInputPlace.childNodes.length == 0)
            {
            // If phone is the first option chosen
            addPhone();
            }
        // If phone is chosen after email is chosen
        else
            {
            // Removes email element and adds phone element
            var email = "email";
            removeThis(email);
            addPhone();
            }
        }
        
    function addEmail()
        {
        var newInput = document.createElement("input");
        newInput.setAttribute("class", "form-control");
        newInput.setAttribute("type", "email");
        newInput.setAttribute("placeholder", "john-doe@gmail.com");
        newInput.setAttribute("name", "email");
        newInput.setAttribute("id", "email");
        newInput.setAttribute("required", "required");
        newInputPlace.appendChild(newInput);
        }
        
    function addPhone()
        {
        var newInput = document.createElement("input");
        newInput.setAttribute("class", "form-control");
        newInput.setAttribute("type", "tel");
        newInput.setAttribute("placeholder", "###-###-####");
        newInput.setAttribute("name", "phone");
        newInput.setAttribute("id", "phone");
        newInput.setAttribute("required", "required");
        newInputPlace.appendChild(newInput);    
        }
        
    function removeThis(element_id)
        {
        var removeThis = document.getElementById(element_id);
        removeThis.remove();    
        }
    }

function giveThanks()
    {
    // name and message validation
    var allClear = false;
    // phone or email validation
    var contact = false;
    var thanks = "Thank you for your message!";
    var name = document.getElementById("name");
    var message = document.getElementById("message");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    // feedback for missing name
    if(name.checkValidity()==false)
        {
        alert("Please enter your name before submitting.");    
        }
    // feedback for missing message 
    if(message.checkValidity()==false)
        {
        alert("Please enter a message before submitting."); 
        }
     // if name and message are valid allClear is true
    if(name.checkValidity()==true && message.checkValidity() == true)
       {
       allClear= true;
       }
    // if there is no phone element, checks if email is valid
    if(phone==null)
        {
        if(email.checkValidity()==true)
            {
            contact = true;
            }
        else
            {
            alert("Please enter your email address before submitting.");    
            }
        }
    // if there is no email element, checks if phone is valid
    if(email==null)
        {
        if(phone.checkValidity()==true)
            {
            contact = true;
            }
        else
            {
            alert("Please enter your phone number before submitting.");    
            }
        }
    // if all fields are validated, alerts a thank you message
    if(allClear==true && contact==true)
        {
        alert("Thank you for submitting your message!")   
        }
    }