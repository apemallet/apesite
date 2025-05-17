<script lang="ts">
	let { scrollY } : { scrollY: number } = $props();
	const title = "apemallet";
</script>

<nav
  class={`fixed z-10 top-0 left-0 w-full transition-all ease-out
  ${scrollY > 50 ? "bg-[#d6ad3b] shadow-md py-1 text-[#25373a] " : "bg-transparent py-4 text-white"}`}
>
  <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div class="text-4xl font-[Baloo]">{title}</div>
    <ul class="flex font-poppins font-bold space-x-6 text-l">
      <li>
        <a
          href="#display"
          class={`${scrollY > 50 ? "hover:text-[#445f63]" : "hover:text-gray-200"}`}
          >HOME</a
        >
      </li>
      <li>
        <a
          href="#products"
          class={`${scrollY > 50 ? "hover:text-[#445f63]" : "hover:text-gray-200"}`}
          >PRODUCTS</a
        >
      </li>
      <li>
        <a
          href="#about-us"
          class={`${scrollY > 50 ? "hover:text-[#445f63]" : "hover:text-gray-200"}`}
          >ABOUT</a
        >
      </li>
      <li>
        <a
          href="#contact"
          class={`${scrollY > 50 ? "hover:text-[#445f63]" : "hover:text-gray-200"}`}
          >CONTACT</a
        >
      </li>
    </ul>
  </div>
</nav>
