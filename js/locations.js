// This function replaces the address in a div
// Location index is passed in
function loadAdd(x)
    {
    // address array holds html for addresses
    const address = [];       
    address[0]="<p id='loc-name'>Cantigny Park</p><p id='loc-st'>1 S 151 Winfield Road</p><p id='loc-city'>Wheaton, IL 60189</p>";
    address[1]="<p id='loc-name'>Herrick Middle School</p><p id='loc-st'>4435 Middaugh Ave</p><p id='loc-city'>Downers Grove, IL 60515</p>";
    address[2]="<p id='loc-name'>Chana School Museum</p><p id='loc-st'>201 N River Rd</p><p id='loc-city'>Oregon, IL 61061</p>";
    address[3]="<p id='loc-name'>Deep River County Park</p><p id='loc-st'>9410 Old Lincoln Hwy</p><p id='loc-city'>Hobart, IN 46342</p>";
    // div holds the parent element
    var div = document.getElementById("addBox");
    // text holds inner html content
    var text = address[x];
    // puts correct text in div
    div.innerHTML = text; 
    // Calls function loadMap and passses in x
    loadMap(x);
    }

function loadMap(num)
    {
    // map array holds src text for iframe attribute
    const map = [];       
    map[0]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113064.98167949331!2d-88.26612934883994!3d41.868690902716146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5590401c8ac1%3A0x9e1d82d59f751815!2sCantigny%20Park!5e0!3m2!1sen!2sus!4v1636842130023!5m2!1sen!2sus";
    map[1]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41179.61834076101!2d-88.05104109265311!3d41.81620129375187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e51e131313e61%3A0x4aaed449b3989972!2sHerrick%20Middle%20School!5e0!3m2!1sen!2sus!4v1636846431552!5m2!1sen!2sus";
    map[2]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75274.85086097286!2d-89.37859357688187!3d42.02684078442255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8808f960637fae81%3A0x7f4f44039d86c0b3!2sChana%20School%20Museum!5e0!3m2!1sen!2sus!4v1636846530184!5m2!1sen!2sus";
    map[3]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50678.561706300476!2d-87.25376796251008!3d41.468780767681444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811eca74b11da13%3A0x10a80d89bca9b824!2sDeep%20River%20County%20Park!5e0!3m2!1sen!2sus!4v1636846684678!5m2!1sen!2sus";     
    //iframe holds the iframe element
    var iframe = document.getElementById("map");
    //newLink holds src text
    var newLink = map[num];
    // sets the src attribute in iframe element to newLink text
    iframe.setAttribute("src", newLink);    
    }