<%@ Page Language="VB" AutoEventWireup="false" CodeFile="request_detail.aspx.vb" Inherits="staff_request_detail" %>
<!DOCTYPE html>
<meta http-equiv='X-UA-Compatible' content='IE=edge' />
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Loan Request Detail</title>
    
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
        oAppHeader.setLogoText("LOAN REQUEST DETAIL MODULE");

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

        //Telephone Number label box
        var lblTelephone = new sap.ui.commons.Label("LabelTelephoneNo");
        lblTelephone.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Email Address label box
        var lblEmail = new sap.ui.commons.Label("LabelEmailAddress");
        lblEmail.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Last Login Date label box
        var lbllastlogin = new sap.ui.commons.Label("LabelLastLoginDate");
        lbllastlogin.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Request Type label box
        var lblrequesttype = new sap.ui.commons.Label("LabelRequestType");
        lblrequesttype.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Request Status label box
        var lblrequeststatus = new sap.ui.commons.Label("LabelRequestStatus");
        lblrequeststatus.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Request Number label box
        var lblrequestnumber = new sap.ui.commons.Label("LabelRequestNumber");
        lblrequestnumber.setDesign(sap.ui.commons.LabelDesign.Bold);

        
        //Request Date label box
        var lblrequestdate = new sap.ui.commons.Label("LabelRequestDate");
        lblrequestdate.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Repay Method label box
        var lblrepaymethod = new sap.ui.commons.Label("LabelRepayMethod");
        lblrepaymethod.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Repay Method label box
        var lblrepayperiod = new sap.ui.commons.Label("LabelRepayPeriod");
        lblrepayperiod.setDesign(sap.ui.commons.LabelDesign.Bold);

        //Loan Type label box
        var lblloantype = new sap.ui.commons.Label("LabelLoanType");
        lblloantype.setDesign(sap.ui.commons.LabelDesign.Bold);
        
        //Description label box
        var lbldescription = new sap.ui.commons.Label("LabelDescription");
        lbldescription.setDesign(sap.ui.commons.LabelDesign.Bold);

        var btnApprove = new sap.ui.commons.Button("spaceObjects", 
        {
             text: "Approve Request",
             style: sap.ui.commons.ButtonStyle.Accept,
             press: function () 
             {
                alert('Alert from ' + btnSave.getText());
             }
        });

        var btnReject = new sap.ui.commons.Button({
            text: "Reject Request",
            style: sap.ui.commons.ButtonStyle.Reject,
            press: function ()
            {
                alert('Alert from ' + btnReset.getText());
            }
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

        //Create Controls to be placed on the form
        var aData = [];

        //Create an instance of the table control
        var oTable = new sap.ui.table.Table({
            title: "Other Details",
            visibleRowCount: 1,
            firstVisibleRow: 2,
            selectionMode: sap.ui.table.SelectionMode.Single,
            toolbar: new sap.ui.commons.Toolbar({ items: []
            }),
            extension: []
        });

        oTable.addColumn(new sap.ui.table.Column({
             label: new sap.ui.commons.Label({ text: "Request Amount" }),
             template: new sap.ui.commons.TextField().bindProperty("value", "requestAmount"),
             sortProperty: "requestAmount",
             filterProperty: "requestAmount",
             width: "90%"
        }));

        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({ text: "Savings Balance" }),
            template: new sap.ui.commons.TextField().bindProperty("value", "savingsBalance"),
            sortProperty: "savingsBalance",
            filterProperty: "savingsBalance",
            width: "90%"
        }));

        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({ text: "Deposit Amount" }),
            template: new sap.ui.commons.TextField().bindProperty("value", "depositAmount"),
            sortProperty: "depositAmount",
            filterProperty: "depositAmount",
            width: "90%"
        }));

        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({ text: "Verified Amount" }),
            template: new sap.ui.commons.TextField().bindProperty("value", "verifiedAmount"),
            sortProperty: "verifiedAmount",
            filterProperty: "verifiedAmount",
            width: "90%"
        }));

        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({ text: "Outstanding Balance" }),
            template: new sap.ui.commons.TextField().bindProperty("value", "outstandingBalance"),
            sortProperty: "outstandingBalance",
            filterProperty: "outstandingBalance",
            width: "90%"
        }));

        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({ text: "Net Amount" }),
            template: new sap.ui.commons.TextField().bindProperty("value", "netAmount"),
            sortProperty: "netAmount",
            filterProperty: "netAmount",
            width: "90%"
        }));

        //Create a model and bind the table rows to this model
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData({ modelData: aData });
        oTable.setModel(oModel);
        oTable.bindRows("/modelData");

        var oForm2 = new sap.ui.layout.form.Form("F2", 
        {
            title: new sap.ui.core.Title({ text: "" }),
            layout: oLayout2,
            formContainers: [
				new sap.ui.layout.form.FormContainer("F2C1", {
				    title: "Member's Details",
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
                            label: "Last Login Date",
                            fields: [lbllastlogin]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Request Type",
                            fields: [lblrequesttype]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Description",
                            fields: [lbldescription]
                        }),
                         new sap.ui.layout.form.FormElement({
                             label: "Loan Type",
                             fields: [lblloantype]
                         })
				    ]
				}),
				new sap.ui.layout.form.FormContainer("F2C2", {
				    title: "",
				    formElements: [
						new sap.ui.layout.form.FormElement({
						    label: "Staff ID",
						    fields: [lblEmployeeNo]
						}), new sap.ui.layout.form.FormElement({
						    label: "Location",
						    fields: [lblLocation]
						}),
                        new sap.ui.layout.form.FormElement({
                            label: "Email Address",
                            fields: [lblEmail]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Request Status",
                            fields: [lblrequeststatus]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Request Date",
                            fields: [lblrequestdate]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Repay Method",
                            fields: [lblrepaymethod]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Repay Period",
                            fields: [lblrepayperiod]
                        })
				    ]
				}),
            ]
       });

                // Create a TabStrip instance
                var oTabStrip1 = new sap.ui.commons.TabStrip("TabLogs");
                oTabStrip1.setWidth("100%");
                oTabStrip1.setHeight("100px");
                oTabStrip1.attachClose(function (oEvent) {
                     var oTabStrip = oEvent.oSource;
                     oTabStrip.closeTab(oEvent.getParameter("index"));
                 });

                 // 1. tab: general data (use createTab)
                 var oLayout1 = new sap.ui.commons.layout.MatrixLayout("Matrix1", { columns: 2, width: "100%" });
                 oLayout1.setWidths(['100%']);


                 // 1. Tab: Audit Log
                 oTabStrip1.createTab("Audit", oLayout1);

                 // 2. Tab: Balances Log
                 oTab2 = new sap.ui.commons.Tab("tab2");
                 oTab2.setTooltip("Balances");
                 oTab2.setTitle(new sap.ui.core.Title("Title2", { text: "Balances" }));

                 oTabStrip1.addTab(oTab2);

                 // 3. Tab: Loans Log
                 oTab3 = new sap.ui.commons.Tab("tab3");
                 oTab3.setTooltip("Loans");
                 oTab3.setTitle(new sap.ui.core.Title("Title3", { text: "Loans" }));

                 oTabStrip1.addTab(oTab3);

                 // 4. Tab: Loans Log
                 oTab4 = new sap.ui.commons.Tab("tab4");
                 oTab4.setTooltip("Records");
                 oTab4.setTitle(new sap.ui.core.Title("Title4", { text: "Records" }));

                 oTabStrip1.addTab(oTab4);

                //Initially sort the table
                oTable.sort(oTable.getColumns()[0]);

                oForm2.placeAt("content");
                oTable.placeAt("content");
                oTabStrip1.placeAt("content");
                btnApprove.placeAt("content2");
                btnReject.placeAt("content2");
    </script>
