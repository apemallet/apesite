<script lang="ts">
  import { base } from "$app/paths";
  import Icon from "$assets/logo.svelte";

	let { scrollY } : { scrollY: number } = $props();
	const title = "apemallet";
</script>

<nav
  class={`fixed z-10 top-0 left-0 w-full transition-all ease-out
  ${scrollY > 50 ? "bg-yellow-400 text-slate-800 shadow-md py-1 " : "bg-transparent py-4 text-yellow-400"}`}
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
      <li>
        <a
          href="{base}/#display"
          class={`${scrollY > 50 ? "hover:text-slate-600" : "hover:text-yellow-300"}`}
          >HOME</a
        >
      </li>
      <li>
        <a
          href="{base}/#products"
          class={`${scrollY > 50 ? "hover:text-slate-600" : "hover:text-yellow-300"}`}
          >PRODUCTS</a
        >
      </li>
      <li>
        <a
          href="{base}/#about-us"
          class={`${scrollY > 50 ? "hover:text-slate-600" : "hover:text-yellow-300"}`}
          >ABOUT</a
        >
      </li>
      <li>
        <a
          href="{base}/#contact"
          class={`${scrollY > 50 ? "hover:text-slate-600" : "hover:text-yellow-300"}`}
          >CONTACT</a
        >
      </li>
    </ul>
  </div>
</nav>
