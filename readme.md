🎯 Objectif général

Créer une page web interactive, immersive et responsive, présentant une série de questions en plein écran, avec des animations modernes, un design professionnel et une expérience fluide.
Le site doit inciter les visiteurs à répondre aux questions jusqu’au bout, même les plus réticents.

🧩 Fonctionnalités principales
1. Écran d’accueil

Minimaliste et accueillant.

Texte : « Bonjour — une question rapide ? »

Bouton CTA : « Commencer »

2. Vue questions (plein écran)

Une question par carte (100 % de la hauteur visible).

Texte centré, grande taille, lisible sur mobile et desktop.

Boutons de réponse en bas : « Oui », « Non », « Peut-être », bouton secondaire « Passer ».

Barre de progression subtile + compteur « Question 3 / 8 ».

Carte spéciale

pour  les questions utilise l’image :
assets/jésus est a la porte_compressed.png 
lire la carte pour que tu me fasse les meme questions

Cette image doit être :

Lazy-loaded

Optimisée pour le web

Responsive pour mobile et desktop

Exemple : la question « Avez-vous cette image ? » s’affiche sur cette carte.

3. Navigation et interactions

Swipe / glisser :

Droite → gauche : passer à la question suivante.

Gauche → droite : revenir à la question précédente.

Animations d’entrée/sortie : Framer Motion, GSAP ou CSS transitions.

Micro-interactions sur les boutons (hover, press, feedback visuel).

Navigation clavier : Tab, Enter, flèches gauche/droite.



4. Thèmes & accessibilité

Thème clair / sombre avec toggle.

Transition douce entre les thèmes (0.3–0.5 s).



Contraste conforme WCAG AA/AAA.

Éléments interactifs avec labels ARIA.

Typographie lisible et taille adaptative (mobile-first).

5. Médias et animations

Vidéo d’ambiance (animation.mp4) :

Lecture automatique (autoplay), muet (muted), en boucle (loop).

Peut être un panneau ou fond partiel.

Fallback image (poster) pour compatibilité.

Carte spéciale : la question « Avez-vous cette image ? » utilise l’image assets/jésus est a la porte_compressed.png comme fond ou élément graphique.

6. Performance & technique

Optimisation pour mobile et 3G : lazy loading, WebP ou sprites.

Animations fluides et performantes (GPU-friendly).

Analytics simples : compteur d’avancement, stockage local des réponses, option API.

Interface française par défaut, textes faciles à remplacer.

7. Exemples de micro-copy
Type	Exemple
Introduction	« Bonjour — une question rapide ? »
Question 1	« Avez-vous cette image ? »
Question 2	« Priez-vous ? »
Question 3	« Accepteriez-vous d’en parler ? »
Boutons	Oui / Non / Peut-être / Passer
Progression	« Question 3 / 8 »