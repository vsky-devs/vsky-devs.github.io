<script lang="ts">
  import { page } from "$app/stores";
  import { i18n } from "$lib/i18n";
  import { availableLanguageTags, languageTag } from "$lib/paraglide/runtime";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { clickOutside } from "$lib/clickOutSide";
  import CheckIcon from './svg/CheckIcon.svelte';
  import ArrowDown from './svg/ArrowDown.svelte';

  let isOpen = false;

  $: currentPathWithoutLanguage = i18n.route($page.url.pathname)
  $: language = languageTag()
  $: flag = showFlag(language);

  function handleClickOutside() {
    if(isOpen) isOpen = !isOpen;
  }

  function showFlag(language: string) {
    if(language === 'pl') return "🇵🇱"
    if(language === 'ru') return "🇷🇺"
    if(language === 'ua') return "🇺🇦"
  }

</script>

<div class="relative inline-block z-10" 
     use:clickOutside 
     on:click_outside={handleClickOutside}
    >
  <button 
    class="rounded-lg px-4 py-1 uppercase relative font-light text-md flex justify-center items-center gap-1"
    on:click={() => isOpen = !isOpen}>
    {language}
    <span class="ml-1">{flag}</span>
    <ArrowDown color="gray" width="13px" height="13px" className="{isOpen ? "-scale-100" : ""}  transition-all duration-300 opacity-50"/>
  </button>

  {#if isOpen}
    <div 
      class="flex flex-col absolute top-full justify-center items-center w-full bg-white mt-3 md:mt-6 rounded-lg shadow-md" 
      transition:slide={{easing: quintOut, axis: 'y', duration: 500}}
    >
      {#each availableLanguageTags as lang}
        <a class="flex justify-start items-center gap-1 font-light uppercase hover:bg-gray-100 w-full text-center px-2 py-2 border-b-[1px] last:border-b-0 border-gray-100 first:rounded-b-none first:rounded-t-lg last:rounded-b-lg last:rounded-t-none" 
           href={currentPathWithoutLanguage}
           hreflang={lang}
           on:click={() => isOpen = false}
          >
            <span>{showFlag(lang)}</span>
            {lang} 
            {#if language === lang} 
              <CheckIcon width="15px" height="15px" color="gray"/>
            {/if}
          </a>
      {/each}
    </div>
  {/if}
</div>
