function chnagewhite(idn) {

    document.getElementById(idn).src = "shirts/white.png";
}

function chnagegray(idn) {

    document.getElementById(idn).src = "shirts/gray.png";
}

function chnagered(idn) {

    document.getElementById(idn).src = "shirts/red.png";
}

function chnageblack(idn) {

    document.getElementById(idn).src = "shirts/black.png";
}

function chnageblue(idn) {
    document.getElementById(idn).src = "shirts/dark_blue.png";
}


$( document ).ready(function() {
    $.get("https://gist.githubusercontent.com/RingoMar/fb0b7587b76792b4072232cff1482231/raw/3830f1020f065b330ef0fa84611aa4614276da85/gistfile1.txt", function (data) {
        var lines = data.split("\n");

        // //Random item number
        var q1 = Math.floor(Math.random() * lines.length);
        var q2 = Math.floor(Math.random() * lines.length);
        var q3 = Math.floor(Math.random() * lines.length);

        // add the quote to divs
        $("#qt1").text(lines[q1]);
        $("#qt2").text(lines[q2]);
        $("#qt3").text(lines[q3]);
    });
});