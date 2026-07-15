---
title: "tangent/suite: scientific computing in JavaScript"
description: "Why JavaScript is a serious option for scientific computing, and how the seven modules of tangent/suite run statistics, Bayesian inference, and structural equation modeling in the browser, with nothing to install."
date: 2026-07-15
draft: false
---

For data science, Python has become the default, and academia still keeps a place for R and its statistical rigor. JavaScript was built for the web. It runs most of the pages and applications we use, and in data science it's known mainly for interfaces and visualization.

Its real advantage lies elsewhere: it runs anywhere there's a browser, which means almost any device. Nothing to install. Open the browser console (F12) and start programming. No Python or R to set up, no cloud service to offload the computation to. Everything stays in the browser, local and private.

Observable built a notebook interface around JavaScript for exploring data through charts and tables. Two things were missing. First, a real scientific-computing suite: that's what I've built. Second, a way to import and export notebooks, since their closed format locks your work in, a lock-in Observable acknowledges itself. That's where tangent/note comes from.

The suite now has seven modules. The computational core is tangent/lina, /proba, /ode and /opt, released under the MIT license. On top sit tangent/ds, /mc and /sem (experimental), under GPL-3. tangent/ds, modeled on scikit-learn, covers statistics, ordination, and supervised and unsupervised learning. tangent/mc, modeled on PyMC, covers Bayesian computation. tangent/sem, modeled on lavaan, covers structural equation modeling. The results from ds and mc are checked against the reference implementations in R and Python.

All of it runs in the browser, through the note.tangent.to interface or on Observable, as well as on the Node.js and Deno runtimes. The same code from laptop to server, with nothing to reinstall.

See it at [suite.tangent.to](https://suite.tangent.to).
