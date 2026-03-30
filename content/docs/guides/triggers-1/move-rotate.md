---
title: Move & Rotate
weight: 3080
date: 2024-01-08T00:00:00.000Z
description: The Move trigger moves objects, while the Rotate trigger rotates objects. This guide will explain how to use both.
authors:
  - komatic5
contributors:
  - komatic5
draft: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- The Move Trigger changes the location of objects. You can enter specific coordinates (e.g. move 3 blocks to the right, then 5 up), or use Move To Target to move one object onto another.
- You can use the Lock to Player X/Y features to copy the player’s movements onto a group, and Lock to Camera X/Y to copy the camera’s movements.
- The Rotate Trigger rotates objects around a center point. You can use Degrees to determine how many degrees objects will rotate, or Times 360 to determine how many full revolutions they should make.
- Static objects (ones with hitboxes) will have their rotation locked no matter what.

{{< /callout >}}

** **
# 1: Move Trigger

The Move trigger moves objects using their X and Y coordinates. Positive X values move objects to the right, and positive Y values move them up. Negative values do the opposite.

This will move objects from their relative positions, so you can’t move an object to a specific location without doing a bit of math to figure out where that location is. However, note that a value of 10 will equal 1 block, so inputting “+10” into the X input will move your object 1 block to the right.

Enabling **Small Step** will make your input values three times smaller, so inputting “+30” into the X input will move your object 1 block to the right instead of 3.

{{< youtube im7RIK2hN_s >}}

The “Lock to Player X” and “Lock to Player Y” checkboxes copy the player’s X and Y movements, while the “Lock to Camera X” and “Lock to Camera Y” checkboxes copy the camera’s X and Y movements. You can also add multipliers to these options, making objects move at half of the camera’s speed for example.

{{< youtube c2w9yRJcpOg >}}

**Target Mode** lets you move an object to the location of another. You’ll need two groups; the Center Group ID is the object that moves to the TargetPos Group ID’s position. Both groups need to either have one object or a Parent Group in them to work, and you can copy this movement to your Target Group ID accordingly.

{{< youtube RHdvH70ObMw >}}

**Direction Mode** moves an object in the *direction* of another by a certain number of blocks. As with Target Mode, you’ll need two groups and the Center Group moves to the TargetPos Group ID’s position. The “Distance” modifier determines how many blocks to move the Target Group; as before, 10 units equals 1 block unless Small Step is enabled.

{{< youtube YEL9K0tUPSU >}}

Enabling **Dynamic Mode** on either Target or Direction Mode will constantly update the positions of your TargetPos Group ID. This target tracking lets you automatically make changes in real time.

{{< youtube eI80epaQxoU >}}

**Easings** change how much your objects accelerate as they move. Some easings also have an **Easing Rate** option which changes how much they accelerate over time; an Easing Rate of 1 is linear, while a rate of 3 would be cubic. You can view a graph of all easings [here](https://www.desmos.com/calculator/xt4ddwuihh).

**Silent** changes how the player interacts with moving blocks in platformer mode. Normally, the player will move alongside blocks that move instantly; however, the Silent checkbox means the player can’t stick and will retain the same position as before.

{{< youtube aY9LDrIfLEI >}}

Move triggers will always stack, which lets you combine their easings in interesting ways. For example: The easing implementation for “Ease Out” is incorrect, and you can tell this by stacking a trigger with No easing and one with Ease In.

{{< youtube fHSNq6U0QKY >}}

# 2: Rotate Trigger

The Rotate trigger rotates objects around a center point. This center point must be a one-object group or a Parent object; without it, objects will rotate around themselves, or not at all.

**Degrees** describes how many degrees to rotate objects - positive values rotate objects clockwise, negative values rotate them counterclockwise. **Times 360** describes how many full revolutions the objects should make.

{{< youtube _160h2B52kc >}}

**Lock Object Rotation** lets the objects rotate around the center point without changing their actual rotation.

You’ll notice that some objects will always behave as though Lock Object Rotation is enabled. These are typically **Static** objects - ones with a hitbox the player can interact with, such as blocks. You can use the “Rotate Static Objects” option in Level Settings to make these objects appear to rotate properly, but their hitboxes will not update accordingly. If you want your static objects to actually rotate, make an invisible copy of them and then give the visible objects the "NoTouch" setting.

{{< youtube 65OCShBIQx0 >}}

**Aim Mode** rotates your Target Group to face your “Rot Target ID” group. You can use the “Rot Offset” input to offset this rotation by a certain amount of degrees, and the “Dynamic Mode” option lets you update this rotation in real-time. Enabling Dynamic Mode will also let you set an infinite move time (duration -1), and also gives you access to an Easing slider that replaces the normal easings.

{{< youtube uXSzuzR2jPk >}}

Aim Mode also gives you access to a new page with MinX, MaxX, MinY, and MaxY IDs. These will set a boundary for your rotation, so your objects won’t be able to move further left than your MinX ID or above your MaxY ID.

{{< youtube DyZG1-X90Eg >}}

**Follow Mode** lets you copy the rotation of an object. The rest of the options here are similar to those in Aim Mode.

{{< youtube t_px5W8HoNM >}}

Rotate triggers will always stack in Update 2.2, but this used to not be the case. Beforehand, activating a new Rotate trigger with the same groups as an old one would override the first. This option can be configured with the “Allow Multi-Rotation” checkbox in level settings.

{{< youtube Vf9xiH5wY4o >}}

