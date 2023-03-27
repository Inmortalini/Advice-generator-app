async function peticion() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    document.getElementById("phrases").textContent = data.slip.advice;
  } catch (error) {
    console.error(error);
  }
}
peticion();
const btn = document.getElementById("botoncito");
btn.addEventListener("click", peticion);
