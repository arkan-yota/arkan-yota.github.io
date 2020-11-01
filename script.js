/*function darklight() {
    document.body.classList.toggle("dark-mode");
	localStorage.setItem('color','dark');

	var thebestcolor = localStorage.getItem('color');
	window.alert(thebestcolor)
}




function menushow() {
    var menuelement = ["pro", "par", "skil", "soc"];
    menuelement.forEach(function(item, index){
        var x = document.getElementById(item);
        if (x.style.display === "none") { x.style.display = "block"; } 
        else { x.style.display = "none";}
    });
    
}*/


function darklight(){
	if(localStorage.getItem('color')==null){
        getsystemcolor()
	};
	if(localStorage.getItem('color')=='dark'){
    	localStorage.setItem('color','light');
	}
	else if(localStorage.getItem('color')=='light'){
    	localStorage.setItem('color', 'dark');
	};
	
	showtruecolor();
};

function menushow() {
    /*(".pro").toggleClass("pro-active")
    var menuelement = ["pro", "par", "skil", "soc"];
    menuelement.forEach(function(item, index){
        var x = document.getElementById(item);
        if (x.style.display === "none") { x.style.display = "block"; } 
        else { x.style.display = "none";}
    });
    */
}

function getsystemcolor(){
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		localStorage.setItem('color','dark');
	}else{
		localStorage.setItem('color','light');
	};
}

function showtruecolor(){
	if(localStorage.getItem('color')==='dark'){
    	document.body.classList.toggle("dark-mode");
	}else if(localStorage.getItem('color')==='light'){
    	document.body.classList.remove("dark-mode");
	};
}

// At lauch of page or reload
if(localStorage.getItem('color')==null){
    getsystemcolor()
};
showtruecolor();