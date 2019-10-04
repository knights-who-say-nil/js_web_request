
// Won't work because js is asynchronous
// var response = axios.get("http://localhost:3000/api/recipes");
// console.log(response.data);

axios
  .get("http://localhost:3000/api/recipes")
  .then(function(response) {
    console.log(response.data);
  });

