// JavaScript Document

var ids=new Array('cont1','cont2','cont3','cont4','cont5','cont6');
var tabs=new Array('tab1','tab2','tab3','tab4','tab5','tab6');
	function showCont(id,tab)
	{
		hidedivids();
		showdivs(id,tab);
	}
	function hidedivids()
	{
		for(i=0;i<ids.length;i++)
		{
			document.getElementById(ids[i]).style.display='none';
		}
		for(i=0; i<tabs.length; i++)
		{
			document.getElementById(tabs[i]).className='';
		}
	}
	
	 
	function showdivs(id,tab)
	{
		 
		document.getElementById('dataCont').innerHTML=document.getElementById(id).innerHTML;
		document.getElementById(tab).className='sel';
	}	
	
function togglecont(a,id)
	{
		document.getElementById(id).style.display=(document.getElementById(id).style.display =='none')? '':'none' ;
		a.innerHTML=(document.getElementById(id).style.display =='none') ? '<span class="flt plusExpIcon"></span>' : '<span class="flt minCollIcon"></span>';
	}
	function togglecont1(a,id)
{
	document.getElementById(id).style.display=(document.getElementById(id).style.display =='none')? '':'none' ;
	a.innerHTML=(document.getElementById(id).style.display =='none') ? '<span class="flt plusIcon"></span>' : '<span class="flt minusIcon"></span>';
}
	function togglecont2(a,id)
{
	document.getElementById(id).style.display=(document.getElementById(id).style.display =='none')? '':'none' ;
	a.innerHTML=(document.getElementById(id).style.display =='none') ? '<span class="flt expand"></span>' : '<span class="flt collapse"></span>';
}
function togglecont3(a,id)
{
	document.getElementById(id).style.display=(document.getElementById(id).style.display =='none')? '':'none' ;
	a.innerHTML=(document.getElementById(id).style.display =='none') ? '<span class="frt plusIcon"></span>' : '<span class="frt minusIcon"></span>';
}
	
function toggleTab(selTab,selCont,unselTab,UnselCont)
{
	document.getElementById(selTab).className='sel';
	document.getElementById(selCont).style.display='block';
	if(unselTab.length>0)
	{
		for(i=0; i<unselTab.length; i++)
		{
			document.getElementById(unselTab[i]).className='';
			document.getElementById(UnselCont[i]).style.display='none';
		}
	}
}
function showpop(obj,lyr,e)
{
	var coors = findPos(obj);
	var x = document.getElementById(lyr);
	if (lyr == "bankAccLyr")
	{		
		x.style.top = coors[1] + 8 + 'px';	
		x.style.left = coors[0] + -20 + 'px';
	}
	if (lyr == "moneyTrsLyr")
	{		
		x.style.top = coors[1] + 8 + 'px';	
		x.style.left = coors[0] + -20 + 'px';
	}
	if (lyr == "loansLyr")
	{		
		x.style.top = coors[1] + 8 + 'px';	
		x.style.left = coors[0] + -20 + 'px';
	}
	x.style.display = "block";
}

