<script>
  let entries = [
    {title: "Übersichtsseite erstellen", deadline: "2022-05-09", progress: 30},
    {title: "Create Seite erstellen", deadline: "2022-05-09", progress: 30},
    {title: "Edit Seite erstellen", deadline: "2022-05-10", progress: 40},
    {title: "Impressum erstellen", deadline: "2022-05-09", progress: 0},
    {title: "Code im Repository hochladen", deadline: "2022-05-09", progress: 100},
  ].sort((a, b) => a.deadline > b.deadline ? 1 : -1);
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Übersichtsseite" />
</svelte:head>

<h1 class="display-4">Home</h1>

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
  {#each entries as {title, deadline, progress}, index}
    <tr>
      <th scope="row" class="col-auto d-none d-sm-table-cell">{index + 1}</th>
      <td class="text-break">
        {title}
      </td>
      <td class="col-auto">
        <time datetime={deadline}>{new Date(deadline).toLocaleDateString()}</time>
      </td>
      <td class="col-auto">
        {progress}%
      </td>
      <td class="col-auto">
        <div class="btn-group-vertical d-inline-flex d-sm-none" role="group">
          <a class="btn btn-primary" href="/edit"><i class="bi bi-pen"></i></a>
          <a class="btn btn-danger"><i class="bi bi-trash"></i></a>
        </div>
        <div class="btn-group d-none d-sm-inline-flex" role="group">
          <a class="btn btn-primary" href="/edit"><i class="bi bi-pen"></i></a>
          <a class="btn btn-danger"><i class="bi bi-trash"></i></a>
        </div>
      </td>
    </tr>
  {/each}
</table>
