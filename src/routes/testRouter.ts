import { Router } from "express";

const userRouter = Router();
 
userRouter.get('/', (req, res)=>{
    res.send("teste.");
});

userRouter.get('/2',(req, res)=>{
    res.send("teste 2.");
});

export default userRouter;
