import PocketBase from 'pocketbase';

export async function load({ params }) {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const record = await pb.collection('life_areas').getOne(params.slug);

  return {
    lifeArea: record
  };
}