<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from "$assets/logo.svelte";

	let { scrollY } : { scrollY: number } = $props();
	const title = "apemallet";

  let menuOpen = $state(false);
	let navBarElement: HTMLElement;
	let navBarHeight = $state(0);

  let pages = [
    { name: "HOME", href: "home" },
    { name: "PRODUCTS", href: "products" },
    { name: "ABOUT", href: "about-us" },
    { name: "CONTACT US", href: "contact" },
  ];

  onMount(() => {
    navBarHeight = navBarElement.offsetHeight;

    const resizeObserver = new ResizeObserver(() => {
      navBarHeight = navBarElement.offsetHeight;
    });

    resizeObserver.observe(navBarElement);
    return () => resizeObserver.disconnect();
  });

  function clickOutside(node: HTMLElement) {
    const handleClick = (event : MouseEvent) => {
      if (!node.contains(event.target as Node)) {
        menuOpen = false;
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      },
    };
  }

	function scrollToSection(id) {
		const element = document.getElementById(id);
		if (element) {
			const y = element.getBoundingClientRect().top + window.scrollY - navBarHeight;
			console.log(`top: ${y}`);
			console.log(`NAVBAR HEIHGT: ${navBarHeight}`)
			window.scrollTo({top: y, behavior: 'smooth'});
		}
	}
</script>

<nav
  bind:this={navBarElement}
  class={`fixed z-10 top-0 left-0 w-full
    ${scrollY > 50
      ? "bg-apecent-surface text-apeium-surfacetintier shadow-md sm:transition-all sm:ease-out sm:py-1"
      : "bg-apecent-surface text-apeium-surfacetintier sm:bg-transparent sm:py-4 sm:text-apecent-surface sm:transition-all sm:ease-out"
    }`}
>
  <div class="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
    <span class="flex justify-center align-center gap-3">
      <div class="w-16">
        <Icon gray={scrollY > 50}/>
      </div>
      <div class="grid place-items-center">
        <div class="text-4xl font-[Baloo] text-center">{title}</div>
      </div>
    </span>
    <ul class="flex font-poppins font-bold space-x-6 text-l">
      <li class="block sm:hidden relative" use:clickOutside>
        <button
          onclick={() => menuOpen = !menuOpen}
          aria-label="Menu"
          class={`text-[#25373a] hover:text-[#445f63] cursor-pointer`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z
              M22.75,10.375H2c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z
              M22.75,18.875H2c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"
            />
          </svg>
        </button>

        {#if menuOpen}
          <ul class="fixed top-20 left-0 w-screen bg-apecent-surface text-apeium-surface z-50 overflow-auto p-6 space-y-4">
            {#each pages as page}
              <li class="border-b last:border-none">
                <button onclick={() => scrollToSection(page.href)} class="block text-xl px-4 py-2 hover:bg-gray-100 rounded">
                  {page.name}
                </button>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
      {#each pages as page}
				<li class="hidden sm:block">
					<button onclick={() => scrollToSection(page.href)}
						href={page.href}
						class={`${scrollY > 50 ? "hover:text-apeium-surface" : "hover:text-apecent-surfacetint"}`}
						>{page.name}
					</button>
				</li>
      {/each}
    </ul>
  </div>
</nav>
