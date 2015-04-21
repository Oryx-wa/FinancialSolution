Option Strict Off
Option Explicit On

Imports SAPbouiCOM.Framework
Imports SBO.SboAddOnBase
Imports OWA.SBO.FinSolnLib

<FormAttribute("OWA.SBO.FinSolnWinx.Facility", "AddOnForms/Facility.b1f")>
Friend Class Facility
    Inherits UserFormBaseClass

    Public Sub New()
    End Sub

    Protected Overrides Sub InitBase(ByVal pAddOn As SboAddon)
        MyBase.InitBase(pAddOn)
        Me.CreateObject(New SBOFacility(pAddOn, Me.UIAPIRawForm))
    End Sub

    Public Overrides Sub OnInitializeComponent()
        Me.txtacctcode = CType(Me.GetItem("txtcode").Specific, SAPbouiCOM.EditText)
        Me.LinkedButton0 = CType(Me.GetItem("Item_1").Specific, SAPbouiCOM.LinkedButton)
        Me.ComboBox0 = CType(Me.GetItem("fctyacct").Specific, SAPbouiCOM.ComboBox)
        Me.OnCustomInitialize()

    End Sub

    Public Overrides Sub OnInitializeFormEvents()

    End Sub
    Private WithEvents StaticText0 As SAPbouiCOM.StaticText

    Private Sub OnCustomInitialize()

    End Sub

    Private Sub ChooseFromListAfter(ByVal sboObject As System.Object, ByVal pVal As SAPbouiCOM.SBOItemEventArg) Handles txtacctcode.ChooseFromListAfter
        m_BaseObject.OnChooseFromListAfter(sboObject, pVal)
    End Sub


 
    Private WithEvents txtacctcode As SAPbouiCOM.EditText
    Private WithEvents LinkedButton0 As SAPbouiCOM.LinkedButton
    Private WithEvents ComboBox0 As SAPbouiCOM.ComboBox

End Class
