<script>
  import { onMount } from 'svelte';

  let { data } = $props();

  onMount(async () => {

  });
</script>

<section>
  <h1>Neues Projekt in {data.lifeArea.title} erstellen</h1>

  <form>
    <label for="">Titel</label>
    <input type="text" name="" id="">
  </form>
  <button>Abbrechen</button>
  <button>Speichern</button>
</section>