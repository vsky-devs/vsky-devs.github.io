<script>
    import sticker from "$lib/assets/images/sticker.png"
    import * as m from "$lib/paraglide/messages.js";
  import BlockAnimation from "../../components/BlockAnimation.svelte";
    import ContactForm from "../../components/ContactForm.svelte";

    // export let form;

</script>

<div class="container mx-auto">
    <h1 class="">{m.home_page()}</h1>
    <img src={sticker} alt="Sticker"/>

    <ContactForm/>

    <BlockAnimation/>
</div>
