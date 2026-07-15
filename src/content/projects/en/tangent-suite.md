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

The work I'm proudest of. `tangent/` is an open-source suite that makes scientific computing reproducible and install-free: seven JavaScript packages, built end to end and checked against the reference tools in R and Python. It now has its own home.

**[suite.tangent.to](https://suite.tangent.to)** — the full suite, docs, and architecture.

## Why the browser

Almost every device with a browser can already run JavaScript. Put the analysis there and it runs everywhere, with nothing to install and nothing to configure. That is the whole point of the suite: real scientific computing where the audience already is, and results anyone can rerun.

## The packages

Seven packages fit together into one workflow, from data to model to inference. The three I lean on most:

- **[tangent/ds](https://suite.tangent.to/ds)** — a data-science toolkit for JavaScript: ordination, clustering, classical statistics, and machine learning. It borrows the ergonomics of scikit-learn and the tidyverse, and its tests check the numbers against both, so a PCA run in the browser matches what you would get in R or Python.
- **[tangent/note](https://note.tangent.to)** — local-first computational notebooks that run JavaScript in the browser through WebAssembly. No server, works offline, and your files stay on your machine. It started as a tool for algorithmic music composition and grew into a general home for accessible scientific computing.
- **[tangent/mc](https://suite.tangent.to/mc)** — Bayesian inference for JavaScript: probabilistic modeling and MCMC sampling in the browser, so a model can say how sure it is, not just what it predicts.

The other packages cover the connective tissue around these, from data handling to plotting. Full documentation and the architecture map live at [suite.tangent.to](https://suite.tangent.to).

A short course on Observable walks through the workflow end to end: [data science with tangent](https://observablehq.com/collection/@essi/data-science-with-tangent).
