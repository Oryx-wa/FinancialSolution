<%@ Page Language="VB" AutoEventWireup="false" CodeFile="register.aspx.vb" Inherits="members_register" %>

<!DOCTYPE html>
<meta http-equiv='X-UA-Compatible' content='IE=edge' />
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Register Member</title>
    <link href="../css/style.css" rel="stylesheet" type="text/css" />
    <script id='sap-ui-bootstrap' type='text/javascript' src='../resources/sap-ui-core.js'
        data-sap-ui-theme='sap_bluecrystal'
        data-sap-ui-libs='sap.ui.commons,sap.ui.ux3'>
    </script>

    <script src="../ScriptController/ValidateData.js" type="text/javascript"></script>
    <script src="../ScriptController/register.js" type="text/javascript"></script>
    <script src="../ScriptController/CallWebService.js" type="text/javascript"></script>

    <script>
        var oAppHeader = new sap.ui.commons.ApplicationHeader("appHeader");

        //configure the branding area
        oAppHeader.setLogoSrc("../images/dlogo.png");
        oAppHeader.setLogoText("MEMBERSHIP FORM");

        //configure the welcome area
        oAppHeader.setDisplayWelcome(false);

        //configure the log off area
        oAppHeader.setDisplayLogoff(false);
        oAppHeader.placeAt("formheader");

        //Create Controls to be placed on the form
        var oImage = new sap.ui.commons.Image("i1");
        oImage.setSrc("../images/defaultpic.jpg");
        oImage.setAlt("Passport Picture");
        //oImage.setUseMap("Map1");
        //oImage.placeAt("sample1");

        //Name text box
        var txtname = new sap.ui.commons.TextField('name');
        txtname.setTooltip("Name");
        txtname.setWidth("70%");

        //Department text box
        var txtdept = new sap.ui.commons.TextField('department');
        txtdept.setTooltip("Department");
        txtdept.setWidth("70%");

        //Email text box
        var txtemail = new sap.ui.commons.TextField('email');
        txtemail.setTooltip("Official Email Address");
        txtemail.setWidth("70%");

        //Alternative Email text box
        var txtaltemail = new sap.ui.commons.TextField('AlternativeEmail');
        txtaltemail.setTooltip("Alternative Email Address");
        txtaltemail.setWidth("70%");

        //Staff ID text box
        var txtstaffid = new sap.ui.commons.TextField('staffid');
        txtstaffid.setTooltip("Member Number");
        txtstaffid.setWidth("70%");

        //Sharp # text box
        var txtsharpno = new sap.ui.commons.TextField('sharpnumber');
        txtsharpno.setTooltip("Sharp Number");
        txtsharpno.setWidth("70%");

         //Gender Combo Box
         var cmbGender = new sap.ui.commons.ComboBox("Gender");
         cmbGender.setTooltip("Gender");
         cmbGender.setEditable(true);
         cmbGender.setWidth("200px");
         var oItem = new sap.ui.core.ListItem("Gender1");
         oItem.setText("Male");
         cmbGender.addItem(oItem);
         oItem = new sap.ui.core.ListItem("Gender2");
         oItem.setText("Female");
         cmbGender.addItem(oItem);

         //Date Employed date Picker Control
         var dtDateEmployed = new sap.ui.commons.DatePicker({ width: "40%" });

        //Category Combo Box
        var cmbCategory = new sap.ui.commons.ComboBox("Category");
        cmbCategory.setTooltip("Category");
        cmbCategory.setEditable(true);
        cmbCategory.setWidth("200px");
        var oItem = new sap.ui.core.ListItem("Category0");
        oItem.setText("Coop Staff");
        cmbCategory.addItem(oItem);
        var oItem = new sap.ui.core.ListItem("Category1");
        oItem.setText("MON Staff");
        cmbCategory.addItem(oItem);
        oItem = new sap.ui.core.ListItem("Category2");
        oItem.setText("MPN Staff");
        cmbCategory.addItem(oItem);
        oItem = new sap.ui.core.ListItem("Category3");
        oItem.setText("Outsider");
        cmbCategory.addItem(oItem);

        //Location Combo Box
        var cmbLocation = new sap.ui.commons.ComboBox("Location");
        cmbLocation.setTooltip("Location");
        cmbLocation.setEditable(true);
        cmbLocation.setWidth("200px");
        var oItem = new sap.ui.core.ListItem("Location0");
        oItem.setText("Apapa");
        cmbLocation.addItem(oItem);
        var oItem = new sap.ui.core.ListItem("Location1");
        oItem.setText("Lagos");
        cmbLocation.addItem(oItem);
        oItem = new sap.ui.core.ListItem("Location2");
        oItem.setText("Eket");
        cmbLocation.addItem(oItem);

        //Monthly Savings text box
        var txtsavings = new sap.ui.commons.TextField('Savings');
        txtsavings.setTooltip("Monthly Savings");
        txtsavings.setWidth("70%");

        //Company text box
        var txtcompany = new sap.ui.commons.TextField('Company');
        txtcompany.setTooltip("Your Company");
        txtcompany.setWidth("70%");

        //Telephone text box
        var txttelephone = new sap.ui.commons.TextField('Telephone');
        txttelephone.setTooltip("Telephone");
        txttelephone.setWidth("70%");

        //Telephone text box
        var txtnoktelephone = new sap.ui.commons.TextField('Nextofkinnumber');
        txtnoktelephone.setTooltip("Next of Kin Mobile Number");
        txtnoktelephone.setWidth("70%");

        //Telephone extension text box
        var txtext = new sap.ui.commons.TextField('Ext');
        txtext.setTooltip("Ext");
        txtext.setWidth("70%");

        //Home Address House Number Text Box
        var txtaddressno = new sap.ui.commons.TextField('AddressNo');
        txtaddressno.setTooltip("House Address Number");
        txtaddressno.setWidth("70%");

        //Home Address Street Text Box
        var txtaddressstreet = new sap.ui.commons.TextField('AddressStreet');
        txtaddressstreet.setTooltip("House Address Street");
        txtaddressstreet.setWidth("70%");

        //Address City # text box
        var txtaddresscity = new sap.ui.commons.TextField('AddressCity');
        txtaddresscity.setTooltip("City");
        txtaddresscity.setWidth("70%");

        //Address Country # text box
        var txtaddresscountry = new sap.ui.commons.TextField('AddressCountry');
        txtaddresscountry.setTooltip("Country");
        txtaddresscountry.setWidth("70%");

        //P.O Box Text Box
        var txtpobox = new sap.ui.commons.TextField('POBox');
        txtpobox.setTooltip("P.O Box");
        txtpobox.setWidth("70%");

        //Next of Kin Name
        var txtnokname = new sap.ui.commons.TextField('NOKName');
        txtnokname.setTooltip("Name of Next Of Kin");
        txtnokname.setWidth("70%");

         //Home  Next of Kin Text Box
         var txtNOKAddress = new sap.ui.commons.TextArea('NOKAddress');
         txtNOKAddress.setValue("");
         txtNOKAddress.setTooltip("House Address of Next of Kin");
         txtNOKAddress.setRows(3);

         //Address City # text box
        var txtaddresscitynok = new sap.ui.commons.TextField('AddressCityNok');
        txtaddresscitynok.setTooltip("City");
        txtaddresscitynok.setWidth("70%");

        //Address Country # text box
        var txtaddresscountrynok = new sap.ui.commons.TextField('AddressCountryNok');
        txtaddresscountrynok.setTooltip("Country");
        txtaddresscountrynok.setWidth("70%");

         //Relationship Next of Kin Combo Box
         var cmbRelationship = new sap.ui.commons.ComboBox("Relationship");
         cmbRelationship.setTooltip("Relationship");
         cmbRelationship.setEditable(true);
         cmbRelationship.setWidth("200px");
         var oItem = new sap.ui.core.ListItem("Relationship1");
         oItem.setText("Father");
         cmbRelationship.addItem(oItem);
         oItem = new sap.ui.core.ListItem("Relationship2");
         oItem.setText("Mother");
         cmbRelationship.addItem(oItem);
         oItem = new sap.ui.core.ListItem("Relationship3");
         oItem.setText("Brother");
         cmbRelationship.addItem(oItem);
         oItem = new sap.ui.core.ListItem("Relationship4");
         oItem.setText("Sister");
         cmbRelationship.addItem(oItem);
         oItem = new sap.ui.core.ListItem("Relationship5");
         oItem.setText("Wife");
         cmbRelationship.addItem(oItem);
         oItem = new sap.ui.core.ListItem("Relationship6");
         oItem.setText("Husband");
         cmbRelationship.addItem(oItem);



          var btnReset = new sap.ui.commons.Button({
	      text : "Reset Form",	      
          style: sap.ui.commons.ButtonStyle.Reject,
	      press: function()
          {
            alert('Alert from ' + btnReset.getText());
          }
       });

       var oLayout2 = new sap.ui.layout.form.ResponsiveGridLayout("L2", 
       {
           labelSpanL: 2,
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
            title: new sap.ui.core.Title({ text: "Personal Data"}),
            layout: oLayout2,
            formContainers: [
				new sap.ui.layout.form.FormContainer("F2C1", {
				    title: "",
				    formElements: [
                        new sap.ui.layout.form.FormElement({
							fields: [new sap.ui.commons.Image({src: "../images/userpic.jpg", width: "100px", height:"130px"})]
						}),
						new sap.ui.layout.form.FormElement({
						    label: "*Name",
						    fields: [txtname]
						}),
						new sap.ui.layout.form.FormElement({
						    label: "*Department",
						    fields: [txtdept]
						}),
						new sap.ui.layout.form.FormElement({
						    label: "*Email",
						    fields: [txtemail]
						}),
                        new sap.ui.layout.form.FormElement({
						    label: "*Alt Email",
						    fields: [txtaltemail]
						}),
                        new sap.ui.layout.form.FormElement({
						    label: "*Category",
						    fields: [cmbCategory]
						}),  
                        new sap.ui.layout.form.FormElement({
						    label: "*Company",
						    fields: [txtcompany]
						}),                  
                        new sap.ui.layout.form.FormElement({
						    label: "*Telephone",
						    fields: [txttelephone]
						}),
                        new sap.ui.layout.form.FormElement({
						    label: "*Extension",
						    fields: [txtext]
						})
                        
				    ]
				}),
				new sap.ui.layout.form.FormContainer("F2C2", {
				    title: "",
				    formElements: [
						new sap.ui.layout.form.FormElement({
						    label: "*Member Number",
						    fields: [txtstaffid]
						}),
                        new sap.ui.layout.form.FormElement({
						    label: "*Sharp Number",
						    fields: [txtsharpno]
						}),
						new sap.ui.layout.form.FormElement({
						    label: "*Gender",
						    fields: [cmbGender]
						}),
						new sap.ui.layout.form.FormElement({
						    label: "Date Employed",
						    fields: [dtDateEmployed]
						}),
                        new sap.ui.layout.form.FormElement({
						    label: "Location",
						    fields: [cmbLocation]
						}),
                        new sap.ui.layout.form.FormElement({
						    label: "Monthly Savings",
						    fields: [txtsavings]
						}),
                        new sap.ui.layout.form.FormElement({
							label: "*Number / Street",
							fields: [new sap.ui.commons.TextField({tooltip:"House Number",
												layoutData: new sap.ui.core.VariantLayoutData({width: "2em",
													multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
													                 	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
                                                                              new sap.ui.layout.GridData({span: "L2 M2 S12"})]
												})
									}),
									new sap.ui.commons.TextField({tooltip:"Street Name",
										layoutData: new sap.ui.core.VariantLayoutData({width: "7em",
											multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 3}),
											                 	    new sap.ui.layout.form.GridElementData({hCells: "3"})
											                 	    ]
										})
									})
							]
						}),
                        new sap.ui.layout.form.FormElement({
						    label: "*City",
						    fields: [txtaddresscity]
						}),
                        new sap.ui.layout.form.FormElement({
						    label: "*Country",
						    fields: [txtaddresscountry]
						}),
                        new sap.ui.layout.form.FormElement({
						    label: "P.O Box",
						    fields: [txtpobox]
						})
				    ]
				}),
                new sap.ui.layout.form.FormContainer("F2C3", {
				    title:  "Next of Kin",                                  
				    formElements: [                        
						new sap.ui.layout.form.FormElement({
						    label: "*Name",
						    fields: [txtnokname]
						}),
                        new sap.ui.layout.form.FormElement({
						    label: "*Mobile No",
						    fields: [txtnoktelephone]
						}),
                     ]
				}),
                new sap.ui.layout.form.FormContainer("F2C4", 
                {
				    title: ".",
				    formElements: [
						new sap.ui.layout.form.FormElement({
						    label: "*Relationship",
						    fields:[cmbRelationship]
						}),
                        new sap.ui.layout.form.FormElement({
							label: "*Number / Street",
							fields: [new sap.ui.commons.TextField({tooltip:"House Number",
												layoutData: new sap.ui.core.VariantLayoutData({width: "2em",
													multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
													                 	     new sap.ui.layout.form.GridElementData({hCells: "2"}),
                                                                              new sap.ui.layout.GridData({span: "L2 M2 S12"})]
												})
									}),
									new sap.ui.commons.TextField({tooltip:"Street Name",
										layoutData: new sap.ui.core.VariantLayoutData({width: "7em",
											multipleLayoutData: 
                                                    [
                                                      new sap.ui.layout.ResponsiveFlowLayoutData({weight: 3}),
											          new sap.ui.layout.form.GridElementData({hCells: "3"})
											        ]
										})
									})
							]
						}),
                        new sap.ui.layout.form.FormElement({
						    label: "*City",
						    fields: [txtaddresscitynok]
						}),
                        new sap.ui.layout.form.FormElement({
						    label: "*Country",
						    fields: [txtaddresscountrynok]
						}),
				    ]
				})
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
          <div id='cssmenuinfo'>
            <ul>
                <br>
                <li>*Instruction:</li>
                <br>
                <li>Please Fill details correctly,</li>
                <li>Pay the designated registration fee.</li>
                <li>----</li>
                <li>Your membership status becomes active only after payment of the above stated registration fee.</li>
            </ul>
          </div>
    </div>
    <div class="formdiv">
        <div id="content">
        </div>
    </div>
    
</body>
</html>
