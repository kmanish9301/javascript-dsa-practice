//Promises
// Resolved || Rejected || Full-filled

const data = { name: "John", age: 30 };
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}
fetchData()
  .then((data) => {
    console.log("Data", data);
  })
  .catch((error) => {
    console.log(error);
  });
