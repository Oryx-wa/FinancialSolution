
var RegVar = "";

var btnSave = new sap.ui.commons.Button("spaceObjects", {
    text: "Submit Request",
    style: sap.ui.commons.ButtonStyle.Accept,
    press: function () {
        RegVar = "";
        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "TRAVEL" + "/";
        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "NA" + "/";

        RegVar = RegVar + "0" + "/";
        RegVar = RegVar + "0" + "/";
        RegVar = RegVar + "0" + "/";
        RegVar = RegVar + "0" + "/";
        RegVar = RegVar + "0" + "/";
        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "0" + "/";
        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "NA" + "/";

        if (!validateParameter(cmbDeduction.getValue(), 'Deduction', 'Text')) 
        {
            return false;
        } else {
            RegVar = RegVar + cmbDeduction.getValue() + "/";
        }

        if (!validateParameter(txtamount.getValue(), 'Amount in Words', 'Text')) 
        {
           return false;
        } else {
           RegVar = RegVar + txtamount.getValue();
        }

        SaveUpdate("http://192.168.1.81/coopservice/CoopOperations.svc/RequestApplication/" + RegVar,"Details Saved Successfully");
        cmbDeduction.setValue("");
        txtamount.setValue("");
        RegVar = "";
    }
});

var btnReset = new sap.ui.commons.Button({
    text: "Reset Form",
    style: sap.ui.commons.ButtonStyle.Reject,
    press: function () {
        //alert('Alert from ' + btnReset.getText());
    }
});