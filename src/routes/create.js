import {Todo} from "../lib/models/model.js"

/** @type {import("./create").RequestHandler} */
export async function post({request}) {
  const data = await request.formData()

  const result = new Todo({
    title: data.get("title"),
    due: data.get("due"),
    percent: data.get("percent"),
  })

  await result.save()

  return {
    headers: {location: '/'},
    status: 302,
  }
}
