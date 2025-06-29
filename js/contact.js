const form = document.querySelector("form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const res = await fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });

  if (res.ok) {
    alert("Message sent successfully! ✅");
    form.reset();
  } else {
    alert("Oops! Something went wrong ❌");
  }
});
