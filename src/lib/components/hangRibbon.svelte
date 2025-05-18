<script lang="ts">
</script>

<div class="ribbon min-w-16 h-full">
</div>

<style>
  .ribbon {
    font-size: 28px;
    font-weight: bold;
    color: #fff;

    --r: .8em; /* control the cutout */

    border-inline: .5em solid #0000;
    padding: .5em .2em calc(var(--r) + .2em);
    clip-path: polygon(0 0,100% 0,100% 100%,calc(100% - .5em) 100%,50% calc(100% - var(--r)),.5em 100%,0 100%);
    background:
     radial-gradient(50% .2em at top,#000a,#0000) border-box,
     var(--color-apecent-surface) padding-box; /* the color  */
    width: fit-content;
  }
</style>
