<script>
  import { t } from "$lib/translations";

    let count = 0;
</script>

<h1>{$t("common.about")}</h1>
<p>{count}</p>
<button on:click={() => count ++}>Increment</button>