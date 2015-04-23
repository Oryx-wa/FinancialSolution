Imports System.Web.Services

Partial Class menu_menu
    Inherits System.Web.UI.Page

    <WebMethod()> _
    Public Shared Function LoadPageMenu(RoleName As String) As String
        Dim RoleMenu As New clsMenu
        Dim menuPath As String = System.Web.HttpContext.Current.Server.MapPath(".\menu\menu.xml")
        Return RoleMenu.ParseMenu(RoleName, menuPath)
    End Function

End Class
