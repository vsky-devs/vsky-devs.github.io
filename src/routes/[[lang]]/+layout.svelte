<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
  import Header from '../../components/Header.svelte';
  import "../../app.css";
</script>

<ParaglideJS {i18n}>
  <Header/>
  <slot></slot>
</ParaglideJS>



<style>
  :global(body) {
    min-height: 100vh;
    background-color: antiquewhite;
  }
</style>