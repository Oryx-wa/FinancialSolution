
var RegVar = "";

var btnSave = new sap.ui.commons.Button("spaceObjects", {
    text: "Submit Request",
    style: sap.ui.commons.ButtonStyle.Accept,
    press: function () {
        RegVar = "";
        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "CAP" + "/";
        RegVar = RegVar + "NA" + "/";
        RegVar = RegVar + "NA" + "/";

        if (!validateParameter(txtcarbrand.getValue(), 'Car Brand', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + txtcarbrand.getValue() + "/";
        }

        if (!validateParameter(txtcolor.getValue(), 'Preferred Color', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + txtcolor.getValue() + "/";
        }

        if (!validateParameter(txtmodel.getValue(), 'Car Model', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + txtmodel.getValue() + "/";
        }

        if (!validateParameter(txtyom.getValue(), 'Year of Manufacture', 'Numeric')) {
            return false;
        } else {
            RegVar = RegVar + txtyom.getValue() + "/";
        }

        if (!validateParameter(txtregname.getValue(), 'Registration Name', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + txtregname.getValue() + "/";
        }

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
        txtcarbrand.setValue("");
        txtcolor.setValue("");
        txtmodel.setValue("");
        txtyom.setValue("");
        txtregname.setValue("");
        txtAddress.setValue("");
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