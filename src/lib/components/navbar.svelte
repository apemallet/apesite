<script lang="ts">
	let { scrollY } : { scrollY: number } = $props();
  import { base } from "$app/paths";
	const title = "apemallet";
</script>

<nav
  class={`fixed z-10 top-0 left-0 w-full transition-all ease-out
  ${scrollY > 50 ? "bg-[#d6ad3b] shadow-md py-1 text-[#25373a] " : "bg-transparent py-4 text-[#d6ad3b]"}`}
>
  <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div class="text-4xl font-[Baloo]">{title}</div>
    <ul class="flex font-poppins font-bold space-x-6 text-l">
      <li>
        <a
          href="{base}/#display"
          class={`${scrollY > 50 ? "hover:text-[#445f63]" : "hover:text-yellow-300"}`}
          >HOME</a
        >
      </li>
      <li>
        <a
          href="{base}/#products"
          class={`${scrollY > 50 ? "hover:text-[#445f63]" : "hover:text-yellow-300"}`}
          >PRODUCTS</a
        >
      </li>
      <li>
        <a
          href="{base}/#about-us"
          class={`${scrollY > 50 ? "hover:text-[#445f63]" : "hover:text-yellow-300"}`}
          >ABOUT</a
        >
      </li>
      <li>
        <a
          href="{base}/#contact"
          class={`${scrollY > 50 ? "hover:text-[#445f63]" : "hover:text-yellow-300"}`}
          >CONTACT</a
        >
      </li>
    </ul>
  </div>
</nav>
