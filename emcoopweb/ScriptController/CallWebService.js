

function SaveUpdate(ServiceUrl,saveMsg) 
{
    $.ajax({
        cache: false,
        type: "GET",
        async: true,
        crossDomain: true,
        url: ServiceUrl,
        contentType: "application/javascript",
        dataType: "jsonp",
        success: function (msg) {
           alert(saveMsg);
        },
        error: function (err) {
           alert("An error occured");
           return false;
        }
    });
}

function RedirectPage(vpage)
{
   window.location.href = vpage;
}

function FetchRecords(ServiceUrl)
{
    var aData = "";
    var fData = "";
    $.ajax({
          cache: false,
          type: "GET",
          async: false,
          crossDomain: true,
          url: ServiceUrl,
          contentType: "application/javascript",
          dataType: "jsonp",
          success: function (data)
          {
             fData = JSON.parse(data.FetchPendingRequestsResult);
             var oModel = new sap.ui.model.json.JSONModel();
             oModel.setData(fData);
             oTable.setModel(oModel);
             oTable.bindRows('/');
             oTable.placeAt("content");
          },
          error: function (x, e)
          {
             return " error " + x;
          }
    })
}


