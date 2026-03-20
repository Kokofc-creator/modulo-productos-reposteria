// Mostrar / ocultar contraseña
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
});

// Capturar datos del formulario
const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Ejemplo de validación
  if (email === "" || password === "") {
    alert("Por favor, completa todos los campos.");
  } else {
    alert(`Inicio de sesión exitoso para: ${email}`);
    // Aquí puedes redirigir al panel o catálogo
  }
});
