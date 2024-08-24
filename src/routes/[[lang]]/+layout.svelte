<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'
  import Header from '../../components/Header.svelte';
</script>

<ParaglideJS {i18n}>

  <Header/>
  <slot></slot>
</ParaglideJS>