---
title: "How I destroyed my own model"
description: "I built an automatic mineral prospector, then tried to break it with strict space and time holdouts. It didn't survive, and that is the point. A look at why some exploration data quietly teaches models the wrong thing."
date: 2026-06-10
draft: false
---

In the editing industry, "kill your darlings" means that erasing the work your are the proudest of can be made for the better good. It's also true when it comes to science, and in my case, data science. I built a model to do something the mining industry would love: read geophysical and geological data from heteerogeneous public sources, and pinpoint at where minerals are likely to be. An automatic prospector. And the first results looked excellent. Cross-validated scores were high, the maps lit up in sensible places, and the success-story version of this post would have been easy to write. "Too good to be true", I thought. So I spent most of the project trying to prove it wrong.

## Why good scores lie in geospatial machine learning
The standard machine-learning recipe assumes your samples are independent. Geology doesn't work that way. Two points a hundred meters apart share the same intrusion, the same alteration, the same survey artifacts. Split that data randomly into training and test sets and the test set is no longer independent of the training set. The model can memorize the neighborhood instead of learning the geology, and a random split will reward it for doing exactly that.

The same trap hides in time. If an instrument, a field campaign, or a processing choice changes between years, a model can lock onto that signature and look prescient about deposits it never really predicted. Just like the emergence of a public health issue bumps just when we began to measure it.

A high random-split score, here, isn't evidence. It's a poor experimental design.

## The bias is in the data, not just the split
There's a deeper problem, and it's the one anyone putting AI on exploration data should worry about first. The training data is not a neutral sample of the ground. Boreholes and geochemical surveys are expensive, so nobody but fools (and nobody is fool, right? ...right?) collects them at random. They pile up where someone already suspected something.

And that suspicion has a history. A hole gets sited next to a known showing, an old mine, a road, or last year's encouraging intercept, far more often than it gets sited on independent geophysics. Geochemistry gets sampled along the same trails. So the densest, most confidently labeled parts of the dataset are precisely the places people had already decided were prospective. The labels are a record of where we chose to look, and only indirectly a record of where the minerals are.

Geophysics is different in kind. An airborne magnetic or radiometric survey measures the whole area on a regular grid, interesting or not. It's close to a wall-to-wall, unbiased observation. The borehole and geochemistry layers are where the human selection concentrates, and a supervised model can't tell the two signals apart. Hand it everything and you hand it a shortcut: it can learn where people drilled instead of where minerals are, because in this data those two maps nearly coincide. Under a random split, that shortcut scores beautifully. It also predicts nothing new, which is the only thing a prospector is for.

## The harder test
So I made the test hard on purpose.

- Spatial holdout: I withhelded whole blocks of the map from training, so the model had to predict ground it had never seen near, not just points it had never seen.
- Temporal holdout: I held out entire acquisition periods, so the model couldn't lean on artifacts specific to one campaign.

Both are attempts to cut the shortcut: to force the model to work somewhere it can't just recognize the neighborhood or echo the sampling pattern. Under random splits, my model looked strong. Under space and time holdouts it was worthless. Out in genuinely unseen ground, its predictions were no better than the base rate (distance from a borehole). The earlier performance hadn't been a discovery. It was the model reading back the map of where we had chosen to drill.

## A failure worth shipping
My model doesn't work as an automatic prospector. But the project wasn't wasted. It produced a reliable way to tell a real geospatial result from an illusory one, and that machinery carries over to every other modeling problem I touch. Knowing how to disprove your own model is worth more than one more model that scores well on the wrong test.

A science-based "I don't know" can avoid wasting resources on a lost cause. The honest negative result is the deliverable. The map that lights up is not.
