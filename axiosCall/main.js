axios.defaults.headers.common['X-Auth-Token'] = 'TokenGenratedComesHere';

// GET REQUEST
function getTodos() {
  axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=5")

    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// POST REQUEST
function addTodo() {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "kirtikumar",
      completed: true,
    })
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios
    .put("https://jsonplaceholder.typicode.com/todos/1", {
      title: "virat",
      completed: false,
    })
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1", {})
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// SIMULTANEOUS DATA
function getData() {
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos"),
      axios.get("https://jsonplaceholder.typicode.com/posts"),
    ])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "some jwt token",
    },
  };
  axios
    .post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "virat",
        completed: false,
      },
      config
    )
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log("Transform Response");
}

// ERROR HANDLING
function errorHandling() {
  axios.get("https://jsonplaceholder.typicode.com/todoss").then((res) => {
    showOutput(res);
}).catch((err) => {
  if (err.response) {   
    console.log("1",err.response.data);
    console.log("2",err.response.status);
    console.log("3",err.response.headers);
   
    
  }
})
}

// CANCEL TOKEN
function cancelToken() {
  console.log("Cancel Token");
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// AXIOS INSTANCES
const axiosInstance=axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",

})
axiosInstance.get('/posts').then((res) => {
showOutput(res)})

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
