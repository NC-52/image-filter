import { Router } from 'express';
import * as ImageController from "../controllers/image.controller";

  const router: Router = Router();
  
  
  router.get( "/", ImageController.getFilteredImage);
  
export const ImageRouter: Router = router;
