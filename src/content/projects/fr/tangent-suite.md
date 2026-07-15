---
title: "tangent/suite"
description: "Une suite libre pour le calcul scientifique reproductible et sans installation dans le navigateur : sept paquets JavaScript, de la science des données aux carnets et à l'inférence bayésienne."
date: 2025-11-14
featured: 3
draft: false
demoURL: "https://suite.tangent.to"
repoURL: "https://github.com/tangent-to"
image: "/images/projects/tangent-suite/cover.svg"
tech:
  - JavaScript
  - WebAssembly
  - Science des données
  - Inférence bayésienne
---

Le travail dont je suis le plus fier. `tangent/` est une suite libre qui rend le calcul scientifique reproductible et sans installation : sept paquets JavaScript, conçus de bout en bout et validés contre les outils de référence de R et Python. Elle a désormais son propre site.

**[suite.tangent.to](https://suite.tangent.to)** — la suite complète, la documentation et l'architecture.

## Pourquoi le navigateur

Presque tout appareil doté d'un navigateur sait déjà exécuter du JavaScript. Placez-y l'analyse et elle tourne partout, sans rien installer ni configurer. C'est toute l'idée de la suite : du vrai calcul scientifique là où se trouve déjà le public, et des résultats que n'importe qui peut rejouer.

## Les paquets

Sept paquets s'assemblent en un seul flux de travail, des données au modèle jusqu'à l'inférence. Les trois sur lesquels je m'appuie le plus :

- **[tangent/ds](https://suite.tangent.to/ds)** — une boîte à outils de science des données pour JavaScript : ordination, regroupement, statistiques classiques et apprentissage automatique. Elle reprend l'ergonomie de scikit-learn et du tidyverse, et ses tests confrontent les résultats aux deux, de sorte qu'une ACP lancée dans le navigateur donne les mêmes chiffres qu'en R ou en Python.
- **[tangent/note](https://note.tangent.to)** — des carnets de calcul locaux qui exécutent du JavaScript dans le navigateur via WebAssembly. Aucun serveur, fonctionne hors ligne, et vos fichiers restent chez vous. L'outil est né d'un projet de composition musicale algorithmique et s'est révélé un foyer général pour le calcul scientifique accessible.
- **[tangent/mc](https://suite.tangent.to/mc)** — inférence bayésienne pour JavaScript : modélisation probabiliste et échantillonnage MCMC dans le navigateur, pour qu'un modèle dise à quel point il est sûr, et pas seulement ce qu'il prédit.

Les autres paquets forment le tissu conjonctif autour de ceux-ci, de la manipulation des données au tracé. La documentation complète et la carte d'architecture se trouvent sur [suite.tangent.to](https://suite.tangent.to).

Un court cours sur Observable parcourt le flux de bout en bout : [data science with tangent](https://observablehq.com/collection/@essi/data-science-with-tangent).
