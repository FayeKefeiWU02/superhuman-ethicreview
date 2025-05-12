function saveName() {
  const name = document.getElementById('nameInput').value;
  localStorage.setItem('userName', name);
  window.location.href = "reviewer.html";
}
