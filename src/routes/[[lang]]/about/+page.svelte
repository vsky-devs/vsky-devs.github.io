<script>
  import * as m from "$lib/paraglide/messages.js";
  import AnimatedOperaLogo from "../../../components/AnimatedOperaLogo.svelte";
  
  let count = 0;
</script>

<h1>{m.about_page()}</h1>
<p>{count}</p>
<AnimatedOperaLogo/>
<button on:click={() => count ++}>{m.increment_number()}</button>