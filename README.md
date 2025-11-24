# 🎧 BEAT APP  
Une application web interactive avec un **fond d’écran animé par des particules** et des **beats déclenchés via des lettres du clavier**.

---

## 📌 Description du projet

**BEAT APP** est une application web qui permet à l’utilisateur d’interagir avec l’interface grâce au clavier et à la souris.  
Lorsque l’utilisateur clique ou appuie sur certaines lettres (A, B, C), le **background change automatiquement** et un **beat sonore** est joué.

Le projet explore :  
- Les animations en JavaScript  
- Les particules en mouvement  
- Les événements clavier/souris  
- La gestion dynamique du DOM  
- L’intégration de sons

---

## ✨ Fonctionnalités principales

- 🎆 Fond d’écran animé (effet de particules)  
- 🎹 Interaction clavier :  
  - **A** → Change de fond + joue un beat  
  - **B** → Change de fond + joue un beat  
  - **C** → Change de fond + joue un beat  
- 🖱️ Interaction par clic sur une lettre affichée  
- 🔊 Effets sonores synchronisés  
- ⚡ Interface simple, fluide et responsive

---

## 🛠️ Technologies utilisées

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- *(Optionnel)* Canvas API pour les particules

---

## 📂 Structure du projet

/BEAT-APP
│── index.html
│── style.css
│── script.js
│── /assets
│ ├── beats/
│ │ ├── A.mp3
│ │ ├── B.mp3
│ │ └── C.mp3
│ └── images/
│ └── backgrounds...
└── README.md

yaml
Copier le code

---

## 🚀 Installation & utilisation

### 1. Cloner le projet
```bash
git clone https://github.com/ton-nom/beat-app.git
2. Ouvrir le fichier principal
Ouvre simplement index.html dans ton navigateur.

3. Utilisation
Appuie sur A, B, C → beat + changement de fond

Clique sur une lettre affichée → changement de fond

Profite de l’ambiance musicale et visuelle ✨

🧩 Exemple de code (extrait)
javascript
Copier le code
document.addEventListener("keydown", (e) => {
    const key = e.key.toUpperCase();

    if(["A", "B", "C"].includes(key)) {
        changeBackground();
        playBeat(key);
    }
});
🔊 Ajouter un nouveau beat
Ajoute ton fichier .mp3 dans /assets/beats/

Dans script.js, ajoute une condition :

javascript
Copier le code
if(key === "D") playBeat("D");
Mets à jour les backgrounds si nécessaire.

🖌️ Améliorations futures
Effets visuels synchronisés à la musique

Mode freestyle multi-touches

Galerie de thèmes audio/visuels

Version PWA (installation mobile)

👨‍💻 Auteur
Projet réalisé par Kengne Daniel.
Tu peux contribuer, proposer des améliorations ou forker librement le projet.

