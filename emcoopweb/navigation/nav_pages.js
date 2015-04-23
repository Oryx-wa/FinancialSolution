var ipaddress = "localhost";

function navpages(pagelink) 
{
    if(pagelink == 'home')
        window.location.href = "home.aspx";

    if (pagelink == 'admin home')
        window.location.href = "home.aspx";

    if (pagelink == 'admin outlets')
        window.location.href = "upload_outlets.aspx";

    if(pagelink=='fixed coverage')
      window.location.href = "fixed_coverage_plan.aspx";
	
    if(pagelink=='daily sales')
       window.location.href = "create_daily_sales.aspx";
	
    if(pagelink=='previous sales')
       window.location.href = "vew_prev_sales.aspx";
	
    if(pagelink=='outlet verification')
       window.location.href = "outlets_verification.aspx";
	
    if(pagelink=='export sales')
       window.location.href = "export_sales.aspx";
	
    if(pagelink=='upload outlets')
        window.location.href = "upload_outlets.aspx";

    if (pagelink == 'downloads')
        window.location.href = "downloads.aspx";
	
    if(pagelink=='user mgt')
       window.location.href = "user_management.aspx";
 }

 function sync()
 {
   window.location.href = "sync.aspx";
 }

 function showError(emsg)
 {
    $("#ebox").html("<span>error: </span>" + emsg);
    $("#ebox").show();
}

function showSuccess(emsg) 
{
  $("#sbox").html("<span>Success: </span>" + emsg);
  $("#sbox").show();
}

 function showError2(emsg) 
 {
    $("#ebox2").html("<span>error: </span>" + emsg + "<div align='right'><a href='' onclick='closebox()'><font color='black'>close</font></a></div>");
    $("#ebox2").show();
}

function showError3(emsg) {
    $("#ebox3").html("<span>error: </span>" + emsg + "<div align='right'><a href='' onclick='closebox()'><font color='black'>close</font></a></div>");
    $("#ebox3").show();
}

 $(document).click(function () 
 {
     $("#ebox").hide();
     $("#sbox").hide();
 });



