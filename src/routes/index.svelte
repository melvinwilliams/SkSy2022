<script context="module">
  export async function load({fetch}){
    const res = await fetch('http://localhost:3000/todos')
    const todos = await res.json();

    if(res.ok){
      return {
        props: {
          todos
        }
      }
    }

  return {
    status: res.status,
    error: new Error('Could not fetch the ToDos')
  }
}
</script>

<script>
  export let todos
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
  {#each todos as {id,task, due, percent}, index}
    <tr>
      <th scope="row" class="col-auto d-none d-sm-table-cell">{index + 1}</th>
      <td class="text-break">
        {task}
      </td>
      <td class="col-auto">
        <time datetime={due}>{new Date(due).toLocaleDateString()}</time>
      </td>
      <td class="col-auto">
        {percent}%
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
