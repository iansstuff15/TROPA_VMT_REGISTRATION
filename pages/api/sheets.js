// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {google} = require('googleapis');
const sheets = google.sheets('v4');

export default async function handler (req, res)  {

    const client =  google.auth.JWT('dlpowell35@gmail.com', null, process.env.SHEETS_API_KEY, ['https://www.googleapis.com/auth/spreadsheets'])
client.authorize(
    function(err,tokens){
        if(err){
            console.log(err)
            return
        }
        else{
            console.log('connected');
        }
    }
)
 
    const body = JSON.parse(req.body);
    const request = {
        // The ID of the spreadsheet to update.
        spreadsheetId: '16-cmNiYNJyy0B4E8HHCDhU8vQwkpxH7_VKlNR7QO39Y',  // TODO: Update placeholder value.
    
        // The A1 notation of a range to search for a logical table of data.
        // Values are appended after the last row of the table.
        range: 'A2',  // TODO: Update placeholder value.
    
        // How the input data should be interpreted.
        valueInputOption: 'USER_ENTERED',  // TODO: Update placeholder value.
    
        // How the input data should be inserted.
        insertDataOption: 'INSERT_ROWS',  // TODO: Update placeholder value.
    
        resource: {
          // TODO: Add desired properties to the request body.
          'values':[
              [
            //    body.firstName,lastName,body.email,body.age, body.phone,body.Barrangay, body.City, 'MWF'
            "firstName","lastNmae","testemail@email.com","age","phone", "barrangay", "city", "mwf"
              ]
          ]
        },
    
        auth: authClient,
      };
    
      try {
        const response = (await sheets.spreadsheets.values.append(request)).data;
        // TODO: Change code below to process the `response` object:
        console.log(JSON.stringify(response, null, 2));
      } catch (err) {
        console.error(err);
      }
    res.status(200).json({ status: 'Ok' })
  }
  