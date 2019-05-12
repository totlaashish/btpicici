animatedcollapse.addDiv('div_2', 'fade=0')
animatedcollapse.addDiv('tm', 'fade=0')
animatedcollapse.addDiv('fd', 'fade=0')
animatedcollapse.addDiv('div_3', 'fade=0')	
animatedcollapse.addDiv('div_3_new', 'fade=0')	
animatedcollapse.addDiv('long', 'fade=0')	
animatedcollapse.addDiv('impo', 'fade=0')	
animatedcollapse.addDiv('repa', 'fade=0')
animatedcollapse.addDiv('dep', 'fade=0')
animatedcollapse.addDiv('div_4', 'fade=0')
animatedcollapse.addDiv('div_5', 'fade=0')
animatedcollapse.addDiv('div_6', 'fade=0')
animatedcollapse.addDiv('div_6_1', 'fade=0')
animatedcollapse.addDiv('div_6_2', 'fade=0')
animatedcollapse.addDiv('div_6_3', 'fade=0')
animatedcollapse.addDiv('div_6_4', 'fade=0')
animatedcollapse.addDiv('div_6_41', 'fade=0')
animatedcollapse.addDiv('div_6_42', 'fade=0')
animatedcollapse.addDiv('div_6_43', 'fade=0')
animatedcollapse.addDiv('div_6_44', 'fade=0')
animatedcollapse.addDiv('div_6_5', 'fade=0')
animatedcollapse.addDiv('div_6_6', 'fade=0')
animatedcollapse.addDiv('div_6_7', 'fade=0')
animatedcollapse.addDiv('div_6_8', 'fade=0')
animatedcollapse.addDiv('div_6_81', 'fade=0')
animatedcollapse.addDiv('div_6_82', 'fade=0')
animatedcollapse.addDiv('div_6_9', 'fade=0')
animatedcollapse.addDiv('div_6_10', 'fade=0')
animatedcollapse.addDiv('div_6_11', 'fade=0')
animatedcollapse.addDiv('div_6_12', 'fade=0')
animatedcollapse.addDiv('div_6_13', 'fade=0')
animatedcollapse.addDiv('div_6_14', 'fade=0')
animatedcollapse.addDiv('div_6_15', 'fade=0')
animatedcollapse.addDiv('div_6_16', 'fade=0')
animatedcollapse.addDiv('div_6_17', 'fade=0')
animatedcollapse.addDiv('div_6_181', 'fade=0')
animatedcollapse.addDiv('div_6_182', 'fade=0')
animatedcollapse.addDiv('tmOpts', 'fade=0')
animatedcollapse.addDiv('tmRemi', 'fade=0')
animatedcollapse.addDiv('tmRemi1', 'fade=0')
animatedcollapse.addDiv('tmOpts1', 'fade=0')
animatedcollapse.addDiv('result', 'fade=0')
animatedcollapse.addDiv('reset', 'fade=0')
animatedcollapse.addDiv('result1', 'fade=0')
animatedcollapse.addDiv('reset1', 'fade=0')
animatedcollapse.addDiv('div_100', 'fade=0')
animatedcollapse.addDiv('div_200', 'fade=0')
animatedcollapse.addDiv('div_300', 'fade=0')
animatedcollapse.addDiv('div_400', 'fade=0')
animatedcollapse.addDiv('div_500', 'fade=0')
animatedcollapse.addDiv('div_600', 'fade=0')
animatedcollapse.addDiv('div_700', 'fade=0')
animatedcollapse.addDiv('div_800', 'fade=0')
animatedcollapse.addDiv('div_900', 'fade=0')
animatedcollapse.addDiv('div_1000', 'fade=0')
animatedcollapse.addDiv('div_1100', 'fade=0')

animatedcollapse.ontoggle=function($, divobj, state){ //fires each time a DIV is expanded/contracted
	//$: Access to jQuery
	//divobj: DOM reference to DIV being expanded/ collapsed. Use "divobj.id" to get its ID
	//state: "block" or "none", depending on state
}

animatedcollapse.init()


function enableAllCb()
{
	for (var j=0; j < document.theForm.elements.length; j++) 
	{
      	document.theForm.elements[j].disabled = "";
		document.theForm.elements[j].checked = false;
		//alert("DE");
  	}
}

//var step = 2;
var counter =1;
var divIds = [];
var groupIds = [];
var selOpts = [];


