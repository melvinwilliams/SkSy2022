<script>
  import CreateForm from "../lib/components/CreateForm.svelte"
</script>

<svelte:head>
  <title>Erstellen</title>
  <meta name="description" content="Erstelle ein neues ToDo" />
</svelte:head>

<h1 class="display-4">Erstellen</h1>

<form method="post">
  <CreateForm submitLabel="Erstellen" />
</form>
