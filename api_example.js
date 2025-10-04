fetch("https://api.github.com/repos/markusrodseth/testRepo")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
});