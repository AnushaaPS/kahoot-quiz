/* ===============================
   COMMON CONFIG – UPDATE ONCE
================================ */

const API_URL = "https://script.google.com/macros/s/AKfycbwce3etj-SNlwMWYgQno_nBlJ1dywosv9xUjtBFzrPwPyqXuWpTRGXol_4-lmMlasx9KQ/exec";

/* ===============================
   COMMON API HELPER
================================ */

function api(action, data = {}) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: action,
      ...data
    })
  }).then(res => res.json());
}

/* ===============================
   COMMON STORAGE HELPERS (OPTIONAL)
================================ */

function setSession(key, value) {
  localStorage.setItem(key, value);
}

function getSession(key) {
  return localStorage.getItem(key);
}

function clearSession() {
  localStorage.clear();
}

