<script lang="ts">
  import { animate, inView, spring, type AnimationControls, type AnimationOptionsWithOverrides, type MotionKeyframesDefinition } from "motion"
  import { onMount } from 'svelte';

  let block: HTMLElement;
  let block1: HTMLElement;
  let block2: HTMLElement;
  let block3: HTMLElement;
  let text: HTMLElement;

  const translationStyles: MotionKeyframesDefinition = {
    opacity: 1,
    transform: "translateY(0)"
  }

  const translationOptions: AnimationOptionsWithOverrides = {
    duration: 1,
  }

  onMount(() => {
    inView([block, block1, block2, block3, text], (info) => {

      let controls: AnimationControls;
      let isH1 = info.target.id === "h1" ? { delay: 0.4} : {};
      controls = animate(info.target, translationStyles, {...translationOptions, ...isH1});

      return (leaveInfo) => {
        console.log("leaveInfo", leaveInfo)
        animate(info.target, { opacity: 0, transform: "translateY(10%)" }, translationOptions);
        controls.stop();
      }
    }, { margin: "0px 0px -10% 0px" })
  })
</script>

<div class="border border-red-500">
  <div class="w-full h-56 mb-4 bg-blue-500 opacity-0 translate-y-8" bind:this={block}>BLOCK</div>
  <div class="w-full h-56 mb-4 bg-gray-500 opacity-0 translate-y-8" bind:this={block1}>BLOCK 1</div>
  <div class="w-full h-56 mb-4 bg-green-500 opacity-0 translate-y-8"bind:this={block2}>BLOCK 2</div>
  <h2 id="h1" class="text-5xl opacity-0 translate-y-[100%]" bind:this={text}>Woooo it's move</h2>
  <div class="w-full h-56 mb-4 bg-blue-500 opacity-0 translate-y-8 z-10 relative"bind:this={block3}>BLOCK 3</div>
  <div class="w-full h-56 mb-4 bg-blue-500"></div>
</div>

