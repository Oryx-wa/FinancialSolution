Imports Microsoft.VisualBasic

Public Class ParseJSONData

    '{"FetchPendingRequestsResult":"[{\"FullName\":\"HENRY OFOREH\",\"Category\":\"Coop Staff\",\"Email\":\"HENRYOFOREH\",\"Location\":\"Lagos\",\"RequestType\":\"Registration\",\"DateJoined\":\"4\/1\/2015\"}]"}
    '[{lastName: "Dente", name: "Al", stillNaughty: true},{lastName: "Friese", name: "Andy", stillNaughty: true},{lastName: "Mann", name: "Anita", stillNaughty: false}];

    Public Shared Function CleanJSON(jsonvariable As String) As String
        Dim sresult() As String = Regex.Split(jsonvariable, "[{")
        Dim dresult As String = Regex.Replace(sresult(1), "},{", "@@@")
        dresult = dresult.Replace("\u0026", "&")
        dresult = dresult.Replace("\u0027", "'")
        dresult = dresult.Replace(",\", "|").Replace("""", "")
        'dresult = dresult.Replace(":[{", "")
        'dresult = dresult.Replace("}]}", "")
        Return dresult
    End Function


End Class
