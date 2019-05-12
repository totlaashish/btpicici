var n_SEL_1 = 0;
var n_SEL_2 = 0;
var n_SEL_3 = 0;
var n_SEL_4 = 0;
var n_SEL_5 = 0;

function Click3()
{
if(n_SEL_2==1)
{
slide('div_5', 'step5_4', 'step3_4', 'OPT_3', 'saFul');
}
else
{
slide('div_4', 'step4_4', 'step3_4', 'OPT_3', 'saFul');
}
}

function fn_Option_SEL_1(){
	for (var i=0; i < document.theForm.OPT_1.length; i++){
		   if(document.theForm.OPT_1[i].checked){
		   		n_SEL_1 = parseInt(i) + 1;
				//var rad_val = theForm.OPT_1[i].value;
			}
	}

}


function fn_Option_SEL_2(){
	for (var i=0; i < document.theForm.OPT_2.length; i++){
		   if(document.theForm.OPT_2[i].checked){
		   		if (i == 1)
				{
		   			//document.getElementById("div_OPT_4").style.display = "block";
					}
		   		else{
		   			//document.getElementById("div_OPT_4").style.display = "none";
		   			n_SEL_4 = 0;
		   		}
		   		n_SEL_2 = parseInt(i) + 1;
			}
	}
}

function fn_Option_SEL_3(){
	for (var i=0; i < document.theForm.OPT_3.length; i++){
		   if(document.theForm.OPT_3[i].checked){
		   		n_SEL_3 = parseInt(i) + 1;
			}
	}
}

function fn_Option_SEL_4(){
	for (var i=0; i < document.theForm.OPT_4.length; i++){
		   if(document.theForm.OPT_4[i].checked){
		   		n_SEL_4 = parseInt(i) + 1;
			}
	}
}

function fn_Option_SEL_5(){
	for (var i=0; i < document.theForm.OPT_5.length; i++){
		   if(document.theForm.OPT_5[i].checked){
		   		n_SEL_5 = parseInt(i) + 1;
			}
	}
	fn_PRODUCT_DISPLAY();
}

function fn_RESET(){
	n_SEL_1 = 0;
	n_SEL_2 = 0;
	n_SEL_3 = 0;
	n_SEL_4 = 0;
	n_SEL_5 = 0;
}

