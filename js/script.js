// Placeholder for future interactivity
console.log("LoneForge site loaded");

const features = {
    character: {
        title: "Character Sheet",
        description: "Create and manage your hero. Track ability scores, HP, AC, saving throws, spells, and equipment — built for 5.5E.",
        image: "img/character.jpg" // add your screenshot path
    },
    bestiary: {
        title: "Bestiary",
        description: "A growing library of reworked monsters with full stat blocks and abilities. Currently covering CR 0–4, expanding steadily.",
        image: "img/bestiary.jpg"
    },
    npc: {
        title: "NPC Generator",
        description: "Generate and save NPCs on the fly — names, personality traits, motivations, secrets. Ready for any unexpected encounter.",
        image: "img/npc.jpg"
    },
    oracle: {
        title: "Oracle",
        description: "Ask a yes/no question, roll the dice, and let fate decide. The beating heart of solo play — fast, simple, dramatic.",
        image: "img/oracle.jpg"
    },
    procedural: {
        title: "Procedural Tools",
        description: "Procedural tools to generate locations, encounters, and events as your adventure unfolds beyond the tavern door.",
        image: "img/procedural.jpg"
    },
    notes: {
        title: "Notes",
        description: "Keep track of your adventure session by session. Your journal, your lore, your story — always at hand.",
        image: "img/notes.jpg"
    }
};

const buttons = document.querySelectorAll(".cf-selector button");
const titleEl = document.getElementById("cf-title");
const descEl = document.getElementById("cf-description");
const imgEl = document.getElementById("cf-image");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const key = btn.dataset.feature;
        const data = features[key];

        titleEl.textContent = data.title;
        descEl.textContent = data.description;

        imgEl.innerHTML = data.image
            ? `<img src="${data.image}" alt="${data.title}">`
            : "";
    });
});