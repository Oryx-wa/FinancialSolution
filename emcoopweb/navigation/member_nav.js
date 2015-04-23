
//Jquery code to interprete menu from xml file
$(document).ready(function () 
{
     var pageMenu = "";
     $.ajax({
         type: "POST",
         url: "home.aspx/LoadPageMenu",
         data: JSON.stringify({ 'RoleName': 'members' }),
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         async: false,
         cache: false,
         success: function (msg) {
            pageMenu = msg.d;
            $('#cssmenu').html(ParseMenu(pageMenu));
         },
         error: function (x, e) {alert(x.responseText);}
    });
 });

function ParseMenu(mnuvar) {
     return mnuvar;
}