<script>
  let pages = [
    ["/", "Home", "house"],
    ["/create", "Erstellen", "plus-square"],
    ["/imprint", "Impressum", "info-circle"],
  ]
</script>

<div class="d-flex flex-column flex-sm-row h-100">
  <nav
    class="h-sm-100 col-auto navbar-expand-sm navbar-dark border-secondary">

    <div class="container mt-2">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-list"></i>
      </button>
    </div>

    <div class="collapse navbar-collapse flex-column" id="navbarSupportedContent">
      <h1 style="margin-left: 6px" class="navbar-brand d-none d-lg-block">ToDo App</h1>

      <ul class="navbar-nav flex-column">
        {#each pages as [path, label, icon]}
          <li class="nav-item">
            <a class="nav-link" sveltekit:prefetch href={path}><i
              class="bi bi-{icon} ms-2"></i> <span
              class="d-inline d-sm-none d-md-inline">{label}</span></a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>

  <main class="col h-100 container-fluid">
    <slot />
  </main>
</div>

<style>
  nav {
    padding-right: 6px
  }

  main {
    max-width: 20.5cm;
  }

  @media (min-width: 576px) {
    nav {
      border-right: 1px solid;
    }
  }
</style>
