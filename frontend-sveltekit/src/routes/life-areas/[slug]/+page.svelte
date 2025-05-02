<script>
  import { onMount } from 'svelte';

  let { data } = $props();

  onMount(async () => {

  });
</script>

<section class="text-white">
  <h1>{data.lifeArea.title}</h1>

  <hr>
  <div class="flex-between">
    <h2 class="">Projekte</h2>
    <button class="btn-create">+</button>
  </div>
  <hr>
  <ul>
    {#each data.lifeArea.projects as project}
      <li>{project.title}</li>
    {:else}
      <li>Keine Projekte</li>
    {/each}
  </ul>

  <hr>
  <div class="flex-between">
    <h2>Aufgaben</h2>
    <button class="btn-create">+</button>
  </div>
  <hr>
  <ul>
    {#each data.lifeArea.todos as todo}
      <li>{todo.title}</li>
    {:else}
      <li>Keine Aufgaben</li>
    {/each}
  </ul>
  <hr>
</section>

<style>
  h1, h2 {
    @apply p-8;
  }

  li {
    @apply px-8 py-4;
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
  }

  .btn-create {
    flex-basis: 80px;
    transition: background-color 0.5s ease-in-out;
    border-left: 1px solid white;

    &:hover {
      @apply bg-gray-700;
    }
  }
</style>