<script>
  import { t, locales, locale } from "$lib/translations";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";

  $: ({ route } = $page.data);
</script>

<header>
    <a href="{base}/{$locale}">{$t("common.home")}</a>
    <a href="{base}/{$locale}/about">{$t("common.about")}</a>

    <select on:change="{({ target }) => goto(target.value)}">
      {#each $locales as lc}
        <option value="/{lc}{route}" selected="{lc === $locale}">{$t(`lang.${lc}`)}</option>
      {/each}
    </select>
</header>

<slot></slot>