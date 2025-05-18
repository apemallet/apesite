<script>
  import Leo from "$assets/people/leo.svelte"

  const people = [
    {
      name: "Leo",
      avatar: Leo
    }
  ];
</script>

<span class="flex justify-center py-5 mb-10 sm:gap-3 max-w-4xl mx-auto">
  {#each people as person}
    <div id={person.name} class="flex flex-col gap-2 w-[18rem]">
      <svelte:component this={person.avatar} />
      <h2 class="font-[Baloo] text-xl md:text-3xl lg:text-5xl text-center text-amber-100">
        {person.name}
      </h2>
    </div>
  {/each}
</span>
