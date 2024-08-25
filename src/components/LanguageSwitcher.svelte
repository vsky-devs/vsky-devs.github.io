<script>
  import { page } from "$app/stores";
  import { i18n } from "$lib/i18n";
  import { availableLanguageTags } from "$lib/paraglide/runtime";

  $: currentPathWithoutLanguage = i18n.route($page.url.pathname)
</script>

{#each availableLanguageTags as lang}
  <a href={currentPathWithoutLanguage} hreflang={lang}>{lang}</a>
{/each}