function slide(showDiv, showStep, hideStep, group, selOption)
{
//	alert(showDiv);
	switch(showDiv){
		case "div_6_11":	
			document.getElementById("div_100").style.display = 'block';
			document.getElementById("div_200").style.display = 'none';
			document.getElementById("div_300").style.display = 'none';
			document.getElementById("div_400").style.display = 'none';
			document.getElementById("div_500").style.display = 'none';
			document.getElementById("div_600").style.display = 'none';
			document.getElementById("div_700").style.display = 'none';
			document.getElementById("div_800").style.display = 'none';
			document.getElementById("div_900").style.display = 'none';
			document.getElementById("div_1000").style.display = 'none';
			document.getElementById("div_1100").style.display = 'none';
			break;
		case "div_6_12":	
			document.getElementById("div_100").style.display = 'none';
			document.getElementById("div_200").style.display = 'none';
			document.getElementById("div_300").style.display = 'block';
			document.getElementById("div_400").style.display = 'none';
			document.getElementById("div_500").style.display = 'none';
			document.getElementById("div_600").style.display = 'none';
			document.getElementById("div_700").style.display = 'none';
			document.getElementById("div_800").style.display = 'none';
			document.getElementById("div_900").style.display = 'none';
			document.getElementById("div_1000").style.display = 'none';
			document.getElementById("div_1100").style.display = 'none';
			break;
		case "div_6_13":	
			document.getElementById("div_100").style.display = 'none';
			document.getElementById("div_200").style.display = 'none';
			document.getElementById("div_300").style.display = 'none';
			document.getElementById("div_400").style.display = 'none';
			document.getElementById("div_500").style.display = 'block';
			document.getElementById("div_600").style.display = 'none';
			document.getElementById("div_700").style.display = 'none';
			document.getElementById("div_800").style.display = 'none';
			document.getElementById("div_900").style.display = 'none';
			document.getElementById("div_1000").style.display = 'none';
			document.getElementById("div_1100").style.display = 'none';
			break;
		case "div_6_14":	
			document.getElementById("div_100").style.display = 'none';
			document.getElementById("div_200").style.display = 'none';
			document.getElementById("div_300").style.display = 'none';
			document.getElementById("div_400").style.display = 'none';
			document.getElementById("div_500").style.display = 'none';
			document.getElementById("div_600").style.display = 'none';
			document.getElementById("div_700").style.display = 'block';
			document.getElementById("div_800").style.display = 'none';
			document.getElementById("div_900").style.display = 'none';
			document.getElementById("div_1000").style.display = 'none';
			document.getElementById("div_1100").style.display = 'none';
			break;
		case "div_6_15":	
			document.getElementById("div_100").style.display = 'none';
			document.getElementById("div_200").style.display = 'none';
			document.getElementById("div_300").style.display = 'none';
			document.getElementById("div_400").style.display = 'none';
			document.getElementById("div_500").style.display = 'none';
			document.getElementById("div_600").style.display = 'none';
			document.getElementById("div_700").style.display = 'none';
			document.getElementById("div_800").style.display = 'none';
			document.getElementById("div_900").style.display = 'block';
			document.getElementById("div_1000").style.display = 'none';
			document.getElementById("div_1100").style.display = 'none';
			break;
		case "div_6_16":	
			document.getElementById("div_100").style.display = 'none';
			document.getElementById("div_200").style.display = 'none';
			document.getElementById("div_300").style.display = 'none';
			document.getElementById("div_400").style.display = 'none';
			document.getElementById("div_500").style.display = 'none';
			document.getElementById("div_600").style.display = 'none';
			document.getElementById("div_700").style.display = 'none';
			document.getElementById("div_800").style.display = 'none';
			document.getElementById("div_900").style.display = 'none';
			document.getElementById("div_1000").style.display = 'block';
			document.getElementById("div_1100").style.display = 'block';
			break;
		case "div_6_17":	
			document.getElementById("div_100").style.display = 'none';
			document.getElementById("div_200").style.display = 'none';
			document.getElementById("div_300").style.display = 'none';
			document.getElementById("div_400").style.display = 'none';
			document.getElementById("div_500").style.display = 'none';
			document.getElementById("div_600").style.display = 'none';
			document.getElementById("div_700").style.display = 'none';
			document.getElementById("div_800").style.display = 'none';
			document.getElementById("div_900").style.display = 'none';
			document.getElementById("div_1000").style.display = 'block';
			document.getElementById("div_1100").style.display = 'block';
			break;
	}
			
	divIds[counter] = showDiv;
	groupIds[counter] = group;
	selOpts[counter] = selOption;
	counter += 1;
	if (showDiv == "result" || showDiv == "result1")
	{
		var alertText = "";
		for (var i = 1; i <= divIds.length-1; i++)
		{
			alertText += selOpts[i] + ", ";
		}
	//alert(alertText);
		//buildResult(alertText);
	}
	
	document.getElementById(showStep).style.display = "block";

	document.getElementById(hideStep).style.display = "none";
	animatedcollapse.show(showDiv);
	//animatedcollapse.show(showStep)
//document.getElementById(showDiv).style.display = "block";



	//alert(divIds[counter]);
	//step += 1;
	for (var i=0; i<document.theForm.elements.length; i++) 
	{
    if (document.theForm.elements[i].name == group) 
		{
    	  	document.theForm.elements[i].disabled = "disabled";
    	}
  	}
	
}

function startOver(hideDiv)
{
	document.getElementById(hideDiv).style.display = "none";
	for (var i = divIds.length -1; i >= 1; i--)
	{
		animatedcollapse.hide(divIds[i]);
		//document.getElementById(divIds[i]).style.display = "none";
		
		for (var j=0; j < document.theForm.elements.length; j++) 
		{
    	if (document.theForm.elements[j].name == groupIds[i]) 
			{
    	  		document.theForm.elements[j].disabled = "";
				document.theForm.elements[j].checked = false;
    		}
  		}

	}
	document.getElementById("step1_4").style.display = "block";
	
	//for (var i in groupIds) {groupIds[i] = "";}
	//for (var i in divIds) {divIds[i] = "";}
	divIds = new Array();
	groupIds = new Array();
	selOpts = new Array();
	counter = 1;
}

