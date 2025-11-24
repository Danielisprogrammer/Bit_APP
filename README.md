🎧 BEAT APP

Une application web interactive avec fond animé et beats déclenchés via des lettres du clavier.

📌 Description du projet

BEAT APP est une mini-application web créée en JavaScript qui permet à l’utilisateur d’interagir avec le fond d’écran animé.
Lorsque l’utilisateur clique sur une lettre, le background change automatiquement, et certaines lettres comme A, B, C déclenchent également un beat sonore.

Le but du projet est d’explorer :

l’animation par particules,

la gestion d’événements clavier/souris en JavaScript,

la manipulation dynamique du DOM,

et l’intégration de sons interactifs.

✨ Fonctionnalités principales

🎆 Fond d’écran animé (particules en mouvement).

⌨️ Interaction clavier :

A → Change background + joue un beat

B → Change background + joue un beat

C → Change background + joue un beat

🖱️ Interaction par clic : cliquer sur une lettre change l’arrière-plan.

🔊 Effets sonores synchronisés.

⚡ Design simple, rapide et responsive.

🛠️ Technologies utilisées

HTML5

CSS3

JavaScript (Vanilla)

Optionnel : Canvas API pour les particules
(si ton projet utilise un canvas animé)

📂 Architecture du projet
/BEAT-APP
│── index.html
│── style.css
│── script.js
│── /assets
│     ├── beats/
│     │     ├── A.mp3
│     │     ├── B.mp3
│     │     └── C.mp3
│     └── images/
│           └── backgrounds...
└── README.md

🚀 Installation & utilisation

Cloner le projet :

git clone https://github.com/ton-nom/beat-app.git


Ouvrir le fichier :

index.html


Utiliser l’application :

Appuie sur A, B, C → musique + changement d’arrière-plan

Clique sur une lettre affichée → changement d’arrière-plan

Profite de l’expérience interactive ✨

🧩 Code principal (extrait)
document.addEventListener("keydown", (e) => {
    const key = e.key.toUpperCase();

    if(["A", "B", "C"].includes(key)) {
        changeBackground();
        playBeat(key);
    }
});

🔊 Ajout d’un nouveau son

Pour ajouter un beat :

Placer le fichier MP3 dans /assets/beats/.

Ajouter une condition dans script.js.

Mettre à jour l’interface si nécessaire.

🖌️ Améliorations futures

Ajouter un générateur visuel synchronisé au beat

Mettre en place un mode freestyle (appuyer sur plusieurs touches)

Ajouter une galerie de thèmes



👨‍💻 Auteur

Projet réalisé par Kengne Daniel.
N’hésite pas à contribuer, proposer des améliorations ou forker le projet !