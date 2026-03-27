---
title: Editing Objects
weight: 1020
date: 2024-02-25T00:00:00.000Z
authors:
  - komatic5
  - illusion2
  - psytrancegd
contributors:
  - komatic5
  - illusion2
  - psytrancegd
  - sparktwee
draft: false
seo:
  title: "Geometry Dash: Editing Objects"
  description: Part 2 of how to use Geometry Dash's level editor, going over Z layer and Z Order, tilesets, groups, the Extra tabs, and Edit Object.
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- Z layer and Z order let you place objects on top of or behind each other.
- As of Update 2.2, tilesets override Z order when objects share the same Z layer.
- Groups are used by triggers and can be added in the Edit Group menu.
- Two extra tabs exist to further tweak your objects.
- Anim serves as a shortcut to creating keyframes.
- Edit Object lets you change an object’s color.
- You can copy an object’s Z layers and color using Copy Values, then paste them using Paste State and Paste Color.

{{< /callout >}}

** **

The **Edit Tab** is only one way to modify objects. You can also change their other properties, like their layering and color. These are found in the {{< img src="images/GDEmotes/Buttons/EditObject.png" class="emote" >}} Edit Object, {{< img src="images/GDEmotes/Buttons/EditGroup.png" class="emote" >}} Edit Group, and {{< img src="images/GDEmotes/Buttons/EditSpecial.png" class="emote" >}} Edit Special tabs.

# 1: Edit Object

{{< img src="images/GDEmotes/Buttons/EditObject.png" class="emote" >}} The **Edit Object** button lets you change an object's color.

To change an object's color, click on one of the buttons. Each button corresponds to a **color channel**, which is a preset color you can use in your level. If you change the color of a channel, *all objects with that channel will change color*.
{{< youtube H1qWm5d2xCc >}}
- Each numbered button is a **custom color channel**. You can change their color by clicking on the square in the bottom right, and you can have up to 999 color channels in a level.
- The "P-Col 1", "P-Col 2", "Light BG", and "Default" buttons are **special color channels**. You cannot customize their color yourself.
- Objects will have a "Base" color, a "Detail" color, or both. If an object has both types of color channels, you can switch between them in the top left of the UI.
- Use the **Next Free** button to select the next unused (custom) color channel.
- Use the **HSV** button to adjust an object's colors relative to its color channel. This is explained in detail in [this guide](/docs/guides/the-editor/using-channels/#1-color-channels).

Use the {{< img src="images/GDEmotes/Buttons/RGB.png" class="emote">}} RGB button to adjust a color channel in real-time. Clicking the {{< img src="images/GDEmotes/Buttons/RGB.png" class="emote">}} button a second time adjusts an object's HSV as well in real-time.

