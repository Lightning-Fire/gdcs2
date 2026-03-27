---
title: Organizing Objects
weight: 1030
date: 2024-04-03T00:00:00.000Z
authors:
  - tdp9
contributors:
  - tdp9
  - tv_box
draft: false
seo:
  title: "Geometry Dash: Organizing Objects"
  description: Part 3 of how to use Geometry Dash's level editor, going over editor layers, select filter, and select all.
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- Editor layers are separate layers in a level. You can use these to sort and organize objects and easily select specific objects.
- To change an object's layer, select it, click Edit Group and change the layer using the arrows at the top.
- Editor locking prevents you from deleting or selecting objects in a layer. You can enable this by clicking the "Layer Locking" setting in the settings menu within the editor menu.
- Select Filter allows you to select objects with specific attributes. You can set these attributes in the delete tab.
- Select All selects every object in the current editor layer. You can do this by pressing one of three select all buttons in the editor pause menu.

{{< /callout >}}

** **

# 1: Editor Layers

**Editor layers** are separate "layers" of a level that you can sort objects into so that you only affect the objects in those layers. Editor layers help you organize parts of your level, as they allow you to separate details that you can organize and edit individually.

You can go to layers by pressing the {{< img src="images/GDEmotes/Buttons/PinkArrowLeft.png" class="emote">}} {{< img src="images/GDEmotes/Buttons/PinkArrowRight.png" class="emote">}} pink arrows next to the "All" text in the bottom right corner of the screen. Once you are on a different layer, an opaque {{< img src="images/GDEmotes/Buttons/BlueArrow.png" class="emote">}} blue arrow will appear; clicking it will bring you back to the "All" section.

The **"All"** layer shows you every single layer. Every layer after that is numbered and only focuses on that layer. All other objects in other layers will become see-through, and you will be unable to build, edit, or delete objects on those layers.

{{< youtube QkLNQI_M8qo >}}

- If you place objects down on the "All" section, those objects go to layer 0 by default.
- If you have an object selected and press the {{< img src="images/GDEmotes/Buttons/GoToLayer.png" class="emote">}} **Go To Layer** button above the layer interface, you are brought to the layer that the object is in.
- If you have the "[Show Object Info](/docs/guides/the-editor/editor-settings/#left-screen-options)" setting enabled, you can see which layers an object is on by selecting it and looking at the "EL:" category. This does not work with multiple objects with different editor layers attached.

## Changing Editor Layers
At the top of {{< img src="images/GDEmotes/Buttons/EditGroup.png" class="emote">}} Edit Group, there are two options for "Editor L" and "Editor L2". Here, you can assign two different editor layers for an object to be in.

{{< youtube 7lUnQSdz1to >}}

0 is the default layer for Editor L2 and will be ignored as a value, meaning if Editor L is set to 5 and Editor L2 is at 0, the object will only appear on Editor Layer 5. If you want the object to be on Editor Layer 0, you must keep Editor L at 0.

If an object has more than two layers on it and you press {{< img src="images/GDEmotes/Buttons/GoToLayer.png" class="emote">}} "Go To Layer," the layers will cycle between the two, starting with the value in Editor L2.

Pressing the {{< img src="images/GDEmotes/Buttons/+2.png" class="emote">}} blue plus next to the labels will assign the object to the next unused layer.

## Locking Editor Layers
**Layer locking** prevents you from typically selecting or deleting objects from that layer, even from the "All" section. However, you can still place objects onto a locked layer. You can also delete objects using the "delete all of x objects" button in the delete tab, and you can select objects from locked layers using the "Select Filter" and the "Select All" buttons (more info in the next section).

You can "Lock" editor layers if you have the "[Layer Locking](/docs/guides/the-editor/editor-settings/#extra-settings)" setting enabled. To toggle between locking and unlocking a layer, click the layer number on the layer interface. The number will be orange when locked and white when unlocked.

To unlock all layers in your level, press the "[Unlock Layers](/docs/guides/the-editor/editor-settings/#right-screen-options)" button.

{{< youtube E1qhhq6Uu74 >}}

# 2: Select Filter

- **Select filter** is a setting you can enable in the editor [pause menu](/docs/guides/the-editor/editor-settings/#left-screen-options). It allows you to select objects that have specified attributes on them.

{{< img src="https://lh3.googleusercontent.com/d/1eQPuMdg6vSwQQYaks1HIh0o9rvs8QyuK" >}}

You can set these attributes in the delete tab.

{{< img src="https://lh3.googleusercontent.com/d/1I7oqwmboW9ocihDCO6Iw-DnzD6jbqQU_" >}}

The top left button is the **Find GroupID** button. It doesn’t have anything to do with the select filter, but it selects a random object with the targeted ID for you.

The top button with a number is for **filtering out GroupIDs**, and the button below is for **filtering out Color Channels**. The select filter will only target objects that have those GroupIDs and/or Color Channels. These filters are disabled if they show a "0".

The trash button to the left of these filters resets the GroupID and Color Channel filters back to 0.

- The Color Filter has extra options to select Special Colors by pressing the blue plus button: Obj, Lighter, 3DL, P1, and P2. 
- The trash button in the top right of the filter menus resets the current filter.

{{< youtube 9fA-URaI8EU >}}

Out of the four right buttons, **the bottom right button is the only one that works with the select filter.** It allows you to select objects of the same object type as your currently selected object. Choosing "None" will revert the selection to normal. Static deletes [static objects](/docs/guides/the-editor/static-objects/) like blocks. Details target everything else.

# 3: Select All

**Select all** selects every object in the current editor layer. You can do this by pressing one of the three select all buttons in the editor pause menu.
{{< youtube TQ2Xvf3J3aI >}}

- **Select All**: Selects every object in the current editor layer.
- **Select All Left**: Selects every object to the left of the center of the screen (indicated by an opaque vertical line on the screen).
- **Select All Right**: Selects every object to the right of the center of the screen.
