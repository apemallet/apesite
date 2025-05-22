<script>
  import Hero from '$lib/sections/long/hero.svelte';
  import Features from '$lib/sections/long/features.svelte';
  import Visuals from '$lib/sections/long/visuals.svelte';
  import Cta from '$lib/sections/long/cta.svelte';
  // Imports will go here in later steps
</script>

<div class="font-poppins bg-apeium-surface text-slape min-h-screen pt-32">
  <!-- Hero section needs its content constrained as it doesn't have an internal max-width -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Hero />
  </div>

  <Features /> <!-- This component has its own internal max-width for content -->
  <Visuals /> <!-- This component has its own internal max-width for content -->
  <Cta /> <!-- This component has its own internal max-width for content -->

  <!-- Page content ends, footer might be part of layout -->
</div>
