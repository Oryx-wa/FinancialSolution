Imports System
Imports System.ServiceModel.Activation
Imports System.Web
Imports System.Web.Routing

Namespace coopservice
    Public Class Global_asax
	      Inherits HttpApplication
        Private  Sub Application_Start(ByVal sender As Object, ByVal e As EventArgs)
            RegisterRoutes()
        End Sub
 
        Private  Sub RegisterRoutes()
            ' Edit the base address of Service1 by replacing the "Service1" string below
            RouteTable.Routes.Add(New ServiceRoute("Service1", New WebServiceHostFactory(), Type.GetType("coopservice.coopservice.Service1")))
        End Sub
    End Class
End Namespace
