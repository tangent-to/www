---
title: "Tangent Notebooks"
description: "Lightweight local notebook computing environment for JavaScript, powered by WebAssembly"
date: 2025-10-01
draft: false
demoURL: ""
repoURL: ""
image: "/images/projects/tangent-notebook/tangent-notebook.png"
tech:
  - JavaScript
  - WebAssembly
  - Svelte
  - Monaco
---

→ [notebook.tangent.to](http://notebook.tangent.to)

## The Problem

ObservableHQ offers a beautiful interface for JavaScript computational notebooks. Although its lock-in approach is likely to change, notebooks can't be saved locally for future use and the interface can't be used offline. There is a need for a simple JavaScript notebook for data exploration, scientific computing, algorithmic development, and arts.

## The Approach

A *tangent notebook* is a browser-based notebook environment that executes JavaScript code locally using WebAssembly. It provides:

- Zero-installation computational environment
- Local execution (no server required)
- Familiar notebook interface
- Lightweight and fast
- Integration with modern JavaScript scientific computing libraries

Originally developed for algorithmic music composition (JMON-algo framework), the tool demonstrates broader potential for accessible scientific computing and interactive programming education.

## Current Status

`tangent-notebook` is usable online at notebook.tangent.to and can be installed locally following the procedure explained on github.com/tangent-studio/tangent-notebook. A local-first version is in the toaster.