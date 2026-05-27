---
title: "Goblin"
description: "Modèle de prospectivité minérale fondé sur la physique : inversion géophysique, reconstruction 3D du sous-sol par diffusion et incertitude en profondeur (travail en cours)"
date: 2026-05-15
draft: false
demoURL: ""
repoURL: ""
image: "/images/projects/goblin/goblin-logo.svg"
tech:
  - PyTorch
  - Modèles de diffusion
  - Inversion géophysique
  - Modélisation géologique
  - Inférence bayésienne
---

Modèle de prospectivité minérale fondé sur la physique : transparent, auditable et alimenté uniquement par des données publiques. Il vise les minéraux de l'économie verte (cuivre, nickel, cobalt, lithium, terres rares, titane, graphite et uranium).

# Problème

L'objectif est d'identifier des zones d'exploration à fort potentiel pour les minéraux critiques. L'échantillonnage géologique étant biaisé vers les zones à haut potentiel, la conception de modèles prédictifs en mode *deep learning* se doit d'être entraîné avec précaution, au risque de laisser fuir la réponse dans la question posée par le modèle. En effet, les meilleurs prédicteurs de favorabilité géologique d'une zone est sa proximité spatiale avec des forages et des gîtes découverts. Un tel modèle ne cherchera pas à découvrir de nouvelles zones à haut potentiel. Goblin cherche à répondre à deux question: (1) où commencer à chercher, et (2) où placer le prochain forage. 

# Approche

Goblin est principalement un modèle physique entraîné principalement par un système expert basé sur des ouvrages de références et la littérature scientifique. Goblin scanne une zone géographique, récupère les données disponibles et les consigne soigneusement dans une base de donnée, discrétise scrupuleusement la zone, inverse la géophysique en propriétés physiques de la roche, puis les compare à des modèles de gîtes publiés au moyen d'une inférence bayésienne. Un modèle de diffusion (PyTorch) reconstruit le sous-sol en trois dimensions à partir des seuls levés géophysiques de surface, et quantifie l'incertitude de cette reconstruction selon la profondeur. Il est entraîné sur des modèles de propriétés physiquement simulés, ce qui lui évite d'apprendre la position des gîtes connus, et ses prédictions en profondeur sont confrontées à de vrais intercepts de forage. L'aide à la décision intègre les forages déjà réalisés comme observations pour proposer le prochain forage, ou pour conclure qu'il vaut mieux arrêter l'exploration. Ces forages affinent la recommandation sans jamais servir à entraîner le modèle, ce qui préserve la séparation entre la donnée d'apprentissage et la donnée de décision.

# Implémentation technique

Le coeur du système est une inversion géophysique tridimensionnelle. Les champs magnétique et gravimétrique sont inversés par régularisation anisotrope de Tikhonov (avec le module SimPEG), afin d'estimer la susceptibilité magnétique et la densité, cellule par cellule, avec leur incertitude. Un modèle structural tridimensionnel, produit par GemPy (modélisation géologique implicite), est construit à partir de la géologie du SIGEOM. Un score bayésien séquentiel combine ce socle physique et les indices géochimiques, évalués au regard d'une base de connaissances réunissant dix-neuf modèles de gîtes. Un planificateur de forage de type POMDP (processus de décision markovien partiellement observable), fondé sur une méthode publiée (Mern et Caers, 2023), transforme ces résultats en cibles de forage classées. Un modèle de diffusion (PyTorch) estime la fiabilité des prédictions en profondeur. Les données de base sont publiques : SIGEOM ; levés magnétiques et radiométriques en accès libre de Ressources naturelles Canada (NRCan) ; failles régionales compilées par le MERC (Mineral Exploration Research Centre) ; imagerie hyperspectrale EMIT (Earth Surface Mineral Dust Source Investigation,
NASA).

# État actuel

Goblin donne déjà des résultats convaincants sur deux contextes géologiques étudiés à partir de données publiques : l'or orogénique en Abitibi (utilisé pour la validation) et le nickel-cuivre mafique à Raglan, où il retrouve correctement les gîtes connus. Pour plusieurs minéraux critiques, la performance reste pour l'instant limitée par l'absence de certaines données publiques, plutôt que par la méthode elle-même : couverture radiométrique partielle dans le nord du Québec, imagerie hyperspectrale indisponible au-delà de 52 degrés de latitude nord pour les pegmatites à lithium, et résolution grossière de la géophysique régionale. Deux composantes sont en cours de développement : le modèle d'incertitude par diffusion, qui estime la fiabilité des prédictions en profondeur, et la couche d'aide à la décision de forage.

