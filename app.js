const viewLabels = {
  dashboard: "نمای کلی",
  athletes: "ورزشکاران",
  visits: "مراجعات روزانه",
  finance: "امور مالی",
  expenses: "هزینه‌ها",
  messages: "پیامک‌های یادآوری",
  settings: "تنظیمات باشگاه",
};

const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function setView(view) {
  const label = viewLabels[view];
  if (!label) return;

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === view);
  });
  document.querySelector("#page-crumb").textContent = label;
  document.querySelector("#page-title").innerHTML = view === "dashboard"
    ? 'روز بخیر، سارا <span class="wave">✳</span>'
    : `${label} <span class="wave">✳</span>`;

  if (view !== "dashboard") {
    showToast(`این بخش در دموی نمایشی ${label} است؛ برای استفادهٔ واقعی سایت پارسیار را ببینید.`);
  }
}

document.querySelectorAll("[data-view]").forEach((control) => {
  control.addEventListener("click", (event) => {
    event.preventDefault();
    setView(control.dataset.view);
  });
});

document.querySelector("#dismiss-notice").addEventListener("click", () => {
  document.querySelector(".notice-bar").remove();
});

document.querySelector("#date-button").addEventListener("click", () => {
  showToast("این تقویم نمونه‌ای از انتخاب بازهٔ زمانی است.");
});

document.querySelector(".search-button").addEventListener("click", () => {
  showToast("جستجو در نسخهٔ واقعی، ورزشکاران و تراکنش‌ها را پیدا می‌کند.");
});

document.querySelector(".notification-button").addEventListener("click", () => {
  showToast("اعلان‌های این صفحه فقط نمایشی هستند.");
});

