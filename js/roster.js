function changeImg(num)
    {
    // link array holds src text for img attribute
    const link = [];       
    link[0]="images/players/adam-double-a.jpg";
    link[1]="images/players/alan-cracker-jack.jpg";
    link[2]="images/players/antonio-jackrabbit.jpg";
    link[3]="images/players/brian-teach.jpg";  
    link[4]="images/players/daniel-clutch.jpg";
    link[5]="images/players/david-eyes.jpg";
    link[6]="images/players/ric-lucky.jpg";
    link[7]="images/players/sherman-snake-oil.jpg";
    link[8]="images/players/steve-chef.jpg";
    link[9]="images/players/steve-iron-head.jpg";
    //image holds the img element
    var image = document.getElementById("rosterImg");
    //newLink holds src text
    var newLink = link[num];
    // sets the src attribute in iframe element to newLink text
    image.setAttribute("src", newLink);   
    // Calls function changeBlurb and passses in num
    changeBlurb(num);
    }

   

function changeBlurb(x)
    {
    // blurb array holds inner html for player blurb div
    const blurb = [];       
    blurb[0]='<p>"Double A" joined the Plowboys in 2012.<br>His nickname was given to him as a kid when he played park district baseball.</p>';
    blurb[1]='<p>Team Manager "Cracker Jack" has been with the Plowboys since their start in 2005.<br>His nickname is based off of his favorite baseball snack.</p>';
    blurb[2]='<p>"Jackrabbit" joined the Plowboys in their very first season.<br>His nickname is a vintage take on his grade school nickname "rabbit".</p>';
    blurb[3]='<p>"Teach" joined the Plowboys in 2011.<br>He plays in the infield and his nickname reflects his interest in teaching.</p>';  
    blurb[4]='<p>More about "Clutch" coming soon!</p>';
    blurb[5]='<p>"Eyes" joined the Plowboys in 2006.<br>His nickname was inspired by his Lasik eye surgery.</p>';
    blurb[6]='<p>"Lucky" joned the Plowboys in 2008.<br>He plays the behind position and feels he is more lucky than good.</p>';
    blurb[7]='<p>"Snake Oil" joined the Plowboys in 2014.<br>His nickname was inspired by his job in marketing.</p>';
    blurb[8]='<p>"Chef" earned his nickname from his background in restaurant management.</p>';
    blurb[9]='<p>"Iron Head" joined the Plowboys in 2005.<br>He can be found at first base or on the pitcher mound.<br>His ideal nickname would be "Mr. Warm and Cuddly".</p>';
    // div holds the parent element
    var div = document.getElementById("playerBlurb");
    // text holds inner html content
    var text = blurb[x];
    // puts correct text in div
    div.innerHTML = text;  
    // calls function to give list item active styling
    setActive(x);
    }

function setActive(index)
    {
    // elements stores elements with class active
    const elements = document.getElementsByClassName("active");
    // while there are elements with class active
    while(elements.length > 0)
        {
        // removes class attribute
        elements[0].removeAttribute("class");
        }
    // determines which list item was clicked on
	switch (index)
        {
        case 0:
            li = document.getElementById("adamDoubleA");
            li.setAttribute("class", "active");
            break;
        case 1:
            li = document.getElementById("alanCrackerJack");
            li.setAttribute("class", "active");
            break;
        case 2:
            li = document.getElementById("antonioJackrabbit");
            li.setAttribute("class", "active");
            break;
        case 3:
            li = document.getElementById("brianTeach");
            li.setAttribute("class", "active");
            break;
        case 4:
            li = document.getElementById("danielClutch");
            li.setAttribute("class", "active");
            break;
        case 5:
            li = document.getElementById("davidEyes");
            li.setAttribute("class", "active");
            break;
        case 6:
            li = document.getElementById("ricLucky");
            li.setAttribute("class", "active");
            break;
        case 7:
            li = document.getElementById("shermanSnakeOil" );
            li.setAttribute("class", "active");
            break;
        case 8:
            li = document.getElementById("steveChef");
            li.setAttribute("class", "active");
            break;
        case 9:
            li = document.getElementById("steveIronHead");
            li.setAttribute("class", "active");
            break;
        }    
    }
                      
                    
                    
                    