[This guide](/docs/guides/the-editor/using-channels/#1-color-channels) explains how color channels work in more detail.

## Special Objects

**Some objects have unique uses for Edit Object:**
**[Gameplay objects](/docs/guides/gameplay-1/gameplay-objects/#2-portals)** like gamemode portals and orbs don't let you change their color.
- When using gamemode portals and dual portals, you can sometimes click Edit Object to change how the camera works in those gamemodes. For instance, this lets you **remove borders** from the floor and ceiling of your gameplay.
- You can still color these objects using custom color channels. To do so, use [Copy Values](/docs/guides/the-editor/editing-objects/#4-copying--pasting-values) to copy the color channel from another object, and Paste State to paste it onto your gameplay objects.
- Alternatively, you can give these objects a [Group](/docs/guides/triggers-1/groups/) and color them using a [Pulse trigger](/docs/guides/triggers-1/pulse/).

**Text objects** have an extra tab in this UI. You can use that UI to customize what text they show.

**[Triggers](/docs/guides/triggers-1/trigger-intro/)** use this UI to customize their behavior.

# 2: Edit Group

{{< img src="images/GDEmotes/Buttons/EditGroup.png" class="emote" >}} Despite the name of this button, it's used for far more than just [adding groups to objects](/docs/guides/triggers-1/groups/). You also use it to change the **Z Layer and Z Order** of objects, customize parts of their behavior through the **Extra Tabs**, change their [editor layer](/docs/guides/the-editor/organizing-objects/#changing-editor-layers), and change how they interact with gameplay, decoration, and the music.

## Editor Layers

**Editor layers** are separate "layers" of a level that you can sort objects into so that you only affect the objects in those layers. Editor layers help you organize parts of your level, as they allow you to separate details that you can organize and edit individually.

At the top of {{< img src="images/GDEmotes/Buttons/EditGroup.png" class="emote">}} Edit Group, there are two options for "Editor L" and "Editor L2". Here, you can assign two different editor layers for an object to be in.

{{< youtube 7lUnQSdz1to >}}

0 is the default layer for Editor L2 and will be ignored as a value, meaning if Editor L is set to 5 and Editor L2 is at 0, the object will only appear on Editor Layer 5. If you want the object to be on Editor Layer 0, you must keep Editor L at 0.

If an object has more than two layers on it and you press {{< img src="images/GDEmotes/Buttons/GoToLayer.png" class="emote">}} "Go To Layer," the layers will cycle between the two, starting with the value in Editor L2.

Pressing the {{< img src="images/GDEmotes/Buttons/+2.png" class="emote">}} blue plus next to the labels will assign the object to the next unused layer.

## Groups

Groups are a fundamental system that allows triggers to target certain objects. These are explained in depth in the [Using IDs](/docs/guides/the-editor/using-ids/) and [Groups](/docs/guides/triggers-1/groups/) guides. For now, we will only cover how to manage groups.

Here’s how to manage groups:
- In the middle of the {{< img src="images/GDEmotes/Buttons/EditGroup.png" class="emote" >}} menu, there is a counter labeled "Add Group ID".
- You can type in or select an ID, then click **Add** to add the object to the group. Alternatively, click **P** to make the object a [Parent Group](/docs/guides/triggers-1/groups/#3-parent-ids).
- If you want a brand new group that hasn’t been used before, click **Next Free** and then click Add.
- To delete a group, click its number in the Group Box. To remove an object from its Parent Group, click its number once.

{{< youtube 6gg-KokRk54 >}}

You can add *up to 10 groups* to one object. The Group Box will display *up to 20 groups* at once.

## Z Layer & Z Order

**Z Layer** and **Z Order** change how objects render on top of each other.

If you wish to change an object’s Z layer, select an object, and go to {{< img src="images/GDEmotes/Buttons/EditGroup.png" class="emote" >}}. At the bottom you’ll see a section called "Z Layer". Click on any of the buttons to set an object’s Z layer.

T Layers (T1, T2, etc) render above the player’s icon. B Layers render below T Layers and the player’s icons.

{{< youtube 4ZP7TfRC1wU >}}

Z Order can be found in the Edit Group menu as well, just at the top right. You can either click on the buttons or type a specific number to set an object’s Z Order. This is a more "specialized" version of Z Layer; objects with a higher Z Order number will render in front of the ones with a lower Z Order.

Z Layer takes priority over Z Order, so an object on layer T1 and order -5 will render above an object on layer B1 with order 10. Feel free to try this out yourself!

## Tilesets

**Tilesets** are another system that affects how objects render on top of each other. Objects with a lower tileset will *ALWAYS* be above objects with a higher tileset, as long as both objects are in the same Z Layer. Tilesets completely override Z Order since Z Order *only affects objects with the same tileset*.

If you ordered and layered everything correctly and still see something off, your problem might come from the tileset number, in which case you need to change the Z Layer.

You can check an object’s tileset by checking the value inside the parenthesis next to "Z Layer." If you select many objects with differing tileset numbers, it will show a `-` in the parentheses.

{{< img src="https://lh3.googleusercontent.com/d/1ThDEWCIk2bmPvnOqptCKacg5eLBrGyth" >}}

This diagram by WLS6 shows which objects have what tilesets.

{{< img src="https://lh3.googleusercontent.com/d/1D2oIlQ4kqEfq1JAyhIlSiLzq7KzAFAkR" >}}

[Blending](/docs/guides/the-editor/using-channels/#1-color-channels) objects will always display below non-blending objects on the same Z layer, regardless of their tilesets.

## Extra Tab 1
**Extra Tab 1** lets you select different options to give your objects different properties. This section will go over the different options.

{{< img src="https://lh3.googleusercontent.com/d/1ApFT8E7higf7WeAfVDrdMJ9pVH92CXN9" >}}

- **Don’t Fade** and **Don’t Enter**: Stops the object from having an [enter effect](/docs/guides/triggers-1/enter-triggers/) at the edge of the screen.
- **No Effects**: Stops pads and portals from having effects as you interact with them, like the background flashes in size portals.

- **Group Parent**: When rotating or scaling several objects, the objects will transform relative to the group parent; in other words, the group parent acts as the center point. This is not to be confused with Parent Group.
- **Area Parent**: Functions as a group parent, but for area triggers. Make sure you link a set of objects together before making one object the area parent.

- **Don’t BoostY** and **Don’t BoostX**: Stops the player from having their speed boosted by moving blocks.
- **High Detail**: When enabling "Low Detail Mode" outside the editor and playing the level, objects with High Detail will disappear, making the level less laggy.


- **NoTouch**: Removes collisions from objects with a hitbox (e.g. [static objects](/docs/guides/the-editor/static-objects/)), converting them to [detail objects](/docs/guides/deco-1/detail-objects/).
- **Passable**: Allows the player to go through the block from the bottom or side, making for passable platforms.
- **Hide**: Makes the object completely invisible. Disable Hide Invisible in the editor pause menu to see the hidden objects.

- **NonStickX and NonStickY**: When moving objects in platformer mode, the player will not stick to the object if they’re on top of it.
- **ExtraStickY**: When moving objects downward fast with the player on it, this keeps the player on the object rather than having the player fall as if walking off a platform.
- **Extended Collision**: Makes the hitboxes of objects match correctly when scaled up by a lot.
- **IceBlock**: Makes objects extremely slippery, like an ice block. Useful in Platformer mode.

- **GripSlope**: Stops the player from sliding off a slope. Useful in Platformer mode.
- **NoGlow**: Static Objects.md have an inherent glow on their outlines only visible in normal mode; this option removes the glow.
- **NoParticle**: Removes particles from objects like portals and pads.
- **ScaleStick**: When using a scale trigger on an object with the player on it, the player will only move up. However, with this option, the player will move to the side as well relative to the center of the scaling.
- **NoAudioScale**: Disables the scaling/pulsing on objects that pulse relative to the song, like the big pulsing circles.

In addition, some objects can have more options, which include the following:
- **Reverse**: Reverses the gameplay direction as soon as you hit an orb or a pad. *Orbs and Pads Only*.
- **Single P Touch**: If one player touches an arrow trigger {{< img src="images/GDEmotes/Triggers/Arrow.png" class="emote" >}} in Dual Mode, the trigger will only activate for the player that touches it. *However, this feature is currently bugged as of Update 2.205.*
- **Center Effect**: [Touch Triggered](/docs/guides/triggers-1/spawn/) triggers will only activate once the player touches the center of the trigger.

- **Smooth Ease**: Moves the camera smoothly rather than instantly when using any kind of teleport.

## Extra Tab 2
This tab is somewhat self-explanatory. There are various counters that let you to change the IDs shown in the [Using IDs](/docs/guides/the-editor/using-ids/) guide.

Keep in mind that not all objects are able to have certain IDs, meaning that some objects will not have some counters that other objects do have.

{{< img src="https://lh3.googleusercontent.com/d/1iRSBsrj-PS2xdcgpjb4eVgFEXSrnLZsV" >}}

## Anim
The **Anim** button right under the Extra2 button serves as a shortcut to creating [keyframes](/docs/guides/triggers-1/keyframes/#3-the-keyframe-object).

If you give some objects a group, and have only one object as the "parent group", you can click the Snim button and it will spawn a {{< img src="images/GDEmotes/Triggers/KeyframeObject.png" class="emote">}} keyframe object on top of the parent group. You can then use the keyframe object as normal.

{{< youtube d0TATu-MdOI >}}

Keep in mind that **this ONLY WORKS if you have a parent group**. Check out the [Keyframes](/docs/guides/triggers-1/keyframes/#3-the-keyframe-object) guide for more information.

# 3: Edit Special

Some objects have special properties, which are edited in the {{< img src="images/GDEmotes/Buttons/EditSpecial.png" class="emote" >}} **Edit Special** tab. This section will give a brief overview of these object types.
- **Gameplay Objects**: Clicking {{< img src="images/GDEmotes/Buttons/EditSpecial.png" class="emote" >}} on gameplay objects like orbs or portals allows you to *select whether the object can be multi-activated*.
- **Teleport Objects**: Clicking {{< img src="images/GDEmotes/Buttons/EditSpecial.png" class="emote" >}} on teleport portals or teleport triggers *opens a menu with options for how the player behaves when teleporting*.
- **Animated Objects**: Clicking {{< img src="images/GDEmotes/Buttons/EditSpecial.png" class="emote" >}} on rotating objects, such as saws, allows you to *change the rotation speed*. Clicking **Edit Special** on animated objects gives you *more options for editing these animations*, which are discussed in the [Animated Objects](/docs/guides/deco-1/animated-objects/) guide.
- **Particle Editor**: Clicking {{< img src="images/GDEmotes/Buttons/EditSpecial.png" class="emote" >}} on the particle object *opens the [particle editor](/docs/guides/deco-1/particle-system/) menu*.

Note that if you have multiple objects selected, {{< img src="images/GDEmotes/Buttons/EditSpecial.png" class="emote" >}} may still be highlighted; this is a bug, and you will not be able to edit those objects.

# 4: Copying & Pasting Values

{{< img src="images/GDEmotes/Buttons/CopyValues.png" class="emote">}} To copy an object’s properties, such as Z Layer and color, press the **Copy Values** button.
{{< img src="images/GDEmotes/Buttons/PasteState.png" class="emote" >}} To paste Z layer to another object, press the **Paste State** button. This button will also paste groups from one object to another unless "Disable Paste State Groups" is enabled in [editor settings](/docs/guides/the-editor/editor-settings/#extra-settings).
{{< img src="images/GDEmotes/Buttons/PasteColor.png" class="emote">}} You can use **Paste Color** to paste an object’s colors to another object.

{{<youtube fGDM86UWd6A >}}
