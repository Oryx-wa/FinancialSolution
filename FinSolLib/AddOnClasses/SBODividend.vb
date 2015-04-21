Imports SBO.SboAddOnBase
Imports SAPbouiCOM

Public Class SBODividend
    Inherits SBOBaseObject

    Private txtmemid As SAPbouiCOM.EditText


    Sub New(ByVal pAddOn As SboAddon, ByVal pForm As SAPbouiCOM.IForm)
        MyBase.New(pAddOn, pForm)
    End Sub

    Protected Overrides Sub AddDataSource()
        MyBase.AddDataSource()
        m_DBDataSource0 = m_Form.DataSources.DBDataSources.Item("@OWA_FSWITHDRAWAL")
        m_DBDataSource1 = m_Form.DataSources.DBDataSources.Item("OCRD")


    End Sub

    Public Overrides Sub OnCustomInit()

        MyBase.OnCustomInit()
    End Sub

    Protected Overrides Sub OnFormInit()
        MyBase.OnFormInit()
        txtmemid = CType(m_Form.Items.Item("memid").Specific, SAPbouiCOM.EditText)

    End Sub

    Public Overrides Sub OnChooseFromListAfter(ByVal sboObject As Object, ByVal pVal As SAPbouiCOM.SBOItemEventArg)
        Try
            MyBase.OnChooseFromListAfter(sboObject, pVal)
            Dim Val As String = HandleChooseFromListEvent(pVal.FormUID, pVal, False)

            If String.IsNullOrEmpty(Val) Then Return

            Select Case pVal.ItemUID

                Case "memid"
                    m_DBDataSource0.SetValue("U_memberid", 0, Val)

                    If getOffset(Val, "CardCode", m_DBDataSource1) Then
                        CType(Me.m_Form.Items.Item("memname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("CardName", 0).Trim
                    End If


            End Select

        Catch ex As Exception
            m_SboApplication.StatusBar.SetText(ex.Message.ToString, SAPbouiCOM.BoMessageTime.bmt_Medium, SAPbouiCOM.BoStatusBarMessageType.smt_Error)
        End Try
    End Sub

    Protected Overrides Sub OnFormNavigate()
        MyBase.OnFormNavigate()

        'member name
        CType(Me.m_Form.Items.Item("memname").Specific, SAPbouiCOM.StaticText).Caption = ""

        If getOffset(m_DBDataSource0.GetValue("U_memberid", 0).Trim, "CardCode", m_DBDataSource1) Then
            CType(Me.m_Form.Items.Item("memname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("CardName", 0).Trim
        End If



    End Sub
End Class
