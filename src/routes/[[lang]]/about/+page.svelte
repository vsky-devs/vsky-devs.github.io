<script>
  import * as m from "$lib/paraglide/messages.js";
  import Faq from "../../../components/FAQ.svelte";
</script>

<svelte:head>
  <title>About us | V-sky</title>
  <meta name="description" content="Learn more about us!">
</svelte:head>

<h1>{m.about_page()}</h1>
<Faq/>