var baseUrl = "./";
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}


function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function popUp(theURL,name,w,h,t,m,st,sc,r,X,Y) {
	if ( X == -1) {
		X = screen.availWidth - w ;
		X = X/2;
	}
	if (Y == -1) {
		Y = screen.availHeight -h ;
		Y = Y/2;
	}
	p="width=" + w + ",height=" + h + ",toolbar=" + t + ",menubar=" + m + ",status=" + st + ",scrollbars=" + sc + ",resizable=" + r + "directories=0,screenX=" + X + ",screenY=" + Y + ",left=" + X + ",top=" + Y + ",header=0";
	window.open(theURL,name,p+',resizable=yes');
}
function chkValS(){
	var id="searchStr";if($('#searchStr').closest('.header').css('display')=="none"){id="searchStr1";}
	var str = document.getElementById(id).value;
	str = str.trim();
	if (str == 0 || str =="Search in Website" || str =="वेबसाइट में खोजें"){
		alert("Please Enter search String");	
		document.getElementById(id).focus();
		return false;
	}
	
	if (str.indexOf("%") >= 0 ){
		alert("Character % is not Allowed in search String");	
		document.getElementById(id).focus();
		document.getElementById(id).select();
		return false;
	}
}
function doBlank(){
	var id="searchStr";if($('#searchStr').closest('.header').css('display')=="none"){id="searchStr1";}
	var str = document.getElementById(id).value;
	str = str.trim();
	if (str == "Search in Website" || str =="वेबसाइट में खोजें"){
		  document.getElementById(id).value="";     
	}
}
function fillDefault(){
	var id="searchStr";if($('#searchStr').closest('.header').css('display')=="none"){id="searchStr1";}
	var str = document.getElementById(id).value;
	if (str == ""){
		document.getElementById(id).value=$(document).find("#searchStr").data('title'); 
	}
}



//popUp('newyear.html','message',620,357,0,0,0,0,100,200,0);

var isNS4 = (navigator.appName=="Netscape")?1:0;
var strDateFormat = 'dd NNN yyyy';
// Java Script to Handle AutoSearch in a select box
function selectKeyDown()
{
    // Delete Key resets previous search keys
    if(window.event.keyCode == 46)
        clr();
}
function selectKeyPress()
{
    // Notes:
    //    1) previous keys are cleared onBlur/onFocus and with Delete key
    //    2) if the search doesn't find a match, this returns to normal 1 key 
    //        search setting returnValue = false below for ALL cases will 
    //        prevent default behavior    
    //TODO:
    //    1) add Netscape handling 

    var sndr = window.event.srcElement;
    var pre = this.document.all["keys"].value;
    var key = window.event.keyCode;
    var char = String.fromCharCode(key);

    // "i" -> ignoreCase
    var re = new RegExp("^" + pre + char, "i"); 

    for(var i=0; i<sndr.options.length; i++)
    {
        if(re.test(sndr.options[i].text))
        {
            sndr.options[i].selected=true;
            document.all["keys"].value += char;
            window.event.returnValue = false;
            break;
        }
    }
}
function clr()
{
    document.all["keys"].value = "";
}

//End of  Java Script to Handle AutoSearch in a select box


function check_email(e) {
	ok = "1234567890qwertyuiop[]asdfghjklzxcvbnm.@-_QWERTYUIOPASDFGHJKLZXCVBNM";	
	for(i=0; i < e.length ;i++){
		if(ok.indexOf(e.charAt(i))<0){ 
			return (false);
		}	
	} 	
	if (document.images) {
		re = /(@.*@)|(\.\.)|(^\.)|(^@)|(@$)|(\.$)|(@\.)/;
		re_two = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (!e.match(re) && e.match(re_two)) {
			return (-1);		
		} 	
	}
}

function strtrim() {
//Match spaces at beginning and end of text and replace with null strings
	return this.replace(/^\s+/,'').replace(/\s+$/,'');
}
String.prototype.trim = strtrim;
//-------------------------------------------------------------------
// Trim functions
//   Returns string with whitespace trimmed
//-------------------------------------------------------------------
function LTrimBlank(str){
	if (str==null){return null;}
	for(var i=0;str.charAt(i)==" ";i++);
	return str.substring(i,str.length);
	}
function RTrimBlank(str){
	if (str==null){return null;}
	for(var i=str.length-1;str.charAt(i)==" ";i--);
	return str.substring(0,i+1);
	}
