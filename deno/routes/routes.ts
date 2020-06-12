import { Router } from 'https://deno.land/x/oak/mod.ts';

import {
  getNotes,
  postNotes
  // createNote,
  // getSingleNote,
  // updateNote,
  // deleteNote,
} from '../controllers/notes.ts';

const router = new Router();

router
  .get('/', (ctx) => {
    ctx.response.body = 'Welcome to Finance';
  })

  // notes
  .get('/notes', getNotes)
  .post('/notes', postNotes)
  // .get('/notes/:id', getSingleNote)
  // .put('/notes/:id', updateNote)
  // .delete('/notes/:id', deleteNote);

export default router;