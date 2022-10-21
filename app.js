// Start Jquery Area


$(document).ready(function () {
    // Start Room Section
    $('.roompopup').magnificPopup({
        type: 'image'
        // other options
    });
    // End Room Section

})



// End Jquery Area


// Start jaavascript Area
// Start Header
// Start navbar
var drop = document.getElementById("dropbtn");
drop.addEventListener("click", function () {
    document.getElementById("mydropdown").classList.toggle("show");
    console.log("hay")
});


// function dropbtn() {
//     // console.log("hi");
//     document.getElementById("mydropdown").classList.toggle("show");

// }
console.log("hay");

function dropdilter() {
    var getsearch, filter, getdropdiv, getlinks, linkvalue;

    getsearch = document.getElementById("search");
    filter = getsearch.value.toUpperCase();
    getdropdiv = document.getElementById("mydropdown");
    getlinks = getdropdiv.getElementsByTagName("a");
    for (var x = 0; x < getlinks.length; x++) {
        //linkvalue=getlinks[x].textContent;
        linkvalue = getlinks[x].textContent || getlinks[x].innerText;
        // console.log(linkvalue);

        if (linkvalue.toUpperCase().indexOf(filter) > -1) {
            getlinks[x].style.display = "block";
        } else {
            getlinks[x].style.display = "none";
        }
    }

}
// end navbar
// Start auto background


function* genfun() {
    var index = 8;
    while (true) {
        yield index++;
        if (index > 13) {
            index = 8;
        }

    }
}
var getgen = genfun();
var idx = 10;
var getheader = document.querySelector("header");
getheader.style.backgroundImage = `url("./assets/img/img/banner/banner${getgen.next().value}.jpg")`;


function autoload() {
    // console.log(getgen.next().value);
    getheader.style.backgroundImage = `url("./assets/img/img/banner/banner${getgen.next().value}.jpg")`;
}
setInterval(autoload, 2500)
// end auto background
// End Header
// Start JavaScript Area
// 20AB