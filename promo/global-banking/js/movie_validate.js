function submitform(Form) {
if((Form.name.value=="")||(Form.name.value=="Name")) {
alert("Kindly fill in your  Name!");
document.getElementById('name').focus();
return false;
}
else if(containsdigit(Form.name.value))
{
alert("Name Contains numeric!");
document.getElementById('name').focus();
return false;
}
else if(containswrong(Form.name.value))
{
alert("Name Contains junk!");
document.getElementById('name').focus();
return false;
}
else if((Form.countryCode.value=="")||(Form.countryCode.value=="001")) {
alert("Kindly fill in your country Code!");
document.getElementById('countryCode').focus();
return false;
}	
else if((containsalpha(Form.countryCode.value))||(containswrong(Form.countryCode.value)))
{
alert("Please enter only numerics in country code!");
document.getElementById('countryCode').focus();
return false;
}


else if((Form.phone.value=="")||(Form.phone.value=="Phone Number")) {
alert("Kindly fill in your mobile number!");
document.getElementById('phone').focus();
return false;
}	
else if((containsalpha(Form.phone.value))||(containswrong(Form.phone.value)))
{
alert("Please enter only numerics in mobile number!");
document.getElementById('phone').focus();
return false;
}
else if((Form.altcountryCode.value=="")||(Form.altcountryCode.value=="001")) {
alert("Kindly fill in your country Code in alternate field!");
document.getElementById('altcountryCode').focus();
return false;
}	
else if((containsalpha(Form.altcountryCode.value))||(containswrong(Form.altcountryCode.value)))
{
alert("Please enter only numerics in country code!");
document.getElementById('altcountryCode').focus();
return false;
}

else if((Form.altphone.value=="")||(Form.altphone.value=="Phone Number")) {
alert("Kindly fill in your mobile number!");
document.getElementById('altphone').focus();
return false;
}	
else if((containsalpha(Form.altphone.value))||(containswrong(Form.altphone.value)))
{
alert("Please enter only numerics in mobile number!");
document.getElementById('altphone').focus();
return false;
}

else if((Form.email.value=="") || (Form.email.value=="globalbanking@icicibank.com")){
alert("Kindly fill in your email!");
document.getElementById('email').focus();
return false;
} 
else if((Form.email.value!='') && (validateemailv2(Form.email.value)==false)){
alert("Enter Valid Email ID!");
document.getElementById('email').focus();
return false;
}  
else if((Form.product.value=="") || (Form.product.value=="Product")){
alert("Kindly fill in product!");
document.getElementById('product').focus();
return false;
} 

else if((Form.city.value=="")||(Form.city.value=="City")){
alert("Kindly fill in city!");
document.getElementById('city').focus();
return false;
}
else if((Form.state.value=="")||(Form.state.value=="State")){
alert("Kindly fill in state!");
document.getElementById('state').focus();
return false;
}




else if(Form.timeDrpDwn.value=="-1"){
alert("Kindly select convenient time to call back!");
return false;
}


else {
Form.submit();
}

}	// end of function submitform

function containsalpha(param){
strLen = param.length;

for(i=0;i<strLen;i++)
{
if((param.charAt(i)<"0") || (param.charAt(i)>"9"))
{
return true;
}
}
return false;

} // end of containsalpha


function containsdigit(param){
strLen = param.length;

for(i=0;i<strLen;i++)
{
if((param.charAt(i)=="0") || (param.charAt(i)=="1") || (param.charAt(i)=="2") || (param.charAt(i)=="3") || (param.charAt(i)=="4") || (param.charAt(i)=="5") || (param.charAt(i)=="6") || (param.charAt(i)=="7") || (param.charAt(i)=="8") || (param.charAt(i)=="9"))
{
return true;
}
}
return false;

} // end of function containsdigit

function containswrong(param){
strLen1 = param.length;

for(i=0;i<strLen1;i++)
{
if((param.charAt(i)==";") || (param.charAt(i)=="=") || (param.charAt(i)=="+") || (param.charAt(i)=="*") || (param.charAt(i)=="#") || (param.charAt(i)=="$") || (param.charAt(i)=="%") || (param.charAt(i)=="^") || (param.charAt(i)=="?") || (param.charAt(i)=="@")||(param.charAt(i)=="/") || (param.charAt(i)=="<") || (param.charAt(i)==">")|| (param.charAt(i)=="-") || (param.charAt(i)=="~"))
{
return true;
}
}
return false;
}



function validateemailv2(email){
var splitted = email.match("^(.+)@(.+)$");
if(splitted == null) return false;
if(splitted[1] != null )
{
var regexp_user=/^\"?[\w-_\.]*\"?$/;
if(splitted[1].match(regexp_user) == null) return false;
}
if(splitted[2] != null)
{
var regexp_domain=/^[\w-\.]*\.[a-za-z]{2,4}$/;
if(splitted[2].match(regexp_domain) == null)
{
var regexp_ip =/^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/;
if(splitted[2].match(regexp_ip) == null) return false;
}
return true;
}
return false;
} 