
function CheckEmpty(str) {
    if (!str || 0 === str.length) {
        return 'NILL';
    } else {
    return str;
    }
}

function validateParameter(ValParam, LabelParam, TypeParam)
{
    if (isInvalid(ValParam)) {
        alert("Please Enter a Valid " + LabelParam);
        return false;
    }
    if (isBlank(ValParam)) {
        alert('Please Enter a Valid ' + LabelParam);
        return false;
    }
    if (isEmpty(ValParam)) {
        alert('Please Enter a Valid ' + LabelParam);
        return false;
    }
    if ((TypeParam !='Numeric') && (IsNumeric(ValParam))) {
        alert('Please Enter a Valid ' + LabelParam);
        return false;
    }
    if ((TypeParam == 'Numeric') && (!IsNumeric(ValParam))) 
    {
        alert('Please Enter a Valid ' + LabelParam);
        return false;
    }
    return true
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    
    if (!re.test(email)) {
        alert('Please Enter a Valid Email');
        return false;
    }
    return true;
}

function IsNumeric(input) {
    return (input - 0) == input && ('' + input).trim().length > 0;
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function isBlank(str) {
   return (!str || /^\s*$/.test(str));
}

function isInvalid (str) {
    return (str.length === 0 || !str.trim());
}