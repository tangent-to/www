---
title: "`nuee` - Analyse multivariée en écologie"
description: "Analyse multivariée en écologie"
date: 2025-07-07
draft: false
demoURL: ""
repoURL: ""
image: "/images/projects/nuee/logo.png"
tech:
  - Python
  - Multivariate statistics
  - Ecology
---

## Site de documentation
→ [essicolo.github.io/nuee](essicolo.github.io/nuee)

## Le problème

L'analyse des communautés écologiques nécessite des méthodes statistiques multivariées spécialisées — ordinations, indices de diversité, tests de permutation — qui sont bien établies dans l'écosystème R (notamment avec le package *vegan*). Cependant, les chercheurs travaillant en Python manquent d'outils équivalents robustes et complets. Les implémentations existantes sont fragmentées, incomplètes ou difficiles à utiliser, forçant les écologistes à jongler entre R et Python ou à réimplémenter des méthodes complexes. Il existe un besoin pour une bibliothèque Python complète, fidèle aux standards de l'écologie numérique, et compatible avec l'écosystème scientifique Python moderne.

## L'approche

`nuee` est une implémentation Python inspirée du célèbre package R *vegan*. Il fournit :

- **Méthodes d'ordination** : NMDS, RDA, CCA, PCA avec ajustement environnemental (envfit) et analyse de Procrustes
- **Analyses de diversité** : indices de Shannon, Simpson, Fisher's alpha, entropie de Renyi, richesse spécifique, équitabilité, raréfaction
- **Mesures de dissimilarité** : Bray-Curtis, Jaccard, euclidienne et plus de 15 autres distances
- **Tests statistiques** : PERMANOVA, ANOSIM, MRPP, test de Mantel, dispersion bêta
- **Visualisations intégrées** : graphiques d'ordination, biplots, courbes de raréfaction, ellipses de confiance
- **Jeux de données classiques** : varespec, dune, BCI, mite avec leurs variables environnementales

Le package maintient une interface familière pour les utilisateurs de *vegan* tout en exploitant l'écosystème scientifique Python (NumPy, SciPy, pandas, scikit-learn).

## Mise en œuvre technique

- Bibliothèque Python pure avec dépendances standard (NumPy, SciPy, pandas, matplotlib, seaborn, scikit-learn)
- Interface de formules via patsy pour spécifier les modèles statistiques
- Intégration avec statsmodels pour analyses avancées
- Installation simple via pip ou git clone
- Jeux de données intégrés pour l'apprentissage et les tests

## État actuel

Projet actif en développement. Les fonctionnalités principales d'ordination, de diversité et de tests statistiques sont implémentées. Le package est utilisable pour des analyses écologiques standard. Les contributions sont bienvenues pour étendre les capacités et améliorer la compatibilité avec *vegan*.