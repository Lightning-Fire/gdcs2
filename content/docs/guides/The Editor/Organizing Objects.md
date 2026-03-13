---
title: Organizing Objects
weight: 103
date: 2024-04-03
authors:
- tdp9
contributors:
- tdp9
- .tv_box.
draft: false

seo:
  title: "Geometry Dash: Organizing Objects" # custom title (optional)
  description: "Part 3 of how to use Geometry Dash's level editor, going over editor layers, select filter, and select all." # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
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

**Editor layers** are __separate "layers" of a level that you can sort objects into so that you only affect the objects in those layers__. Editor layers help you organize parts of your level, as they allow you to separate details that you can organize and edit individually.

You can go to layers by pressing the pink arrows {{< img src="images/GDEmotes/Buttons/PinkArrowLeft.png" class="emote">}} {{< img src="images/GDEmotes/Buttons/PinkArrowRight.png" class="emote">}} next to the "All" text in the bottom right corner of the screen. Once you are on a different layer, an opaque blue arrow {{< img src="images/GDEmotes/Buttons/BlueArrow.png" class="emote">}} will appear; clicking it will bring you back to the "All" section.

The "All" section shows you every single layer. Every layer after that is numbered and only focuses on that layer. All other objects in other layers will become see-through, and you will be unable to build, edit, or delete objects on those layers.

- If you place objects down on the "All" section, those objects go to layer 0 by default.
- If you have an object selected and press the "Go To Layer" button {{< img src="images/GDEmotes/Buttons/GoToLayer.png" class="emote">}} above the layer interface, you are brought to the layer that the object is in.
- If you have the "Show Object Info" setting enabled (found in the editor pause menu), you can see which layers an object is on by selecting it and looking at the "EL:" category. This does not work with multiple objects with different editor layers attached.

{{< youtube QkLNQI_M8qo>}}

## Changing Editor Layers
You can change what editor layer objects are on by selecting the objects and going to the "Edit Group" {{< img src="images/GDEmotes/Buttons/EditGroup.png" class="emote">}} menu. At the top, there are two options for "Editor L" and "Editor L2". Here, you can assign two different editor layers for an object to be in. Pressing the blue plus {{< img src="images/GDEmotes/Buttons/+2.png" class="emote">}} next to the labels will assign the object to the next unused layer.
0 is the default layer for Editor L2 and will be ignored as a value, meaning if Editor L is set to 5 and Editor L2 is at 0, the object will only appear on Editor Layer 5. If you want the object to be on Editor Layer 0, you must keep Editor L at 0.
If an object has more than two layers on it and you press {{< img src="images/GDEmotes/Buttons/GoToLayer.png" class="emote">}} "Go To Layer," the layers will cycle between the two, starting with the value in Editor L2.

{{< youtube 7lUnQSdz1to>}}

## Locking Editor Layers
**Editor locking** __prevents you from typically selecting or deleting objects from that layer, even from the "All" section__. However, you can still place objects onto a locked layer. You can also delete objects using the "delete all of x objects" button in the delete tab, and you can select objects from locked layers using the "Select Filter" and the "Select All" buttons (more info in the next section).

You can "Lock" editor layers if you have the "Layer Locking" setting enabled (found in the settings menu within the editor menu). To toggle between locking and unlocking a layer, click the layer number on the layer interface. The number will be orange when locked and white when unlocked. To unlock all layers in your level, press the "Unlock Layers" button to the right of the editor menu.

{{< youtube E1qhhq6Uu74>}}

# 2: Select Filter

- **Select filter** is a setting you can enable in the editor pause menu. __It allows you to select objects that have specified attributes on them__. You can set these attributes in the delete tab.

{{< img src="https://lh3.googleusercontent.com/d/1I7oqwmboW9ocihDCO6Iw-DnzD6jbqQU_" >}}

The top left button is the **Find GroupID** button. It doesn’t have anything to do with the select filter, but __it selects a random object with the targeted ID for you__.

The top button with a number is for filtering out GroupIDs, and the button below is for filtering out Color Channels. The Color Filter has extra options to select Special Colors by pressing the blue plus button: Obj, Lighter, 3DL, P1, and P2. The select filter will only target objects that have those GroupIDs and/or Color Channels. The value of zero means the filter is off. The trash button in the top right of the filter menus resets the current filter.

The trash button to the left of these filters resets the GroupID and Color Channel filters back to 0.

Out of the four right buttons, the bottom right button is the only one that works with the select filter. It allows you to select objects of the same object type as your currently selected object. Choosing "None" will revert the selection to normal. Static deletes static objects like blocks. Details target everything else.

{{< youtube 9fA-URaI8EU>}}

# 3: Select All

**Select all** __selects every object in the current editor layer__. You can do this by pressing one of the three select all buttons in the editor pause menu:
- **Select All**: __Selects every object in the current editor layer__.
- **Select All Left**: __Selects every object to the left of the center of the screen__ (indicated by an opaque vertical line on the screen).
- **Select All Right**: __Selects every object to the right of the center of the screen__.

{{< youtube TQ2Xvf3J3aI>}}
