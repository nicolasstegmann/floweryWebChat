import { Router } from "express";
const router = Router();

router.get('/',async (req,res)=>{
    res.render('index', { style: 'chat.css', title: 'Flowery 4107 Webchat'});
})

export default router;