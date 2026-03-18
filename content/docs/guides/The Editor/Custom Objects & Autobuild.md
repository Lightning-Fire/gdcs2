---
title: "Custom Objects & Autobuild"
weight: 1140
date: 2024-07-16T00:00:00.000Z
authors:
  - "tdp9"
contributors:
  - "notamoderatr"
  - "tdp9"
draft: false
seo:
  title: "Custom Objects and Autobuild in Geometry Dash"
  description: "How to use the Custom Object tab and the Autobuild system in Geometry Dash."
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- Custom objects are groups of objects that can be placed as a whole anywhere in a level. These can be useful for merging collab parts or speeding up the designing process.
- Autobuild allows creating templates of objects to further speed up the creating process. Filling a template out and pasting it will fill any structures with your desired design.

{{< /callout >}}
** **

# 1: Custom Objects

**Custom objects** are __objects that you can create, organize, and place down__. They can be found in the last tab in the editor toolbox, marked with a "C". Unlike the other tabs, this tab is empty by default, allowing room for your own objects. From there, you can organize the object orders and save them to be placed down later. To create a custom object, select all objects you want to be as a part of the custom object, go to the custom objects tab, and press the create object :GreenPlus: button to add it as an object. Now you can select this object and place it whenever you need to.

Custom objects do have their limits, though. Currently as of 2.206, each custom object can only have a maximum of 1,000 objects. With hacks this can be increased to infinity.

{{< youtube _nEovdRdU1c >}}

While having an object in the tab selected, you can press the arrow buttons to move the position of the object up or down the object list. You can also press the red minus button to remove the object from the list entirely.

{{< youtube dSveF6KysXA >}}

When placing down custom objects, they are placed on an anchor point. By default, this anchor point is in the approximate center of the objects. However, if you enable group parent on one of the objects, the anchor point is overwritten to that point. If multiple objects have group parent enabled, the object with the highest y-position will take priority. If multiple objects have the same height, the object on the farthest left takes priority.

{{< youtube sYhB2zh_p_k >}}

## Merging In Collabs
Custom objects can be used to merge parts of a level together for collabs. However, due to the 1000 object limit the base game has, hacks are needed to bypass this limit. The copy & paste buttons also work between levels in Update 2.2, without the object limit. To merge a part, select the part you want to merge and add it as a custom object, including a group parent object to merge parts easier, then go to your collab and place the part in the correct position. Be sure to make changes if the part doesn’t work correctly; for instance, teleport portals may not appear with the correct offsets.

{{< youtube 4BP4HcsuHew >}}

# 2: Autobuild

**Autobuild** allows you to __automatically build block designs using a provided template.__ **As of 2.206, unintended behaviors may occur, most of which may not be described in this section.** On the last page of the blocks tab, there are 3 template blocks: a block, a slope, and a steep slope. These are blank in appearance and using Edit Special :EditSpecial: with them selected will bring you to the autobuild menu.

## Smart Templates

Templates act as tilesets that autobuild uses in order to create your desired structures. While in the “Create Blocks” menu, click on the “Browse” button on the bottom and create a new smart template. You can create many different templates, which can be renamed, edited, or deleted at any time. When you want to add to a desired template or use it in autobuild, click the “Use” button to enable it.

To create decoration for the template, go back to the main menu of the autobuild and click the “Paste Template” button in the bottom right. This will place down a template for you to place your decoration on. Decorate the template carefully and consistently; all structures should abide by the same “rules” so the autobuild has the highest accuracy. The diagram below shows some examples of things you should avoid.

{{< img src="https://lh3.googleusercontent.com/d/1Gi3IJXkmV6nT1px9CtWPGHNzEvajU9OV" >}}

Once you have your template filled, select the entire template and press Edit Special, then press the “Template” button to copy the decoration into your desired smart template. From there, you can place empty template blocks into structures, select them, and then press the “Create” button in the main menu for the autobuild to fill out the structures with your decoration. As of now, slopes and steep slopes do not have an autobuild template, meaning you have to create one from scratch to use them. Even then, there is a likelihood of the template not working.

{{< youtube SrgnLuIisfM >}}

The “Special” button is meant to automatically create decorations using blocks with more complicated patterns. This does not need a smart template in order to function. As of now, if you select any block in the “Special” menu and press “Create”, only the wavy-rock structures are built.

{{< youtube IqBMXLnk6CI >}}

## Smart Template Designs and Variations

Upon filling a template, the designs added can be browsed and edited when you press the “Edit” button on a template in the smart template page. There, you can press “Browse” to view the designs.

The number on the top right of the designs shows how many variations it has. Clicking on empty designs will paste them into the editor, allowing you to fill them out. Clicking on filled out designs will bring you to a menu that shows all variations of the design present. You can paste selected designs into the editor using the “Create” button, delete variations, or change the chance for variations to occur.

Any decoration within an autoblock will count as a variation, with any changes across the same design will add a new variation. By default, the first decorated variation in the variations list will be used in the autobuild. To make designs vary in autobuilds, select the desired designs and click the “Add” button to add them to the variation list. Clicking “Add” on designs will increase the probability of the design being used, while “Zero” removes the design from the variations list.

{{< youtube LIpJk4QdSCg >}}

## Autobuild Settings

- **Reference Only**: Turns the autobuild block into a reference block with a dashed outline. Reference blocks act as if there were an adjacent block connected to the main autobuild block. These are used to create your own design layout for your template.

- **Allow Rotation/Flip X/Flip Y**: Allows Autobuild to make rotation and reflection transformations to the design if necessary designs aren’t filled out.

- **Ignore Corners**: Useless as of 2.206.

- **Use Nearby as Reference**: Uses nearby, unselected autobuild blocks as reference blocks when autobuilding.

- **Don’t Delete**: Keeps Autobuild blocks after pasting designs instead of deleting them from the editor. This is helpful for pasting multiple templates without the hassle of placing the blocks back.


