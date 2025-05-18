<script>
  import Leo from "$assets/people/leo.svelte"

  const people = [
    {
      name: "Leo",
      avatar: Leo
    }
  ];
</script>

<span class="flex justify-around py-5 mb-10">
  {#each people as person}
    <div id={person.name} class="flex flex-col gap-2">
      <svelte:component this={person.avatar} />
      <h2 class="font-[Baloo] text-5xl text-center">
        {person.name}
      </h2>
    </div>
  {/each}
</span>
