export function filterById(arr, id) {
  return arr.filter(item => item.id === Number(id))[0];
}
