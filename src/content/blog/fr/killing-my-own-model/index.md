---
title: "Comment j'ai détruit mon propre modèle"
description: "J'ai construit un prospecteur minier automatique, puis j'ai tenté de le briser avec des retenues strictes dans l'espace et le temps. Il n'a pas survécu, et c'est là tout l'intérêt. Pourquoi les données d'exploration apprennent en douce la mauvaise chose aux modèles."
date: 2026-06-10
draft: false
featured: true
---

Dans le milieu de l'édition, "kill your darlings" (tue tes chéris) signifie que raturer le travail t'inspirant le plus de fierté et d'engagement peu être sacrifié pour le bien de l'oeuvre. C'est aussi vrai en science, et dans mon, en science des données. J'ai construit un modèle effectuant ce dont rêve l'industrie minière : lire des données géophysiques et géologiques hétérogènes de sources publiques et pointer précisément où se trouvent probablement les minéraux. Un prospecteur automatique. Les premiers résultats semblaient excellents. Les scores en validation croisée étaient élevés, les cartes s'illuminaient à des endroits sensés, et la version "succès" de ce billet aurait été facile à écrire. "Trop beau pour être vrai", je me suis dit. Alors j'ai passé l'essentiel du projet à essayer de lui donner tort.

## Pourquoi les bons scores mentent en apprentissage automatique géospatial
La recette habituelle de l'apprentissage automatique suppose que vos échantillons sont indépendants. La géologie ne fonctionne pas ainsi. Deux points distants de cent mètres partagent la même intrusion, la même altération, les mêmes artefacts de levé. Séparez ces données au hasard entre entraînement et test, et l'ensemble de test n'est plus indépendant de l'entraînement. Le modèle peut mémoriser le voisinage au lieu d'apprendre la géologie, et une séparation aléatoire le récompense précisément pour cela.

Le même piège se cache dans le temps. Si un instrument, une campagne de terrain ou un choix de traitement change d'une année à l'autre, le modèle peut s'accrocher à cette signature et paraître prophétique sur des gisements qu'il n'a jamais réellement prédits. Tout comme l'émergence d'un enjeu de santé publique survient justement au moment où on a commencé à le mesurer.

Un score élevé en séparation aléatoire, ici, n'est pas une preuve. C'est un design expérimental déficient.

## Le biais est dans les données, pas seulement dans le split
Il y a un problème plus profond, et c'est celui qui devrait inquiéter en premier quiconque applique l'IA à des données d'exploration. Les données d'entraînement ne sont pas un échantillon neutre du terrain. Les forages et les levés géochimiques coûtent cher : personne ne les prélève au hasard. Ils s'accumulent là où quelqu'un soupçonnait déjà quelque chose.

Et ce soupçon a une histoire. Un forage est implanté près d'un indice connu, d'une ancienne mine, d'une route ou de l'intersection prometteuse de l'an dernier, bien plus souvent que sur la foi d'une géophysique indépendante. La géochimie est échantillonnée le long des mêmes pistes. Les parties les plus denses et les mieux étiquetées du jeu de données sont donc exactement celles que l'on avait déjà jugées prometteuses. Les étiquettes racontent où l'on a choisi de chercher, et seulement de façon indirecte où sont les minéraux.

La géophysique est d'une autre nature. Un levé magnétique ou radiométrique aéroporté mesure toute la zone sur une grille régulière, qu'elle soit intéressante ou non. C'est proche d'une observation exhaustive et sans biais. Les couches de forages et de géochimie, elles, concentrent la sélection humaine, et un modèle supervisé ne distingue pas les deux signaux. Donnez-lui tout, et vous lui donnez un raccourci : il peut apprendre où l'on a foré plutôt qu'où sont les minéraux, parce que dans ces données les deux cartes coïncident presque. En séparation aléatoire, ce raccourci obtient de superbes scores. Il ne prédit pourtant rien de neuf, la seule chose qu'on attende d'un prospecteur.

## Le test fatidique
J'ai donc rendu le test difficile à dessein.

- Retenue spatiale: j'ai retiré des blocs entiers de la carte de l'entraînement, de sorte que le modèle devait prédire un terrain qu'il n'avait jamais vu à proximité, et non de simples points jamais vus.
- Retenue temporelle: j'ai mis de côté des périodes d'acquisition entières, pour que le modèle ne puisse pas s'appuyer sur des artefacts propres à une seule campagne.

Les deux visent à couper le raccourci : forcer le modèle à travailler là où il ne peut ni reconnaître le voisinage ni renvoyer le schéma d'échantillonnage.

En séparation aléatoire, mon modèle paraissait solide. Sous retenue spatiale et temporelle, il ne valait rien. Sur un terrain véritablement inédit, ses prédictions n'étaient pas meilleures que le taux de base (la distance d'un forage). La performance antérieure n'était pas une découverte. C'était le modèle qui renvoyait la carte des endroits où nous avions choisi de forer.

## Un échec qui mérite d'être publié
Mon modèle ne fonctionne pas comme prospecteur automatique. Mais le projet n'a pas été perdu. Il a produit une façon fiable de distinguer un vrai résultat géospatial d'un résultat illusoire, et cette machinerie se transpose à tous les autres problèmes de modélisation que je touche. Savoir réfuter son propre modèle vaut plus qu'un modèle de plus qui obtient de bons scores au mauvais test.

Un "je ne sais pas" basé sur la science peut éviter le gaspillage inutile de ressources. Le résultat négatif honnête est le livrable. La carte qui s'illumine ne l'est pas.