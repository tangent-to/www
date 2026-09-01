---
title: "tangent/suite"
description: "An open-source suite for reproducible, install-free scientific computing in the browser: seven JavaScript packages spanning data science, notebooks, and Bayesian inference."
date: 2025-11-14
featured: 3
draft: false
demoURL: "https://suite.tangent.to"
repoURL: "https://github.com/tangent-to"
image: "/images/projects/tangent-suite/cover.svg"
tech:
  - JavaScript
  - WebAssembly
  - Data science
  - Bayesian inference
---

The work I'm proudest of. `tangent/` is an open-source suite that makes scientific computing reproducible and install-free: seven JavaScript modules, built end to end and checked against the reference tools in R and Python. It has its own home.

**[suite.tangent.to](https://suite.tangent.to)** — the full suite, docs, and architecture.

## Why the browser

Almost every device with a browser can already run JavaScript. Put the analysis there and it runs everywhere, with nothing to install and nothing to configure. That is the whole point of the suite: real scientific computing where the audience already is, and results anyone can rerun.

## The seven modules

A computational core sits under a higher-level analysis layer:

- **Core (MIT):** `tangent/lina` for linear algebra, `/proba` for probability, `/ode` for differential equations, `/opt` for optimization.
- **Analysis (GPL-3):** `tangent/ds`, modeled on scikit-learn, for statistics, ordination, and supervised and unsupervised learning; `tangent/mc`, modeled on PyMC, for Bayesian computation; `tangent/sem` (experimental), modeled on lavaan, for structural equation modeling.

The results from `ds` and `mc` are checked against the reference implementations in R and Python. Full documentation and the architecture map live at [suite.tangent.to](https://suite.tangent.to).

## The notebook

The suite runs anywhere JavaScript does, but it has a home of its own: **[tangent/note](https://note.tangent.to)**, a local-first notebook interface. Notebooks run in the browser, work offline, and your files stay on your machine, with none of the vendor lock-in of hosted notebooks. It started as a tool for algorithmic music composition and grew into a general home for accessible scientific computing. The suite also runs on Observable and on the Node.js and Deno runtimes.

A short course on Observable walks through the workflow end to end: [data science with tangent](https://observablehq.com/collection/@essi/data-science-with-tangent).
