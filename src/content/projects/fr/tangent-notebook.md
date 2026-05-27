---
title: "Tangent Notebooks"
description: "Environnement notebook léger pour JavaScript"
date: 2025-10-01
draft: false
demoURL: ""
repoURL: ""
image: "/images/projects/tangent-notebook/tangent-notebook.png"
tech:
  - JavaScript
  - WebAssembly
  - Svelte
  - Monaco
---

→ [notebook.tangent.to](http://notebook.tangent.to)

## Le problème

ObservableHQ offre une interface magnifique pour les notebooks computationnels JavaScript. Bien que son approche de verrouillage soit susceptible de changer, les notebooks ne peuvent pas être sauvegardés localement pour une utilisation future et l'interface ne peut pas être utilisée hors ligne. Il existe un besoin pour des notebooks JavaScript simples destinés à l'exploration de données, au calcul scientifique, au développement algorithmique et aux arts.

## L'approche

Un *tangent notebook* est un environnement de notebook basé sur le navigateur qui exécute du code JavaScript localement en utilisant WebAssembly. Il offre :
- Un environnement computationnel sans installation
- Une exécution locale (aucun serveur requis)
- Une interface de notebook familière
- Léger et rapide
- Une intégration avec les bibliothèques modernes de calcul scientifique JavaScript

Développé à l'origine pour la composition musicale algorithmique (framework JMON-algo), l'outil démontre un potentiel plus large pour le calcul scientifique accessible et l'enseignement de la programmation interactive.

## État actuel

`tangent-notebook` est utilisable en ligne sur notebook.tangent.to et peut être installé localement en suivant la procédure expliquée sur github.com/tangent-studio/tangent-notebook. Une version locale installable facilement est en préparation.