</head>
<body class="sapUiBody">
    <div id="formheader"></div>
    <div class="divleftmenu">
          <div id='cssmenu'>
             <ul>
                <li><a href='#' class="defaultlink" onclick="navpages('Personal Details')"><span>Home Page</span></a></li>
                <li><a href='#' class="defaultlink" onclick="navpages('Home Appliance Programme')"><span>Manage Home Appliance Request</span></a></li>
                <li><a href='#' class="defaultlink" onclick="navpages('Car Acquisition Programme')"><span>Manage Car Acquisition Request</span></a></li>
                <li><a href='#' class="defaultlink" onclick="navpages('Long Term Bank Loans')"><span>Manage Long Term Bank Loans Request</span></a></li>
                <li><a href='#' class="defaultlink" onclick="navpages('New Hot Cash')"><span>Manage New Hot Cash</span></a></li>
                <li><a href='#' class="defaultlink" onclick="navpages('Mortgage')"><span>Manage Mortgage Request</span></a></li>
                <li><a href='#' class="defaultlink" onclick="navpages('Travel With Ease')"><span>Manage Travel With Ease Request</span></a></li>
                <li><a href='#' class="defaultlink" onclick="navpages('On Going Projects')"><span>Manage On going Projects Request</span></a></li>
                <li><a href='#' class="defaultlink" onclick="navpages('Personal Activity Log')"><span>View Activity Log</span></a></li>
            </ul>
          </div>
    </div>
    <div class="formdiv">
        <div id="content">
        </div>
        <div id="content2">
        </div>
    </div>
</body>
</html>