function TrimBlank(str){return LTrimBlank(RTrimBlank(str));}
function LTrim(str) {
	if (str==null){return str;}
	for (var i=0; str.charAt(i)==" " || str.charAt(i)=="\n" || str.charAt(i)=="\t"; i++);
	return str.substring(i,str.length);
	}
function RTrim(str) {
	if (str==null){return str;}
	for (var i=str.length-1; str.charAt(i)==" " || str.charAt(i)=="\n" || str.charAt(i)=="\t"; i--);
	return str.substring(0,i+1);
	}
function Trim(str) {
	return LTrim(RTrim(str));
	}

//-------------------------------------------------------------------
// isNull(value)
//   Returns true if value is null
//-------------------------------------------------------------------
function isNull(val){return(val==null);}

//-------------------------------------------------------------------
// isBlank(value)
//   Returns true if value only contains spaces
//-------------------------------------------------------------------
function isBlank(val){
	if(val==null){return true;}
	for(var i=0;i<val.length;i++) {
		if ((val.charAt(i)!=' ')&&(val.charAt(i)!="\t")&&(val.charAt(i)!="\n")&&(val.charAt(i)!="\r")){return false;}
		}
	return true;
	}
//-------------------------------------------------------------------
// isDigit(value)
//   Returns true if value is a 1-character digit
//-------------------------------------------------------------------
function isDigit(num) {
	if (num.length>1){return false;}
	var string="1234567890";
	if (string.indexOf(num)!=-1){return true;}
	return false;
	}
//-------------------------------------------------------------------
// isInteger(value)
//   Returns true if value contains all digits
//-------------------------------------------------------------------
function isInteger(val){
	if (isBlank(val)){return false;}
	for(var i=0;i<val.length;i++){
		if(!isDigit(val.charAt(i))){return false;}
		}
	return true;
	}
	
//-------------------------------------------------------------------
// isNumeric(value)
//   Returns true if value contains a positive float value
//-------------------------------------------------------------------
function isNumeric(val){	
	return(parseFloat(val,10)==(val*1))
}

//-------------------------------------------------------------------
// isArray(obj)
// Returns true if the object is an array, else false
//-------------------------------------------------------------------
function isArray(obj){return(typeof(obj.length)=="undefined")?false:true;}
//-------------------------------------------------------------------
// setNullIfBlank(input_object)
//   Sets a form field to "" if it isBlank()
//-------------------------------------------------------------------
function setNullIfBlank(obj){if(isBlank(obj.value)){obj.value="";}}

//-------------------------------------------------------------------
// setFieldsToUpperCase(input_object)
//   Sets value of form field toUpperCase() for all fields passed
//-------------------------------------------------------------------
function setFieldsToUpperCase(){
	for(var i=0;i<arguments.length;i++) {
		arguments[i].value = arguments[i].value.toUpperCase();
		}
	}
//-------------------------------------------------------------------
// setFieldsToLowerCase(input_object)
//   Sets value of form field toLowerCase() for all fields passed
//-------------------------------------------------------------------
function setFieldsToLowerCase(){
	for(var i=0;i<arguments.length;i++) {
		arguments[i].value = arguments[i].value.toLowerCase();
		}
	}

//-------------------------------------------------------------------
// allowNumbersOnlyKeyPress()
//   restrict the fields to accept only numbers
//-------------------------------------------------------------------
function allowNumbersOnlyKeyPress(event){
	
	if(!isNS4){
		if (event.keyCode ==13) {
			event.returnValue = false;
		}
		if ((event.keyCode < 48) || (event.keyCode > 57) && (event.keyCode != 32) && (event.keyCode != 8) && (event.keyCode != 127) && (event.keyCode != 13) && (event.keyCode != 9)  && (event.keyCode != 0)){
			alert("Please enter numbers only.");
			event.returnValue = false;
		}
	}else{
		if (event.which ==13) {
			return false;
		}
		if ((event.which < 48) || (event.which > 57) && (event.which != 32) && (event.which != 8) && (event.which != 127) && (event.which != 13) && (event.which != 9) && (event.which != 0)){
			alert("Please enter numbers only");
			return false;
		}
	}	
}
$(document).on("keypress",'.allowNumbersOnlyKeyPress',function(e) {
    return allowNumbersOnlyKeyPress(e);
    e.preventDefault();
});

