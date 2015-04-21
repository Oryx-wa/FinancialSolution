Option Strict Off
Option Explicit On

Imports SAPbouiCOM.Framework
Imports SBO.SboAddOnBase
Imports OWA.SBO.FinSolnLib

<FormAttribute("OWA.SBO.FinSolnWinx.FctyApplication", "AddOnForms/FctyApplication.b1f")>
    Friend Class FctyApplication
    Inherits UserFormBaseClass

    Public Sub New()
    End Sub

    Protected Overrides Sub InitBase(ByVal pAddOn As SboAddon)
        MyBase.InitBase(pAddOn)
        Me.CreateObject(New SBOFctyAppl(pAddOn, Me.UIAPIRawForm))
    End Sub

    Private Sub ChooseFromListAfter(ByVal sboObject As System.Object, ByVal pVal As SAPbouiCOM.SBOItemEventArg) _
        Handles txtmemid.ChooseFromListAfter, txtfctyid.ChooseFromListAfter
        m_BaseObject.OnChooseFromListAfter(sboObject, pVal)
    End Sub

    Public Overrides Sub OnInitializeComponent()

        Me.txtmemid = CType(Me.GetItem("memid").Specific, SAPbouiCOM.EditText)
        Me.txtfctyid = CType(Me.GetItem("fctyid").Specific, SAPbouiCOM.EditText)
        Me.OnCustomInitialize()

    End Sub

    Public Overrides Sub OnInitializeFormEvents()

    End Sub
    Private WithEvents StaticText0 As SAPbouiCOM.StaticText

    Private Sub OnCustomInitialize()

    End Sub
   
    Private WithEvents txtmemid As SAPbouiCOM.EditText
    Private WithEvents txtfctyid As SAPbouiCOM.EditText
   
End Class
