<%@ Page Language="VB" AutoEventWireup="false" CodeFile="home.aspx.vb" Inherits="staff_home" %>
<!DOCTYPE html>
<meta http-equiv='X-UA-Compatible' content='IE=edge' />
<html xmlns="http://www.w3.org/1999/xhtml">

<head id="Head1" runat="server">

    <title>EMCOOP Approval Module Home Page</title>
    
    <link href="../css/style.css" rel="stylesheet" type="text/css" />
    <link href="../css/styles.css" rel="stylesheet" type="text/css" />
    
    <script id='sap-ui-bootstrap' type='text/javascript' src='../resources/sap-ui-core.js'
        data-sap-ui-theme='sap_bluecrystal'
        data-sap-ui-libs='sap.ui.commons,sap.ui.ux3,sap.ui.table'>
    </script>
    
    <script src="../navigation/staff_nav.js" type="text/javascript"></script>
    <script src="../Scripts/script.js" type="text/javascript"></script>

    <script>
        var oAppHeader = new sap.ui.commons.ApplicationHeader("appHeader");

        //configure the branding area
        oAppHeader.setLogoSrc("../images/dlogo.png");
        oAppHeader.setLogoText("EMCOOP APPROVAL MODULE HOME PAGE");

        //configure the welcome area
        oAppHeader.setDisplayWelcome(false);

        //configure the log off area
        oAppHeader.setDisplayLogoff(false);
        oAppHeader.placeAt("formheader");

        //Create Controls to be placed on the form
        //var aData = [{ "FullName": "HENRY OFOREH", "Category": "Coop Staff", "Email": "HENRYOFOREH", "Location": "Lagos", "RequestType": "Registration", "DateJoined": "4/1/2015"}]
        //alert(aData);
        //Create an instance of the table control
        var oTable = new sap.ui.table.Table({
              title: "Pending Requests",
              visibleRowCount: 7,
              firstVisibleRow: 3,
              selectionMode: sap.ui.table.SelectionMode.Single,
              toolbar: new sap.ui.commons.Toolbar({items:[]
            }),
            extension:[]
        });

        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({ text: "Full Name" }),
            template: new sap.ui.commons.TextField().bindProperty("value", "FullName"),
            sortProperty: "FullName",
            filterProperty: "FullName",
            width: "90%"
        }));
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({ text: "Category" }),
            template: new sap.ui.commons.TextField().bindProperty("value", "Category"),
            sortProperty: "Category",
            filterProperty: "Category",
            width: "90%"
        }));
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({ text: "Email" }),
            template: new sap.ui.commons.TextField().bindProperty("value", "Email"),
            sortProperty: "Email",
            filterProperty: "Email",
            width: "90%"
        }));
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({ text: "Location" }),
            template: new sap.ui.commons.TextField().bindProperty("value", "Location"),
            sortProperty: "Location",
            filterProperty: "Location",
            width: "90%"
        }));
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({ text: "Request Type" }),
            template: new sap.ui.commons.TextField().bindProperty("value", "RequestType"),
            sortProperty: "RequestType",
            filterProperty: "RequestType",
            width: "90%"
        }));
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({ text: "Date Joined" }),
            template: new sap.ui.commons.TextField().bindProperty("value", "DateJoined"),
            sortProperty: "DateJoined",
            filterProperty: "DateJoined",
            width: "90%"
        }));
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({ text: "    " }),
            template: new sap.ui.commons.CheckBox().bindProperty("checked", "approve"),
            sortProperty: "approve",
            filterProperty: "approve",
            width: "50%",
            hAlign: "Center"
        }));
//        oTable.addColumn(new sap.ui.table.Column({
//            label: new sap.ui.commons.Label({ text: "    " }),
//            template: new sap.ui.commons.CheckBox().bindProperty("checked", "viewDetails"),
//            sortProperty: "viewDetails",
//            filterProperty: "viewDetails",
//            width: "50%",
//            hAlign: "Center"
//       }));
        
   </script>
    <script src="../ScriptController/CallWebService.js" type="text/javascript"></script>
    <script src="../ScriptController/request_home.js" type="text/javascript"></script>
</head>

<body class="sapUiBody">
    <div id="formheader"></div>
    <div class="divleftmenu">
          <div id='cssmenu'>
              
          </div>
    </div>
    <div class="formdiv">
         <div id="content">
           
         </div>
         <div>
         </div>
    </div>
</body>
</html>