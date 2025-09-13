const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.remove("-translate-x-full");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.add("-translate-x-full");
  });


const openLogin = document.getElementById("openLogin");
  const closeLogin = document.getElementById("closeLogin");
  const loginModal = document.getElementById("loginModal");
  const loginForm = document.getElementById("loginForm");

  const openSignup = document.getElementById("openSignup");
  const closeSignup = document.getElementById("closeSignup");
  const signupModal = document.getElementById("signupModal");
  const signupForm = document.getElementById("signupForm");

  // Show/hide modals
  openLogin.onclick = () => { loginModal.classList.remove("hidden"); loginModal.classList.add("flex"); }
  closeLogin.onclick = () => loginModal.classList.add("hidden");

  openSignup.onclick = () => { signupModal.classList.remove("hidden"); signupModal.classList.add("flex"); }
  closeSignup.onclick = () => signupModal.classList.add("hidden");

  // Login
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!email.includes("@") || password.length < 8) {
      alert("❌ Invalid credentials");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      alert(data.message);
      loginModal.classList.add("hidden");
    } catch (err) {
      alert("❌ Server Error");
    }
  });

  // Signup
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (name.trim() === "" || !email.includes("@") || password.length < 8) {
      alert("❌ Invalid input");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      alert(data.message);
      signupModal.classList.add("hidden");
    } catch (err) {
      alert("❌ Server Error");
    }
  });





























