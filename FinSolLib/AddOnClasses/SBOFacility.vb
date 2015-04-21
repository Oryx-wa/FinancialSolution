Imports SBO.SboAddOnBase
Imports SAPbouiCOM

Public Class SBOFacility
    Inherits SBOBaseObject

    Private txtacctcode As SAPbouiCOM.EditText
    Private cbofctyacct As SAPbouiCOM.ComboBox

    Sub New(ByVal pAddOn As SboAddon, ByVal pForm As SAPbouiCOM.IForm)
        MyBase.New(pAddOn, pForm)
    End Sub

    Protected Overrides Sub AddDataSource()
        MyBase.AddDataSource()
        m_DBDataSource0 = m_Form.DataSources.DBDataSources.Item("@OWA_FSFACILITY")
        m_DBDataSource1 = m_Form.DataSources.DBDataSources.Item("OACT")

    End Sub

    Public Overrides Sub OnCustomInit()
        MyBase.OnCustomInit()
    End Sub

    Protected Overrides Sub OnFormInit()
        MyBase.OnFormInit()

        'txtacctcode = CType(m_Form.Items.Item("acctcode").Specific, SAPbouiCOM.EditText)
        cbofctyacct = CType(m_Form.Items.Item("fctyacct").Specific, SAPbouiCOM.ComboBox)


    End Sub

    Protected Overrides Sub OnFormLoad()
        MyBase.OnFormLoad()

        fillCombo("Code", "Name", "@OWA_FSACCOUNTS", cbofctyacct.ValidValues)

    End Sub

    'Public Overrides Sub OnChooseFromListAfter(ByVal sboObject As Object, ByVal pVal As SAPbouiCOM.SBOItemEventArg)
    '    Try
    '        MyBase.OnChooseFromListAfter(sboObject, pVal)
    '        Dim Val As String = HandleChooseFromListEvent(pVal.FormUID, pVal, False)

    '        If String.IsNullOrEmpty(Val) Then Return

    '        Select Case pVal.ItemUID

    '            Case "acctcode"
    '                m_DBDataSource0.SetValue("U_glAcct", 0, Val)

    '                If getOffset(Val, "AcctCode", m_DBDataSource1) Then
    '                    CType(Me.m_Form.Items.Item("acctname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("AcctName", 0).Trim
    '                End If


    '        End Select

    '    Catch ex As Exception
    '        m_SboApplication.StatusBar.SetText(ex.Message.ToString, SAPbouiCOM.BoMessageTime.bmt_Medium, SAPbouiCOM.BoStatusBarMessageType.smt_Error)
    '    End Try
    'End Sub

    'Protected Overrides Sub OnFormNavigate()
    '    MyBase.OnFormNavigate()

    '    CType(Me.m_Form.Items.Item("acctname").Specific, SAPbouiCOM.StaticText).Caption = ""

    '    If getOffset(m_DBDataSource0.GetValue("U_glAcct", 0).Trim, "AcctCode", m_DBDataSource1) Then
    '        CType(Me.m_Form.Items.Item("acctname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("AcctName", 0).Trim
    '    End If
    'End Sub

End Class
