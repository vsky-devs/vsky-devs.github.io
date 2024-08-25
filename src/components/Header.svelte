<script>
    import * as m from "$lib/paraglide/messages.js";
    import { base } from "$app/paths";
  import LanguageSwitcher from "./LanguageSwitcher.svelte";
</script>


<header>
    <a href="{base}/">{m.home_page()}</a>
    <a href="{base}/about">{m.about_page()}</a>
    <LanguageSwitcher/>
</header>