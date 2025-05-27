export default function Test_API() {
  const response = async () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => console.log(json));
    } catch (error) {
      console.log(error);
    }
    return response;
  };
  console.log("res", response);
  return <div></div>;
}
