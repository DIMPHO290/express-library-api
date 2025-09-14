import bodyParser from "body-parser"
import express,{Express} from "express"

import router from "./router/authors"


const app:Express = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.json())



app.use("/v1/author" ,router)

app.listen(PORT ,() =>{
  console.log(`Server is running on http://localhost: ${PORT}`)
})