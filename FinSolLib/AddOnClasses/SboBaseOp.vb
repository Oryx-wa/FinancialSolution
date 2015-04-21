
Imports System.Text.RegularExpressions
Imports System.IO
Imports System.Xml

Public MustInherit Class SboBaseOp

    Public Sub New()
    End Sub

    Private oCompany As SAPbobsCOM.Company
    Private oRecSet As SAPbobsCOM.Recordset
    Private lerr As Long, sErr As String

    Private Server, CompanyDB, UserName, Password As String
    Private DbServerType, language As Integer
    Private UseTrusted As Boolean
    Private DbUserName, DbPassword As String
    Private varRecFields, varRecData, varFetchedRec As String

    Dim parseReadXML As XmlReader
    Dim ht As Hashtable

    Private Sub writeOutput(ByVal fname As String, ByVal fcontent As String)
        Dim objWriter As New StreamWriter(Environment.CurrentDirectory & "\" & fname, True)
        objWriter.WriteLine(fcontent)
        objWriter.Flush()
        objWriter.Close()
        objWriter = Nothing
    End Sub

    'This Method Assigns Connection variables to
    Private Sub AssignConnectionVariables()
        Try
            Dim objReader As New System.IO.StreamReader(Environment.CurrentDirectory & "\sys.dll")
            Dim Servervar() As String = Regex.Split(objReader.ReadLine(), "==") : Server = Servervar(1)
            Dim CompanyDBVar() As String = Regex.Split(objReader.ReadLine(), "==") : CompanyDB = CompanyDBVar(1)
            Dim UserNameVar() As String = Regex.Split(objReader.ReadLine(), "==") : UserName = UserNameVar(1)
            Dim PasswordVar() As String = Regex.Split(objReader.ReadLine(), "==") : Password = PasswordVar(1)
            Dim DbServerTypeVar() As String = Regex.Split(objReader.ReadLine(), "==") : DbServerType = DbServerTypeVar(1)
            Dim languageVar() As String = Regex.Split(objReader.ReadLine(), "==") : language = CInt(languageVar(1))
            Dim UseTrustedVar() As String = Regex.Split(objReader.ReadLine(), "==") : UseTrusted = UseTrustedVar(1)
            Dim DbUserNameVar() As String = Regex.Split(objReader.ReadLine(), "==") : DbUserName = DbUserNameVar(1)
            Dim DbPasswordVar() As String = Regex.Split(objReader.ReadLine(), "==") : DbPassword = DbPasswordVar(1)
        Catch ex As Exception
            writeOutput("/AssignVarError.txt", ex.ToString)
        End Try
    End Sub

    'This Method Connects the Calling Application / Client Application to SAP Database
    Public Sub ConnectToDatabase()
        AssignConnectionVariables()
        oCompany = New SAPbobsCOM.Company
        With oCompany
            .Server = Server
            .CompanyDB = CompanyDB
            .UserName = UserName
            .Password = Password
            .DbServerType = DbServerType
            .language = language
            .UseTrusted = UseTrusted
            .DbUserName = DbUserName
            .DbPassword = DbPassword
            lerr = oCompany.Connect()
            If lerr <> 0 Then
                Call oCompany.GetLastError(lerr, sErr)
                writeOutput("/ConnDBError.txt", lerr & "  " & sErr)
            Else

            End If
        End With
    End Sub

    Public Sub ConnectToDatabase2()
        oCompany = New SAPbobsCOM.Company
        With oCompany
            .Server = "192.168.1.81"
            .CompanyDB = "U_Connect"
            .UserName = "manager"
            .Password = "sap101"
            .DbServerType = 6
            .language = 8
            .UseTrusted = False
            .DbUserName = "sa"
            .DbPassword = "sql2k"
            lerr = oCompany.Connect()
            If lerr <> 0 Then
                Call oCompany.GetLastError(lerr, sErr)
                writeOutput("/ConnDBError.txt", lerr & "  " & sErr)
            Else
            End If
        End With
    End Sub

    Public Sub DisconnectDatabase()
        oCompany.Disconnect()
    End Sub

    Public Sub SaveNewUser(ByVal FullName As String, ByVal CardCode As String, ByVal DocEntry As Integer)
        ConnectToDatabase2()
        Try
            Dim obp As SAPbobsCOM.BusinessPartners
            obp = oCompany.GetBusinessObject(SAPbobsCOM.BoObjectTypes.oBusinessPartners)
            obp.CardCode = CardCode
            obp.CardName = FullName

            obp.Add()
        Catch ex As Exception
            writeOutput("/AddError.txt", ex.ToString)
        End Try

        'DisconnectDatabase()
        'obp.Update()
    End Sub

    'This Function authenticates the Calling Application / Client Application
    Public Function AuthenticateUser(ByVal SQLQuery As String) As Boolean
        Dim varFinData As String = ""
        varRecData = Chr(10) & Chr(32) & Chr(32) & ""
        varFetchedRec = "<?xml version=" & Chr(34) & "1.0" & Chr(34) & " encoding=" & Chr(34) & "utf-8" & Chr(34) & " ?>"
        oRecSet = oCompany.GetBusinessObject(SAPbobsCOM.BoObjectTypes.BoRecordset)
        oRecSet.DoQuery(SQLQuery)

        If oRecSet.RecordCount > 0 Then
            For x As Integer = 0 To oRecSet.RecordCount - 1
                For y As Integer = 0 To oRecSet.Fields.Count - 1
                    If (y = oRecSet.Fields.Count - 1) Then
                        varRecData = varRecData & "</TableExtract>" & vbCrLf
                    ElseIf (y = 0) Then
                        varRecData = varRecData & "<TableExtract>" & vbCrLf & "<" & oRecSet.Fields.Item(y).Name & " data=" & Chr(34) & oRecSet.Fields.Item(y).Value & Chr(34) & ">" & oRecSet.Fields.Item(y).Value & "</" & oRecSet.Fields.Item(y).Name & ">" & vbCrLf & Chr(32)
                    Else
                        varRecData = varRecData & "<" & oRecSet.Fields.Item(y).Name & " data=" & Chr(34) & oRecSet.Fields.Item(y).Value & Chr(34) & ">" & oRecSet.Fields.Item(y).Value & "</" & oRecSet.Fields.Item(y).Name & ">" & vbCrLf & Chr(32)
                    End If
                Next
                oRecSet.MoveNext()
            Next
        End If
        varFetchedRec = varFetchedRec & vbCrLf & "<Table>" & vbCrLf & varRecData & vbCrLf & "</Table>"
        If oRecSet.RecordCount > 0 Then
            Return True
        Else
            Return False
        End If
        Return False
    End Function

    Public Function FetchRecordsDatabase(ByVal SQLQuery As String, ByVal RetType As String) As Hashtable
        Dim stFields As String = ""
        ht = New Hashtable()
        oRecSet = oCompany.GetBusinessObject(SAPbobsCOM.BoObjectTypes.BoRecordset)
        oRecSet.DoQuery(SQLQuery)
        If oRecSet.RecordCount > 0 Then
            For x As Integer = 0 To oRecSet.RecordCount - 1
                For y As Integer = 0 To oRecSet.Fields.Count - 1
                    stFields = stFields & oRecSet.Fields.Item(y).Name & "||" & oRecSet.Fields.Item(y).Value & "@@@"
                Next
                ht.Add(oRecSet.Fields.Item(0).Value, stFields)
                stFields = ""
                oRecSet.MoveNext()
            Next
        End If
        Return ht
    End Function

    Public Function ExtractFieldFromBundle(ByVal RawFieldData As String, ByVal FieldName As String) As String
        Dim tempRecord() As String = {}
        tempRecord = RawFieldData.Trim.Split("@@@")
        For x As Integer = 0 To tempRecord.Length - 1
            If (tempRecord(x).ToUpper.StartsWith(FieldName.ToUpper)) Then
                Return ParseExtractedData(tempRecord(x))
            End If
        Next
        Return ""
    End Function

    'CardCode||BD003@@@CardName||Ecobank Overdraft  for  A/C No 710@@@
    Public Function ExtractFieldData(ByVal FieldName As String, ByVal myTable As Hashtable) As String
        Dim tempRecord() As String = {}
        Dim tempField() As String = {}
        Dim finField As String = ""
        Dim key As ICollection = myTable.Keys
        For Each k In key
            tempRecord = Convert.ToString(ht(k)).Trim.Split("@@@")
            For x As Integer = 0 To tempRecord.Length - 1
                If (tempRecord(x).ToUpper.StartsWith(FieldName.ToUpper)) Then
                    Return ParseExtractedData(tempRecord(x))
                End If
            Next
        Next k
        Return ""
    End Function

    'Extract Data from Field
    Private Function ParseExtractedData(ByVal rawData As String) As String
        Dim tempraw(2)
        tempraw = Split(rawData, "||")
        Return tempraw(1)
    End Function

    'This Function Returns Data in XML Format. This makes it easier to consume by the Calling Application / Client Application
    Public Function FetchRecordsDatabase(ByVal SQLQuery As String) As String
        Dim varFinData As String = ""
        varRecData = Chr(10) & Chr(32) & Chr(32) & ""
        varFetchedRec = "<?xml version=" & Chr(34) & "1.0" & Chr(34) & " encoding=" & Chr(34) & "utf-8" & Chr(34) & " ?>"
        oRecSet = oCompany.GetBusinessObject(SAPbobsCOM.BoObjectTypes.BoRecordset)
        oRecSet.DoQuery(SQLQuery)

        If oRecSet.RecordCount > 0 Then
            For x As Integer = 0 To oRecSet.RecordCount - 1
                For y As Integer = 0 To oRecSet.Fields.Count
                    If (y = oRecSet.Fields.Count) Then
                        varRecData = varRecData & "</TableExtract>" & vbCrLf
                    ElseIf y = 0 Then
                        varRecData = varRecData & "<TableExtract>" & vbCrLf & "<" & oRecSet.Fields.Item(y).Name & " data=" & Chr(34) & oRecSet.Fields.Item(y).Value & Chr(34) & ">" & oRecSet.Fields.Item(y).Value & "</" & oRecSet.Fields.Item(y).Name & ">" & vbCrLf & Chr(32)
                    Else
                        varRecData = varRecData & "<" & oRecSet.Fields.Item(y).Name & " data=" & Chr(34) & oRecSet.Fields.Item(y).Value & Chr(34) & ">" & oRecSet.Fields.Item(y).Value & "</" & oRecSet.Fields.Item(y).Name & ">" & vbCrLf & Chr(32)
                    End If
                Next
                oRecSet.MoveNext()
            Next
        End If
        varFetchedRec = varFetchedRec & vbCrLf & "<Table>" & vbCrLf & varRecData & vbCrLf & "</Table>"
        Return varFetchedRec
    End Function

    'This Function Extracts XML Data from the Field in XML Data and returns to the Calling Application / Client Application
    Public Function GetFieldData(ByVal FieldName As String) As String
        Dim fvalue As String = ""
        Dim readXML As XmlReader = XmlReader.Create(New StringReader(varFetchedRec))
        While readXML.Read()
            If readXML.IsStartElement Then
                If readXML.Name.ToUpper = FieldName.ToUpper Then
                    fvalue = readXML("data")
                End If
            End If
        End While
        Return fvalue
    End Function

    'This Function Gets the Next Document Entry data in the SAP Database Table
    Public Function NextDocEntry(ByVal pst_TableName As String) As Integer
        Try
            Dim m_sql As String = ""
            m_sql = "SELECT ISNULL(MAX(CAST(DocEntry as int)),0) + 1 NextNum"
            m_sql += " FROM " + pst_TableName.Trim + ""
            oRecSet = oCompany.GetBusinessObject(SAPbobsCOM.BoObjectTypes.BoRecordset)
            oRecSet.DoQuery(m_sql)
            Return oRecSet.Fields.Item(0).Value
        Catch ex As Exception
            Return Nothing
        End Try
        Return Nothing
    End Function

    'This Function Gets the Next Code Number Entry data in the SAP Database Table
    Public Function NextCodeNum(ByVal pst_TableName As String) As Integer
        Try
            Dim m_sql As String = ""
            m_sql = "SELECT ISNULL(MAX(CAST(Code as int)),0) + 1 NextNum"
            m_sql += " FROM " + pst_TableName.Trim + ""
            oRecSet = oCompany.GetBusinessObject(SAPbobsCOM.BoObjectTypes.BoRecordset)
            oRecSet.DoQuery(m_sql)
            Return oRecSet.Fields.Item(0).Value
        Catch ex As Exception
            Return Nothing
        End Try
        Return Nothing
    End Function

    'This Function Executes Any Type of Query for Insert, Update, Delete
    Public Function ExecuteBOBQuery(ByVal SQLQuery As String) As Boolean
        Try
            oRecSet = oCompany.GetBusinessObject(SAPbobsCOM.BoObjectTypes.BoRecordset)
            oRecSet.DoQuery(SQLQuery)
        Catch ex As Exception
            'writeOutput("/BOBError.txt", ex.ToString)
            Return False
        End Try
        Return True
    End Function



End Class
