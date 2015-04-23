<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1"><link href="css/style.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/jquery-1.10.2.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery.leanModal.min.js" type="text/javascript" type="text/javascript"></script>
    <title>
	Home Page
</title></head>
<body>
    <div id="topbar"><font color="white" size="+1">EXXONMOBIL STAFF COOPERATIVE MULTIPURPOSE SOCIETY LTD</font></div>
     <br>
     <br>
  <div id="address"></div>
  <div id="w">
    <div id="content">
      <h1></h1>
      <p align="center">Please click on the button below to login</p>
      <center><a href="#loginmodal" class="flatbtn" id="btnmember">Login as Member</a></center>
      <p></p>
      <center><a href="staff/login.aspx" class="flatbtn" id="btnstaff">Login As Staff</a></center>
      <div class="alert-box error" id="ebox"></div>
      <p></p>
    </div>
  </div>
  <div id="loginmodal" style="display:none; background-color:#000000">
      <h1><font color="white" size="+2">Member Login</font></h1>
      <font color="white" size="2+">Member ID or Email:</font>
      <input type="text" name="txtemail" id="txtemail" class="txtfield" tabindex="2">
      <font color="white" size="2+">PIN:</font>
      <input type="password" name="password" id="password" class="txtfield" tabindex="2">
      <p></p>
      <div class="center"><input type="submit" name="loginbtn" id="loginbtn" class="flatbtn" value="Log In" tabindex="3"></div>       
      <p></p>
      <center><a href="members/register.aspx" class="flatbtn" id="btnregister">Register Here</a></center>
      <p></p>
      <div align="center"><a href="#forgotpassword" onclick="hideform()" id="fpwd"><font color="white" size="1+">Reset Password?</font></a></div>
  </div>

  <div id="forgotpassword" style="display:none; background-color:#000000">
    <h1><font color="white" size="+2">Reset Password Module</font></h1>
    <div align="center"><font color="white" size="2+">Please type your email address or Member ID here:</font></div>
    <br>
     <div align="center"><input type="text" name="txtmail" id="txtmail" class="txtfield"></div>
     <div align="center"><input type="submit" name="btnsend" id="btnsend" onclick="retpassword();" class="flatbtn-blu hidemodal" value="Send"></div>
  </div>

<script type="text/javascript">
    $('#btnmember').leanModal({ top: 10, overlay: 0.45, closeButton: ".hidemodal" });
</script>

<div id="footer" align="center"><img src="images/ExxonMobil.png" /></div>
</body>
</html>
