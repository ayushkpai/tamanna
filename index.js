const modalData = {
  accessbars: {
    title: "Access Bars",
    text: `
Access Bars is a gentle hands-on energy technique that involves touching specific points on the head.

These points are connected with different areas of life such as creativity, control, money, healing, communication, and awareness.

The process helps release limiting thoughts, emotions, beliefs, and patterns that may be stopping you from creating more possibilities.

Benefits may include:
• Deep relaxation
• Reduced stress and tension
• Greater clarity and awareness
• Improved sense of ease and wellbeing

Access Bars is a simple and relaxing process designed to help you access more of you.
`,
  },

  accessbodyprocess: {
    title: "Access Body Process",
    text: `
Access Body Processes are energetic body techniques that invite your body to release limitations and create more ease.

These processes use gentle touch and awareness to support the body's natural ability to heal, change, and receive.

They are designed to help you develop a different relationship with your body and become more aware of its possibilities.

Benefits may include:
• Increased body awareness
• Greater relaxation
• More connection with your body
• Releasing stored tension and limitations

Every body is different, and each session can create a unique experience.
`,
  },

  accessfacelift: {
    title: "Access Facelift",
    text: `
Access Facelift is a gentle energetic process that works with the body to support a more youthful and vibrant appearance.

The process involves light touch on specific areas of the face and body while inviting the body to release stress and limitations.

It is designed to create more ease with your body and your relationship with aging.

Benefits may include:
• Relaxation and rejuvenation
• Greater body awareness
• A sense of lightness and wellbeing
• More confidence and self-acceptance

Access Facelift focuses on creating possibilities rather than fixing anything.
`,
  },

  symphonyofpossibilities: {
    title: "Symphony of Possibilities",
    text: `
Symphony of Possibilities is an advanced awareness-based session that explores new ways of perceiving life and creating change.

It uses questions, awareness, and energetic tools to help you recognize possibilities beyond your current points of view.

The process encourages you to move beyond limitations and discover what else could be possible.

Benefits may include:
• Expanding awareness
• Creating new perspectives
• Greater clarity in choices
• More freedom and possibilities in life

A Symphony session invites you to explore a different way of being and receiving.
`,
  },
};

function openMenu() {
  document.getElementById("menu").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  document.getElementById("menu").classList.add("hidden");
  document.body.style.overflow = "";
}

function openModal(type) {
  const modal = document.getElementById("modal");
  const box = document.getElementById("modalBox");

  if (!modalData[type]) return;

  document.getElementById("modalTitle").textContent = modalData[type].title;

  document.getElementById("modalText").textContent = modalData[type].text;

  modal.classList.remove("hidden");

  document.body.style.overflow = "hidden";

  setTimeout(() => {
    box.classList.add("active");
  }, 10);
}

function closeModal() {
  const modal = document.getElementById("modal");
  const box = document.getElementById("modalBox");

  box.classList.remove("active");

  setTimeout(() => {
    modal.classList.add("hidden");

    document.body.style.overflow = "";
  }, 250);
}

document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();

    closeMenu();
  }
});
