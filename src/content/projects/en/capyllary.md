---
title: "`capyllary` - Differentiable Unsaturated Hydromechanics"
description: "A pure, backend-neutral Python library of physics laws for coupled unsaturated flow, poromechanics, and contaminant transport, differentiable end to end for adjoint-based calibration"
date: 2026-06-25
featured: 4
draft: false
demoURL: ""
repoURL: "https://github.com/essicolo/capyllary"
image: "/images/projects/capyllary/cover.svg"
tech:
  - Python
  - marimo
  - Pyodide
---

## The Problem

Coupled unsaturated flow, poromechanics, and contaminant transport are usually solved in monolithic, solver-bound packages. That makes the inverse problem awkward. Calibrating physical parameters against data needs gradients, and in these tools the gradients are either unavailable or crudely approximated. The compositional nature of pore states and soil texture tends to be ignored as well.

## The Approach

`capyllary` is a library of pure, backend-neutral functions for the physics of unsaturated hydromechanics. The functions are stateless and carry no solver dependencies, so every law stays differentiable end to end through automatic differentiation, with no branches that kill the gradient. A single numpy code path runs everywhere, the browser included, through Pyodide. Pore states, soil texture, and chemical species live in isometric log-ratio (ilr) coordinates, which gives the Aitchison geometry that compositional data actually calls for. A scikit-learn-style API composes materials, domains, physics, and boundary conditions into immutable `Model` objects: `.solve()` for a forward run, `Inversion` for adjoint-based calibration.

![Placeholder figure of a capyllary simulation result](/images/projects/capyllary/figure.svg)

## Technical Implementation

- Coupled physics: Richards unsaturated flow (van Genuchten, Brooks-Corey retention), Biot poromechanics from 1-D to 3-D, and solute transport, with two-way feedback between flow, deformation, and permeability
- Boundary conditions: Dirichlet, Neumann, and unilateral seepage-face, with time-dependent callables
- A PDE-level adjoint that reuses the forward Newton matrix instead of unrolling Newton or the time steps, with time-reversed recursion for transient problems
- Dual-number forward-mode differentiation, no JAX and no compiler dependency
- scikit-fem assembly with dimension-generic weak forms and stable mixed (Taylor-Hood P2-P1) elements, plus in-browser mesh generation
- Newton-Raphson with optional line-search damping, and GMRES with ILU for large 3-D systems

## Current Status

Active development. It ships validation suites for gradient checks, analytical-oracle comparisons, and compositional round trips, alongside five runnable marimo notebooks (1-D and 2-D flow, slope stability, transport, parameter inference) that all execute in the browser through WebAssembly.
