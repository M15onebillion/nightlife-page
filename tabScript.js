function showTabs(){
	var tab = document.getElementById("dropDownWrapper");
	tab.style.display = "block";
}
function hideTabs(){
	var tab = document.getElementById("dropDownWrapper");
	tab.style.display = "initial";
}

function tabStayShown(){
	var tab = document.getElementById("dropDwonWrapper");
	if(tab.style.display.match("initial")){
		tab.style.display = "initial";
	}

}

function expandTab(a){
	var tab = document.getElementById(a);
	tab.style.padding = "25px 25px 9px 25px";
}

function retractTab(a,b){
	var tab = document.getElementById(a);
	if(b != "activeTab")
		tab.style.padding = "9px 25px";
}

