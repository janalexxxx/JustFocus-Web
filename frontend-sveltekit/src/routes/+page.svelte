<section class="text-white">
  <h1 class="p-8">Today Statistics / Dashboard</h1>
  <ul class="flex flex-col ">
    <li><a href="/stats">Statistics Today</a></li>
    <li><a href="/plan">Plan Today</a></li>
    <li><a href="/todos">Aufgaben Today</a></li>
    <li><a href="/life-areas">Life Areas Today</a></li>
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
  button {
    @apply px-4 py-2 rounded-xl text-white uppercase text-center;
    border: 1px solid white;
  }

  .flex-center {
    @apply flex justify-center items-center;
  }

  .fixed-bottom {
    @apply fixed bottom-0 left-0 right-0 h-[240px] z-10;
  }

  ul {
    @apply flex flex-col justify-center gap-8;

    li {
      @apply py-16;
      @apply text-center;
      @apply rounded-xl;
      border: 1px solid white;
      transition: background-color 0.5s ease-in-out;
      


      &:hover {
        @apply bg-gray-900 cursor-pointer;
      }

      a {
        @apply w-full h-full inline-block;
      }
    }
  }
</style>
