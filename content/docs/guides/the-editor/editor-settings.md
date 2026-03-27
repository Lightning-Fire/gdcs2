---
title: Editor Settings
weight: 1040
date: 2024-05-15T00:00:00.000Z
authors:
  - tdp9
contributors:
  - tdp9
  - sparktwee
draft: false
seo:
  title: "Geometry Dash: Editor Settings"
  description: Part 4 of how to use Geometry Dash's level editor, going over how to customize your editor's settings and layout, level settings, and keybinds.
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- Level Settings help you customize how your level will start.
- Due to the changing landscape of Update 2.2 compared to Update 2.1, legacy options are placed for compatibility with older levels.
- You can customize your editor experience using the Editor Settings button, on the main menu.
- If you’re playing on a PC, you can use keybinds to speed up the building process.

{{< /callout >}}

** **

# 1: Level Settings
How would you like your level to start? The **level settings** can help you set it up. You can access this from the {{< img class="emote" src="images/GDEmotes/Buttons/Settings.png" >}} button in the top right corner of the main editor screen. Clicking on it will bring you to this page.

{{< img src="https://lh3.googleusercontent.com/d/1YBMfoE_jAqBhOEjB5rhqUif89PEWvR3r" >}}

## Color Options
At the top center of the page, you have options to change the color of the Background, Ground, Secondary Ground Color, Ground Line, Middle Ground, Secondary Middle Ground Color, and all color channels (in the more section). The plus symbols next to the labels will bring you back to the main editor screen and allow you to choose a color using a HSV slider.

## BG, G, and MG selectors
To the right of the screen, there are three selectors where you can choose the starting background, ground, and the middle ground of the level. If the MG selector has a cross on it, the middle ground is removed.

## Font
The font button will allow you to scroll through and select a font used in the level’s text objects. There are currently 60 fonts to choose from.

## Speed
Here you can select the starting speed of the level. There are five different speeds to choose from.

## Mode
Here you can select the starting gamemode of the level. There are eight gamemodes to choose from.

## Game Type
Game Type allows you to choose between classic mode and platformer mode for your level. Note that the wave and swing game modes are disabled for platformer mode.

## Select Song
Select the starting song for the level from the list of default songs or [use a custom song](/docs/guides/the-editor/choosing-a-song).

## Options
Gives extra options for the level, which includes the following:
- **Mini Mode**: Shrinks the player’s size from the start of the level.
- **Dual Mode**: Puts the player into dual mode at the start of the level.
- **2-Player Mode**: Sets the level into 2-player mode, where dual icons are controlled by two different control sets.
- **Mirror Mode**: Sets the screen to be mirrored at the start of the level.
- **Flip Gravity**: Makes the player's gravity upside down at the start of the level.
- **Rotate Gameplay**: Rotates the gameplay at the start of the level.
- **Reverse Gameplay**: Makes the player go backwards from the start of the level instead of forwards.
- **No Time Penalty**: An option that only affects platformer mode. As you play a level in platformer mode, you lose 1,000 points per second. This option removes this point loss.
- **Spawn Group**: Spawns the player at the position of an object with the selected group. If multiple objects have the same group, one will be chosen at random. In normal mode, only the object’s y-value is relevant for spawning.

{{< youtube pGwNAlpqrOc >}}

## Legacy Options
Within the options menu is another {{< img class="emote" src="images/GDEmotes/Buttons/Settings.png" >}} icon which leads to the legacy options menu. These options make it so that levels before recent updates can work like they did before the update. For 2.2 levels, it’s recommended to leave these options alone.
- **Allow Multi-Rotation**: Objects that are being rotated by 2 or more different rotate triggers will rotate properly.

{{< youtube WXTGlvQTBRg >}}

- **Enable 2.2 Changes**: Changes progression in the level from being based on player position to being based on the verification completion time.
- **Allow Static-Rotate**: Makes it so that static objects can visually rotate properly. Hitboxes are not rotated. This only works in the editor.

{{< youtube O28Ru0-MghQ >}}

- **Enable Player Squeeze**: Fixes a bug that allows a player to “squeeze” into an object when it shouldn’t.

{{< youtube njNbKLisV5w >}}