//-------------------------------------------------------------------
// allowNumbersDashOnlyKeyPress()
//   restrict the fields to accept only numbers and Dash
//-------------------------------------------------------------------	
function allowNumbersDashOnlyKeyPress(event){
	
	if(!isNS4){
		if (event.keyCode ==13) {
			event.returnValue = false;
		}
		if (((event.keyCode < 48) || (event.keyCode > 57)) && event.keyCode != 45 && (event.keyCode != 32) && (event.keyCode != 8) && (event.keyCode != 127) && (event.keyCode != 13) && (event.keyCode != 9)  && (event.keyCode != 0)){
			alert("Please enter only numbers or hyphens(-)");
			event.returnValue = false;
		}
	}else{
		if (event.which ==13) {
			return false;
		}
		if (((event.which < 48) || (event.which > 57)) && event.which != 45  && (event.which != 32) && (event.which != 8) && (event.which != 127) && (event.which != 13) && (event.which != 9) && (event.which != 0)){
			alert("Please enter only numbers or hyphens(-)");
			return false;
		}
	}
}
$(document).on("keydown",'.allowNumbersDashOnlyKeyPress',function(e) {
    return allowNumbersDashOnlyKeyPress(e);
    e.preventDefault();
});

//-------------------------------------------------------------------
// allowCharacterOnly()
//   restrict the fields to accept only alphabets
//-------------------------------------------------------------------	
function allowCharacterOnly(event){
if (event.keyCode ==13) {
		return false;
	}
	if(!isNS4){
		//alert("event.keyCode = "+event.keyCode)
		if (((event.keyCode < 65) || (event.keyCode > 90)) && ((event.keyCode < 97) || (event.keyCode > 122))  && (event.keyCode != 32) && (event.keyCode != 8) && (event.keyCode != 127) && (event.keyCode != 13) && (event.keyCode != 9)  && (event.keyCode != 0)){
			alert("Please enter character only. maximum 20 characters");
			event.returnValue = false;
		}
	}else{
		//alert("event.which = "+event.which)
		if (((event.which < 65) || (event.which > 90)) && ((event.which < 97) || (event.which > 122)) && (event.which != 32) && (event.which != 8) && (event.which != 127) && (event.which != 13) && (event.which != 9) && (event.which != 0)){
			alert("Please enter character only. maximum 20 characters");
			event.returnValue = false;
		}
	}
}
$(document).on("keydown",'.allowCharacterOnly',function(e) {
	return allowCharacterOnly(e);
	e.preventDefault();	
});



//-------------------------------------------------------------------
// FloatNumberTypeKeyPress()
//   Checking the field for only for Floating Number
//-------------------------------------------------------------------

function fnNumberTypeKeyPress(event) {
	if(!isNS4){				
		if ( !((47 < event.keyCode) && (event.keyCode < 58)) && (event.keyCode != 46) && (event.keyCode != 190) && (event.keyCode != 110)  && (event.keyCode != 32) && (event.keyCode != 8) && (event.keyCode != 127) && (event.keyCode != 13) && (event.keyCode != 9)  && (event.keyCode != 0) ) {
			alert("Only numbers and decimals(.) allowed for this field.");
			event.returnValue = false;
		} 
	}else{		
		if ( !((47 < event.which) && (event.which < 58)) && (event.which != 46) && (event.which != 110) && (event.which != 32) && (event.which != 190) && (event.which != 8) && (event.which != 127) && (event.which != 13) && (event.which != 9) && (event.which != 0)) {
			alert("Only numbers and decimals(.) allowed for this field.");
   		 	return false;
		}
	}
}
$(document).on("keypress",'.fnNumberTypeKeyPress',function(e) {
    return fnNumberTypeKeyPress(e);
    e.preventDefault();
});


//-------------------------------------------------------------------
// FloatNumberTypeKeyPress()
//   Checking the field for only for Floating Number
//-------------------------------------------------------------------

function fnNumberOnlyKeyPress(event) {
	if(!isNS4){				
		if ( !((47 < event.keyCode) && (event.keyCode < 58))  && (event.keyCode != 32) && (event.keyCode != 8) && (event.keyCode != 127) && (event.keyCode != 13) && (event.keyCode != 9)  && (event.keyCode != 0)) {
			alert("Only numbers allowed for this field.");
			event.returnValue = false;
		} 
	}else{		
		if ( !((47 < event.which) && (event.which < 58)) && (event.which != 32) && (event.which != 8) && (event.which != 127) && (event.which != 13) && (event.which != 9) && (event.which != 0)) {
			alert("Only numbers allowed for this field.");
   		 	return false;
		}
	}
}


//-------------------------------------------------------------------
// doNothing()
//  no action is taken 
//-------------------------------------------------------------------
function doNothing() {
	//do nothing
}

