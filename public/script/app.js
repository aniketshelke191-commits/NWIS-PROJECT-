/* ---------- Page Navigation ---------- */

const menuItems = document.querySelectorAll(".menu li");
const pages = document.querySelectorAll(".page");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    pages.forEach((p) => p.classList.remove("active-page"));

    document.getElementById(item.dataset.page).classList.add("active-page");
  });
});

/* ---------- Offline Toggle ---------- */

const status = document.getElementById("status");
const toggle = document.getElementById("toggleOffline");

let online = true;

toggle.onclick = () => {
  online = !online;

  if (online) {
    status.innerHTML = "🟢 Online";
    status.style.background = "#22c55e";
  } else {
    status.innerHTML = "🟠 Offline";
    status.style.background = "#f59e0b";
  }
};

/* ---------- AI Assistant ---------- */

const send = document.getElementById("send");
const chat = document.getElementById("chat");
const input = document.getElementById("question");

send.onclick = () => {
  if (input.value === "") return;

  chat.innerHTML += `
    <div class="user">${input.value}</div>
  `;

  let answer = "No historical incident found.";

  const q = input.value.toLowerCase();

  if (q.includes("mud"))
    answer =
      "Similar Well A12 had Mud Loss at 2478 m. Recommendation: Increase mud weight.";
  else if (q.includes("torque"))
    answer = "Torque spike detected in Well B09. Reduce rotary speed.";
  else if (q.includes("weather"))
    answer = "Rain expected within 24 hours. Monitor drilling stability.";
  else if (q.includes("compare"))
    answer = "BH-27 matches Well A12 with 91% geological similarity.";

  chat.innerHTML += `
    <div class="bot">🤖 ${answer}</div>
  `;

  chat.scrollTop = chat.scrollHeight;

  input.value = "";
};

/* ---------- Upload Well ---------- */

const form = document.getElementById("wellForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const well = {
    name: name.value,
    depth: depth.value,
    formation: formation.value,
    note: note.value,
  };

  let data = JSON.parse(localStorage.getItem("wells")) || [];

  data.push(well);

  localStorage.setItem("wells", JSON.stringify(data));

  document.getElementById("success").innerText =
    "✅ Well stored successfully in AI Knowledge Base";

  form.reset();
});

/* ---------- Load Saved Wells ---------- */

window.onload = () => {
  const wells = JSON.parse(localStorage.getItem("wells")) || [];

  if (wells.length > 0) {
    document.getElementById("success").innerText =
      `${wells.length} historical wells loaded`;
  }
};

/* ---------- LOGIN ---------- */

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const id = document.getElementById("empId").value;
    const pass = document.getElementById("password").value;

    // Demo credentials
    if (id === "ENG1024" && pass === "123456") {
      localStorage.setItem("loggedIn", "true");

      window.location.href = "dashboard.html";
    } else {
      document.getElementById("error").innerText =
        "Invalid Employee ID or Password";
    }
  });
}