- **Fix Gravity Bug**: Fixes a bug where upside down gravity had different physics than normal gravity.
- **Fix Negative Scale**: Fixes a bug where scaling an object into the negatives using scale hacks would remove or massively shrink a hitbox for an object.
- **Fix Robot Jump**: Fixes moments where jumping at the right time on a slope or before a pad as a robot would give a massive jump height boost.

{{< youtube Y9qBZxjDCK8 >}}

- **Dynamic Level Height**: Increases the level height as you build higher. This is similar to how a level’s length increases as you build further.
- **Sort Groups**: Makes it so that spawned groups are spawned from left to right.
- **Fix Radius Collision**: Fixes a bug where circular hitboxes wouldn’t properly register by adding a circle hitbox to the player for those interactions.

{{< img src="https://lh3.googleusercontent.com/d/1xsVBXjHq9fAaUk_h8AHatNtDXbg6f76I" >}}

- **Reverse Sync**: Speeds up or slows down the player so that the music can stay in sync whenever a direction change occurs.
- **Decrease Boost Slide**: Lessens how much the player slides after being launched by a dash orb or moving objects.

{{< youtube uT4GVrRlYfk >}}

# 2: Editor Settings

Meanwhile, the **editor settings** can be accessed on the main editor screen by pressing the “Esc” button or by clicking the {{< img class="emote" src="images/GDEmotes/Buttons/Pause.png" >}} pause button in the top right corner. They contain a slew of features that change how the editor looks, followed by some quality of life features.

{{< img src="https://lh3.googleusercontent.com/d/13VOHpks5xqZxgyVU-6uJnt8KSz9ardki" >}}

## Left Screen Options
- **Show Hitboxes**: Shows the hitboxes of objects that have them. Blue hitboxes are solid objects, red ones are hazards, and green ones are interactable objects.

> Note: Some objects do not have their hitboxes shown, even though they do have one. HItboxes are removed when an object has “No Touch” enabled.

{{< img src="https://lh3.googleusercontent.com/d/12eF7PgY7BdFJgxadEcOMg0vqdiD8NrPj" >}}