// ------------------------------------------------------------------
// Utility functions for parsing in getDateFromFormat()
// ------------------------------------------------------------------
function _isInteger(val) {
	var digits="1234567890";
	for (var i=0; i < val.length; i++) {
		if (digits.indexOf(val.charAt(i))==-1) { return false; }
		}
	return true;
	}
function _getInt(str,i,minlength,maxlength) {
	for (var x=maxlength; x>=minlength; x--) {
		var token=str.substring(i,i+x);
		if (token.length < minlength) { return null; }
		if (_isInteger(token)) { return token; }
		}
	return null;
	}
	


function findPosX(obj)
{
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	return curleft;
}

/*this function will retun the Y th position in Pixel
of the given Object
*/
function findPosY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;
	return curtop;
}
var strCulprit = "";
var removeSqlInjection = function(strWords){
	if(strWords){
		var badStuff = new Array("select","union","drop", ";", "--", "insert",	"delete", "xp_","alert","'","script","<",">");		
		for(ccccc= 0;ccccc<badStuff.length;ccccc++){	
			if(CheckMatch(strWords, badStuff[ccccc])!= null) strCulprit+= badStuff[ccccc];
			strWords = replaceAll(strWords,badStuff[ccccc], "");
		}
		return strWords;
	}else{
		return strWords;
	}
};

function replaceAll(str, strA, strB)
{
    return str.replace( new RegExp(strA,"gi"), strB );    
}

function CheckMatch(strWords,strMatch) {
	var re = new RegExp(strMatch);
	return strWords.match(new RegExp(strMatch));	
}

function checkInputString(obj, maxlength){		
	if(obj.value.length>maxlength) {
		alert("Content should not exceed "+maxlength+" characters");		
		obj.value = obj.value.substring(0,maxlength);
	}
	obj.value = removeSqlInjection(obj.value);
	if(strCulprit.length>0){
		alert("The word '"+strCulprit+"' wont allowed");
		strCulprit = "";
	}
}

$(document).on("keyup",'.checkInputString',function(e) {
	try{
	var maxlength =  $(this).attr('maxlength') ? parseInt($(this).attr('maxlength')) :20;
	if($(this).val() && $(this).val().length > maxlength) {
		alert("Content should not exceed "+maxlength+" characters");		
		$(this).val($(this).val().substring(0,maxlength));
	}	
	// $(this).val(removeSqlInjection($(this).val()));
	// if(strCulprit.length>0){
		// alert("The word '"+strCulprit+"' wont allowed");
		// strCulprit = "";
	// }
	//e.preventDefault();	
	}catch(ee){
		console.log(ee);
	}
});



/*print and mail*/
function PrintPage(){
		var content_body='<link href="'+baseUrl+'static/css/style.css" rel="stylesheet" media="print">';
		try{
			var display_setting="toolbar=yes,location=no,directories=yes,menubar=yes,"; 
			display_setting+="scrollbars=yes,width=800,height=600,left=100,top=25,toolbar=0,location=0,statusbar=0,menubar=0,resizable=yes,titlebar=yes"; 
			if($(document).find('#viewSectionContent').length>0){
				content_body += (document.getElementById("viewSectionContent").innerHTML).trim(); 
			}else if($(document).find('#page-wrap').length>0){
				content_body += (document.getElementById("page-wrap").innerHTML).trim();
			}
			
			var content_title = (document.getElementById("contenttitle").textContent).trim(); 
			var docprint=window.open("","",display_setting); 
			docprint.document.open(); 
			docprint.document.write('<html><head><title>Dena Bank</title>'); 
			docprint.document.write('<link href="'+baseUrl+'static/css/style.css" rel="stylesheet" type="text/css" media="print" />');
			docprint.document.write('</head><body  style="background:white" ><b>'); 			 
			docprint.document.write(content_title+"</b></br></br>"); 
			docprint.document.write(content_body); 
			docprint.document.write('</body></html>'); 
			docprint.print(); 
			docprint.document.close(); 
			docprint.close(); 
		}catch(e){
			console.log("Error" + e);
		}
	}
	function MailThisPage()	{			
		mail_str = "mailto:?subject=Thought this might interest you: " + document.title;
		mail_str += "&body=I thought you might be interested in this: " + document.title;
		mail_str += ". %0A%0AYou can view it at, "+ encodeURIComponent(location.href); 
		//location.href = mail_str;
		 popUp(mail_str,'InternetBankingLogin',800,730,0,0,0,1,0,-1,-1);
	}
