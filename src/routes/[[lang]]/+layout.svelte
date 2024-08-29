<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
  import Header from '../../components/Header.svelte';
  import "../../app.css";
</script>

<svelte:head>
  <title>Rent best place</title>
  <meta name="keywords" content="rent, buy, sell, house, apartment, Wroclaw">
  <meta name="author" content="Danylo Syniavskyi">
</svelte:head>

<ParaglideJS {i18n}>
  <Header/>
  <slot></slot>
</ParaglideJS>



<style>
  :global(body) {
    min-height: 100vh;
    background-color: antiquewhite;
    font-family:  "Inter", system-ui;
  }

</style>