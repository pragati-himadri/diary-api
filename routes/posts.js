 import express from 'express';
 import { getAllposts,
          getposts,
          createposts,
          deleteposts,
          updateposts
        } from '../controllers/postControllers.js';

 const router = express.Router();

 router.get('/',getAllposts);
router.get('/:id', getposts);
router.post('/', createposts);
router.delete('/:id', deleteposts);
router.patch('/:id', updateposts);

 export default router;