/*print and mail*/



	
$(document).ready(function(){
	/** menu js start **/
	window.prettyPrint && prettyPrint()
	$(document).on('click', '.yamm .dropdown-menu', function(e) {e.stopPropagation()});
	/** menu js end **/
	
		/*border-left:1px solid #A5D6E7;border-right:1px solid #A5D6E7;*/
	//$(document).find('.contentTable').parent().css('border-left','1px solid #A5D6E7');
	//$(document).find('.contentTable').parent().css('border-right','1px solid #A5D6E7');
	
	/*Font size increaser (zoomer)*/
	var counter=0;
	$('.belowNormal').click(function (){
		if(counter > -5){
			$("#viewSectionContent *").each(function(){
				$(this).css({'font-size':(parseInt($(this).css("font-size"))-1) + "px"});	
				//$(this).css({'font-size': '12px'});	
			});
			$("#main-content *").each(function(){
				$(this).css({'font-size':(parseInt($(this).css("font-size"))-1) + "px"});	
				//$(this).css({'font-size': '12px'});	
			});
			counter=counter-1;
		}
	});
	
	$('.normalFont').click(function (){
		$("#viewSectionContent *").each(function(){
			$(this).css({'font-size':(parseInt($(this).css("font-size"))-counter) + "px"});	
			//$(this).css({'font-size':"16px"});	
		});
		$("#main-content *").each(function(){
			$(this).css({'font-size':(parseInt($(this).css("font-size"))-counter) + "px"});	
			//$(this).css({'font-size':"16px"});	
		});
		counter=0;
	});
	
	$('.aboveNormal').click(function (){
		if(counter < 5){
			$("#viewSectionContent *").each(function(){
					$(this).css({'font-size':(parseInt($(this).css("font-size"))+1) + "px"});
					//$(this).css({'font-size':"18px"});
			});
			$("#main-content *").each(function(){
					$(this).css({'font-size':(parseInt($(this).css("font-size"))+1) + "px"});
					//$(this).css({'font-size':"18px"});
			});
			counter=counter+1;
		}
	});
/*Font size increaser (zoomer)*/

	
	
	$(document).find("#viewSectionContent").find('a').each(function(){
		var that = $(this);
		var strText = that.text().trim();
		if(strText=="Apply Online" || strText=="ऑनलाइन आवेदन"){
			that.addClass("denaButton");
			that.text(strText);
		}
	});
	/*Ritesh Function Start */
	
	//$('[data-toggle="tooltip"]').tooltip();	
	/*Ritesh Function End*/
	
	var globalHeight = 0;
	var hideMenuElements = function(){
		if($(window).width()<993 && $(document).find('.anylinkmenucols').css('display') != "none" ){
			$(document).find('.anylinkmenucols').hide();
			$(document).find('.anylinkshadow').hide();
		}else if($(window).width()>=993){
			$(document).find('.anylinkmenucols').show();
			$(document).find('.anylinkshadow').show();
		}
	};
	
	var containerHeight = function(){
		var epollElement = $(document).find("#epollframe");
		if(epollElement.length>0){
			var wW = $(window).width();
			if(wW < 318 && wW >= 239 ){
				epollElement.height(2280);
			}else if(wW < 369 && wW >= 319 ){
				epollElement.height(2280);
			}else if(wW < 399 && wW >= 370 ){
				epollElement.height(1910);
			}else if(wW < 435 && wW >= 400 ){
				epollElement.height(1755);
			}else if(wW < 480 && wW >= 435 ){
				epollElement.height(1650);
			}else if(wW < 550 && wW >= 481 ){
				epollElement.height(1590);
			}else if(wW < 600 && wW >= 551 ){
				epollElement.height(1450);
			}else if(wW < 650 && wW >= 601 ){
				epollElement.height(1440);
			}else if(wW < 750 && wW >= 651 ){
				epollElement.height(1335);
			}else if(wW < 800 && wW >= 751 ){
				epollElement.height(1320);
			}else if(wW < 900 && wW >= 801 ){
				epollElement.height(1300);
			}else{
				epollElement.height(1290);
			}
				
		}
		// 
	
		if($(document).find(".inner-pageleft").length>0 && $(document).find(".inner-pageright").length>0){
			$('.inner-pageright').css('height','');
			
			var rH = parseInt($('.inner-pageright').height());
			var lH = parseInt($('.inner-pageleft').height());
			if(globalHeight != rH+10){
				if(rH > lH && $(window).width() >= 993 ){
					globalHeight = parseInt(rH)+10;
				}else if($(window).width() < 993 ){
					globalHeight = parseInt(rH)+10;
				}else{
					globalHeight = parseInt(lH)+10;
				}
				$('.inner-pageright').height(globalHeight);
			}
		}
	};
	$(window).bind("load resize", function(){
		containerHeight();
		hideMenuElements();
	});
	//added on 19-09 by  prateek
	$('#PrintPage').click(PrintPage);
	$('#MailThisPage').click(MailThisPage);
	$('#dena').click(function () {
       document.location.href = "https://www.karvyonline.com/";
    });
	//added on 20-9-17 by prateek (for CSP issues in search )
	$('#searchform1,#searchform2').submit(function () {
		return chkValS();
    });
	$('#searchStr,#searchStr1').focus(doBlank);
	$('#searchStr,#searchStr1').blur(fillDefault);
});


