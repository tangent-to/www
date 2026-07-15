---
title: "`meandre` - Hydrologie différentiable"
description: "Modélisation hydrologique par processus avec différentiation automatique pour la calibration par gradient et des modèles hybrides physique-IA"
date: 2026-02-15
featured: 2
draft: false
demoURL: ""
repoURL: ""
image: "/images/projects/meandre/meandre.png"
tech:
  - PyTorch
  - DuckDB
  - Hydrologie
---

## Le problème

Les modèles hydrologiques fondés sur les processus encodent ce que l'on sait de la circulation de l'eau dans un bassin versant, mais ils sont difficiles à calibrer. Leurs paramètres sont d'ordinaire ajustés par optimisation sans dérivées, une approche qui se généralise mal quand les paramètres se multiplient et qui renseigne peu sur le rôle de chacun. Les modèles purement pilotés par les données ont le défaut inverse : ils collent aux observations tout en violant discrètement des contraintes physiques comme la conservation de la masse, et cessent d'être fiables hors de la plage d'entraînement.

## L'approche

`meandre` implémente les processus hydrologiques dans un cadre de programmation différentiable. Comme chaque opération de la simulation est différentiable, le gradient de n'importe quelle sortie (un hydrogramme, un flux, un terme de stockage) par rapport aux paramètres et aux entrées du modèle est accessible par différentiation automatique. Cela permet

- la calibration par gradient, qui se généralise à de nombreux paramètres variant naturellement dans l'espace,
- une analyse de sensibilité identifiable,
- des modèles hybrides dans lesquels des réseaux de neurones paramètrent des processus incertains ou mal compris, tandis qu'une ossature respectant les lois de conservation maintient la cohérence physique du modèle, et
- la quantification des incertitudes, substituant les approches d'ensemble.

L'objectif est d'obtenir des modèles qui restent interprétables et physiquement fondés, tout en profitant de l'optimisation moderne et de l'apprentissage profond.

## Mise en œuvre technique

- Équations des processus hydrologiques exprimées dans un cadre différentiable (PyTorch)
- Différentiation automatique de bout en bout à travers la simulation
- Deux phases de modélisation: d'abord pour la tendance centrale, puis l'incertitude
- Récupération automatisée des données publiques nécessaires à la modélisation
- Auto-pilote favorisant la convergence

## État actuel

Projet actif en cours de développement. Le cœur différentiable et la calibration par gradient sont fonctionnels sur des bassins de test. La validation dans une plus grande diversité de conditions hydrologiques, ainsi que le couplage avec des composantes pilotées par les données, sont en cours.
