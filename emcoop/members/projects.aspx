<%@ Page Language="VB" AutoEventWireup="false" CodeFile="projects.aspx.vb" Inherits="members_projects" %>

<!DOCTYPE html>
<meta http-equiv='X-UA-Compatible' content='IE=edge' />
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>On Going Projects Programme</title>
    
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
        oAppHeader.setLogoText("ON GOING PROJECTS REQUEST MODULE");

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

        //Description of Housing Units Text Box
        var txtHouseDescription = new sap.ui.commons.TextArea('HousingDescription');
        txtHouseDescription.setValue("");
        txtHouseDescription.setTooltip("Description of Housing Unit");
        txtHouseDescription.setRows(3);

        //Qty text Box
        var txtqty = new sap.ui.commons.TextField('Qty');
        txtqty.setTooltip("Quantity");
        txtqty.setWidth("80%");

        //Price text Box
        var txtprice = new sap.ui.commons.TextField('Price');
        txtprice.setTooltip("Price");
        txtprice.setWidth("80%");

        //First Installment Text Box
        var txtinstallment = new sap.ui.commons.TextField('FirstInstallment');
        txtinstallment.setTooltip("First Installment");
        txtinstallment.setWidth("80%");

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
                            label: "Description of Housing Unit",
                            fields: [txtHouseDescription]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Quantity",
                            fields: [txtqty]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Price",
                            fields: [txtprice]
                        }),
                        
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
