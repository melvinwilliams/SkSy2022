<script>
  export let submitLabel

  export let todo
</script>

<div class="input-group mb-3">
  <label class="input-group-text" for="editToDo">Titel</label>
  <textarea class="form-control" id="editToDo" maxlength="160" placeholder="Titel"
            name="title">{todo ? todo.title : ''}</textarea>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="deadline"><i class="bi bi-calendar-check"></i></span>
  <input class="form-control" aria-describedby="deadline" aria-label="Fälligkeitsdatum" type="date"
         value={new Date(todo ? todo.due : Date.now()).toISOString().split('T')[0]} name="due">
</div>
<div class="input-group mb-3">
  <label class="input-group-text" for="progressInPercent">%</label>
  <input class="form-control" id="progressInPercent" type="number" value={todo ? todo.percent : 10} min="0" max="100" name="percent">
</div>
<input class="btn btn-primary" type="submit" value={submitLabel}>

