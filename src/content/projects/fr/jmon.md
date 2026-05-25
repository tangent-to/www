---
title: "jmon labs"
description: "Musique algorithmique en JavaScript"
date: 2025-10-01
draft: false
demoURL: ""
repoURL: ""
image: "/images/projects/jmon/jmon-algo.png"
tech:
  - JavaScript
  - Tone.js
  - Vexflow.js
---

## Le problème

La composition musicale algorithmique nécessite généralement des environnements complexes, des langages spécialisés (SuperCollider, Max/MSP) ou des bibliothèques lourdes difficiles à apprendre et à partager. Les approches génératives — minimalisme, processus stochastiques, automates cellulaires — combinent théorie musicale et flexibilité algorithmique, mais restent peu accessibles. Le package Python *Djalgo* a été développé chez tangent.to pour combler le vide. Toutefois, *Djalgo* n'a pas de structure claire, flexible, complète et déclarative pour définir les items musicaux. De plus, la base Python de *Djalgo* reste trop lourde pour une exécution sans installation via WebAssembly.

## L'approche

JMON (JSON Music Object Notation, *jam on!*) est un format riche et délaratif pour décrire la musique. Il enrichie le format midi et le rend lisible dans une fichier texte.

jmon/algo  est un framework JavaScript pour la composition musicale algorithmique basé sur le format JMON. Il fournit :

- Une représentation musicale structurée en JSON, lisible et programmable
- Des outils de théorie musicale intégrés (gammes, progressions, harmonie, rythme)
- Des techniques de composition générative sans apprentissage profond : marches aléatoires, fractales, automates cellulaires, algorithmes génétiques, processus gaussiens
- Une conversion transparente vers multiples formats (MIDI, ABC, SuperCollider, Tone.js)
- Une visualisation et lecture interactive des partitions
- Une interface pour des performances en *live coding*

Le framework privilégie la créativité mathématique et algorithmique plutôt que l'intelligence artificielle, offrant un contrôle précis, une compréhension claire des processus compositionnels, et une appropriation du processus créatif.

## Mise en oeuvre technique

- Framework JavaScript pur
- Intégration avec Observable pour notebooks interactifs
- Modules spécialisés : validation de format, conversion MIDI/ABC/SuperCollider, visualisation de partitions
- Outils d'analyse musicale (utiles pour algorithmes génétiques)
- Utilisation via npm ou directement dans Observable

## État actuel

Le projet mature et prêt pour l'utilisation.