+++
title = "A driving simulator for training traffic officers"
slug = "mvp"
template = "portfolio-entry.html"
[extra]
tags = ["UX", "UI", "Unity", "C#"]
+++

This is an app I worked on while at MXT. It is to be used by two users: a traffic officer trainee and an instructor. The former drives a VR car while the latter manipulates the virtual environment to create custom scenarios with car accidents, high traffic, etc.

{{ image(src="users.jpg") }}

The design process covered hardware, software, and the all-around user experience. Here I'll focus on key parts of the mock-ups I created for the instructor.

Once connected, this is the dashboard the instructor is presented with:

{{ image(src="instructor_dashboard_frame.png", full_width=true, can_toggle_full_width=true) }}

This is the semantic structure:

{{ image(src="semantic_structure.png", can_toggle_full_width=true) }}

The following are a few notes on the design.

At a glance, your attention is not drawn anywhere (except perhaps the scene view): there are no primary actions and for this reason no buttons or other elements have a prominent style.

I don't use an accent colour, but contrast instead. I'm not fond of accent colours in unbranded UIs — this makes designs more challenging but arguably more aesthetically pleasing.

The typeface is Inter, which is pretty standard nowadays and it works very well.

All icons are custom made.

It's minimalist but ergonomic.

There's much though behind the 'Change map' button: it also serves as way to start, end and reset a 'session'.

I'm still a programmer! This means I know the tools and the limitations available, and the mock-ups are always made to be achievable.

{{ image(src="edit_gantry.png", can_toggle_full_width=true) }}

{{ image(src="second_monitor.png", can_toggle_full_width=true) }}

{{ image(src="details_add_button.png", can_toggle_full_width=true) }}

{{ image(src="details_mini_map.png", can_toggle_full_width=true) }}

{{ image(src="details_road_rendering.png", can_toggle_full_width=true) }}

I initially implemented the UI in Unity with UI Toolkit., which is like HTML and CSS adapted for use in a game engine. However, after many missing features and bugs I decided to switch to [Nova](https://novaui.io/) and it has been a pleasure to use.
