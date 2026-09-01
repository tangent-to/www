---
title: "`capyllary` - Hydromécanique non saturée différentiable"
description: "Une bibliothèque Python de lois physiques pures et neutres pour l'écoulement non saturé couplé, la poromécanique et le transport de contaminants, différentiable de bout en bout pour la calibration par adjoint"
date: 2026-06-25
featured: 4
draft: false
demoURL: ""
repoURL: "https://github.com/essicolo/capyllary"
image: "/images/projects/capyllary/slope.png"
tech:
  - Python
  - marimo
  - Pyodide
---

## Le problème

L'écoulement non saturé couplé, la poromécanique et le transport de contaminants se résolvent d'ordinaire dans des logiciels monolithiques liés à un solveur. Le problème inverse en devient malaisé. Calibrer des paramètres physiques à partir de données réclame des gradients, et dans ces outils ils sont soit indisponibles, soit grossièrement approximés. La nature compositionnelle des états de pores et de la texture du sol est, elle aussi, le plus souvent ignorée.

## L'approche

`capyllary` est une bibliothèque de fonctions pures et neutres pour la physique de l'hydromécanique non saturée. Les fonctions sont sans état ni dépendance à un solveur, si bien que chaque loi reste différentiable de bout en bout par différentiation automatique, sans branche qui tue le gradient. Un unique chemin de code numpy s'exécute partout, y compris dans le navigateur via Pyodide. Les états de pores, la texture du sol et les espèces chimiques vivent en coordonnées log-ratio isométriques (ilr), ce qui donne la géométrie d'Aitchison qu'exigent réellement les données compositionnelles. Une API de style scikit-learn compose matériaux, domaines, physique et conditions aux limites en objets `Model` immuables : `.solve()` pour une simulation directe, `Inversion` pour la calibration par adjoint.

![Figure, à remplacer, d'un résultat de simulation capyllary](/images/projects/capyllary/figure.svg)

## Mise en œuvre technique

- Physique couplée : écoulement non saturé de Richards (rétention van Genuchten, Brooks-Corey), poromécanique de Biot de la 1-D à la 3-D, et transport de solutés, avec rétroaction à double sens entre écoulement, déformation et perméabilité
- Conditions aux limites : Dirichlet, Neumann et face de suintement unilatérale, avec des fonctions dépendantes du temps
- Un adjoint au niveau de l'EDP qui réutilise la matrice de Newton directe au lieu de dérouler Newton ou les pas de temps, avec récursion inversée dans le temps pour les problèmes transitoires
- Différentiation en mode direct par nombres duaux, sans JAX ni dépendance à un compilateur
- Assemblage avec scikit-fem, formes faibles génériques en dimension et éléments mixtes stables (Taylor-Hood P2-P1), plus génération de maillage dans le navigateur
- Newton-Raphson avec amortissement optionnel par recherche linéaire, et GMRES avec ILU pour les grands systèmes 3-D

## État actuel

En développement actif. La bibliothèque est livrée avec des suites de validation pour la vérification des gradients, des comparaisons à des oracles analytiques et des tests d'aller-retour compositionnels, ainsi que cinq carnets marimo exécutables (écoulement 1-D et 2-D, stabilité de pente, transport, inférence de paramètres) qui tournent tous dans le navigateur via WebAssembly.
