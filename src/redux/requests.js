import axios from "axios";
const baseUrl = "http://localhost:8080/todos";

export async function fetchTodos() {
  try {
    const { data } = await axios.get(baseUrl);
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function addTodo(data) {
  try {
    await axios.post(baseUrl, data);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteTodo(id) {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (err) {
    console.log(err);
  }
}

export async function editTodo(todo) {
  try {
    await axios.put(`${baseUrl}/${todo.id}`, todo);
  } catch (err) {
    console.log(err);
  }
}

export async function toggleTodo(todo) {
  try {
    await axios.put(`${baseUrl}/${todo.id}`, todo);
  } catch (err) {
    console.log(err);
  }
}
