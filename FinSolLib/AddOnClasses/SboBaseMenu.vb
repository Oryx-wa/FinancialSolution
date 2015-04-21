Imports System.Xml
Imports System.IO

Public MustInherit Class SboBaseMenu

    Dim menuParentLinks As String = ""
    Dim menuParent As String = ""
    Dim menuFinalLinks As String

    Private Function GetAllChildren(ByVal ParentName As String) As String
        Dim menuChildrenLinks As String = ""
        Dim curparent As String = ""
        Dim readXML As XmlReader = XmlReader.Create(Environment.CurrentDirectory & "\menu.xml")
        While readXML.Read()
            If readXML.IsStartElement Then
                If readXML("role") = "members" Then
                    curparent = readXML("parent")
                    If curparent = ParentName Then
                        menuChildrenLinks = menuChildrenLinks & "<li><a href = " & Chr(34) & readXML("url") & Chr(34) & "><span>" & readXML("Text") & "</span></a></li>" & vbCrLf
                    End If
                End If
            End If
        End While
        If menuChildrenLinks.Trim.Length > 0 Then
            menuChildrenLinks = "<ul>" & menuChildrenLinks & "</ul></li>"
        Else
            menuChildrenLinks = "</li>"
        End If
        Return vbCrLf & menuChildrenLinks
    End Function

    Private Function ParseCSSMenu(ByVal mnuVar As String) As String
        If mnuVar.Contains("</ul></li>") Then
            Return " class=" & Chr(34) & "active has-sub" & Chr(34)
        Else
            Return ""
        End If
    End Function

    'This Function builds user interface menu for the front end based on xml file
    Public Function ParseMenu(ByVal RoleName As String) As String
        Dim fvalue As String = ""
        Dim readXML As XmlReader = XmlReader.Create(Environment.CurrentDirectory & "\menu.xml")
        While readXML.Read()
            If readXML.IsStartElement Then
                If readXML("role") = "members" Then
                    If readXML("parent") = "none" Then
                        menuParent = readXML("name")
                        menuParentLinks = menuParentLinks & "<li" & ParseCSSMenu(GetAllChildren(menuParent)) & "><a href = " & Chr(34) & readXML("url") & Chr(34) & "><span>" & readXML("Text") & "</span></a>" & GetAllChildren(menuParent)
                    End If
                End If
            End If
        End While
        menuParentLinks = "<ul>" & menuParentLinks & "</ul>"
        Return menuParentLinks
    End Function



End Class
