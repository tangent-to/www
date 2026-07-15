---
title: "Analyse automatisée de l'ionome"
description: "Flux de travail automatisé pour l'analyse ionomique"
date: 2023-06-20
featured: 6
draft: false
demoURL: ""
repoURL: ""
image: "/images/projects/ionomica/ionomic-model-feature-importance.png"
tech:
  - Python
  - Marimo
  - scikit-learn
---

## Le problème

L'ionomique végétale mesure la composition élémentaire des tissus végétaux, et les données en sortent larges et multivariées. Menée à la main, l'analyse est lente, sujette aux erreurs et rarement cohérente d'une étude à l'autre. Le domaine a besoin d'un flux de travail qui applique les bonnes statistiques de la même façon à chaque fois et produit des résultats prêts à publier.

## L'approche

Ionomica fait passer les données brutes d'ionomique par un seul pipeline automatisé :
- Validation des données et contrôle de qualité
- Modélisation statistique (modèles mixtes, modèles additifs généralisés, analyse multivariée, apprentissage automatique)
- Génération automatisée de visualisations
- Documentation reproductible de la recherche

Il suit les pratiques établies en agronomie et en statistique, de sorte que l'analyse reste rigoureuse tout en demandant une fraction de l'effort manuel.

## Mise en œuvre technique

- Pipeline statistique basé sur Python
- Sélection automatisée de modèles d'apprentissage automatique et optimisation des hyperparamètres
- Interface utilisateur et rapports automatisés avec Marimo

## État actuel

Actuellement utilisé dans des projets de recherche agricole. Le développement en cours se concentre sur l'expansion des méthodes statistiques et l'amélioration de l'intégration avec des sources de données supplémentaires.