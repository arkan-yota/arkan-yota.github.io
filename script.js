function darklight() {
    document.body.classList.toggle("dark-mode");
}


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darklight()
};


function menushow() {
    var menuelement = ["pro", "par", "skil", "soc"];
    menuelement.forEach(function(item, index){
        var x = document.getElementById(item);
        if (x.style.display === "none") { x.style.display = "block"; } 
        else { x.style.display = "none";}
    });
    
}
