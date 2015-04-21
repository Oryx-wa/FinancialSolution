Imports SBO.SboAddOnBase
Imports SAPbouiCOM

Public Class SBOFctyAccount
    Inherits SBOBaseObject

    Private txtloan As SAPbouiCOM.EditText
    Private txtintr As SAPbouiCOM.EditText
    Private txtsavings As SAPbouiCOM.EditText
    Private txtrefund As SAPbouiCOM.EditText


    Sub New(ByVal pAddOn As SboAddon, ByVal pForm As SAPbouiCOM.IForm)
        MyBase.New(pAddOn, pForm)
    End Sub

    Protected Overrides Sub AddDataSource()
        MyBase.AddDataSource()
        m_DBDataSource0 = m_Form.DataSources.DBDataSources.Item("@OWA_FSACCOUNTS")
        m_DBDataSource1 = m_Form.DataSources.DBDataSources.Item("OACT")


    End Sub

    Public Overrides Sub OnCustomInit()

        MyBase.OnCustomInit()
    End Sub

    Protected Overrides Sub OnFormInit()
        MyBase.OnFormInit()
        txtloan = CType(m_Form.Items.Item("loan").Specific, SAPbouiCOM.EditText)
        txtrefund = CType(m_Form.Items.Item("refund").Specific, SAPbouiCOM.EditText)
        txtsavings = CType(m_Form.Items.Item("savings").Specific, SAPbouiCOM.EditText)
        txtintr = CType(m_Form.Items.Item("intr").Specific, SAPbouiCOM.EditText)

    End Sub

    Public Overrides Sub OnChooseFromListAfter(ByVal sboObject As Object, ByVal pVal As SAPbouiCOM.SBOItemEventArg)
        Try
            MyBase.OnChooseFromListAfter(sboObject, pVal)
            Dim Val As String = HandleChooseFromListEvent(pVal.FormUID, pVal, False)

            If String.IsNullOrEmpty(Val) Then Return

            Select Case pVal.ItemUID

                Case "loan"
                    m_DBDataSource0.SetValue("U_LoanAcct", 0, Val)

                    If getOffset(Val, "AcctCode", m_DBDataSource1) Then
                        CType(Me.m_Form.Items.Item("loanname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("AcctName", 0).Trim
                    End If
                Case "intr"
                    m_DBDataSource0.SetValue("U_intrAcct", 0, Val)

                    If getOffset(Val, "AcctCode", m_DBDataSource1) Then
                        CType(Me.m_Form.Items.Item("intrname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("AcctName", 0).Trim
                    End If
                Case "refund"
                    m_DBDataSource0.SetValue("U_refundAcct", 0, Val)

                    If getOffset(Val, "AcctCode", m_DBDataSource1) Then
                        CType(Me.m_Form.Items.Item("refdname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("AcctName", 0).Trim
                    End If
                Case "savings"
                    m_DBDataSource0.SetValue("U_SavingsAcct", 0, Val)

                    If getOffset(Val, "AcctCode", m_DBDataSource1) Then
                        CType(Me.m_Form.Items.Item("savgname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("AcctName", 0).Trim
                    End If
               

            End Select

        Catch ex As Exception
            m_SboApplication.StatusBar.SetText(ex.Message.ToString, SAPbouiCOM.BoMessageTime.bmt_Medium, SAPbouiCOM.BoStatusBarMessageType.smt_Error)
        End Try
    End Sub

    Protected Overrides Sub OnFormNavigate()
        MyBase.OnFormNavigate()

        'loan name
        CType(Me.m_Form.Items.Item("loanname").Specific, SAPbouiCOM.StaticText).Caption = ""
        CType(Me.m_Form.Items.Item("refdname").Specific, SAPbouiCOM.StaticText).Caption = ""
        CType(Me.m_Form.Items.Item("intrname").Specific, SAPbouiCOM.StaticText).Caption = ""
        CType(Me.m_Form.Items.Item("savgname").Specific, SAPbouiCOM.StaticText).Caption = ""

        If getOffset(m_DBDataSource0.GetValue("U_LoanAcct", 0).Trim, "AcctCode", m_DBDataSource1) Then
            CType(Me.m_Form.Items.Item("loanname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("AcctName", 0).Trim
        End If
        If getOffset(m_DBDataSource0.GetValue("U_IntrAcct", 0).Trim, "AcctCode", m_DBDataSource1) Then
            CType(Me.m_Form.Items.Item("intrname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("AcctName", 0).Trim
        End If
        If getOffset(m_DBDataSource0.GetValue("U_SavingsAcct", 0).Trim, "AcctCode", m_DBDataSource1) Then
            CType(Me.m_Form.Items.Item("savgname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("AcctName", 0).Trim
        End If
        If getOffset(m_DBDataSource0.GetValue("U_RefundAcct", 0).Trim, "AcctCode", m_DBDataSource1) Then
            CType(Me.m_Form.Items.Item("refdname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("AcctName", 0).Trim
        End If


    End Sub
End Class
