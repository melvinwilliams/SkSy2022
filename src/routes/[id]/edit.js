import {Todo} from "../../lib/models/model.js"

/** @type {import('./edit').RequestHandler} */
export async function get({params}) {
  const todo = await Todo.findById(params.id)

  return todo ? {body: {todo}} : {status: 404}
}

/** @type {import('./edit').RequestHandler} */
export async function post({ request, params }) {
  const data = await request.formData()
  const todo = await Todo.findById(params.id)

  if (todo && data) {
    todo.title = data.get('title') || todo.title
    todo.due = data.get('due') || todo.due
    todo.percent = data.get('percent') || todo.percent
    await todo.save()

    return {status: 302, headers: {location: `/`}}
  }

  return {status: 400}
}
