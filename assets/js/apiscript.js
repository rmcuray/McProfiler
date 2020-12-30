//search
function parseURLParams(e) {
    var n, t, l, o, r = e.indexOf("?") + 1,
        p = e.indexOf("#") + 1 || e.length + 1,
        i = e.slice(r, p - 1),
        s = i.replace(/\+/g, " ").split("&"),
        a = {};
    if (i !== e && "" !== i) {
        for (n = 0; n < s.length; n++) o = s[n].split("=", 2), t = decodeURIComponent(o[0]), l = decodeURIComponent(o[1]), a.hasOwnProperty(t) || (a[t] = []), a[t].push(2 === o.length ? l : null);
        return a
    }
}
//Display
var urlString = window.location.href;
//var urlString = "?n=Lumierre";
urlParams = parseURLParams(urlString);
xmlhttp = new XMLHttpRequest();
username = urlParams.n;
url = "https://api.minetools.eu/uuid/" + username;
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var input = JSON.parse(this.responseText);
        document.getElementById("canvas").innerHTML = "<img src='https://visage.surgeplay.com/full/832/" + input.id + "'>";
        document.getElementById("playername").innerHTML = input.name;
        document.getElementById("playeruuid").innerHTML = input.id;
        document.getElementById("playerstatus").innerHTML = input.status;
        document.getElementById("playerskin").setAttribute("src", "https://visage.surgeplay.com/skin/" + input.id);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function submitt() {
    var dataInput = document.getElementById("searchbox").value;
    window.location.href = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/index.html?n=" + dataInput;
    //console.log(window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/index.html?n=" + dataInput);
}