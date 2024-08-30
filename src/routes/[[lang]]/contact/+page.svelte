<script lang="ts">
  import Form from '../../../components/Form.svelte';


</script>

<svelte:head>
  <title>Dowiedz się więcej</title>
  <meta name="description" content="Best offers with rent, buy or sell properties">
</svelte:head>

<h1 class="text-center text-2xl font-semibold mb-4 max-w-xl mx-auto py-6 md:py-16">Napisz do nas, dopasujemy najlepsze oferty dla ciebie. Pomoemy znaleść to czego szukasz.</h1>
<div class="p-2 bg-gray-100 rounded-lg ">
    <div class="py-10 text-center">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minima dolor amet? Et aperiam vel dolores distinctio repudiandae laudantium ipsam?</h2>
    </div>
    <div class="flex flex-col md:flex-row gap-2">
        <Form/>
        <div class="w-full bg-gray-200 md:flex-1 rounded-lg flex justify-center items-center">
            BLOCK: SOME DESCRIPTION
        </div>
    </div>
</div>