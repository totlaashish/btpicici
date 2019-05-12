function showPaymentLayert(obj,id)
{
	var coors = findPos(obj);
	var x = document.getElementById(id);
	if (id == "nearestDD")
	{		
		x.style.top = coors[1] + 22 + 'px';	
		x.style.left = coors[0] + -100 + 'px';
		document.getElementById('interestrateDD').style.display = 'none';
		document.getElementById('calculateDD').style.display = 'none';
		
	}
	if (id == "interestrateDD")
	{		
		x.style.top = coors[1] + 22 + 'px';	
		x.style.left = coors[0] + -100 + 'px';
		document.getElementById('nearestDD').style.display = 'none';
		document.getElementById('calculateDD').style.display = 'none';
	}
	if (id == "calculateDD")
	{		
		x.style.top = coors[1] + 22 + 'px';	
		x.style.left = coors[0] + -100 + 'px';
		document.getElementById('nearestDD').style.display = 'none';
		document.getElementById('interestrateDD').style.display = 'none';
	}
	if (id == "countryDD")
	{		
		x.style.top = coors[1] + 20 + 'px';	
		x.style.left = coors[0] + -114 + 'px';
	}
	
	if (id == "timeDD")
	{		
		x.style.top = coors[1] + 22 + 'px';	
		x.style.left = coors[0] + -110 + 'px';
		 
		
	}
	document.getElementById(id).style.display = 'block';
	document.getElementById(id).focus();
	return true;
	//focusElement = document.getElementById(id);
	//setTimeout("focusElement.focus()",1);
}


function drpvalue(drpid,drpvalue,divid)
{
	document.getElementById(drpid).value = drpvalue;
	document.getElementById(divid).style.display = 'none';
	
}



function findPos(obj) {
	
	var curleft = 0; var curtop = 0;
	i=0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}

	return [curleft,curtop];
}

function chooseCalc(){
	var strUser = document.getElementById("calculateDrpDwn").value; 
	 switch(strUser){
		case "Home Loan Eligibility":
				opennewsletter('','../eligibility-calculator.html','537px','500px','background-image:url()','../images/close.png');
				break;
		case "Loan EMI":
				opennewsletter('','../emi-calculator.html','520px','390px','background-image:url()','../images/close.png');
				break;
		case "Exchange Rate/Remittance Charge":
				window.open('https://m2inet.icicibank.co.in/m2iNet/remittanceCharges.misc','mywindow') ;
				break;
	}	
}
function nearLocation(){
	var strUser = document.getElementById("nearestDrpDwn").value; 
	 switch(strUser){
		case "Branch & ATM in India":
				window.open('http://www.icicibank.com/find-atm-branch.html','mywindow') ;
				break; 
		case "Draft Locations":
				location.href ="../RHStemp/draftLocation.html";
				break;
		case "P O Box":
				location.href ="../RHStemp/poBox.html";
				break;
  }	
}

function interestrat(){
	var strUser = document.getElementById("interestrateDrpDwn").value; 
	 switch(strUser){
		case "NRE Savings":
				location.href ="../RHStemp/rates.html#T-4";
				break;
		case "NRO Savings":
				location.href ="../RHStemp/rates.html#T-2";
				break;
		case "NRE Fixed Deposit":
				location.href ="../RHStemp/rates.html#T-3";
				break;
		case "NRO Fixed Deposit":
				location.href ="../RHStemp/rates.html";
				break;
		case "RFC Savings":
				location.href ="../RHStemp/rates.html#T-7";
				break;
		case "RFC Fixed Deposit":
				location.href ="../RHStemp/rates.html#T-6";
				break;
		case "FCNR Deposit":
				location.href ="../RHStemp/rates.html#T-5";
				break;
		case "OBU Deposit":
				location.href ="../RHStemp/obu_rates.html";
				break;
	}	
}

var lastDiv="";
function showcurrency(id)
{
if (lastDiv)
{
document.getElementById(lastDiv).className ="hidediv";
}
if (id && document.getElementById(id)) {
		document.getElementById(id).className = "showdiv";
		lastDiv = id;
	}
}

var lastDiv1="";
function showstate(id)
{
if (lastDiv1)
{
document.getElementById(lastDiv1).className ="hidediv";
}
if (id && document.getElementById(id)) {
		document.getElementById(id).className = "showdiv";
		lastDiv1 = id;
	}
}


function changepopup(img_name,div_name)
   {
	    if(document.getElementById(div_name).style.display == "block")
	   {
		    document.getElementById(img_name).src ="images/downarrowPopup.png";
		   	document.getElementById(div_name).style.display="none";
	   }
	   else
	   {
		   document.getElementById(img_name).src="images/downarrowPopup.png";
	   		document.getElementById(div_name).style.display="block";
       }
}

function popupwin(fade)
	{
		 document.getElementById(fade).style.display='block';
		var fade = document.getElementById(fade);
  			fade.style.height = pHeight() + 'px';
	}
