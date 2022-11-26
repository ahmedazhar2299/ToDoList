import { Router } from "express";
import generateDateTime from '../../date.js'
import List from '../../models/List.js'
const listRoute = Router();

listRoute.get('/',async (req,res)=>{
    try {
        const list = await List.find()
        res.status(200).json(list)
        
    } catch (err) {
        res.status(500).json(err)
    }
})

listRoute.post('/add',async (req,res)=>{
    try {
        if(req.body.text){
            const list = {
                text : req.body.text,
                date : generateDateTime(),
                isCompleted : "false"
            }
            const newList = await new List(list)
            newList.save()
            res.status(200).json("Successfully Added")
        }
        else{
            res.status(403).json("Invalid Entry")
        }
        
    } catch (err) {
        res.status(500).json(err)
    }
})


listRoute.put('/update',async (req,res)=>{
    try {
        if(req.body.oldText && req.body.newText && req.body.date){
            const list = await List.findOne({
                text : req.body.oldText,
                date : req.body.date
            })
            if(list){
                await list.updateOne({
                    $set : {
                        text : req.body.newText
                    }
                })
                res.status(200).json("Successfully Updated")
            }
            else{
                res.status(403).json("Updation Failed")
            }
        }
        else{
            res.status(403).json("Invalid Entry")
        }
        
    } catch (err) {
        res.status(500).json(err)
    }
})

listRoute.post('/complete',async (req,res)=>{
    try {
        if(req.body.text && req.body.date){
            const list = await List.findOne({
                text : req.body.text,
                date : req.body.date
            })
            if(list){
                await list.updateOne({
                    $set : {
                        isCompleted : "true"
                    }
                })
                res.status(200).json("Successfully Completed")
            }
            else{
                res.status(403).json("Updation Failed")
            }
        }
        else{
            res.status(403).json("Invalid Entry")
        }
        
    } catch (err) {
        res.status(500).json(err)
    }
})

listRoute.post('/delete',async (req,res)=>{
    try {
        console.log(req.body.date);
        if(req.body.text && req.body.date){
            const list = await List.findOne({
                text : req.body.text,
                date : req.body.date
            })
            if(list){
              await list.delete()
              res.status(200).json("Deletion Successful")
            }
            else{
                res.status(404).json("Deletion Failed")
            }
        }
        else{
            res.status(403).json("Invalid Entry")
        }
        
    } catch (err) {
        res.status(500).json(err)
    }
})





export default listRoute;