// object containing the socialMedia links
var socialMedia = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'
};

var social = function() {
    // start the unordered list
    output = "<ul>";
    
    // loop through the object passed as the first argument and build the <li>
    for (key in arguments[0]) {
        output += '<li> <a href ="' + socialMedia[key] + '"><img src="images/'+ key +'.png"' +'></a>'+ '</li>'
    }
    
    // close the unordered list
    output += "</ul>";
    
    // get nav elements by class name
    var socialMediaIconsNav = document.getElementsByClassName("socialmediaicons");

    // loop through the nav elements and change the inner html
    for (var i = 0; i < socialMediaIconsNav.length; i++) {
        socialMediaIconsNav[i].innerHTML = output;
    }
    
}(socialMedia)