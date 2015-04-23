Imports System.Web.Services


Partial Class members_home
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
        'Response.Write(GetMenuPath)
    End Sub

    <WebMethod()> _
    Public Shared Function LoadPageMenu(RoleName As String) As String
        Dim RoleMenu As New clsMenu
        Dim menuPath As String = System.Web.HttpContext.Current.Server.MapPath("..\menu\menu.xml")
        Return RoleMenu.ParseMenu(RoleName, menuPath)
    End Function

End Class
