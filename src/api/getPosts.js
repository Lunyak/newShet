export const getPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => json);
};

export const getPostyBydId = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .then((json) => json);
};

export const getAlbom = () => {
  return fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((response) => response.json())
    .then((json) => json);
};
