<script>
  import { t, locales, locale } from "$lib/translations";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  
  $: ({ route } = $page.data);
</script>

<header>
    <a href="{$locale}">{$t("common.home")}</a>
    <a href="{$locale}/about">{$t("common.about")}</a>

    <select on:change="{({ target }) => goto(target.value)}">
      {#each $locales as lc}
        <option value="/{lc}{route}" selected="{lc === $locale}">{$t(`lang.${lc}`)}</option>
      {/each}
    </select>
</header>

<slot></slot>