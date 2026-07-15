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

Le travail dont je suis le plus fier. `tangent/` est une suite libre qui rend le calcul scientifique reproductible et sans installation : sept modules JavaScript, conçus de bout en bout et validés contre les outils de référence de R et Python. Elle a désormais son propre site.

**[suite.tangent.to](https://suite.tangent.to)** — la suite complète, la documentation et l'architecture.

## Pourquoi le navigateur

Presque tout appareil doté d'un navigateur sait déjà exécuter du JavaScript. Placez-y l'analyse et elle tourne partout, sans rien installer ni configurer. C'est toute l'idée de la suite : du vrai calcul scientifique là où se trouve déjà le public, et des résultats que n'importe qui peut rejouer.

## Les sept modules

Un socle de calcul soutient une couche d'analyse de plus haut niveau :

- **Socle (MIT) :** `tangent/lina` pour l'algèbre linéaire, `/proba` pour les probabilités, `/ode` pour les équations différentielles, `/opt` pour l'optimisation.
- **Analyse (GPL-3) :** `tangent/ds`, inspiré de scikit-learn, pour les statistiques, l'ordination et l'apprentissage supervisé et non supervisé ; `tangent/mc`, inspiré de PyMC, pour le calcul bayésien ; `tangent/sem` (expérimental), inspiré de lavaan, pour la modélisation par équations structurelles.

Les résultats de `ds` et `mc` sont validés contre les implémentations de référence en R et Python. La documentation complète et la carte d'architecture se trouvent sur [suite.tangent.to](https://suite.tangent.to).

## Le carnet

La suite s'exécute partout où JavaScript fonctionne, mais elle a son propre foyer : **[tangent/note](https://note.tangent.to)**, une interface de carnets locale. Les carnets tournent dans le navigateur, fonctionnent hors ligne et vos fichiers restent chez vous, sans le verrouillage des carnets hébergés. L'outil est né d'un projet de composition musicale algorithmique et s'est révélé un foyer général pour le calcul scientifique accessible. La suite tourne aussi sur Observable et sur les environnements Node.js et Deno.

Un court cours sur Observable parcourt le flux de bout en bout : [data science with tangent](https://observablehq.com/collection/@essi/data-science-with-tangent).
