
var RegVar = "";
var btnSave = new sap.ui.commons.Button("spaceObjects",
{

    text: "Submit Form",
    style: sap.ui.commons.ButtonStyle.Accept,

    press: function () 
    {
        if (!validateParameter(txtstaffid.getValue(), 'Member Number', 'Text')) 
        {
            return false;
        } else {
            RegVar = RegVar + txtstaffid.getValue() + "/";
        }

        if (!validateParameter(txtname.getValue(), 'Full Name', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + txtname.getValue() + "/";
        }

        if (!validateParameter(txtcompany.getValue(), 'Company', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + txtcompany.getValue() + "/";
        }

        if (!validateParameter(txttelephone.getValue(), 'Telephone', 'Numeric')) {
            return false;
        } else {
            RegVar = RegVar + txttelephone.getValue() + "/";
        }

        if (!validateParameter(txtext.getValue(), 'Extension Code', 'Numeric')) {
            return false;
        } else {
            RegVar = RegVar + txtext.getValue() + "/";
        }

        if (!validateParameter(txtdept.getValue(), 'Department', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + txtdept.getValue() + "/";
        }

        if (!validateParameter(txtemail.getValue(), 'Email', 'Text') || !validateEmail(txtemail.getValue())) {
            return false;
        } else {
            RegVar = RegVar + txtemail.getValue() + "/";
        }        

        if (!validateParameter(txtaltemail.getValue(), 'Alternate Email', 'Text') || !validateEmail(txtaltemail.getValue())) {
            return false;
        } else {
            RegVar = RegVar + txtaltemail.getValue() + "/";
        }

        if (!validateParameter(txtsharpno.getValue(), 'Sharp Number', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + txtsharpno.getValue() + "/";
        }

        if (!validateParameter(cmbGender.getValue(), 'Gender', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + cmbGender.getValue() + "/";
        }

        if (!validateParameter(dtDateEmployed.getValue(), 'Date Employed', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + dtDateEmployed.getValue() + "/";
        }

        if (!validateParameter(cmbLocation.getValue(), 'Location', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + cmbLocation.getValue() + "/";
        }

        if (!validateParameter(txtsavings.getValue(), 'Monthly Savings', 'Numeric')) {
            return false;
        } else {
            RegVar = RegVar + txtsavings.getValue() + "/";
        }

        RegVar = RegVar + "NA/";

        RegVar = RegVar + "NA/";

        if (!validateParameter(txtaddresscity.getValue(), 'House Address City', 'Text')) {
           return false;
        } else {
           RegVar = RegVar + txtaddresscity.getValue() + "/";
        }

        if (!validateParameter(txtaddresscountry.getValue(), 'House Address Country', 'Text')) {
           return false;
        } else {
            RegVar = RegVar + txtaddresscountry.getValue() + "/";
        }

        RegVar = RegVar + CheckEmpty(txtpobox.getValue()) + "/";

        if (!validateParameter(txtnokname.getValue(), 'Next of Kin Full Name', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + txtnokname.getValue() + "/";
         }

        if (!validateParameter(cmbRelationship.getValue(), 'Relationship with Next of Kin', 'Text')) {
            return false;
        } else {
            RegVar = RegVar + cmbRelationship.getValue() + "/";
        }

        RegVar = RegVar + "NA/";

        RegVar = RegVar + "NA/";

        if (!validateParameter(txtaddresscitynok.getValue(), 'Next of Kin City Address', 'Text'))
        {
            return false;
        } else {
            RegVar = RegVar + txtaddresscitynok.getValue() + "/";
        }

        if (!validateParameter(txtaddresscountrynok.getValue(), 'Next of Kin Country Address', 'Text'))
        {
           return false;
        } else {
          RegVar = RegVar + txtaddresscountrynok.getValue() + "/";
        }

        if (!validateParameter(cmbCategory.getValue(), 'Category', 'Text'))
        {
            return false;
        } else {
            RegVar = RegVar + cmbCategory.getValue();
        }
        
        SaveUpdate("http://192.168.1.81/coopservice/CoopOperations.svc/RegisterMember/" + RegVar,"Your Registration was Sucessfull");
        
        RegVar = "";
    }

});

