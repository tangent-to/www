---
title: "`nuee` - Analyse multivariée en écologie"
description: "Analyse multivariée en écologie"
date: 2025-07-07
featured: 5
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
[essicolo.github.io/nuee](https://essicolo.github.io/nuee)

## Le problème

L'écologie des communautés repose sur une boîte à outils bien précise de méthodes multivariées (ordinations, indices de diversité, tests de permutation), et en R cette boîte est mature, surtout dans le package *vegan*. Python n'a pas de véritable équivalent. Ce qui existe est fragmenté ou incomplet, si bien que les écologistes finissent par changer de langage ou par réimplémenter à la main des méthodes standard.

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