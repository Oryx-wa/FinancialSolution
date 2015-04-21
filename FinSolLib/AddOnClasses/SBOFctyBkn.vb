Imports SBO.SboAddOnBase
Imports SAPbouiCOM

Public Class SBOFctyBkn
    Inherits SBOBaseObject

    Private txtmemid As SAPbouiCOM.EditText
    Private txtfcty As SAPbouiCOM.EditText
    Private txtapplno As SAPbouiCOM.EditText

    Sub New(ByVal pAddOn As SboAddon, ByVal pForm As SAPbouiCOM.IForm)
        MyBase.New(pAddOn, pForm)
    End Sub

    Protected Overrides Sub AddDataSource()
        MyBase.AddDataSource()
        m_DBDataSource0 = m_Form.DataSources.DBDataSources.Item("@OWA_FSFACILITYBK")
        m_DBDataSource1 = m_Form.DataSources.DBDataSources.Item("@OWA_FSFACILITY")
        m_DBDataSource2 = m_Form.DataSources.DBDataSources.Item("OCRD")
        m_DBDataSource3 = m_Form.DataSources.DBDataSources.Item("@OWA_FSFACILITYAPPLN")

    End Sub

    Public Overrides Sub OnCustomInit()

        MyBase.OnCustomInit()
    End Sub

    Protected Overrides Sub OnFormInit()
        MyBase.OnFormInit()
        txtmemid = CType(m_Form.Items.Item("memid").Specific, SAPbouiCOM.EditText)
        txtfcty = CType(m_Form.Items.Item("fctyid").Specific, SAPbouiCOM.EditText)
        txtapplno = CType(m_Form.Items.Item("applno").Specific, SAPbouiCOM.EditText)
    End Sub

    Public Overrides Sub OnChooseFromListAfter(ByVal sboObject As Object, ByVal pVal As SAPbouiCOM.SBOItemEventArg)
        Try
            MyBase.OnChooseFromListAfter(sboObject, pVal)
            Dim Val As String = HandleChooseFromListEvent(pVal.FormUID, pVal, False)

            If String.IsNullOrEmpty(Val) Then Return

            Select Case pVal.ItemUID

                Case "memid"
                    m_DBDataSource0.SetValue("U_memberid", 0, Val)

                    If getOffset(Val, "CardCode", m_DBDataSource2) Then
                        CType(Me.m_Form.Items.Item("memname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource2.GetValue("CardName", 0).Trim
                    End If

                Case "fctyid"
                    m_DBDataSource0.SetValue("U_facilityType", 0, Val)

                    If getOffset(Val, "Code", m_DBDataSource1) Then
                        CType(Me.m_Form.Items.Item("fctyname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("Name", 0).Trim
                    End If

                Case "applno"
                    m_DBDataSource0.SetValue("U_facilityType", 0, Val)

                    If getOffset(Val, "DocEntry", m_DBDataSource3) Then
                        CType(Me.m_Form.Items.Item("applname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource3.GetValue("U_Description", 0).Trim
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

        If getOffset(m_DBDataSource0.GetValue("U_memberid", 0).Trim, "CardCode", m_DBDataSource2) Then
            CType(Me.m_Form.Items.Item("memname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource2.GetValue("CardName", 0).Trim
        End If

        'facility name
        CType(Me.m_Form.Items.Item("fctyname").Specific, SAPbouiCOM.StaticText).Caption = ""

        If getOffset(m_DBDataSource0.GetValue("U_facilityType", 0).Trim, "Code", m_DBDataSource1) Then
            CType(Me.m_Form.Items.Item("fctyname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource1.GetValue("Name", 0).Trim
        End If

        'application name
        CType(Me.m_Form.Items.Item("applname").Specific, SAPbouiCOM.StaticText).Caption = ""

        If getOffset(m_DBDataSource0.GetValue("U_facilityAppnNo", 0).Trim, "U_Description", m_DBDataSource3) Then
            CType(Me.m_Form.Items.Item("applname").Specific, SAPbouiCOM.StaticText).Caption = m_DBDataSource3.GetValue("U_Description", 0).Trim
        End If

    End Sub

End Class
