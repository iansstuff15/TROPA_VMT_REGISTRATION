import { google } from "googleapis"
import { useState } from "react";
import styles from '../../styles/public.module.css'
import InputComponent from "../../components/input";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Link from "next/link";
export async function getServerSideProps(){

    const auth = new google.auth.GoogleAuth({
     
        credentials: {
            "type": "service_account",
            "project_id": "volunteermanagementteam",
            "private_key_id": "2f54d9de0a5c43fe286348de05566553ee578968",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCkz6/c5tSu1kIv\nHw7r/BZ+GAoWKQEOqaggwR5DHEW+y8ZFPNmTvZl4HMBe6oI3wDeQlxwAyAzFKO9E\nFiSzYJNoEA50unHYzQcm1lEhzYZk/unwhiUOjRP42RX77msSNG6vAlwfkgZmZtKp\n868vSD7Rs2mEC08gyvG9xZA1Fb5cy40SuJo1X9Ml+LmxN5Krcl0cw775+HC3TMkd\nraiZkRDhRe4VYj9kIL48qYo+/mzx7eSPJWCuU0vIKF5TMvFaOSmr14+rpBm5TYM4\nA/RZtlxMxSLshM3u3CgNDnnHci8098Zs6S3lt5XPPlqTA66rb/hV0AsxX9/gEfRo\nwAvcJmPtAgMBAAECggEAE76r/4eKCG4z3KhYZc48NZwUrUX5UfPiaBYq1XhwJKUO\nGmJpYKlQ1xJ+u4BV3G8DWSe5W6Cb4wz96UbL28+gqVFvIe3qUMJzbmQzsRyJ0tS1\nWzL/AojFUUVUvGt6WWJ9tirOtZuNd7wu1dyTatM5b28Sn5apQrD9mDIwjiOOPFiX\nIpfQqqiH1gwcA/hNwTTKjvbZ9cGbtuS7MjGwSmq4lLwa/Q8NO9az2PdRRm//T68u\nRyefHHXRb4OEv+M0rRoimwyUWkKESMy73ux5c/Oto96V+kCzhR3c1cun/sCouFhG\n+i1HhDNB35oyr7ocK1zFk5nrzVVchSuOmj1k/ta9EwKBgQDgoD+IK2r8I5/OxVHh\n48Gm+FZxgvgQmqTMbDtwvd0151qg6WwfmxDOQX6SM4rzQ1nJqQ5shQxo10jgb1N3\nheCo+VXFL2QNkGOPeGaiZwr4bEB6o7xWzEnfp71D5tkFJ0JuChUZvDJL3GaC1j+5\nqBNkfUfXt4/3OEInruuKVA77awKBgQC71LKkkVOwTeEPC6TyDi5pj4Fn/FaeA06x\n2ashkbA0Iv7j0aCXUdwOcfnXXbBbhCShBpmxK85dWLCIGT/KKKLq2pr7USJPYamm\nKMFR/84cmbVkECiC8a8GoDgHnQ0w3i+zw4LJoJYHfMb59YFU5/FKv8CLy4xSq5+/\nO+R5kX2MBwKBgD5KchPS5oIxZtmyQni/7i3dZCtqRFxmZhkCUqF7JWMTW0CQOpmx\nKMHpy63DeV7oaHfR19wkMULJoL4MYTsd9yUkr7JU6AwS5Gke3Gdg59voOSFJUqtH\nT50kKQoxdDFHp9ZYGW3fkJsU7aCOxXE4uNf/HfMmRlgqU74pdcwQb28tAoGBAKxC\nfTOANIhUZDswKq3zY41cFwoO2kFAN0PUpKW8vySRk8HL1sPwRyjYTpG9UqgboJwt\nOXbK/g+N7xhiT6ZPblqE8e3akuTKZJQGfIV/XL/OGBUU3JJ6pFInTjttRVOz8Xuj\nqqbPp8hmHvXOujXsIdaz1RpgKukGjRMNEpSLYeCxAoGBANww4Jo+2b0Xq+91Nd/Q\nGSP25Wfs3rzXIlPQb2jjWT9HZzQ1NMTTL83VJ4xiS1eHxow69V/k4TtC7g4C4s//\nWUx17Xt172N8BaSREbMzbgDzdwFii05wzLMb2IYF/wehE+G+1++s07Q2NvO4nD70\nuCTYmL0kWn55UAcAbUcLJtRo\n-----END PRIVATE KEY-----\n",
            "client_email": "volunteermanagementteam@volunteermanagementteam.iam.gserviceaccount.com",
            "client_id": "107328742741158324241",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/volunteermanagementteam%40volunteermanagementteam.iam.gserviceaccount.com"
        },
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    

    });
    const client = await auth.getClient();

    const googleSheets = google.sheets({version:'v4', auth: client});
  const  spreadsheetId = process.env.SHEETS_ID;
 const data_response =  await googleSheets.spreadsheets.values.get({
       auth,
       spreadsheetId,
       range:'Public_In_Kind_Donations_Data!A2:C500',

   })

const data = data_response.data.values


if(data == null){

    return{
        props:{
            data: null,
            total: null
        }
    }
    }



return{
props:{
    data,
    
}
    }
}

const PublicDonations = ({data, total}) =>{ 
    
 
 
    return(
    <Layout >
 
        <div><h1 className = {styles.title}>In-Kind</h1><br/> <h1 className={styles.subtext}>Donations</h1>
        <Link href='./donations_in_kind'>
        <span className={styles.button}>Donate Now!</span>  
        </Link>
       </div>
       
        <div className={styles.total_container}>
        <h1>Total</h1>
        <h1 className={styles.demonination}>{data!=null?data.length + 'donations': ' '} </h1>
        </div>
  <div className={styles.flex_container}>
        { data!=null? data.map((data,index)=>(
            <div className={styles.cell} key={data[0]}>
            <div className={styles.RID}>
                {/* <h2 className={styles.title}>RID</h2>
                <h3 className={styles.content}>{data[0]}</h3> */}
                
                </div>
            <div className={styles.amount}>
            <h3>Date Received</h3>
            <h4>{  data[1]}</h4>
            </div>
    
            

            </div>

        ))
    : null
    
    }


        </div>
    </Layout>
)}
export default PublicDonations