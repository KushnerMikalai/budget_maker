import { Router, Context } from '../../deps.ts';
import { handlePost, handleGet } from '../controllers/user.ts';
import { createPost } from '../controllers/post.ts';
import {
  getNotes,
  postNotes,
  // createNote,
  // getSingleNote,
  // updateNote,
  // deleteNote,
} from '../controllers/notes.ts';
const router = new Router();

router
  .get('/', (ctx: Context) => {
    ctx.response.body = 'Welcome to Finance';
  })

  .get('/notes', getNotes)
  .post('/notes', postNotes)
  // .get('/notes/:id', getSingleNote)
  // .put('/notes/:id', updateNote)
  // .delete('/notes/:id', deleteNote);

  .post('/user', handlePost)
  .get('/user', handleGet)
  // .post('/login', login)
  // .get('/me', me)

  .post('/posts', createPost);
export { router };
