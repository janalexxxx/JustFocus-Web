import { json, redirect } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { getNotes, addNote, deleteNote } from '~/models/notes.server';

export const loader = async () => {
  const notes = await getNotes();
  return json({ notes });
};

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const intent = formData.get('intent');

  if (intent === 'add') {
    const title = formData.get('title') as string;
    await addNote(title);
  } else if (intent === 'delete') {
    const id = formData.get('id') as string;
    await deleteNote(id);
  }

  return redirect('/notes');
};

export default function NotesPage() {
  const { notes } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Notes</h1>
      <Form method="post">
        <input name="title" placeholder="New note" required />
        <button type="submit" name="intent" value="add">Add</button>
      </Form>

      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.title}
            <Form method="post" style={{ display: 'inline' }}>
              <input type="hidden" name="id" value={note.id} />
              <button type="submit" name="intent" value="delete">Delete</button>
            </Form>
          </li>
        ))}
      </ul>
    </div>
  );
}
