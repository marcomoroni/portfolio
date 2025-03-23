+++
title = "A 3D website for MXT"
slug = "mxt-website"
template = "portfolio-entry.html"
[extra]
tags = ["Web", "Svelte", "Three.js", "Shaders"]
opt_preview_img = ["t2.png", "inverted", 10, 1]
+++

{{ video(src="content/2025-03-01-mxt-website/mxt-website.mp4", full_width=true) }}

While working at MXT I had the opportunity to redesign their website. It had to represent our proficiency in immersive technologies and I wanted to present that not only with its content, but also with a proper interactive 3D scene.

The 3D scene, made in [three.js](https://threejs.org/), is an unobtrusive carousel of dioramas, that is integral part of the website layout. Their placement, colour and composition smoothly changes depending on the current page or the scroll position within it.

The material of the models is written with a custom fragment shader. The shader uses pre-baked ambient occlusions and world-space normals to create a gradient tint that changes in time. Colours are interpolated in the Oklab colour space for richer and more vibrant shades.

Movements were initially implemented with springs, but the result was not satisfactory. I’ve decided to use Unity’s smooth damping function, which worked much better.

The website tries to be as accessible as possible, including the 3D scene. For example, motion will be reduced if the appropriate setting is detected on the user’s browser.
