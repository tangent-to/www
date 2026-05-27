---
title: "Modélisation de la réponse du maïs à la fertilisation azotée"
description: "Modélisation dose–réponse de la fertilisation azotée du maïs, alliant formes agronomiques canoniques, apprentissage automatique moderne et incertitude calibrée"
date: 2026-05-20
draft: false
demoURL: ""
repoURL: ""
image: "/images/projects/corn-n/prototype-model-for-potato.png"
tech:
  - Python
  - PyTorch
  - GPyTorch
  - XGBoost
  - scikit-learn
  - Gradio
  - Docker
---

## Le problème

Les recommandations d'engrais azoté pour le maïs s'appuient généralement sur des lignes directrices régionales simplifiées qui ignorent les interactions entre le sol, la météo et les pratiques de gestion. La sous-fertilisation coûte du rendement ; la sur-fertilisation coûte de l'argent et nuit à l'environnement. Ce dont un agronome a réellement besoin, c'est d'une courbe dose–réponse spécifique au site — comment le rendement répond à l'azote sur une parcelle donnée — accompagnée d'une indication honnête du degré de confiance que l'on peut lui accorder.

## L'approche

Ce projet client en cours modélise la réponse dose–azote du maïs en alliant des formes agronomiques canoniques (Mitscherlich, linéaire-plateau, quadratique-plateau) à l'apprentissage statistique moderne. Plutôt que de prédire le rendement en une seule étape « boîte noire », le modèle sépare deux sources de variation physiquement distinctes — le potentiel de rendement du site et la forme de sa réponse à l'azote — puis les recombine. Cela reflète le comportement réel du système et évite l'écueil de la régression brute sur le rendement absolu.

Deux modes d'utilisation sont pris en charge et rapportés séparément :

- **Aveugle** : prédiction à partir des seules caractéristiques du site — ce qu'on peut attendre sur une nouvelle parcelle sans observation préalable
- **Assisté par l'agronome** : l'agronome fournit le potentiel de rendement attendu, qui ancre l'échelle de la courbe

## Mise en œuvre technique

- Formes de réponse agronomiques canoniques utilisées comme a priori structurel
- Un processus gaussien multi-tâches (corégionalisation) et un réseau de neurones concave, contraint à plateau, pour la forme de la réponse
- Prédiction séparée du potentiel du site, combinée multiplicativement à la forme de la réponse
- Calibration conforme pour des intervalles de prédiction honnêtes et sans hypothèse de distribution
- Découpage entraînement/test stratifié par projet et prévention stricte des fuites de données
- Interface interactive (Gradio) permettant aux agronomes d'explorer des scénarios
- Déploiement par conteneur Docker

## État actuel

Mandat client en cours. La chaîne de modélisation est fonctionnelle et validée selon un protocole sans fuite de données, stratifié par projet, avec une incertitude rapportée pour chaque prédiction. Un constat est volontairement honnête plutôt que flatteur : en mode aveugle, la précision atteignable est limitée par ce que permettent les caractéristiques de site disponibles, et non par le choix de l'algorithme. Aller plus loin exige des signaux de site plus riches — historique de rendement, observations en saison ou satellitaires — plutôt qu'un modèle plus sophistiqué.
