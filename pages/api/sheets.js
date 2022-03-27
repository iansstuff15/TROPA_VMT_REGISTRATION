// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from "googleapis"
export default async function handler(req, res) {

    const body = JSON.parse(req.body);
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });
    const client = await auth.getClient();

    const googleSheets = google.sheets({version:'v4', auth: client});
  const  spreadsheetId = "16-cmNiYNJyy0B4E8HHCDhU8vQwkpxH7_VKlNR7QO39Y";
   await googleSheets.spreadsheets.values.append({
       auth,
       spreadsheetId,
       range:'Sheet1!A2',
       valueInputOption: 'USER_ENTERED',
       resource: {
           values:[[
            body.firstName,body.lastName,body.email,body.age,body.phone,body.Barrangay,body.City,"MWF"
           ]]
       }
   })
    res.status(200).json({ name: 'John Doe' })
  }
  