<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
  import Header from '../../components/Header.svelte';
  import "../../app.css";
  import Footer from '../../components/Footer.svelte';
</script>

<svelte:head>
  <title>Rent best place</title>
  <meta name="keywords" content="rent, buy, sell, house, apartment, Wroclaw">
  <meta name="author" content="Danylo Syniavskyi">
</svelte:head>

<ParaglideJS {i18n}>
  <Header/>
  <main class="container mx-auto wrapper pt-20 md:pt-24 min-h-[95vh]">
    <slot></slot>
  </main>
  <Footer/>
</ParaglideJS>



<style>
  :global(body) {
    background-color: antiquewhite;
    font-family:  "Inter", system-ui;
    font-weight: 300;
  }
</style>