<script>
  export let todos
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Übersichtsseite" />
</svelte:head>

<h1 class="display-4">Home</h1>

<form method="post">
  <button type="submit" aria-hidden="true" style="display: none"></button>
  <table class="table text-white">
    <thead>
    <tr>
      <th scope="col" class="text-break d-none d-sm-table-cell">#</th>
      <th scope="col" class="text-break">Titel</th>
      <th scope="col" class="text-break d-none d-sm-table-cell">Fällig</th>
      <th scope="col" class="text-break d-table-cell d-sm-none">Info</th>
      <th scope="col" class="text-break d-none d-sm-table-cell">Fortschritt</th>
      <th scope="col" class="text-break d-none d-sm-table-cell">Aktion</th>
    </tr>
    </thead>

    {#each todos as {_id, title, due, percent}, index}
      <tr>
        <th scope="row" class="col-auto d-none d-sm-table-cell">{index + 1}</th>
        <td class="text-break">
          {title}
        </td>
        <td class="col-auto">
          <time datetime={due}>{new Date(due).toLocaleDateString()}</time>
        </td>
        <td class="col-auto">
          {percent}%
        </td>
        <td class="col-auto">
          <div class="btn-group-vertical d-inline-flex d-sm-none" role="group">
            <a class="btn btn-primary" href="/{_id.toString()}/edit"><i class="bi bi-pen"></i></a>
            <button class="btn btn-danger" type="submit" name="delete" value={_id}><i class="bi bi-trash"></i></button>
          </div>
          <div class="btn-group d-none d-sm-inline-flex" role="group">
            <a class="btn btn-primary" href="/{_id.toString()}/edit"><i class="bi bi-pen"></i></a>
            <button class="btn btn-danger" type="submit" name="delete" value={_id}><i class="bi bi-trash"></i></button>
          </div>
        </td>
      </tr>
    {/each}
  </table>
</form>