function pHeight()
{
  		var pHeight = OffWindowH() + WindowHeight();
  		return pHeight;
}
function OffWindowH()
{
		var OffWindowH=0;
 		window.scrollTo(0,10000000);
 
 		if(typeof self.pageYOffset!='undefined')
 			OffWindowH=self.pageYOffset;
 		else if(document.compatMode && document.compatMode != 'BackCompat')
				OffWindowH=document.documentElement.scrollTop;
 		else if(document.body && typeof(document.body.scrollTop)!='undefined')
				OffWindowH=document.body.scrollTop;
 		window.scrollTo(0,0);
 		return OffWindowH;
}
function WindowHeight() 
{
  		var WindowHeight = 0;
  		if( typeof( window.innerWidth ) == 'number' ) 
  			WindowHeight = window.innerHeight;
  		else if (document.documentElement &&  document.documentElement.clientHeight) 
  				WindowHeight = document.documentElement.clientHeight;
  		else if(document.body && document.body.clientHeight) 
  				WindowHeight = document.body.clientHeight;
		return WindowHeight;
}

function toggle(divToShow) {
if (document.getElementById) {
 if (divToShow == "with") {
document.getElementById('withdiv').style.display = "none";
}
else {
document.getElementById('withdiv').style.display = "block";
}
}
}

function changeReg(div_name)
   {
	    if(document.getElementById(div_name).style.display == "none")
	   {
		  $(".overviewTab", window.top.document).css({'z-index':'0'});
		  $(".lead", window.top.document).css({'z-index':'2'});
		  document.getElementById(div_name).style.display="block";
		  
	   }
	   
   }
 function changeRegover(div_name){
 	    if(document.getElementById(div_name).style.display == "block")
	   {
		   	$(".lead", window.top.document).css({'z-index':'0'});
		   	$(".overviewTab", window.top.document).css({'z-index':'2'});
			document.getElementById(div_name).style.display="none";
   		}
}
function divoverout(div_name){
 	    if(document.getElementById(div_name).style.display == "block")
	   {
		   document.getElementById(div_name).style.zIndex="1";
			document.getElementById(div_name).style.display="none";

   		}
}  


function setHeight(id1, id2){
	mediaHt = document.getElementById(id1).clientHeight;
	awardsHt = document.getElementById(id2).clientHeight;
	if(mediaHt > awardsHt)
		h = mediaHt;
	else
		h = awardsHt;
	if(h == document.getElementById(id1).clientHeight)
		{
			document.getElementById(id2).style.height = h + "px";		
			if(document.getElementById('cont11').style.display = 'block')
			{
				document.getElementById(id2).style.height = h + "px";
			}
		}
	else
		document.getElementById(id1).style.height = h + "px";
	
}

function changeHeight(exId){
if(document.getElementById(exId).style.display == '')
{
		h = document.getElementById(exId).clientHeight + document.getElementById('leftP').clientHeight;
		document.getElementById('leftP').style.height = document.getElementById('rightP').style.height = h + "px";
}
else{
	
	document.getElementById(exId).style.display = "block";
	h = document.getElementById('leftP').clientHeight - document.getElementById(exId).clientHeight;
	document.getElementById('leftP').style.height = document.getElementById('rightP').style.height = h + "px";
	document.getElementById(exId).style.display = "none";
}
}
 
function showHidediv(id)
{
 	var el = document.getElementById(id);
	if(el.style.display == '')
	{
		document.getElementById(id).style.display = 'none';	
	}
	else
	{
		document.getElementById(id).style.display = '';	
	}
}  
 
 

function setTabH(id){
	 
	if(document.getElementById(id).style.display == 'block'){
		
		switch(id){
			
		case "step2":
		 if ( !(document.getElementById('step3').style.display =='block' || document.getElementById('Whathappensnext').style.display == 'block'))	{
					document.getElementById('tabscroll').style.height = "";	
					 
		 }
		break;
		case "step3":
		 if ( !(document.getElementById('step2').style.display =='block' || document.getElementById('Whathappensnext').style.display == 'block'))	{
					document.getElementById('tabscroll').style.height = "";	
					 
		 }
		break;	
		case "Whathappensnext":
		 if ( !(document.getElementById('step2').style.display =='block' || document.getElementById('step3').style.display == 'block'))	{
					document.getElementById('tabscroll').style.height = "";	
					 
		 }
		break;	
	}
		}
 else 
 {
	  
 document.getElementById('tabscroll').style.height = "350px";	
}
}

function currencySel(){
	var e = document.getElementById("countryName"); 
	var strUser = e.options[e.selectedIndex].value; 	
	switch(strUser){
		case "1":
				openPopUp('AED');
				break;
		case "2":
				openPopUp('AUD');
				break;
		case "3":
				openPopUp('CAD');
				break;
		case "4":
				openPopUp('CHF');
				break;
		case "5":
				openPopUp('DKK');
				break;
		case "6":
				openPopUp('EUR');
				break;
		case "7":
				openPopUp('GBP');
				break;
		case "8":
				openPopUp('HKD');
				break;
		case "9":
				openPopUp('JPY');
				break;
		case "10":
				openPopUp('NOK');
				break;
		case "11":
				openPopUp('NZD');
				break;
		case "12":
				openPopUp('QAR');
				break;
		case "13":
				openPopUp('SAR');
				break;
		case "14":
				openPopUp('SEK');
				break;
		case "15":
				openPopUp('SGD');
				break;
		case "16":
	        	openPopUp('USD');
				break;
		case "17":
				openPopUp('ZAR');
				break;
				
	}	
}