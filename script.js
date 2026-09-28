/* ===== CONFIGURAÇÃO: altere só aqui ===== */
const GROUP = {
  name: "Toca do coelinho",
  members: "458 membros",
  description: "Uma comuninudade bem safadinha para vc🔥🔥",
  avatar: "avatar.png",
  avatarColor: "blue",   // cor do avatar sem imagem: blue, cyan, green, orange, red, violet, pink
  telegramUrl: "https://t.me/exemplo"
};

/* ===== Código (não precisa mexer) ===== */
(function () {
  const $ = (id) => document.getElementById(id);
  $("name").textContent = GROUP.name;
  $("members").textContent = GROUP.members;
  $("description").textContent = GROUP.description;
  document.title = "Convite: " + GROUP.name;

  $("avatarFallback").textContent =
    GROUP.name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase() || "G";
  const COLORS = {
    blue: ["#5CAFFA", "#408ACF"], cyan: ["#53EDD6", "#28C9B7"], green: ["#9AD164", "#46BA43"],
    orange: ["#FEBB5B", "#F68136"], red: ["#FF845E", "#D45246"], violet: ["#B694F9", "#6C61DF"],
    pink: ["#FF8AAC", "#D95574"]
  };
  const col = COLORS[GROUP.avatarColor] || COLORS.blue;
  $("avatar").style.setProperty("--av1", col[0]);
  $("avatar").style.setProperty("--av2", col[1]);
  const img = $("avatarImg");
  img.onload = () => $("avatar").classList.add("has-image");
  img.onerror = () => $("avatar").classList.remove("has-image");
  img.src = GROUP.avatar;

  const cta = $("cta");
  if (/^https:\/\/(t\.me|telegram\.me)\/.+/i.test(GROUP.telegramUrl)) {
    cta.href = GROUP.telegramUrl;
  } else {
    cta.classList.add("disabled");
    cta.removeAttribute("href");
    console.warn('GROUP.telegramUrl deve começar com "https://t.me/".');
  }
})();
