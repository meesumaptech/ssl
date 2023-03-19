function data()
{

	/*Details Start*/
	var marksheetno = document.getElementById('txtmarkno').value;
	var group = document.getElementById('txtgroup').value;
	var rollno = document.getElementById('txtrollno').value;
	var enrlno = document.getElementById('txtenrno').value;
	var name = document.getElementById('txtname').value;
	var father = document.getElementById('txtfather').value;
	var college = document.getElementById('txtcollege').value;


	document.getElementById('markno').innerHTML = marksheetno
	document.getElementById('grp').innerHTML = group
	document.getElementById('rollno').innerHTML = rollno
	document.getElementById('enr').innerHTML = enrlno
	document.getElementById('name').innerHTML = name
	document.getElementById('fathername').innerHTML = father
	document.getElementById('colg').innerHTML = college
	/*Detail End*/


	/*Marks Start*/
	var urdu = parseInt(document.getElementById('urdu').value);
	var english = parseInt(document.getElementById('english').value);
	var isl = parseInt(document.getElementById('islamiat').value);
	var cmp_th = parseInt(document.getElementById('computer-th').value);
	var cmp_pr = parseInt(document.getElementById('computer-pr').value);
	var phy_th = parseInt(document.getElementById('physics-th').value);
	var phy_pr = parseInt(document.getElementById('physics-pr').value);
	var mth = parseInt(document.getElementById('maths').value);


	document.getElementById('urdumarks').innerHTML = urdu
	document.getElementById('engmarks').innerHTML = english
	document.getElementById('islmarks').innerHTML = isl
	document.getElementById('cmpthmarks').innerHTML = cmp_th
	document.getElementById('cmpprmarks').innerHTML = cmp_pr
	document.getElementById('phythmarks').innerHTML = phy_th
	document.getElementById('phyprmarks').innerHTML = phy_pr
	document.getElementById('mathsmarks').innerHTML = mth


	/*Subject Percentages starts*/
	var urdu_per = urdu/100*100;
	var eng_per = english/100*100;
	var isl_per = isl/100*100;
	var cmp_per = cmp_pr+cmp_th/100*100;
	var phy_per = phy_pr+phy_th/100*100;
	var mth_per = mth/100*100;
	/*Subject Percentages Ends*/


	document.getElementById('urduper').innerHTML = urdu_per 
	document.getElementById('engper').innerHTML =  eng_per
	document.getElementById('islper').innerHTML = isl_per
	document.getElementById('cmpper').innerHTML = cmp_per
	document.getElementById('phyper').innerHTML = phy_per
	document.getElementById('mthper').innerHTML = mth_per

	alert(cmp_per)

	/*Marks End*/


}