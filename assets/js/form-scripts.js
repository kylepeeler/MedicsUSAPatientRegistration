// Medics USA Patient Registation form
// Created by Kyle Peeler for Medics USA
// contact: kapeeler@iupui.edu

var FORM_ID = "MedicsUSAPatientReg";
var SHOWHIDDENFIELDS = false; //show all hidden fields

//main
$(document).ready(function() {
	var numberMedicationRows = 1;
	var numberAllergyRows = 1;

	function generateMedicationRows(numberRows){
	    if (numberRows > 0 && numberRows < 9) {
            $("#medicationTableBody").html("<tr>\
			<th scope='col'>#</th>\
		<th scope='col'>Medication</th>\
			<th scope='col'>Dosage</th>\
			<th scope='col'>Frequency</th>\
			</tr>");

            for (var i = 1; i <= numberRows; i++) {
                $("#medicationTableBody").append("<tr>\
				<td class='row-number'>" + i + "</td>\
				<td><input type='text' name='medicationAllergy" + i + "' class='form-control' placeholder='Medication'></td>\
				<td><input type='text' name='medicationDosage" + i + "' class='form-control' placeholder='Dosage'></td>\
				<td><input type='text' name='medicationFrequency" + i + "' class='form-control' placeholder='Frequency'></td>\
				</tr>");
            }
        }
	}

	generateMedicationRows(numberMedicationRows);
    $("#delete_medication_row").addClass("disabled");

    $("#add_medication_row").click(function(){
            if (numberMedicationRows > 0 && numberMedicationRows < 8) {
                numberMedicationRows++;
                generateMedicationRows(numberMedicationRows);
                if (numberMedicationRows === 8) {
                    $(this).addClass("disabled");
                }else{
                    $(this).removeClass("disabled");
                }
                if (numberMedicationRows > 1){
                    $("#delete_medication_row").removeClass("disabled");
                }
            }
    });

    $("#delete_medication_row").click(function(){
       if (numberMedicationRows > 1){
           numberMedicationRows--;
           generateMedicationRows(numberMedicationRows);
           if (numberMedicationRows === 1){
               $(this).addClass("disabled");
           }else{
               $(this).removeClass("disabled");
           }
           if (numberMedicationRows < 8){
               $("#add_medication_row").removeClass("disabled");
           }
       }
    });

    function generateAllergyRows(numberRows){
        if (numberRows > 0 && numberRows < 9) {
            $("#allergyTableBody").html("<tr>\
			<th scope='col'>#</th>\
		<th scope='col'>Allergy</th>\
			<th scope='col'>Reaction</th>\
			</tr>");

            for (var i = 1; i <= numberRows; i++) {
                $("#allergyTableBody").append("<tr>\
				<td class='row-number'>" + i + "</td>\
				<td><input type='text' name='allergy" + i + "' class='form-control' placeholder='Allergy'></td>\
				<td><input type='text' name='allergy" + i + "Reaction' class='form-control' placeholder='Reaction'></td>\
				</tr>");
            }
        }
    }

    generateAllergyRows(numberAllergyRows);
    $("#delete_allergy_row").addClass("disabled");

    $("#add_allergy_row").click(function(){
        if (numberAllergyRows > 0 && numberMedicationRows < 6) {
            numberAllergyRows++;
            generateAllergyRows(numberAllergyRows);
            if (numberAllergyRows === 6) {
                $(this).addClass("disabled");
            }else{
                $(this).removeClass("disabled");
            }
            if (numberAllergyRows > 1){
                $("#delete_allergy_row").removeClass("disabled");
            }
        }
    });

    $("#delete_allergy_row").click(function(){
        if (numberAllergyRows > 1){
            numberAllergyRows--;
            generateAllergyRows(numberAllergyRows);
            if (numberAllergyRows === 1){
                $(this).addClass("disabled");
            }else{
                $(this).removeClass("disabled");
            }
            if (numberAllergyRows < 6){
                $("#add_allergy_row").removeClass("disabled");
            }
        }
    });

	var $tabs = $('.tabbable li');

	"use strict";
	$("#captchaResponse").hide();
	$('.datepicker').datepicker({
		autoclose: true,
		changeMonth: true,
		changeYear: true
	});
	toggleYNResponse("resultOfAccidentInjury");
	toggleYNResponse("studentAthlete");
	toggleYNResponse("children");
	toggleYNResponse("tobacco");
	toggleYNResponse("alcohol");
	toggleYNResponse("tonsillectomy");
	toggleYNResponse("appendectomy");
	toggleYNResponse("gallbladderRemoval");
	toggleYNResponse("hysterectomy");
	toggleYNResponse("hernia");
	toggleYNResponse("spinalSurgery");
	toggleYNResponse("heartSurgery");
	toggleYNResponse("orthopedicSurgery1");
	toggleYNResponse("orthopedicSurgery2");
	toggleYNResponse("orthopedicSurgery3");
	toggleYNResponse("otherSurgery1");
	toggleYNResponse("otherSurgery2");
	toggleYNResponse("medicalRecordUpload");
	toggleYNResponse("ulcers");
	hideOnSelect("noMedications");
	hideOnSelect("noAllergies");
	hideOnSelect("raceEthnicityDecline");

	$('#tab_bar a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});


	$('#formSubmitButton').on('click', function() {
		submitForm(FORM_ID);
	});

	$('.prevtab').on('click', function() {
		$tabs.filter('.active').prev('li').find('a[data-toggle="tab"]').tab('show');
		window.scrollTo(0,0);
	});

	$('.nexttab').on('click', function() {
		$tabs.filter('.active').next('li').find('a[data-toggle="tab"]').tab('show');
		window.scrollTo(0,0);
	});

	$("#otherLanguageResponse").hide();
	$('#primaryLanguage').on('change', function (e) {
		var valueSelected = this.value;
		if (valueSelected == "Other"){
			$("#otherLanguageResponse").show(500);
		}
		if (valueSelected == "English"){
			$("#otherLanguageResponse").hide(500);
			$("#otherLanguageResponse").val("");
		}
	});




});


// function submitForm(form) {
//
// 	"use strict";
// 	var authPassed = true;
// 	var rsp = grecaptcha.getResponse();
// 	for (var n = 1; n <= 9; n++) {
// 		if (!$("#authorization" + n).prop('checked')) {
// 			authPassed = false;
// 		}
// 	}
// 	if ($("#firstName").val() === "") {
// 		$("#captchaResponse").addClass("alert-danger");
// 		$("#captchaMsg").text("Error:");
// 		$("#captchaFullMsg").text("You must fill the 'First Name' field before submitting.");
// 		$("#captchaResponse").fadeIn();
// 		return;
// 	} else if ($("#lastName").val() === "") {
// 		$("#captchaResponse").addClass("alert-danger");
// 		$("#captchaMsg").text("Error:");
// 		$("#captchaFullMsg").text("You must fill the 'Last Name' field before submitting.");
// 		$("#captchaResponse").fadeIn();
// 		return;
// 	} else if($("#programEligibilitySign").val() === ""){
// 		$("#captchaResponse").addClass("alert-danger");
// 		$("#captchaMsg").text("Error:");
// 		$("#captchaFullMsg").text("You must sign the 'Program Eligibility' section before submitting.");
// 		$("#captchaResponse").fadeIn();
// 		return;
// 	}else if($("#programEligibilitySignDate").val() === ""){
// 		$("#captchaResponse").addClass("alert-danger");
// 		$("#captchaMsg").text("Error:");
// 		$("#captchaFullMsg").text("You must date the 'Program Eligibility' section before submitting.");
// 		$("#captchaResponse").fadeIn();
// 		return;
// 	}else if (!authPassed) {
// 		$("#captchaResponse").addClass("alert-danger");
// 		$("#captchaMsg").text("Error:");
// 		$("#captchaFullMsg").text("You must check all of the authorizations before you can submit.");
// 		$("#captchaResponse").fadeIn();
// 		return;
// 	}else if($("#authorizationSign").val() === ""){
// 		$("#captchaResponse").addClass("alert-danger");
// 		$("#captchaMsg").text("Error:");
// 		$("#captchaFullMsg").text("You must sign the 'Authorization' section before submitting.");
// 		$("#captchaResponse").fadeIn();
// 		return;
// 	}else if($("#authorizationSignDate").val() === ""){
// 		$("#captchaResponse").addClass("alert-danger");
// 		$("#captchaMsg").text("Error:");
// 		$("#captchaFullMsg").text("You must date the 'Authorization' section before submitting.");
// 		$("#captchaResponse").fadeIn();
// 		return;
// 	} else if (rsp.length === 0) {
// 		$("#captchaResponse").addClass("alert-danger");
// 		$("#captchaMsg").text("Error:");
// 		$("#captchaFullMsg").text("You must complete the captcha below before you can submit.");
// 		$("#captchaResponse").fadeIn();
// 		return;
// 	} else {
// 		$('#MSMApplicationForm').fadeTo("fast", 0.5);
// 		$('#MSMApplicationForm').submit();
// 	}
// }

function hideOnSelect(id) {
	"use strict";
	//assume _yes and _no suffix are on each radio button
	//assume suffix _response following ID

	var input = $("#" + id);
	var responseDIV = $("#" + id + "_response");

	input.click(function() {
		if (input.prop('checked')) {
			responseDIV.hide(500);
			clearFormElements(responseDIV);
		}else{
			responseDIV.show(500);
		}
	});

}

function appendValue(name, value) {
	"use strict";
	var formToAppend = $("#" + FORM_ID);
	var node = $("<input>").prop("type", "hidden").prop("name", name).val(value);
	return formToAppend.append(node);

}

function toggleYNResponse(id) {
	"use strict";
	//assume _yes and _no suffix are on each radio button
	//assume suffix _response following ID

	var yesInput = $("#" + id + "_Yes");
	var noInput = $("#" + id + "_No");
	var responseDIV = $("#" + id + "_response");

	//hide on page load if not in debug mode
	if (SHOWHIDDENFIELDS !== true) {
		responseDIV.hide();
	}

	yesInput.click(function() {
		if (yesInput.prop('checked')) {
			responseDIV.show(500);
		}
	});

	noInput.click(function() {
		if (noInput.prop('checked')) {
			responseDIV.hide(500);
			clearFormElements(responseDIV);
		}
	});

}

function clearFormElements(selector) {
	"use strict";
	$(selector).find(':input').each(function() {
		switch (this.type) {
			case 'password':
			case 'text':
			case 'textarea':
			case 'file':
			case 'select-one':
				$(this).val('');
				break;
			case 'checkbox':
			case 'radio':
				this.checked = false;
		}
	});
}

function getFormattedDate(date) {
	"use strict";
	var year = date.getFullYear();
	var month = (1 + date.getMonth()).toString();
	month = month.length > 1 ? month : '0' + month;
	var day = date.getDate().toString();
	day = day.length > 1 ? day : '0' + day;
	return month + '/' + day + '/' + year;
}
