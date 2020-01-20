import { Router, Request, Response } from 'express';
import * as ImageController from "../controllers/image.controller";
import  { ImageRouter } from "../routes/image.router"

const router: Router = Router();

router.use('/filteredimage', ImageRouter);


export const IndexRouter: Router = router;