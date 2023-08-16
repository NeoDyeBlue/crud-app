export function showError(name, message) {
  let error = new Error(message);
  error.name = name;
  return error;
}
