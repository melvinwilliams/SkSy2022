import {Todo} from "../lib/models/model.js"

/** @type {import('./index').RequestHandler} */
export async function get() {
  const todos = await Todo.find()

  return {
    body: {
      todos: todos || []
    },
  }
}

/** @type {import('./index').RequestHandler} */
export async function post({request}) {
  const form = await request.formData()

  const element = await Todo.findByIdAndDelete(form.get("delete"))

  if (element) {
    return {
      headers: {location: '/'},
      status: 302,
    }
  }

  return {
    status: 401,
  }
}
