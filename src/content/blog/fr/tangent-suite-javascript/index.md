---
title: "tangent/suite : le calcul scientifique en JavaScript"
description: "Pourquoi JavaScript est une option sérieuse pour le calcul scientifique, et comment les sept modules de tangent/suite exécutent statistiques, calcul bayésien et équations structurelles dans le navigateur, sans rien installer."
date: 2026-07-15
draft: false
---

Pour la science des données, Python s'est imposé, et le milieu académique garde une place pour R et sa rigueur statistique. JavaScript, lui, a été conçu pour le web. C'est le langage qui fait tourner l'essentiel des pages et des applications, et en science des données on le connaît surtout pour les interfaces et la visualisation.

Son véritable atout est ailleurs : il s'exécute partout où il y a un navigateur, donc sur presque tous les appareils. Aucune installation. On ouvre la console du navigateur (F12) et on programme. Pas de Python ni de R à installer, pas de service infonuagique où déporter les calculs. Tout reste dans le navigateur, en local et confidentiel.

Observable a bâti autour de JavaScript une interface de type notebook pour explorer les données par graphiques et tableaux. Il y manquait deux choses. La première, une véritable suite de calcul scientifique : c'est ce que j'ai développé. La seconde, un moyen d'importer et d'exporter les carnets, car leur format fermé enferme le travail, un verrouillage de l'aveu même d'Observable. De là est né tangent/note.

La suite compte aujourd'hui sept modules (une heptade). Le socle de calcul réunit tangent/lina, /proba, /ode et /opt, sous licence MIT. Au-dessus viennent tangent/ds, /mc et /sem (expérimental), sous licence GPL-3. tangent/ds, inspiré de scikit-learn, couvre les statistiques, l'ordination et l'apprentissage supervisé et non supervisé. tangent/mc, inspiré de PyMC, couvre le calcul bayésien. tangent/sem, inspiré de lavaan, couvre la modélisation par équations structurelles. Les résultats de ds et mc sont validés contre les implémentations de référence en R et Python.

Le tout s'exécute dans le navigateur, via l'interface note.tangent.to ou sur Observable, comme sur les environnements Node.js et Deno. Un même code, du portable au serveur, sans rien réinstaller.

À découvrir sur [suite.tangent.to](https://suite.tangent.to).
