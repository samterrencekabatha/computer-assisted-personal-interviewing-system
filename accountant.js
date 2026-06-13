<script>
const scriptURL =
"https://script.google.com/macros/s/AKfycbzhHTP-fFy64C0bGDEt8fgW1ZuFYww1qiwZsST53zsE-aCNxTiDdjZmF5u_3mPUOqOj/exec";

document.getElementById("myForm").addEventListener("submit", e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    })
  })
  .then(res => res.json())
  .then(() => {
    alert("Data saved!");
    document.getElementById("myForm").reset();
    loadSubmissions(); // refresh table
  })
  .catch(err => console.error(err));
});
</script>
