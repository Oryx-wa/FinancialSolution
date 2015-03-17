Option Strict Off
Option Explicit On

Imports SAPbouiCOM.Framework
Imports SAPbobsCOM
Imports SBO.SboAddOnBase

<FormAttribute("OWA.SBO.FinSolnWinx.Withdrawal", "AddOnForms/Withdrawal.b1f")>
Friend Class Withdrawal
    Inherits UserFormBaseClass

    Public Sub New()
    End Sub

    Public Overrides Sub OnInitializeComponent()
        Me.StaticText0 = CType(Me.GetItem("Item_0").Specific, SAPbouiCOM.StaticText)
        Me.EditText0 = CType(Me.GetItem("docentry").Specific, SAPbouiCOM.EditText)
        Me.StaticText1 = CType(Me.GetItem("Item_2").Specific, SAPbouiCOM.StaticText)
        Me.EditText1 = CType(Me.GetItem("Item_3").Specific, SAPbouiCOM.EditText)
        Me.StaticText2 = CType(Me.GetItem("Item_4").Specific, SAPbouiCOM.StaticText)
        Me.EditText2 = CType(Me.GetItem("Item_5").Specific, SAPbouiCOM.EditText)
        Me.StaticText3 = CType(Me.GetItem("Item_6").Specific, SAPbouiCOM.StaticText)
        Me.EditText3 = CType(Me.GetItem("Item_7").Specific, SAPbouiCOM.EditText)
        Me.Button0 = CType(Me.GetItem("1").Specific, SAPbouiCOM.Button)
        Me.Button1 = CType(Me.GetItem("2").Specific, SAPbouiCOM.Button)
        Me.OnCustomInitialize()

    End Sub

    Public Overrides Sub OnInitializeFormEvents()
        AddHandler LoadAfter, AddressOf Me.Form_LoadAfter

    End Sub

    Private Sub OnCustomInitialize()

    End Sub
    Private Sub Form_LoadAfter(ByVal pVal As SAPbouiCOM.SBOItemEventArg)
        Throw New System.NotImplementedException()

    End Sub
    Private WithEvents StaticText0 As SAPbouiCOM.StaticText
    Private WithEvents EditText0 As SAPbouiCOM.EditText
    Private WithEvents StaticText1 As SAPbouiCOM.StaticText
    Private WithEvents EditText1 As SAPbouiCOM.EditText
    Private WithEvents StaticText2 As SAPbouiCOM.StaticText
    Private WithEvents EditText2 As SAPbouiCOM.EditText
    Private WithEvents StaticText3 As SAPbouiCOM.StaticText
    Private WithEvents EditText3 As SAPbouiCOM.EditText
    Private WithEvents Button0 As SAPbouiCOM.Button
    Private WithEvents Button1 As SAPbouiCOM.Button
End Class

