<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";
  import { base } from "$app/paths";
  import LanguageSwitcher from "./LanguageSwitcher.svelte";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import MenuIcon from "./svg/MenuIcon.svelte";
  import { clickOutside } from "$lib/clickOutSide";
  import MobileIcon from './svg/MobileIcon.svelte';
  import TelegramIcon from './svg/TelegramIcon.svelte';
  import ArrowDown from './svg/ArrowDown.svelte';

  let isMobileMenuOpen = false;
</script>

<header class="fixed w-full z-20">
    <div class="container wrapper mx-auto">
      <div class="bg-white mt-2 md:mt-4 rounded-lg flex p-2 md:p-4 items-center justify-between shadow-md"
           use:clickOutside
           on:click_outside={() => isMobileMenuOpen = false}
           >
        <div class="block md:hidden">
          <button 
            class="flex"
            on:click={() => isMobileMenuOpen = !isMobileMenuOpen}>
            <MenuIcon className="opacity-80" color="gray"/>
          </button>
        </div>
        <nav class="hidden md:block">
          <a class="mr-2" href="{base}/">{m.home_page()}</a>
          <a class="mr-2" href="{base}/contact">{m.contact_page()}</a>
          <a href="{base}/about">{m.about_page()}</a>
        </nav>
        <div>
          <LanguageSwitcher/>
        </div>
      </div>
    </div>
    {#if isMobileMenuOpen}
      <nav class="absolute left-4 right-4 rounded-lg shadow-md bg-white flex md:hidden flex-col p-2 mt-2 z-0"
           transition:slide={{easing: quintOut, axis: 'y', duration: 500}}
      >
        <a class="p-1 hover:bg-gray-100 rounded-md" href="{base}/" on:click={() => isMobileMenuOpen = false}>{m.home_page()}</a>
        <a class="p-1 hover:bg-gray-100 rounded-md" href="{base}/contact" on:click={() => isMobileMenuOpen = false}>{m.contact_page()}</a>
        <a class="p-1 hover:bg-gray-100 rounded-md" href="{base}/about" on:click={() => isMobileMenuOpen = false}>{m.about_page()}</a>
        <hr class="p-1">
        <a class="py-1 pr-4 pl-2 mb-2 bg-green-500 rounded-md self-start text-white flex items-center" href="tel:+48452979179">
          <MobileIcon/>
          <span class="ml-2">+48 452 979 179</span>  
        </a>
        <a class="py-1 pr-4 pl-2 bg-blue-500 rounded-md self-start text-white flex items-center" href="https://t.me/+48452979179">
          <TelegramIcon/>
          <span class="ml-2">Telegram</span>  
        </a>
      </nav>
    {/if}
</header>