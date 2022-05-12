<script>
  export let submitLabel
</script>

<form>
  <div class="input-group mb-3">
    <label class="input-group-text" for="editToDo">Titel</label>
    <textarea class="form-control" id="editToDo" maxlength="160" placeholder="Titel"></textarea>
  </div>
  <div class="input-group mb-3">
    <span class="input-group-text" id="deadline"><i class="bi bi-calendar-check"></i></span>
    <input class="form-control" aria-describedby="deadline" aria-label="Fälligkeitsdatum" type="date"
           value="2022-05-09">
  </div>
  <div class="input-group mb-3">
    <label class="input-group-text" for="progressInPercent">%</label>
    <input class="form-control" id="progressInPercent" type="number" value="10" min="0" max="100">
  </div>
  <input class="btn btn-primary" type="submit" value={submitLabel}>
</form>
