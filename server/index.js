import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.get('/',(req,res)=>{
res.json({
    message:'say hello to express'
})

})
app.listen(3002,()=>{
   console.log('app is runing on port 3002');
})