import { RouterContext } from 'https://deno.land/x/oak/mod.ts';
import { getQuery } from 'https://deno.land/x/oak/helpers.ts'

import { db } from '../config/db.ts';

const notesCollection = db.getDatabase().collection('notes');

const getNotes = async (ctx: RouterContext) => {
  // Get Notes from MongoDB and Return output
  ctx.response.body = await notesCollection.find();
};

const postNotes = async (ctx: RouterContext) => {
  const query = getQuery(ctx, { mergeParams: true });
  const raw = await ctx.request.body();

  switch (query.do) {
    case 'createNote':
      ctx.response.status = 201;
      ctx.response.body = await createNode(raw);
      break;
  }
};

const createNode = async (raw: any) => {
  const { value: {title, body} } = raw;
  const note: any = {
    title,
    body,
    date: new Date(),
  };
  // Insert Note in MongoDB
  note._id = await notesCollection.insertOne(note);
  return note;
}

// const getSingleNote = async (ctx: RouterContext) => {
//   const id = ctx.params.id;
//   // Get single note
//   const note = await notesCollection.findOne({ _id: { $oid: id } });
//
//   // Return output
//   ctx.response.body = note;
// };
//
// const createNote = async (ctx: RouterContext) => {
//   // Get title and body from request
//   console.log(await ctx.request.body());
//   const { value: {title, body} } = await ctx.request.body();
//   // Create Note object
//   const note: any = {
//     title,
//     body,
//     date: new Date(),
//   };
//   // Insert Note in MongoDB
//   const id = await notesCollection.insertOne(note);
//
//   note._id = id;
//   // Return with success response
//   ctx.response.status = 201;
//   ctx.response.body = note;
// };
//
// const updateNote = async (ctx: RouterContext) => {
//   const id = ctx.params.id;
//   // Get title and body from request
//   const { value: {title, body} } = await ctx.request.body();
//
//   const { modifiedCount } = await notesCollection.updateOne(
//     { _id: { $oid: id } },
//     {
//       $set: {
//         title,
//         body,
//       },
//     },
//   );
//
//   if (!modifiedCount) {
//     ctx.response.status = 404;
//     ctx.response.body = { message: 'Note does not exist' };
//     return;
//   }
//
//   ctx.response.body = await notesCollection.findOne({ _id: { $oid: id } });
// };
//
// const deleteNote = async (ctx: RouterContext) => {
//   const id = ctx.params.id;
//   const count = await notesCollection.deleteOne({ _id: { $oid: id } });
//   if (!count) {
//     ctx.response.status = 404;
//     ctx.response.body = { message: 'Note does not exist' };
//     return;
//   }
//
//   ctx.response.status = 204;
// };

// export { getNotes, postNotes, createNote, getSingleNote, updateNote, deleteNote };
export { getNotes, postNotes };