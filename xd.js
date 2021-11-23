function ReleaseTheMonster()
{
    var v = document.getElementById('vp');
    v.hidden = false;
    var b = document.getElementById('b');
    b.hidden = true;
    var txt = document.getElementById('txt');
    txt.hidden = false;
    b.remove()
    var video = document.getElementById("vp");
    video.muted = false;
    video.play()
}
function delz()
{
    var c = document.getElementsByTagName("div")[0]
    console.log(c)
    c.remove()
}
document.addEventListener("DOMContentLoaded",delz); // something :)
