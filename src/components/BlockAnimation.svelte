<script lang="ts">
  import { animate, inView, type AnimationOptionsWithOverrides, type MotionKeyframesDefinition } from "motion"
  import { onMount } from 'svelte';

  let block: HTMLElement;
  let block1: HTMLElement;
  let block2: HTMLElement;
  let block3: HTMLElement;

  const translationStyles: MotionKeyframesDefinition = {
    opacity: 1,
    transform: "translateY(0)"
  }

  const translationOptions: AnimationOptionsWithOverrides = {
    duration: 1,
  }

  onMount(() => {
    inView([block, block1, block2, block3], (info) => {
      const controls = animate(info.target, translationStyles, translationOptions);

      return (leaveInfo) => {
        animate(info.target, { opacity: 0, transform: "translateY(10%)" }, translationOptions);
        controls.stop();
      }
    }, { margin: "0px 0px -10% 0px" })
  })
</script>

<div class="border border-red-500">
  <div class="w-56 h-56 mb-4 bg-blue-500 opacity-0 translate-y-8" bind:this={block}></div>
  <div class="w-56 h-56 mb-4 bg-gray-500 opacity-0 translate-y-8" bind:this={block1}></div>
  <div class="w-56 h-56 mb-4 bg-green-500 opacity-0 translate-y-8"bind:this={block2}></div>
  <div class="w-56 h-56 mb-4 bg-blue-500 opacity-0 translate-y-8"bind:this={block3}></div>
  <div class="w-56 h-56 mb-4 bg-blue-500"></div>
  
</div>

