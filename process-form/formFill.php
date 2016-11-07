<?php

//turn all errors on
error_reporting(E_ALL);
ini_set('display_errors', 1);

require __DIR__.'/vendor/autoload.php';
//load php-pdftk library
use mikehaertl\pdftk\Pdf;

$errors = "";
$upload_dir = 'uploads/';
$max_allowed_file_size = 5000; // size in KB
$allowed_extensions = array('pdf', 'doc', 'rtf', 'txt');
$pdftkPath = "/usr/bin/pdftk";
$toEmail = 'hr@methodistsports.com';
$toName = 'Methodist Sports Medicine HR';
//printPost();
//dump post data for debug
//echo '<br />Post Data:<br />';
//var_dump($_POST);
//echo '<br />File Data:<br />';
//var_dump($_FILES);

//run the form data merge if firstName and lastName are set in POST
if (isset($_POST['firstName']) && isset($_POST['lastName'])) {
    $pdfFileName = preg_replace('/[^a-zA-Z0-9]+/', '', $_POST['firstName']).'-'.preg_replace('/[^a-zA-Z0-9]+/', '', $_POST['lastName']).time().'.pdf';
    $resultPDF = __DIR__.'/results/filled'.$pdfFileName;
    $pdf = new Pdf('/template/employmentApplicationTemplate.pdf');
   $pdf->fillForm($_POST)
      ->saveAs($resultPDF);
    //echo "pdferror: " . $pdf->getError();
    if (is_uploaded_file($_FILES['resumeFile']['tmp_name'])) {
        $target_file1 = $upload_dir.basename($_FILES['resumeFile']['name']);
        $target_file1_type = substr($target_file1, strrpos($target_file1, '.') + 1);
        $target_file1_size = $_FILES['resumeFile']['size'] / 1024;//size in KBs
        if ($target_file1_size > $max_allowed_file_size) {
            $errors .= "\n Size of file should be less than $max_allowed_file_size";
        }
        //------ Validate the file extension -----
        $allowed_ext = false;
        for ($i = 0; $i < sizeof($allowed_extensions); ++$i) {
            if (strcasecmp($allowed_extensions[$i], $target_file1_type) == 0) {
                $allowed_ext = true;
            }
        }

        if (!$allowed_ext) {
            $errors .= "\n The uploaded file is not supported file type. ".
            ' Only the following file types are supported: '.implode(',', $allowed_extensions);
        }
        //copy the temp. uploaded file to uploads folder
        $target_file1_uploadPath = $target_file1;
        $file1_tmp_path = $_FILES['resumeFile']['tmp_name'];
        if (is_uploaded_file($file1_tmp_path)) {
            if (!copy($file1_tmp_path, $target_file1_uploadPath)) {
                $errors .= '\n error while copying the uploaded file';
            } else {
                //echo 'File 1 Uploaded Success';
            }
        }
    } else {
        //echo '<br />File NOT found in file upload 1<br />';
        echo $errors;
    }
    $mail = new PHPMailer();
    $mail->isSendmail();
    $mail->setFrom('mailer@methodistsports.com', 'MSM Employment Application Mailer');
    $mail->addAddress($toEmail, $toName);
    $mail->Subject = 'New Employment Application Submission';
    $mail->msgHTML(file_get_contents('mail.html'), dirname(__FILE__));
    $mail->AltBody = 'This is a plain-text message body';
    $mail->addAttachment($resultPDF);
    if (is_uploaded_file($_FILES['resumeFile']['tmp_name'])) {
        $mail->addAttachment($target_file1_uploadPath);
    }
  //send the message, check for errors
  if (!$mail->send()) {
      echo 'Mailer Error: '.$mail->ErrorInfo;
  } else {
  	  if (is_writable($resultPDF)){
          unlink($resultPDF);
      }
      if (is_uploaded_file($_FILES['resumeFile']['tmp_name']) && is_writable($target_file1_uploadPath)) {
          unlink($target_file1_uploadPath);
      }
      //echo 'Message sent!';
      //echo "Message Sent!";
      echo "<script type='text/javascript'>location.href = 'http://methodistsports.com/forms/employment-application/success.html';</script>";
      //echo 'Mail Error:'.$mail->ErrorInfo;
  }
} else {
    echo 'Error: Post values not set.';
}
function printPost()
{
    echo'<table>';
    echo '<h1>Form Values:</h1><br>';
    foreach ($_POST as $key => $value) {
        echo '<tr>';
        echo '<td>';
        echo $key;
        echo '</td>';
        echo '<td>';
        echo $value;
        echo '</td>';
        echo '</tr>';
    }
    echo '</table>';
}
