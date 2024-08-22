<script>
    import { t, locale } from '$lib/translations';
    import { page } from '$app/stores';
  
    export let status = $page.status;
  </script>
  
  <div class="content">
    <h1>Error ({status})</h1>
    <br>
    <br>
    {$locale} – {$t(`lang.${$locale}`)}
  </div>