Option Strict Off
Option Explicit On

Imports SAPbouiCOM.Framework
Imports SBO.SboAddOnBase
Imports OWA.SBO.FinSolnLib

<FormAttribute("OWA.SBO.FinSolnWinx.FctyAccounts", "AddOnForms/FctyAccounts.b1f")>
    Friend Class FctyAccounts
    Inherits UserFormBaseClass

    Private WithEvents txtloan As SAPbouiCOM.EditText
    Private WithEvents txtrefund As SAPbouiCOM.EditText
    Private WithEvents txtsavings As SAPbouiCOM.EditText
    Private WithEvents txtintr As SAPbouiCOM.EditText

    Public Sub New()
    End Sub

    Protected Overrides Sub InitBase(ByVal pAddOn As SboAddon)
        MyBase.InitBase(pAddOn)
        Me.CreateObject(New SBOFctyAccount(pAddOn, Me.UIAPIRawForm))
    End Sub

    'Private Sub ChooseFromListAfter(ByVal sboObject As System.Object, ByVal pVal As SAPbouiCOM.SBOItemEventArg) _
    '    Handles txtloan.ChooseFromListAfter, txtintr.ChooseFromListAfter, txtrefund.ChooseFromListAfter, txtsavings.ChooseFromListAfter
    '    m_BaseObject.OnChooseFromListAfter(sboObject, pVal)
    'End Sub

    Public Overrides Sub OnInitializeComponent()
        Me.txtloan = CType(Me.GetItem("loan").Specific, SAPbouiCOM.EditText)
        Me.txtintr = CType(Me.GetItem("intr").Specific, SAPbouiCOM.EditText)
        Me.txtrefund = CType(Me.GetItem("refund").Specific, SAPbouiCOM.EditText)
        Me.txtsavings = CType(Me.GetItem("savings").Specific, SAPbouiCOM.EditText)
        Me.OnCustomInitialize()

    End Sub

    Public Overrides Sub OnInitializeFormEvents()

    End Sub

    Private Sub OnCustomInitialize()

    End Sub


End Class