function fn_PRODUCT_DISPLAY(){
	if ( (n_SEL_1 == 5) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//document.getElementById("div_6_1").style.display = "block";
		//alert('SEAFARER::NRE savings account');
		slide('div_6_2', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('SEAFARER::NRE savings account');
		slide('div_6_2', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('SEAFARER::NRE savings account');
		slide('div_6_2', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 1) && (n_SEL_5 == 1) ){
		//alert('SEAFARER::NRE Fixed deposit;Rupee Plus Plan');
		slide('div_6_11', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && ((n_SEL_4 == 1) || (n_SEL_4 == 2)) && ((n_SEL_5 == 1) || (n_SEL_5 == 2)) ){
		//document.getElementById("div_6_2").style.display = "block";
		//alert('SEAFARER::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && ((n_SEL_4 == 1) || (n_SEL_4 == 2)) && ((n_SEL_5 == 1) || (n_SEL_5 == 2)) ){
		//alert('SEAFARER::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('SEAFARER::NRE savings account');
		slide('div_6_2', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('SEAFARER::NRE savings account');
		slide('div_6_2', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('SEAFARER::NRE savings account');
		slide('div_6_2', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 2) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('SEAFARER::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && ((n_SEL_4 == 1)||(n_SEL_4 == 2)) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('SEAFARER::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && ((n_SEL_4 == 1)||(n_SEL_4 == 2)) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('SEAFARER::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('SEAFARER::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('SEAFARER::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('SEAFARER::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 1) && (n_SEL_5 == 2) ){
		//alert('SEAFARER::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && ((n_SEL_4 == 1)||(n_SEL_4 == 2)) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('SEAFARER::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && ((n_SEL_4 == 1)||(n_SEL_4 == 2)) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('SEAFARER::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('SEAFARER::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('SEAFARER::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('SEAFARER::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 2) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('SEAFARER::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && ((n_SEL_4 == 1)||(n_SEL_4 == 2)) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('SEAFARER::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 5) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && ((n_SEL_4 == 1)||(n_SEL_4 == 2)) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('SEAFARER::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('HIGHER STUDIES::NRE savings account for students');
		slide('div_6_10', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('HIGHER STUDIES::NRE savings account for students');
		slide('div_6_10', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('HIGHER STUDIES::NRE savings account for students');
		slide('div_6_10', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 1) && (n_SEL_5 == 1)){
		//alert('HIGHER STUDIES::NRE fixed deposit');
		slide('div_6_5', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 1) && (n_SEL_5 == 1)){
		//alert('HIGHER STUDIES::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 1) && (n_SEL_5 == 1)){
		//alert('HIGHER STUDIES::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 1)){
		//alert('HIGHER STUDIES::NRE savings account for students');
		slide('div_6_10', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 1)){
		//alert('HIGHER STUDIES::NRE savings account for students');
		slide('div_6_10', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 1)){
		//alert('HIGHER STUDIES::NRE savings account for students');
		slide('div_6_10', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 2) && ((n_SEL_5 == 1) || (n_SEL_5 == 2))){
		//alert('HIGHER STUDIES::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 2) && (n_SEL_5 == 1) ){
		//alert('HIGHER STUDIES::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 2) && (n_SEL_5 == 1) ){
		//alert('HIGHER STUDIES::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('HIGHER STUDIES::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('HIGHER STUDIES::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('HIGHER STUDIES::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 1) && (n_SEL_5 == 2) ){
		//alert('HIGHER STUDIES::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 1) && (n_SEL_5 == 2) ){
		//alert('HIGHER STUDIES::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 1) && (n_SEL_5 == 2) ){
		//alert('HIGHER STUDIES::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('HIGHER STUDIES::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('HIGHER STUDIES::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('HIGHER STUDIES::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 2) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('HIGHER STUDIES::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 2) && (n_SEL_5 == 2) ){
		//alert('HIGHER STUDIES::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 4) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 2) && (n_SEL_5 == 2) ){
		//alert('HIGHER STUDIES::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Overseas Assignment::NRE savings account < special benefits for employees of select corporates>');
		slide('div_6_3', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Overseas Assignment::NRE savings account < special benefits for employees of select corporates>');
		slide('div_6_3', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Overseas Assignment::NRE savings account < special benefits for employees of select corporates>');
		slide('div_6_3', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 1) && (n_SEL_5 == 1) ){
		//alert('Overseas Assignment::NRE fixed deposit, NRE Recurring deposit');
		slide('div_6_12', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 1) && (n_SEL_5 == 1) ){
		//alert('Overseas Assignment::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 1) && (n_SEL_5 == 1) ){
		//alert('Overseas Assignment::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Overseas Assignment::NRE savings account &lt; special benefits for employees of select corporates &gt;');
		slide('div_6_3', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Overseas Assignment::NRE savings account &lt; special benefits for employees of select corporates &gt;');
		slide('div_6_3', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Overseas Assignment::NRE savings account &lt; special benefits for employees of select corporates &gt;');
		slide('div_6_3', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 2) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('Overseas Assignment::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 2) && (n_SEL_5 == 1) ){
		//alert('Overseas Assignment::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 2) && (n_SEL_5 == 1) ){
		//alert('Overseas Assignment::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Overseas Assignment::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Overseas Assignment::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Overseas Assignment::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 1) && (n_SEL_5 == 2) ){
		//alert('Overseas Assignment::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 1) && (n_SEL_5 == 2) ){
		//alert('Overseas Assignment::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 1) && (n_SEL_5 == 2) ){
		//alert('Overseas Assignment::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Overseas Assignment::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Overseas Assignment::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Overseas Assignment::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 2) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('Overseas Assignment::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 2) && (n_SEL_5 == 2) ){
		//alert('Overseas Assignment::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 3) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 2) && (n_SEL_5 == 2) ){
		//alert('Overseas Assignment::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Plan to go abroad permanently::NRE savings account; NRI Edge NRE Savings account');
		slide('div_6_14', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Plan to go abroad permanently::NRE savings account; NRI Edge NRE Savings account');
		slide('div_6_14', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Plan to go abroad permanently::NRE savings account; NRI Edge NRE Savings account');
		slide('div_6_14', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 1) && (n_SEL_5 == 1) ){
		//alert('Plan to go abroad permanently::NRE fixed deposit, NRE Recurring deposit');
		slide('div_6_12', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 1) && (n_SEL_5 == 1) ){
		//alert('Plan to go abroad permanently::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 1) && (n_SEL_5 == 1) ){
		//alert('Plan to go abroad permanently::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Plan to go abroad permanently::NRE savings account; NRI Edge NRE Savings account');
		slide('div_6_14', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Plan to go abroad permanently::NRE savings account; NRI Edge NRE Savings account');
		slide('div_6_14', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Plan to go abroad permanently::NRE savings account; NRI Edge NRE Savings account');
		slide('div_6_14', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 2) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('Plan to go abroad permanently::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 2) && (n_SEL_5 == 1) ){
		//alert('Plan to go abroad permanently::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 2) && (n_SEL_5 == 1) ){
		//alert('Plan to go abroad permanently::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Plan to go abroad permanently::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Plan to go abroad permanently::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Plan to go abroad permanently::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 1) && (n_SEL_5 == 2) ){
		//alert('Plan to go abroad permanently::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 1) && (n_SEL_5 == 2) ){
		//alert('Plan to go abroad permanently::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 1) && (n_SEL_5 == 2) ){
		//alert('Plan to go abroad permanently::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Plan to go abroad permanently::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Plan to go abroad permanently::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Plan to go abroad permanently::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 2) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('Plan to go abroad permanently::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 2) && (n_SEL_5 == 2) ){
		//alert('Plan to go abroad permanently::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 2) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 2) && (n_SEL_5 == 2) ){
		//alert('Plan to go abroad permanently::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Settled abroad::NRI Edge NRE savings account');
		slide('div_6_1', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Settled abroad::NRI Edge NRE savings account');
		slide('div_6_1', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Settled abroad::NRI Edge NRE savings account');
		slide('div_6_1', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 1) && (n_SEL_5 == 1) ){
		//alert('Settled abroad::Rupee Plus Plan');
		slide('div_6_8', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 1) && (n_SEL_5 == 1) ){
		//alert('Settled abroad::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 1) && (n_SEL_5 == 1) ){
		//alert('Settled abroad::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Settled abroad::NRI Edge NRE savings account');
		slide('div_6_1', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Settled abroad::NRI Edge NRE savings account');
		slide('div_6_1', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 1) ){
		//alert('Settled abroad::NRI Edge NRE savings account');
		slide('div_6_1', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 2) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('Settled abroad::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 2) && (n_SEL_5 == 1) ){
		//alert('Settled abroad::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 2) && (n_SEL_5 == 1) ){
		//alert('Settled abroad::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Settled abroad::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Settled abroad::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Settled abroad::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 1) && (n_SEL_5 == 2) ){
		//alert('Settled abroad::NRO fixed deposit');
		slide('div_6_6', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 1) && (n_SEL_5 == 2) ){
		//alert('Settled abroad::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 1) && (n_SEL_5 == 2) ){
		//alert('Settled abroad::NRO fixed deposit, NRO Recurring deposit');
		slide('div_6_13', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 1) && (n_SEL_3 == 1) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Settled abroad::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 1) && (n_SEL_3 == 2) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Settled abroad::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 1) && (n_SEL_3 == 3) && (n_SEL_4 == 0) && (n_SEL_5 == 2) ){
		//alert('Settled abroad::NRO Savings');
		slide('div_6_4', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 2) && (n_SEL_3 == 1) && (n_SEL_4 == 2) && ((n_SEL_5 == 1)||(n_SEL_5 == 2)) ){
		//alert('Settled abroad::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 2) && (n_SEL_3 == 2) && (n_SEL_4 == 2) && (n_SEL_5 == 2) ){
		//alert('Settled abroad::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}
	else if ( (n_SEL_1 == 1) && (n_SEL_2 == 2) && (n_SEL_3 == 3) && (n_SEL_4 == 2) && (n_SEL_5 == 2) ){
		//alert('Settled abroad::FCNR');
		slide('div_6_7', 'step6_4', 'step5_4', 'OPT_5', 'saYes');
	}else{
		//alert("NONE OF the ABOVE");
	}
}

 

function fnDIVVis(objOBJ){
			document.getElementById("div_100").style.display = 'none';
			document.getElementById("div_200").style.display = 'none';
			document.getElementById("div_300").style.display = 'none';
			document.getElementById("div_400").style.display = 'none';
			document.getElementById("div_500").style.display = 'none';
			document.getElementById("div_600").style.display = 'none';
			document.getElementById("div_700").style.display = 'none';
			document.getElementById("div_800").style.display = 'none';
			
	var objDIV;
	objDIV = document.getElementById( objOBJ );
	var vis;
	vis = objDIV.style;
	vis.display = 'block';
		
	var arr_RET = objOBJ.split("_");
	var n_ID = arr_RET[1]; 
	if (parseInt(n_ID) != NaN){
		var n_Q = n_ID/100;
//		alert('n_Q::' + n_Q)
		var n_R = n_Q%2;
//		alert('n_R::' + n_R + '::n_ID::' + n_ID)		
		if (n_R == 1){//ODD
			objDIV = document.getElementById( "div_"+ (parseInt(n_ID)+100) );
		}else{//EVEN
			objDIV = document.getElementById( "div_"+ (parseInt(n_ID)-100) );
		}
//		alert(objDIV);
		vis = objDIV.style;
		vis.display = 'none';		
	}
 	
}
 