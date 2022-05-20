<script>
  let authors = [
    {name: "Thea Alexandra Schöbl"},
    {name: "Niklas Leonard Sumalvico"},
  ]
</script>

<svelte:head>
  <title>Impressum</title>
  <meta name="description" content="Impressum der ToDo App" />
</svelte:head>

<h1 class="display-4">Impressum</h1>

<h2 class="text-muted">Autoren</h2>
<ul class="list-group">
  {#each authors as {name}}
    <li class="list-group-item list-group-item-info">{name}</li>
  {/each}
</ul>
