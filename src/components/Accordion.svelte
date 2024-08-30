<script>
    import { slide } from "svelte/transition";
  import ArrowDown from "./svg/ArrowDown.svelte";

    let isOpen = false;
</script>

<div class="px-2 md:px-4 py-3 mb-2 border-b border-gray-400">
    <button class="flex justify-between w-full" on:click={() => isOpen = !isOpen} >
        <div class="font-normal">
            <slot name="header"></slot>
        </div>
        <ArrowDown className="{isOpen ? "-scale-100" : ""}  transition-all duration-300 opacity-50"/>
    </button>
    {#if isOpen}
        <div 
            transition:slide
            class="pt-2"
        >
            <slot name="description"></slot>
        </div>
    {/if}
</div>

