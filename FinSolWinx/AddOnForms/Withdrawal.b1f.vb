Option Strict Off
Option Explicit On

Imports SAPbouiCOM.Framework
Imports SBO.SboAddOnBase
Imports OWA.SBO.FinSolnLib

<FormAttribute("OWA.SBO.FinSolnWinx.Withdrawal", "AddOnForms/Withdrawal.b1f")>
Friend Class Withdrawal
    Inherits UserFormBaseClass

    Private WithEvents txtmemid As SAPbouiCOM.EditText

    Public Sub New()
    End Sub

    Protected Overrides Sub InitBase(ByVal pAddOn As SboAddon)
        MyBase.InitBase(pAddOn)
        Me.CreateObject(New SBOWithdrawal(pAddOn, Me.UIAPIRawForm))
    End Sub

    Private Sub ChooseFromListAfter(ByVal sboObject As System.Object, ByVal pVal As SAPbouiCOM.SBOItemEventArg) _
        Handles txtmemid.ChooseFromListAfter
        m_BaseObject.OnChooseFromListAfter(sboObject, pVal)
    End Sub

    Public Overrides Sub OnInitializeComponent()
        Me.txtmemid = CType(Me.GetItem("memid").Specific, SAPbouiCOM.EditText)
        Me.StaticText0 = CType(Me.GetItem("memname").Specific, SAPbouiCOM.StaticText)
        Me.OnCustomInitialize()

    End Sub

    Public Overrides Sub OnInitializeFormEvents()

    End Sub

    Private Sub OnCustomInitialize()

    End Sub
    Private WithEvents StaticText0 As SAPbouiCOM.StaticText
End Class

