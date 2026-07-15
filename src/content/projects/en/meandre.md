---
title: "`meandre` - Differentiable Hydrology"
description: "Process-based hydrological modeling with automatic differentiation for gradient-based calibration and hybrid physics-AI models"
date: 2026-02-15
featured: 2
draft: false
demoURL: ""
repoURL: ""
image: "/images/projects/meandre/meandre.png"
tech:
  - PyTorch
  - DuckDB
  - Hydrology
---

## The Problem

Process-based hydrological models encode what we know about how water moves through a catchment, but they are hard to calibrate. Their parameters are usually fit by derivative-free optimization, which scales badly as parameters multiply and says little about how each one shapes the result. Purely data-driven models have the opposite problem: they can match observations while quietly violating physical constraints like mass conservation, so they stop being reliable outside the range they were trained on.

## The Approach

`meandre` implements hydrological processes within a differentiable programming framework. Because every operation in the simulation is differentiable, the gradient of any output (a hydrograph, a flux, a storage term) with respect to the model's parameters and inputs is available through automatic differentiation. This enables

- gradient-based calibration, which scales to many parameters that vary naturally in space,
- an identifiable sensitivity analysis,
- hybrid models in which neural networks parameterize uncertain or poorly understood processes, while a conservation-law backbone keeps the model physically consistent, and
- uncertainty quantification, as an alternative to ensemble approaches.

The aim is models that remain interpretable and physically grounded while benefiting from modern optimization and deep learning.

## Technical Implementation

- Hydrological process equations expressed in a differentiable framework (PyTorch)
- End-to-end automatic differentiation through the simulation
- Two modeling phases: first the central tendency, then the uncertainty
- Automated retrieval of the public data needed for modeling
- An autopilot that promotes convergence

## Current Status

Active project under development. The differentiable core and gradient-based calibration are functional on test catchments. Validation across a broader range of hydrological conditions, along with the coupling of data-driven components, is ongoing.
