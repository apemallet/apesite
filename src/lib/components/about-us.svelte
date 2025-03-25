<script>
import { base } from '$app/paths';
  const members = {
    Elijah: [
      "ape of high esteem",
      //"/favicon.png",
      "",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    Leo: [
      "ape of high esteem",
      //"/favicon.png",
      "",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    Mason: [
      "ape of high esteem",
      //"/favicon.png",
      "",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    Simon: [
      "ape of high esteem",
      //"/favicon.png",
      "",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  };
</script>

<svelte:window on:scroll={handleScroll} />

<div
  class="about-us"
>
  <div class="grid grid-cols-1 gap-4 items-center">
    <div class="text-6xl text-center pt-40">about us</div>
    <div class="text-xl text-center pb-20">
      what makes us so successful
    </div>
    {#each Object.entries(members) as [name, [role, imgSrc, bio]], i}
      <div
        class="member-card flex flex-row items-center mx-auto gap-10 px-40 py-4"
        class:flex-row-reverse={i % 2 === 1}
      >
        <img
          src={`${base}${imgSrc}`}
          alt={name}
          class="w-[250px] h-[250px] object-cover block mx-auto rounded-full border-[3px] border-white"
        />
        <div class="text-container mt-4">
          <h2 class="text-2xl pb-1 text-center">{name} | {role}</h2>
          <p
            class="px-4"
            class:text-left={i % 2 === 0}
            class:text-right={i % 2 === 1}
          >
            {bio}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