//encode
$(document).on('keyup paste', 'input[type=text],textarea',function(e){
	var that = $(this);
	var value = $(this).val();
	var newvalue = '';
	if(e.type !== 'paste'){
		newvalue = value.substring(0, value.length - 1);
		value = value.slice(-1);
		var encodedInputString=escape(value);	
		encodedInputString=encodedInputString.replace("+", "%2B");
		encodedInputString=encodedInputString.replace("/", "%2F");
		encodedInputString=encodedInputString.replace("%20", " ");
		$(this).val(newvalue+encodedInputString);
	}else{
		that.val('');
		setTimeout(function(){that.val('');},1000);
	}
});

// Right Click Disabled
$(document).on("contextmenu",function(e){        
   e.preventDefault();
   alert('Right Click Disabled');
});
//denaConnectPersonal
//denaConnectCorporate
$(document).on("click",'.denaConnectPersonal',function(e){
   e.preventDefault();
   popUp('https://www.denaiconnect.co.in/corp/BANKAWAY?Action.RetUser.Init.001=Y&AppSignonBankId=018&AppType=corporate','InternetBankingLogin',800,730,0,0,0,1,0,-1,-1);
});
$(document).on("click",'.denaConnectCorporate',function(e){
   e.preventDefault();
   popUp('https://www.denaiconnect.co.in/corp/BANKAWAY?Action.CorpUser.Init.001=Y&AppSignonBankId=018&AppType=corporate','InternetCorporateBankingLogin',800,730,0,0,0,1,0,-1,-1);
});
// inspect element disabled
$(document).keydown(function(event){
	if(event.keyCode==123){
		return false;
	}else if(event.ctrlKey && event.shiftKey && event.keyCode==73){        
		return false;  //Prevent from ctrl+shift+i
	}else if(event.ctrlKey && event.keyCode==86){        
		alert("Pasting is Disabled")
		return false;  //Prevent from ctrl+shift+i
	}
});
$(document).on("click",'.nortonsealLink',function(e){
    u1 = "https://trustsealinfo.websecurity.norton.com/splash?form_file=fdf/splash.fdf&dn=www.denabank.com&lang=en";
    tbar = "location=yes,status=yes,resizable=yes,scrollbars=yes,width=560,height=500";
    var sw = window.open(u1, 'VRSN_Splash', tbar);
    if (sw) {
        sw.focus();
    }
	return;
});

$(document).on("click",'.achecker',function(e){
	popUp('http://achecker.ca/checker/index.php?uri=referer&amp;gid=WCAG2-AA','DenaBank',800,730,0,0,0,1,0,-1,-1);
	return;
});

$(document).on("click",'.ipv6Test',function(e){
	popUp('http://ipv6-test.com/validate.php?url=referer','DenaBank',800,730,0,0,0,1,0,-1,-1);
	return;
});
$(document).on("click",'.nseindia',function(e){
	popUp('http://www.nseindia.com/companytracker/cmtracker.jsp?symbol=DENABANK','DenaBank',800,730,0,0,0,1,0,-1,-1);
	return;
});
// for Qip agree/not agree 
$(document).on("click", '#showhidetbl', function (e) {
        if (document.getElementById("confirmyes").checked == true) {
            document.getElementById("divyes").style.display = "block";
            document.getElementById("divno").style.display = "none";
        }
        else {
            document.getElementById("divyes").style.display = "none";
            document.getElementById("divno").style.display = "block";
        }
    });
//unclaimed deposit track
function formCheck() {
    if (document.getElementById('txtname').value == "") {
        alert("Please Enter your name.");
        document.getElementById('txtname').focus();
        return false;
    }
}

