<script>
  import { onMount } from 'svelte';
  import User from '$lib/js/User.js'

  import PocketBase from 'pocketbase';

  let lifeAreas = [];
  const userId = User.id;

  onMount(async () => {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const records = await pb.collection('life_areas').getFullList({
      filter: `user="${userId}"`
    });
    lifeAreas = records;
  });
</script>

<section class="text-white">
  <h1>Life Areas Today</h1>

  <ul>
    <li>Day / Week / Month Slider</li>
    <li>Stats life areas</li>
    <li>List goals today</li>
    <li>List all life areas (sorted by total)</li>
  </ul>
</section>
<section class="text-white">
  <h1>All Life Areas</h1>
  <ul>
    {#each lifeAreas as lifeArea}
      <li class="p-8"><a class="underline" href={`/life-areas/${lifeArea.id}`}>{lifeArea.title}</a></li>
    {/each}
  </ul>
</section>
<section class="text-white bg-yellow-500 fixed-bottom flex flex-col">
  <div class="flex-center bg-orange-500 h-[80px]">
    <div>More Controls</div>
  </div>
  <div class="flex-center bg-blue-500 h-[80px]">
    <button>Focus Now</button>
  </div>
  <div class="flex h-[80px]">
    <div class="bg-pink-500 basis-1/4 flex-center"><a href="/stats">Stats</a></div>
    <div class="bg-red-500 basis-1/4 flex-center"><a href="/plan">Plan</a></div>
    <div class="bg-purple-500 basis-1/4 flex-center"><a href="/todos">Aufgaben</a></div>
    <div class="bg-green-500 basis-1/4 flex-center"><a href="/life-areas">Life Areas</a></div>
  </div>
</section>

<style>
  ul {
    list-style-type: disc;
    margin-left: 24px;
  }

  .flex-center {
    @apply flex justify-center items-center;
  }

  .fixed-bottom {
    @apply fixed bottom-0 left-0 right-0 h-[240px] z-10;
  }
</style>