function hideOnSelect(e){"use strict";var t=$("#"+e),o=$("#"+e+"_response");t.click(function(){t.prop("checked")?(o.hide(500),clearFormElements(o)):o.show(500)})}function appendValue(e,t){"use strict";var o=$("#"+FORM_ID),a=$("<input>").prop("type","hidden").prop("name",e).val(t);return o.append(a)}function toggleYNResponse(e){"use strict";var t=$("#"+e+"_Yes"),o=$("#"+e+"_No"),a=$("#"+e+"_response");SHOWHIDDENFIELDS!==!0&&a.hide(),t.click(function(){t.prop("checked")&&a.show(500)}),o.click(function(){o.prop("checked")&&(a.hide(500),clearFormElements(a))})}function clearFormElements(e){"use strict";$(e).find(":input").each(function(){switch(this.type){case"password":case"text":case"textarea":case"file":case"select-one":$(this).val("");break;case"checkbox":case"radio":this.checked=!1}})}function getFormattedDate(e){"use strict";var t=e.getFullYear(),o=(1+e.getMonth()).toString();o=o.length>1?o:"0"+o;var a=e.getDate().toString();return a=a.length>1?a:"0"+a,o+"/"+a+"/"+t}var FORM_ID="MSMApplicationForm",SHOWHIDDENFIELDS=!1;$(document).ready(function(){function e(e){if(e>0&&9>e){$("#medicationTableBody").html("<tr>			<th scope='col'>#</th>		<th scope='col'>Medication</th>			<th scope='col'>Dosage</th>			<th scope='col'>Frequency</th>			</tr>");for(var t=1;e>=t;t++)$("#medicationTableBody").append("<tr>				<td class='row-number'>"+t+"</td>				<td><input type='text' name='medicationAllergy"+t+"' class='form-control' placeholder='Medication'></td>				<td><input type='text' name='medicationDosage"+t+"' class='form-control' placeholder='Dosage'></td>				<td><input type='text' name='medicationFrequency"+t+"' class='form-control' placeholder='Frequency'></td>				</tr>")}}function t(e){if(e>0&&9>e){$("#allergyTableBody").html("<tr>			<th scope='col'>#</th>		<th scope='col'>Allergy</th>			<th scope='col'>Reaction</th>			</tr>");for(var t=1;e>=t;t++)$("#allergyTableBody").append("<tr>				<td class='row-number'>"+t+"</td>				<td><input type='text' name='allergy"+t+"' class='form-control' placeholder='Allergy'></td>				<td><input type='text' name='allergy"+t+"Reaction' class='form-control' placeholder='Reaction'></td>				</tr>")}}var o=1,a=1;e(o),$("#delete_medication_row").addClass("disabled"),$("#add_medication_row").click(function(){o>0&&8>o&&(o++,e(o),8===o?$(this).addClass("disabled"):$(this).removeClass("disabled"),o>1&&$("#delete_medication_row").removeClass("disabled"))}),$("#delete_medication_row").click(function(){o>1&&(o--,e(o),1===o?$(this).addClass("disabled"):$(this).removeClass("disabled"),8>o&&$("#add_medication_row").removeClass("disabled"))}),t(a),$("#delete_allergy_row").addClass("disabled"),$("#add_allergy_row").click(function(){a>0&&6>o&&(a++,t(a),6===a?$(this).addClass("disabled"):$(this).removeClass("disabled"),a>1&&$("#delete_allergy_row").removeClass("disabled"))}),$("#delete_allergy_row").click(function(){a>1&&(a--,t(a),1===a?$(this).addClass("disabled"):$(this).removeClass("disabled"),6>a&&$("#add_allergy_row").removeClass("disabled"))});var l=$(".tabbable li");$("#captchaResponse").hide(),$(".datepicker").datepicker({autoclose:!0,changeMonth:!0,changeYear:!0}),toggleYNResponse("resultOfAccidentInjury"),toggleYNResponse("studentAthlete"),toggleYNResponse("children"),toggleYNResponse("tobacco"),toggleYNResponse("alcohol"),toggleYNResponse("tonsillectomy"),toggleYNResponse("appendectomy"),toggleYNResponse("gallbladderRemoval"),toggleYNResponse("hysterectomy"),toggleYNResponse("hernia"),toggleYNResponse("spinalSurgery"),toggleYNResponse("heartSurgery"),toggleYNResponse("orthopedicSurgery1"),toggleYNResponse("orthopedicSurgery2"),toggleYNResponse("orthopedicSurgery3"),toggleYNResponse("otherSurgery1"),toggleYNResponse("otherSurgery2"),toggleYNResponse("medicalRecordUpload"),toggleYNResponse("ulcers"),hideOnSelect("noMedications"),hideOnSelect("noAllergies"),hideOnSelect("raceEthnicityDecline"),$("#tab_bar a").click(function(e){e.preventDefault(),$(this).tab("show")}),$("#formSubmitButton").on("click",function(){submitForm(FORM_ID)}),$(".prevtab").on("click",function(){l.filter(".active").prev("li").find('a[data-toggle="tab"]').tab("show"),window.scrollTo(0,0)}),$(".nexttab").on("click",function(){l.filter(".active").next("li").find('a[data-toggle="tab"]').tab("show"),window.scrollTo(0,0)}),$("#otherLanguageResponse").hide(),$("#primaryLanguage").on("change",function(e){var t=this.value;"Other"==t&&$("#otherLanguageResponse").show(500),"English"==t&&($("#otherLanguageResponse").hide(500),$("#otherLanguageResponse").val(""))})});