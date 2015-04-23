<%@ Page Language="VB" AutoEventWireup="false" CodeFile="travel.aspx.vb" Inherits="members_travel" %>
<!DOCTYPE html>
<meta http-equiv='X-UA-Compatible' content='IE=edge' />
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Travel Programme</title>
    
    <link href="../css/style.css" rel="stylesheet" type="text/css" />
    <link href="../css/styles.css" rel="stylesheet" type="text/css" />
    
    <script id='sap-ui-bootstrap' type='text/javascript' src='../resources/sap-ui-core.js'
        data-sap-ui-theme='sap_bluecrystal'
        data-sap-ui-libs='sap.ui.commons,sap.ui.ux3'>
    </script>

    <script src="../navigation/member_nav.js" type="text/javascript"></script>
    <script src="../Scripts/script.js" type="text/javascript"></script>

    <script src="../ScriptController/ValidateData.js" type="text/javascript"></script>
    <script src="../ScriptController/travel.js" type="text/javascript"></script>
    <script src="../ScriptController/CallWebService.js" type="text/javascript"></script>

    <script>
        var oAppHeader = new sap.ui.commons.ApplicationHeader("appHeader");

        //configure the branding area
        oAppHeader.setLogoSrc("../images/dlogo.png");
        oAppHeader.setLogoText("TRAVEL WITH EASE PROGRAMME");

        //configure the welcome area
        oAppHeader.setDisplayWelcome(false);

        //configure the log off area
        oAppHeader.setDisplayLogoff(false);
        oAppHeader.placeAt("formheader");

        //Create Controls to be placed on the form

        //Name Label box
        var lblName = new sap.ui.commons.Label("LabelName");
        lblName.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Company label box
        var lblCompany = new sap.ui.commons.Label("LabelCompany");
        lblCompany.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Location label box
        var lblLocation = new sap.ui.commons.Label("LabelLocation");
        lblLocation.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Employee Number label box
        var lblEmployeeNo = new sap.ui.commons.Label("LabelEmployeeNo");
        lblEmployeeNo.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Sharp Number label box
        var lblSharpNo = new sap.ui.commons.Label("LabelSharpNo");
        lblSharpNo.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Telephone Number label box
        var lblTelephone = new sap.ui.commons.Label("LabelTelephoneNo");
        lblTelephone.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Email Address label box
        var lblEmail = new sap.ui.commons.Label("LabelEmailAddress");
        lblEmail.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Delivery Address Text Box
        var txtAddress = new sap.ui.commons.TextArea('Address');
        txtAddress.setValue("");
        txtAddress.setTooltip("House Address");
        txtAddress.setRows(3);

        //Loan Amount text Box
        var txtamount = new sap.ui.commons.TextArea('amount');
        txtamount.setTooltip("Amount");
        txtamount.setRows(3);

        //Re-payment Period Combo Box
        var cmbDeduction = new sap.ui.commons.ComboBox("Deduction");
        cmbDeduction.setTooltip("Deduction");
        cmbDeduction.setEditable(true);
        cmbDeduction.setWidth("200px");
        var oItem = new sap.ui.core.ListItem("Deduction0");
        oItem.setText("1 Month");
        cmbDeduction.addItem(oItem);
        var oItem = new sap.ui.core.ListItem("Deduction1");
        oItem.setText("2 Months");
        cmbDeduction.addItem(oItem);
        oItem = new sap.ui.core.ListItem("Deduction2");
        oItem.setText("3 Months");
        cmbDeduction.addItem(oItem);
        oItem = new sap.ui.core.ListItem("Deduction3");
        oItem.setText("4 Months");
        cmbDeduction.addItem(oItem);
        oItem = new sap.ui.core.ListItem("Deduction4");
        oItem.setText("5 Months");
        cmbDeduction.addItem(oItem);
        oItem = new sap.ui.core.ListItem("Deduction5");
        oItem.setText("6 Months");
        cmbDeduction.addItem(oItem);

        // Create Declaration CheckBox
        var oCB = new sap.ui.commons.CheckBox({
            text: '',
            tooltip: 'By checking this box, I authorize my company to deduct from my monthly salary the total charges dues on this transaction in equal installaments and remit to ExxonMobile Staff Cooperative Society Limited being loan plus interest of items acquired under Home Appliance Programme',
            checked: true,
            change: function () { if (oCB.getChecked()) { alert('YES') } else { alert('NO') }; }
        });

        var oLayout2 = new sap.ui.layout.form.ResponsiveGridLayout("L2",
        {
            labelSpanL: 3,
            labelSpanM: 1,
            labelSpanS: 2,
            emptySpanL: 1,
            emptySpanM: 1,
            emptySpanS: 1,
            columnsL: 2,
            columnsM: 2,
            breakpointL: 800,
            breakpointM: 400
        });

        var oForm2 = new sap.ui.layout.form.Form("F2", {
            title: new sap.ui.core.Title({ text: "Personal Data" }),
            layout: oLayout2,
            formContainers: [
				new sap.ui.layout.form.FormContainer("F2C1", {
				    title: "",
				    formElements: [
						new sap.ui.layout.form.FormElement({
						    label: "Name",
						    fields: [lblName]
						}), new sap.ui.layout.form.FormElement({
						    label: "Company",
						    fields: [lblCompany]
						}),
                        new sap.ui.layout.form.FormElement({
                            label: "Telephone Number",
                            fields: [lblTelephone]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Amount in Words",
                            fields: [txtamount]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Declaration",
                            fields: [oCB]
                        })
				    ]
				}),
				new sap.ui.layout.form.FormContainer("F2C2", {
				    title: "",
				    formElements: [
						new sap.ui.layout.form.FormElement({
						    label: "Member Number",
						    fields: [lblEmployeeNo]
						}),
                        new sap.ui.layout.form.FormElement({
                            label: "Sharp Number",
                            fields: [lblSharpNo]
                        }),
                        new sap.ui.layout.form.FormElement({
						    label: "Location",
						    fields: [lblLocation]
						}),
                        new sap.ui.layout.form.FormElement({
                            label: "Email Address",
                            fields: [lblEmail]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Deduction",
                            fields: [cmbDeduction]
                        })
				    ]
				}),

            ]
        });

        oForm2.placeAt("content");

        btnSave.placeAt("content");
        btnReset.placeAt("content");       


    </script>
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
         <p><div class="instructionheader">Conditions</div></p>
             <ul class="instructioncss">
                <li>This facility can only be enjoyed by members who are more than six months old in this Co-operative society.</li>
                <li>This facility can only be taken twice in one year.</li>
                <li>The amount is limited to #1.5m per application, payable in six months at 2% interest rate.</li>
                <li>Early payments not received by the 5th of the month attracts interest for the month.</li>            
                <li>Payment will be made directly to Touchdown Elite travels by EMCOOP on completion of necessary documentation and receipt of request for payment from members.</li>
                <li>Loan application will be subject to loan burden as advised by HR.</li>
                <li>The MOU covers the following airlines:</li>
                <li><strong>Airfrance</strong></li>
                <li><strong>KLM</strong></li>
                <li><strong>Delta</strong></li>
                <li><strong>United</strong></li>
                <li><strong>BA</strong></li>
                <li><strong>Iberia</strong></li>
                <li><strong>Others</strong></li>
             </ul>
       </div>
    </div>
</body>
</html>
