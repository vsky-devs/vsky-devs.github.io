<script>
  import Accordion from "./Accordion.svelte";

</script>

<section class="py-10">
    <h2 class="text-md md:text-xl mb-4">Najczęściej zadawan pytania!</h2>
    <Accordion>
        <h3 slot="header">Jak długo szukamy mieszkanie?</h3>
        <p slot="description">Najczęszczej to zajmuje od jednego do dwóch tygodni.</p>
    </Accordion>
    <Accordion>
        <h3 slot="header">Jak długo szukamy mieszkanie?</h3>
        <p slot="description">Najczęszczej to zajmuje od jednego do dwóch tygodni.</p>
    </Accordion>
    <Accordion>
        <h3 slot="header">Jak długo szukamy mieszkanie?</h3>
        <p slot="description">Najczęszczej to zajmuje od jednego do dwóch tygodni.</p>
    </Accordion>
    <Accordion>
        <h3 slot="header">Jak długo szukamy mieszkanie?</h3>
        <p slot="description">Najczęszczej to zajmuje od jednego do dwóch tygodni.</p>
    </Accordion>
</section>