function hidepop(obj,lyr)
{
	var x = document.getElementById(lyr);
	x.style.display = "none";
	
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

function selCountry()
{
	var aa;
	aa=document.form1.selBox.options[document.form1.selBox.options.selectedIndex].value;
	location.href=aa;
	
	
	
}

function toggleNav(a,id)
	{
		document.getElementById(id).style.display=(document.getElementById(id).style.display =='none')? '':'none' ;
		a.innerHTML=(document.getElementById(id).style.display =='none') ? '<span class="flt expand"></span>' : '<span class="flt collapse"></span>';
	}
function togglesecNav(a,id)
	{
		document.getElementById(id).style.display=(document.getElementById(id).style.display =='none')? '':'none' ;
		a.innerHTML=(document.getElementById(id).style.display =='none') ? '<span class="frt plusIcon"></span>' : '<span class="frt minusIcon"></span>';
	}
	
function openPopUp(id,curtain){
	//alert(id)
	document.getElementById('curtain').style.display = 'block';
	 document.body.style.overflow = "hidden";
		var curtain = document.getElementById('curtain');
  			curtain.style.height = pHeight() + 'px';
	var frameheight = document.getElementById('pageContent').offsetHeight;
	document.getElementById('curtain').style.height = frameheight;
    document.getElementById(id).style.display = 'block';
   document.getElementById(id).style.marginLeft = (document.getElementById(id).clientWidth/2)*-1 + "px";
   /*  document.getElementById(id).style.marginTop = (document.getElementById(id).clientHeight/2)*-1 + "px";*/
    if(id == "exchangeRateCalc")
    {
        document.form1.fixRtAmt.value = '';
        document.form1.indRtAmt.value = '';
	}
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

function doCalc(){
	if (document.form1.r23[0].checked)
    {
      rad_val = document.form1.r23[0].value;
    }
    else if (document.form1.r23[1].checked)
    {
      rad_val = document.form1.r23[1].value;
    }
    if(rad_val == "indicative"){
        amt = document.form1.indRtAmt.value;
        document.getElementById('calculateFixed').style.display = 'none';
		document.getElementById('calculateIndicative').style.display = 'block';
        document.getElementById('exRateForm').style.display = 'none';
        document.form1.entAmt.value = amt;
        document.getElementById('trnsAmt').innerHTML = parseInt(amt)+2;
        indiAmt = Math.ceil(amt*46.41 - 25);
        document.getElementById('indAmt').innerHTML = indiAmt;
    }
    else{
        amt = document.form1.fixRtAmt.value;
        document.getElementById('calculateFixed').style.display = 'block';
        document.getElementById('calculateIndicative').style.display = 'none';
        document.getElementById('exRateForm').style.display = 'none';
        document.form1.fixAmt.value = amt;
        valueFixed = Math.ceil((parseInt(amt)+25)/46.89);
        document.getElementById('fixedAmt').innerHTML = valueFixed;
    }
}

function closePopup(id)
{document.body.style.overflow = "";
    document.getElementById('curtain').style.display = 'none';
    document.getElementById(id).style.display = 'none';
	if(id == "exchangeRateCalc")
    {
		window.location.reload(); 
	}
}
function closetable(id)
{
    document.getElementById(id).style.display = 'none';
 }

 
function showOptions(){
	if(document.form2.haveLoans[0].checked){
		rad_val = document.form2.haveLoans[0].value;
	}
	else if(document.form2.haveLoans[1].checked){
		rad_val = document.form2.haveLoans[1].value;
	}
	if(rad_val == 1){
		for(i=1;i<=4;i++){
			document.getElementById('haveLoans'+i).style.display = 'block';	
		}
	}
	else{
		for(i=1;i<=4;i++){
			document.getElementById('haveLoans'+i).style.display = 'none';	
		}	
	}
}

//----------------------script for ToolTips start------------------------------
function pw() 
{
	return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
} 
function mouseX(evt) 
{
	return evt.clientX ? evt.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) : evt.pageX;
} 
function mouseY(evt) 
{
	return evt.clientY ? evt.clientY + (document.documentElement.scrollTop || document.body.scrollTop) : evt.pageY
} 
function popUp(evt,oi) 
{
	if (document.getElementById) 
		{
				var wp = pw(); dm = document.getElementById(oi); ds = dm.style; st = ds.visibility; 
		if (dm.offsetWidth) ew = dm.offsetWidth; 
		else if (dm.clip.width) ew = dm.clip.width; 
		if (st == "visible" || st == "show") 
			{ 
				ds.visibility = "hidden"; 
			} 
		else 
		{
			tv = mouseY(evt) + 20; lv = mouseX(evt) - (ew/4); 
	
			if (lv < 2) lv = 2; 
			else if (lv + ew > wp) lv -= ew/2; lv += 'px';tv += 'px';  ds.left = lv; ds.top = tv; ds.visibility = "visible";
		}
	}
}
//----------------------script for ToolTips End------------------------------
 function changeimage(img_name,div_name)
   {
	   var str=document.getElementById(img_name).src;
	   str1="expendIcon.png";
	   str2=str.indexOf(str1)
	   if(str2 != "-1")
	   {
	   document.getElementById(img_name).src="images/collapseIcon.png";
	   document.getElementById(div_name).style.display="block";
	   }
	   else
	   {
	   document.getElementById(img_name).src ="images/expendIcon.png";
	   document.getElementById(div_name).style.display="none";
	   }
   }
/*function setHeight(){
document.getElementById("leftP").style.height = document.getElementById("rightP").clientHeight + "px";
}*/

function chooseList(){
	var e = document.getElementById("selectList"); 
	var strUser = e.options[e.selectedIndex].value; 
	 document.getElementById('savingAccount').style.display = 'none';
	 document.getElementById('depositAccount').style.display = 'none';
	 
	switch(strUser){
		case "1":
				 document.getElementById('savingAccount').style.display = 'block';
			  break;
		case "2":
				  document.getElementById('depositAccount').style.display = 'block';
				 break;
		 
	}	
}

function checkListshow(id1)
{
var check;
var check1;
var j=0;
  if(id1=="modtype")
	{
		check=document.f1.modtype;
		check1="div";
		 
		
	}
	else if(id1=="modtype1")
	{
		check=document.f1.modtype1;
		 check1="div"+1;
	}
	else if(id1=="modtype2")
	{
		check=document.f1.modtype2;
		check1="div"+2;
	}
	else if(id1=="modtype3")
	{
		check=document.f1.modtype3;
		check1="div"+3;
	}
 	i=0;

 for(var i;i<check.length;i++)
    { 
	   if(check[i].checked==true)
		 {
	      document.getElementById(check1+i).style.display='block';
		  j++;
		  
		 }
		 else
		 {
		document.getElementById(check1+i).style.display='none';
	  
		 }
 	}
	if(j==0)
	{
	alert("please select Option");
	}
} 

 function checkListhide(id1)
{
var check;
var check1;
    if(id1=="modtype")
		{
			check=document.f1.modtype;
			check1='div';
		}
		else if(id1=="modtype1")
	{
		check=document.f1.modtype1;
		 check1="div"+1;
	}
	else if(id1=="modtype2")
	{
		check=document.f1.modtype2;
		check1="div"+2;
	}
	else if(id1=="modtype3")
	{
		check=document.f1.modtype3;
		check1="div"+3;
	}
		i=0;
	 for(var i;i<check.length;i++)
		{ 
	   if(check[i].checked==true)
		 {
	      document.getElementById(check1+i).style.display='none';
		 }
	 }
}

function hideLayers(){
	if(document.getElementById('nearestDD').style.display == 'block')
		document.getElementById('nearestDD').style.display = 'none';
	if(document.getElementById('interestrateDD').style.display == 'block')
		document.getElementById('interestrateDD').style.display = 'none';
	if(document.getElementById('calculateDD').style.display == 'block')
		document.getElementById('calculateDD').style.display = 'none';
}
 
function testing(tabid,contid)
{
	window.location.href = 'e_transfer_fixed_rupee_uk.html';
	document.getElementById()
}
 
 
 //Open Newsletter (Popup Box)
 
 function opennewsletter(Title,url,width,height,style,closeimage)
	{
		
 		emailwindow=dhtmlmodal.open('EmailBox', closeimage, url, Title, 'width='+width+',height='+height+',center=1,resize=0,scrolling=1',style)
	emailwindow.onclose=function(){ 
	
 	var theform=this.contentDoc.forms[0]
 	var theemail=this.contentDoc.getElementById("emailfield") 
 	if (theemail.value.indexOf("@")==-1){ 
  		alert("Please enter a valid email address")
  		return false 
 	}
 	else{
  		document.getElementById("youremail").innerHTML=theemail.value 
  		return true 
 	}
  }
}
 
 
 function closeDiv(){
	document.getElementById('stickyFooter').style.display="none";
}


// for Tab indexing

var show_tab_id;
$(document).ready(function(){
	if(location.hash != "")
	{
		show_tab_id = location.hash;
		$(".tabs-container").hide();
		$(".tabs-nav li").removeClass('sel');
		$(".tabs-nav").find('a[href='+show_tab_id+']').parent().addClass('sel');
		$(show_tab_id).show();
	}
	else if(location.hash == "")
	{
		$(".tabs-container").hide();
		$(".tabs-container").eq(0).show();
		$(".tabs-nav li").eq(0).addClass('sel');
	}
	
	$(".tabs-nav a").click(function(event){
		show_tab_id = $(this).attr('href');
		$(".tabs-container").hide();
		$(".tabs-nav li").removeClass('sel');
		$(".tabs-nav").find('a[href='+show_tab_id+']').parent().addClass('sel');
		$(show_tab_id).show();
		//event.preventDefault();
	});
});