<script>
  import * as m from "$lib/paraglide/messages.js";
  import { base } from "$app/paths";
  import LanguageSwitcher from "./LanguageSwitcher.svelte";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import MenuIcon from "./svg/MenuIcon.svelte";

  let isMobileMenuOpen = false;
</script>


<header class="container wrapper mx-auto relative z-20">
    <div class="bg-white mt-2 md:mt-4 rounded-lg flex p-2 md:p-4 items-center justify-between shadow-md">
      <div class="block md:hidden">
        <button 
          class="flex"
          on:click={() => isMobileMenuOpen = !isMobileMenuOpen}>
          <MenuIcon className="opacity-80" color="gray"/>
        </button>
      </div>
      <div class="hidden md:block">
        <a class="mr-2" href="{base}/">{m.home_page()}</a>
        <a href="{base}/about">{m.about_page()}</a>
      </div>
      <div>
        <LanguageSwitcher/>
      </div>
    </div>
    {#if isMobileMenuOpen}
      <div class="absolute left-4 right-4 rounded-lg shadow-md bg-white flex md:hidden flex-col p-2 mt-2 z-0"
            transition:slide={{easing: quintOut, axis: 'y', duration: 500}}
      >
        <a class="p-1 hover:bg-gray-100 rounded-md" href="{base}/" on:click={() => isMobileMenuOpen = false}>{m.home_page()}</a>
        <a class="p-1 hover:bg-gray-100 rounded-md" href="{base}/about" on:click={() => isMobileMenuOpen = false}>{m.about_page()}</a>
      </div>
    {/if}
</header>