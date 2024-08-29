<script>
  import * as m from "$lib/paraglide/messages.js";
  import AnimatedOperaLogo from "../../../components/AnimatedOperaLogo.svelte";
  
  let count = 0;
</script>

<svelte:head>
  <title>About us | V-sky</title>
  <meta name="description" content="Learn more about us!">
</svelte:head>

<h1>{m.about_page()}</h1>
<p>{count}</p>
<AnimatedOperaLogo/>
<button on:click={() => count ++}>{m.increment_number()}</button>