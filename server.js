const express = require('express')
const { Client } = require('@notionhq/client')
const cors = require('cors')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const app = express()

app.use(cors());

const PORT = 4000;
const HOST = "localhost"

const client = new Client({ auth: "secret_vZDuxnwSz1hzQ4gQrWw42Cjmhvn7LtNFt1Vr8YVGP2s" })

const databaseId = "04fc3427f7c944418824b868c10f7a44"

// POST request
// POST name, phoneNumber, extraInfo
// Functionality: Make a database entry in a Notion page with the databaseId above 
app.post('/submitFormToNotion', jsonParser, async (req, res) => {
    // req.body
    // {
    //     name: "현정호",
    //     phoneNumber: "24154",
    //     extraInfo: "안녕"
    // }
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const extraInfo = req.body.extraInfo;

    try {
        const response = await notion.pages.create({
            parent: { database_id: databaseId},
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                conteent: name
                            }
                        }
                    ]
                },
                "Phone Number": {
                    rich_text: [
                        {
                            text: {
                                conteent: name
                            }
                        }
                    ]
                },
                "Extra Information": {
                    rich_text: [
                        {
                            text: {
                                conteent: name
                            }
                        }
                    ]
                }
            }
        })
        console.log(response)
        console.log("SUCCESS!")
    } catch(error) {
        console.log(error)
    }
})


app.listen(PORT, HOST, () => {
    console.log("Stating proxy at " + HOST + ":" + PORT)
})