- **Hide Invisible**: Makes all objects with the “Hide” option enabled invisible.
- **Preview Mode**: Changes the editor to look more like how everything is displayed normally is. When disabled, all objects are shown regardless of opacity or if they are toggled and all objects are colored based on what color channel they are on instead of the color of the color channel itself.
- **Preview Animations**: Plays animations while in the editor for animated objects.
- **Preview Particles**: Animates particles from the custom particle system.
- **Preview Shaders**: Enables shaders to be rendered in the editor.
- **Show Ground**: Shows the ground.
- **Show Object Info**: Shows information about the object(s) you have selected. This includes the groups, colors, and editor layers they have, their Z-Order and Z-Layer, control IDs, and more.
- **Show Grid**: Shows the editor grid.
- **Select Filter**: Allows you to select certain objects based on the filters you put in place in the delete tab. Check the [Organizing Objects](/docs/guides/the-editor/organizing-objects/#2-select-filter) guide for a more in-depth explanation.
- **Ignore Damage**: Makes it so that you can’t die while playtesting in the editor.

## Music Guidelines
**Music guidelines** are lines in the editor that appear by default when using main level songs and have to be created for custom songs. The left button at the bottom of the screen toggles the visibility of these lines.

{{< img src="https://lh3.googleusercontent.com/d/1hHPDt5RbGulPOBagnaHRMxSh9POGg8CS" >}}

## Right Screen Options
These settings are on the right side of the editor, to the right of buttons like "Save" and "Save and Play".

- **Create Loop**: Quickly sets up a spawn loop for your trigger setup.
- **Regroup**: Assigns existing triggers the lowest next free group.
- **Align X**: Equally distributes selected objects horizontally.
- **Align Y**: Equally distributes selected objects vertically.
- **Select All**: Selects every object in the current layer.
- **Select All Left**: Selects every object in the current layer, but only to the left of the editor.
- **Select All Right**: Selects every object in the current layer, but only to the right of the editor.
- **New GroupX**: For multiple groups, new IDs are ordered horizontally.
- **New GroupY**: For multiple groups, new IDs are ordered vertically.
- **Keys**: Lists the different keybinds that you can do on PC. This will be further explained in a later section.
- **Build Helper**: Assigns the next free group IDs when copying a trigger setup.
- **Copy+ Color**: Copies an object while noting it's color.
- **Paste+ Color**: Pastes an object keeping its color using the next free Color channels.
- **Create Extras**: Adds extra details for certain objects such as the 2.1 rock objects.
- **Unlock Layers**: Unlocks every locked layer simultaneously.
- **Reset Unused**: Resets every color channel that is not targeting an object to white.
- **Uncheck Portals**: Removes the lines that mark a gamemode portal’s border.

## Extra Settings
These settings can be found by clicking the {{< img class="emote" src="images/GDEmotes/Buttons/Settings.png" >}} in the top right of the pause menu of the editor.
- **Draw Trigger Boxes**: Shows the hitboxes for triggers with the “Touch Triggered” setting enabled.
- **Playtest No UI**: Hides most of the editor UI while playtesting.
- **Playtest Music**: Plays the level music while playtesting.
- **Effect Lines**: Shows light blue lines at the point a trigger is activated.
- **Duration Lines**: Shows a transparent, gray line that represents how long a trigger action lasts in comparison to level length. Oddly, this doesn’t work with spawn triggers, even if you give them a delay time.
- **Grid On Top**: Overlaps the grid on top of editor objects.
- **Playtest No Grid**: Hides the grid while playtesting.
- **Hide Background**: Removes the background in the editor, leaving a black, empty one instead.
- **Enable Link Controls**: Allows you to link objects together, which means they will be selected and deleted together when one object in the link is selected/deleted. Linking objects and combining it with an “Area Parent” object can allow object movement to be linked in Area triggers.

{{< youtube DN7-4_8FgA8 >}}

- **Hold To Swipe**: Enables swiping after holding down for a while.
- **Buttons Per Row/Button Rows**: Allows you to customize how many buttons are displayed in the build, edit, and delete tabs. There is a minimum of 6 columns and 2 rows, and a maximum of 12 columns and 3 rows.
- **Swipe Cycle Mode**: When using swipe, you are able to select multiple objects. However, if you try to click on an object that is with or near other objects, you might select the wrong one. Swipe Cycle allows you to cycle between objects before you keep a selection. Click on an object in very close proximity and within a close window of time from the last selection and it will deselect the last object and select a new object.

{{< youtube fpQ2H4lGHeo >}}

- **Layer Locking**: Allows you to lock layers by clicking the layer number in the editor. Makes it so you cannot build or select objects in them. This is explained more in the [Organizing Objects](/docs/guides/the-editor/organizing-objects/#locking-editor-layers) guide.
- **Show Clicks**: Places down small, orange squares at points you click during playtesting.
- **Auto-Pause**: Pauses playtesting when spawning from a start position to reduce lag.
- **Hide Path**: Hides the player path.
- **Start Optimization**: An experimental feature that tries to reduce start position lag.
- **Hide Particle Icons**: Hides the particle system emitter icon in the editor and only shows the particles themselves.
- **Increase Undo/Redo**: Increases the cap from using the Undo and Redo buttons from 200 to 1000.
- **Playtest Smooth Fix**: Enables smooth fix for editor playtesting.
- **Increase Scale**: Increases the scale range of the scale feature from 0.5-2 to 0.25-4.
 - **Disable Paste State Groups**: Doesn’t paste the group IDs onto an object when using ”Paste State”.
- **Small Warp Buttons**: Decreases the size of the warp buttons on an object when using the warp feature in the Edit Tab.

## Keybinds [PC-exclusive]
**Keybinds** allow you to input certain key combinations to perform actions in the editor. As of Update 2.205, none of these can be binded to different keys. They can be found in the pause menu of the editor or the main options menu of the game. Most are self explanatory, but these keybinds need more explaining.
- **Lock/Unlock Preview**: Locks the visuals of the editor preview to a specific point in the editor.

{{< youtube mftxAmNIlLQ >}}

- **Save/Load Editor Pos**: Saves the screen position of the editor camera which can be loaded to go to later. You can save a position using using Ctrl+[0-9], and load it using Alt+[0-9].

{{< youtube tLYwWL07GMo >}}
