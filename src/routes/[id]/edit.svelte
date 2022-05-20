<script>
  import CreateForm from "../../lib/components/CreateForm.svelte"

  export let todo
</script>

<svelte:head>
  <title>Bearbeiten</title>
  <meta name="description" content="Bearbeite ein existierendes ToDo" />
</svelte:head>

<h1 class="display-4">Bearbeiten</h1>

<form method="post">
  <CreateForm {todo} submitLabel="Speichern" />
</form>
