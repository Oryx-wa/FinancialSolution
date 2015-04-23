
var RegVar = "";

var btnSave = new sap.ui.commons.Button("spaceObjects", {
    text: "Submit Request",
    style: sap.ui.commons.ButtonStyle.Accept,
    press: function () {
        RegVar = "";
        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "HAP" + "/";
        RegVar = RegVar + "NA" + "/";

        if (!validateParameter(txtitem.getValue(), 'Item Requested', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + txtitem.getValue() + "/";
        }

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

        if (!validateParameter(txtAddress.getValue(), 'Delivery Address', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + txtAddress.getValue() + "/";
        }

        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "NA";

        SaveUpdate("http://192.168.1.81/coopservice/CoopOperations.svc/RequestApplication/" + RegVar,"Details Saved Successfully");
        txtitem.setValue("");
        txtAddress.setValue("");
        RegVar = "";
    }
});

var btnReset = new sap.ui.commons.Button({
    text: "Reset Form",
    style: sap.ui.commons.ButtonStyle.Reject,
    press: function () 
    {
        alert('Alert from ' + btnReset.getText());
    }
});