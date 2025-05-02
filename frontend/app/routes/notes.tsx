import { json, redirect } from '@remix-run/node';
import { Form, useLoaderData, useSearchParams } from '@remix-run/react';
import { getNotes, addNote, deleteNote, updateNote } from '~/models/notes.server';

export const loader = async () => {
  const notes = await getNotes();
  return json({ notes });
};

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const intent = formData.get('intent');
  const id = formData.get('id')?.toString();
  const title = formData.get('title')?.toString();

  if (intent === 'add' && title) {
    await addNote(title);
  } else if (intent === 'delete' && id) {
    await deleteNote(id);
  } else if (intent === 'edit' && title && id) {
    await updateNote(id, title);
  }

  return redirect('/notes');
};

export default function NotesPage() {
  const { notes } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const editingId = searchParams.get('edit');

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
            {editingId === note.id ? (
              // Edit Mode
              <Form method="post">
                <input type="hidden" name="id" value={note.id} />
                <input name="title" defaultValue={note.title} />
                <button type="submit" name="intent" value="edit">Save</button>
                <a href="/notes">Cancel</a>
              </Form>
            ) : (
              // View Mode
              <>
                {note.title}{' '}
                <a href={`/notes?edit=${note.id}`}>Edit</a>{' '}
                <Form method="post" style={{ display: 'inline' }}>
                  <input type="hidden" name="id" value={note.id} />
                  <button type="submit" name="intent" value="delete">Delete</button>
                </Form>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
