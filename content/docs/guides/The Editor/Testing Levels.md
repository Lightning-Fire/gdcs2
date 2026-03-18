---
title: "Testing Levels"
weight: 1160
date: 2024-03-11T00:00:00.000Z
authors:
  - "illusion2"
  - "sparktwee"
contributors:
  - "madzz"
  - "illusion2"
  - "sparktwee"
draft: false
seo:
  title: "How to Playtest a Geometry Dash Level"
  description: "A short explanation of the GD editor's playtesting features."
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- The editor playtest allows you to play your level within the editor and music playtest enables you to hear the music.
- The editor pause menu contains a variety of options that improves your experience when playtesting your level.
- The Show Info Label enables you to see the level’s status (normal, audio-related, performance-related and area-related descriptions) whilst playing the level.

{{< /callout >}}

** **

# 1: Editor Features

These are playtesting-related features that you will encounter while in the editor interface.

## Editor Playtest

The Editor Playtest button is on the left hand side of the screen, in between the Music Playtest and Zoom In/Out buttons.

This button lets you quickly play your level from your latest StartPos, and marks your movements with a green line. This is a useful feature that saves time and helps you keep track of the player's movement in order to build your gameplay. *Keep in mind that the physics are slightly different in the editor and it is advised to still playtest your level in normal mode.*

When playtesting, you can pause the level by clicking the button on the left hand side, and you can stop playtesting by clicking the button.

{{< youtube SrveoQuJfCs >}}

## Music Playtest
The Music Playtest button is right above the Editor Playtest button, and below the Undo/Redo buttons, once again on the left of the screen.

This button plays a green line, starting from the very left of your screen. It also plays the music of the level, following along with the green line. The green line is affected by the arrow triggers, speed changes, and other gameplay altering features.

{{< youtube 0YBbfBrUYBk >}}

# 2: Pause/Options Features

These are the playtesting-related features that you’ll find by pausing the editor and/or going into the options menu.
## Pause Menu

{{< img src="https://lh3.googleusercontent.com/d/1N0VgDu5MUQjNZtim33n0sQ2wso-kkDam" >}}

- **Ignore Damage:** Allows you to playtest the level without taking damage (There are still some bugs where you can die, however).
- **Show Hitboxes:** Allows you to see hitboxes in the editor.

*Note that Hide Invisible, Preview Mode, Preview Animations, Preview Particles, Preview Shaders, and Show Ground can also apply to :Playtest:*
## Options Menu (Page 1)

{{< img src="https://lh3.googleusercontent.com/d/1S2qGHyKBozXaYJ-03X7tjOj7Q6nCgCBe" >}}

- **Playtest Music:** Plays the music whenever you playtest.
- **Playtest No Grid:** Removes the grid when playtesting.
- **Playtest No UI:** Removes the editor's user interface (UI) when playtesting.
## Options Menu (Page 2)

{{< img src="https://lh3.googleusercontent.com/d/1Ka-79HJpEeer8GE3Y6AhDx9oCCLR_Cpk" >}}

- **Show Clicks:** Shows a small orange square wherever you click; keep in mind that this isn’t completely accurate, as using a spider orb or a spider click will put the orange square a bit after.
- **Hide Path:** This removes the green path whenever you playtest.
- **Hide Particle Icons:** When playtesting, this removes the ‘P’ icon from the particle editor object, but keeps the particle itself. *This feature only works with the 2.2 particles.*
- **Playtest Smooth Fix:** Allows you to playtest with Smooth Fix (an option that slows down the level whenever it lags).
- **Auto-Pause:** When using StartPos and playtesting, the level would automatically pause before moving in order to reduce lag- related issues.

# 3: Practice Mode

When playing your level in practice mode, pause and click the options menu. There will be an option called “Show Hitboxes,” which enables you to see the hitboxes of the level only in practice mode.


In addition, you can purchase the Practice Music Unlock feature in the Diamond Shop, which allows you to listen to the actual song in practice mode. This opens up practice mode as another viable form of playtesting if you want.


{{< img src="https://lh3.googleusercontent.com/d/1YcFchUwJZndfPw_wciH5ROQ2R9Wy2TDm" >}}

# 4: Show Info Label

Alongside Show Hitboxes in the previous section, Show Info Label is an option that you can enable when you’re playing the game and you want to view the level’s status. It’s the equivalent of Show Object Info but from the player’s perspective.

You can enable it in the in-game pause menu in the gear icon at the top right. Ticking it reveals 21 descriptions for any given level at the left side of the screen.


{{< img src="https://lh3.googleusercontent.com/d/1UNr0YSmLQFaL1irqRmXhmD0ttqXot8of" >}}

## Normal Descriptions

- **Level ID:** Displays the ID of the level that you are playing. If it’s not yet uploaded, it will have an ID of `0`.

- **Time:** Shows how long you've been playing the level. It resets when you die or restart, and keeps on going even when you stay in the “Level Complete” screen.

- **Attempts:** Displays how many times you’ve died. The attempt count resets if you leave or complete the level.

- **Taps:** Shows how many inputs you’ve made on the current attempt.

- **Timewarp:** Displays the timewarp trigger’s setting. Its default number is 1.

- **Gravity:** Shows the player’s current gravity in a level. By default, it’s set to 1.

- **X:** Shows the player’s horizontal distance. They are expressed in Small Steps,so 30 small steps is one normal block’s size.

- **Y:** Shows the player’s vertical distance from ground level. On the default ground with a normal-sized cube, the player is 105 small steps high. In mini however, that shrinks to 99 small steps.

- **Active:** Displays the amount of elements on screen (e.g., the player and objects). It does not count triggers or any objects that are offscreen or invisible. However, transparent objects and objects that are assigned to a link visible trigger :LinkVisibleTrigger: do count.

- **Gradients:** Shows how many active gradient triggers :GradientTrigger: are present on screen.

- **Particles** Displays how many particles are on screen (such as portals, pads, and even custom particles).

## Audio-related Descriptions

There are only two descriptions here that will tell the player how many songs and SFX are active in the level.

In `Coaster Mountain` by Serponge, despite the song download stating that there are 3 songs and 43 SFX, the info label will display mostly 1 to 4 at any given moment (that’s if you stick to one attempt). If you die and respawn on the next attempt, the SFX increases.

## Performance-related Descriptions

- **Move:** Measures how many objects are affected by the move trigger :Move: (can sometimes apply for offscreen objects, though not guaranteed).

- **Rotate:** Calculates how many objects are affected by the rotate trigger :Rotate: .

- **Scale:** Estimates how many objects are affected by the scale trigger :ScaleTrigger: .

- **Follow:** Counts how many objects are affected by the follow trigger :Follow: .

## Area-related Descriptions

The last 4 are different in the sense that they are expressed as fractions. The denominator increases first when an area trigger is activated. Then, once an object that was assigned to the area trigger shows up on screen, it will increase the numerator.

- **Move:** Calculates how many active objects are affected by the area move trigger :AreaMove: . Colon’s Dash review provides evidence that there is a correlation between high move areas and lag.

- **Rotate:** Counts how many active objects are affected by the area rotate trigger.

- **Scale:** Measures how many active objects are affected by the area scale trigger.

- **ColOp:** Estimates how many active objects are affected by either the area fade or area tint trigger. If the same objects are affected by both area fade and area tint, the ColOp denominator will double.

