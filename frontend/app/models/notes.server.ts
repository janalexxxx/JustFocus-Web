import pb from '~/lib/pocketbase.server';

export async function getNotes() {
  return await pb.collection('notes').getFullList({ sort: '-created' });
}

export async function addNote(title: string) {
  return await pb.collection('notes').create({ title });
}

export async function deleteNote(id: string) {
  return await pb.collection('notes').delete(id);
}

export async function updateNote(id: string, title: string) {
  return await pb.collection('notes').update(id, { title });
}