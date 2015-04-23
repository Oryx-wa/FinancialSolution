<%@ Page Language="VB" AutoEventWireup="false" CodeFile="long_term_loan.aspx.vb" Inherits="members_long_term_loan" %>

<!DOCTYPE html>
<meta http-equiv='X-UA-Compatible' content='IE=edge' />
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Long Term Bank Loan Programme</title>
    
    <link href="../css/style.css" rel="stylesheet" type="text/css" />
    
    <script id='sap-ui-bootstrap' type='text/javascript' src='../resources/sap-ui-core.js'
        data-sap-ui-theme='sap_bluecrystal'
        data-sap-ui-libs='sap.ui.commons,sap.ui.ux3'>
    </script>
    <script src="../navigation/member_nav.js" type="text/javascript"></script>

    <script>
        var oAppHeader = new sap.ui.commons.ApplicationHeader("appHeader");

        //configure the branding area
        oAppHeader.setLogoSrc("../images/dlogo.png");
        oAppHeader.setLogoText("LONG TERM BANK LOAN REQUEST MODULE");

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
        var txtamount = new sap.ui.commons.TextField('amount');
        txtamount.setTooltip("Amount");
        txtamount.setWidth("80%");

        //Loan Tenor text Box
        var txttenor = new sap.ui.commons.TextField('Tenor');
        txttenor.setTooltip("Tenor");
        txttenor.setWidth("80%");

        //Loan Purpose text Box
        var txtpurpose = new sap.ui.commons.TextField('Purpose');
        txtpurpose.setTooltip("Purpose of Loan");
        txtpurpose.setWidth("80%");

        //Interest Payment Combo Box
        var cmbInterest = new sap.ui.commons.ComboBox("Interest");
        cmbInterest.setTooltip("Interest Payment Plan");
        cmbInterest.setEditable(true);
        cmbInterest.setWidth("200px");
        var oItem = new sap.ui.core.ListItem("Interest0");
        oItem.setText("Monthly");
        cmbInterest.addItem(oItem);
        var oItem = new sap.ui.core.ListItem("Interest1");
        oItem.setText("Quarterly");
        cmbInterest.addItem(oItem);
        oItem = new sap.ui.core.ListItem("Interest2");
        oItem.setText("Yearly");
        cmbInterest.addItem(oItem);

        //Principal Payment Combo Box
        var cmbPrincipal = new sap.ui.commons.ComboBox("Principal");
        cmbPrincipal.setTooltip("Principal Payment Plan");
        cmbPrincipal.setEditable(true);
        cmbPrincipal.setWidth("200px");
        var oItem = new sap.ui.core.ListItem("Principal0");
        oItem.setText("Monthly");
        cmbPrincipal.addItem(oItem);
        var oItem = new sap.ui.core.ListItem("Principal1");
        oItem.setText("Quarterly");
        cmbPrincipal.addItem(oItem);
        oItem = new sap.ui.core.ListItem("Principal2");
        oItem.setText("Yearly");
        cmbPrincipal.addItem(oItem);

        //Principal Payment Combo Box
        var cmbCollateral = new sap.ui.commons.ComboBox("Collateral");
        cmbCollateral.setTooltip("Loan Collateral");
        cmbCollateral.setEditable(true);
        cmbCollateral.setWidth("200px");
        var oItem = new sap.ui.core.ListItem("Collateral0");
        oItem.setText("Terminal Benefits");
        cmbCollateral.addItem(oItem);
        var oItem = new sap.ui.core.ListItem("Collateral1");
        oItem.setText("Loan Insurance");
        cmbCollateral.addItem(oItem);
        

        var btnSave = new sap.ui.commons.Button("spaceObjects", {
            text: "Submit Request",
            style: sap.ui.commons.ButtonStyle.Accept,
            press: function () {
                alert('Alert from ' + btnSave.getText());
            }
        });

        var btnReset = new sap.ui.commons.Button({
            text: "Reset Form",
            style: sap.ui.commons.ButtonStyle.Reject,
            press: function () {
                alert('Alert from ' + btnReset.getText());
            }
        });

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
                            label: "Amount Required",
                            fields: [txtamount]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Tenor",
                            fields: [txttenor]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Purpose of Loan",
                            fields: [txtpurpose]
                        }),
                        new sap.ui.layout.form.FormElement({
                             label: "Interest Payment Plan",
                             fields: [cmbInterest]
                         }), 
                         new sap.ui.layout.form.FormElement({
                             label: "Principal Payment Plan",
                             fields: [cmbPrincipal]
                         }), 
                         new sap.ui.layout.form.FormElement({
                             label: "Loan Collateral",
                             fields: [cmbCollateral]
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
        </div>
    </div>
</body>
</html>
