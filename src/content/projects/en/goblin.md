---
title: "Goblin"
description: "Physics-based mineral prospectivity model: geophysical inversion, 3D subsurface reconstruction by diffusion, and at-depth uncertainty (work in progress)"
date: 2026-05-15
draft: false
demoURL: ""
repoURL: ""
image: "/images/projects/goblin/goblin-logo.svg"
tech:
  - PyTorch
  - Diffusion models
  - Geophysical inversion
  - Geological modeling
  - Bayesian inference
---

A physics-based mineral prospectivity model: transparent, auditable, and powered solely by public data. It targets green-economy minerals (copper, nickel, cobalt, lithium, rare earth elements, titanium, graphite, and uranium).

# Problem

The goal is to identify high-potential exploration areas for critical minerals. Because geological sampling is biased toward already-promising areas, predictive *deep learning* models must be trained with care, otherwise the answer leaks into the question the model is asked: the best predictors of an area's geological favorability turn out to be its spatial proximity to existing drill holes and known deposits. Such a model will not seek out genuinely new high-potential areas. Goblin sets out to answer two questions: (1) where to start looking, and (2) where to place the next drill hole.

# Approach

Goblin is first and foremost a physics-based model, driven mainly by an expert system grounded in reference works and the scientific literature. Goblin scans a geographic area, retrieves the available data and carefully records them in a database, discretizes the area meticulously, inverts the geophysics into the rock's physical properties, then compares these against published deposit models through Bayesian inference. A diffusion model (PyTorch) reconstructs the subsurface in three dimensions from surface geophysical surveys alone, and quantifies the uncertainty of that reconstruction as a function of depth. It is trained on physically simulated property models, which keeps it from learning the location of known deposits, and its at-depth predictions are checked against real drill-hole intercepts. The decision-support layer incorporates drill holes already completed as observations, in order to propose the next drill hole or to conclude that exploration is better stopped. These drill holes refine the recommendation without ever being used to train the model, which preserves the separation between training data and decision data.

# Technical Implementation

The core of the system is a three-dimensional geophysical inversion. The magnetic and gravity fields are inverted with anisotropic Tikhonov regularization (using the SimPEG module) to estimate magnetic susceptibility and density, cell by cell, together with their uncertainty. A three-dimensional structural model, produced with GemPy (implicit geological modeling), is built from SIGEOM geology. A sequential Bayesian score combines this physical foundation with geochemical indicators, evaluated against a knowledge base of nineteen deposit models. A POMDP drill planner (partially observable Markov decision process), based on a published method (Mern and Caers, 2023), turns these results into ranked drill targets. A diffusion model (PyTorch) estimates the reliability of the at-depth predictions. The underlying data are public: SIGEOM; open-access magnetic and radiometric surveys from Natural Resources Canada (NRCan); regional faults compiled by the MERC (Mineral Exploration Research Centre); and EMIT hyperspectral imagery (Earth Surface Mineral Dust Source Investigation, NASA).

# Current Status

Goblin already produces convincing results in two geological settings studied from public data: orogenic gold in the Abitibi (used for validation) and mafic nickel-copper at Raglan, where it correctly recovers the known deposits. For several critical minerals, performance is for now limited by the absence of certain public data rather than by the method itself: partial radiometric coverage in northern Quebec, hyperspectral imagery unavailable beyond 52 degrees north latitude for lithium pegmatites, and the coarse resolution of regional geophysics. Two components are still under development: the diffusion-based uncertainty model, which estimates the reliability of at-depth predictions, and the drilling decision-support layer.
