<script lang="ts">
	let { viaPosition = 50 } : {viaPosition: number} = $props();
</script>

<div
  class="h-px w-full transition-all duration-500"
  style:--via-position="{viaPosition}%"
  style:--via-color="var(--color-apecent-surface)"
  style:background-image="linear-gradient(to right, transparent, var(--via-color) var(--via-position), transparent)"
></div>

