import { Router } from "express";
import { User } from "../models/user.model";


export const userRouter = Router();

userRouter.post("/signup",async (req,res) => {
    const {username , password} = req.body;
    try{
        
    } catch(error) {
        console.error(error);
        res.status(400).json({
            error : "Error signing up!"
        })
    }
    return;
})