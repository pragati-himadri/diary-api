 import express from 'express';
 import {requireAuth} from '../middleware/auth.js';
 import { getAllposts,
          getposts,
          createposts,
          deleteposts,
          updateposts
        } from '../controllers/postControllers.js';

 const router = express.Router();
 router.use(requireAuth);

 router.get('/',getAllposts);
router.get('/:id', getposts);
router.post('/', createposts);
router.delete('/:id', deleteposts);
router.patch('/:id', updateposts);

 export default router;