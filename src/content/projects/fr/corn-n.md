---
title: "Modelisation de la reponse du maïs à la fertilization azotée"
description: "Réseau de neurones predisant la reponse du maïs a l'azote"
date: 2024-01-15
draft: false
demoURL: ""
repoURL: ""
image: "/images/projects/corn-n/prototype-model-for potatoe.png"
tech:
  - Python
  - PyTorch
  - Gradio
  - pandas
  - scikit-learn
---


## Le problème

Les recommandations d'engrais azoté pour le maïs s'appuient généralement sur des lignes directrices régionales simplifiées qui ne tiennent pas compte des interactions complexes entre les propriétés du sol, les conditions météorologiques et les pratiques de gestion. Cela peut entraîner une sous-fertilisation (rendements réduits, donc un besoin d'expansion agricole) ou une sur-fertilisation (perte économique et impact environnemental). Les agriculteurs et agronomes ont besoin de recommandations spécifiques au site et basées sur les données, qui intègrent les multiples facteurs affectant l'efficacité de l'utilisation de l'azote.

## L'approche

Nous développons un modèle de réseau de neurones qui génère des courbes de réponse à la dose d'azote pour le maïs en intégrant :
- Les propriétés physiques et chimiques du sol
- L'historique et les pratiques de gestion des terres
- Les séries chronologiques météorologiques avant le semis et tout au long de la saison de croissance

Le modèle apprend les relations non linéaires entre ces variables d'entrée et la réponse des cultures, produisant des prédictions de réponse à la dose spécifiques au site. Un tableau de bord interactif permettra aux agriculteurs et agronomes d'explorer des scénarios, de visualiser les réponses prédites et d'extraire des recommandations pratiques.

## Mise en oeuvre technique

- Architecture d'apprentissage profond pour séries chronologiques multivariées
- Intégration de données spatiales (sol, culture précédente, densité de semis, informations sur l'hybride) et temporelles (météo, date de semis et de récolte)
- Visualisation interactive pour l'exploration de scénarios

## État actuel

Projet en cours avec des résultats préliminaires prometteurs. L'architecture du modèle démontre la capacité de capturer la dynamique complexe de l'azote ; la validation est en cours dans diverses conditions de site et scénarios de gestion.