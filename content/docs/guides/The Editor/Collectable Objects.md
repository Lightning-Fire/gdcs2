---
title: "Collectable Objects"
weight: 1110
date: 2024-01-12T00:00:00.000Z
authors:
  - "naem.less"
contributors:
  - "naem.less"
  - "notamoderatr"
draft: false
seo:
  title: "How to Use Keys in Geometry Dash"
  description: "A full explanation of collectable objects in Geometry Dash, such as keys and coins."
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- We discussed the properties and functions of collectable items.
- We saw how collectables can be used to make levels slightly more interactive via counters.

{{< /callout >}}
** **

# 1: Properties

To edit the properties of the collectable you need to click on edit special. This will bring up a menu:

**Pickup Item**: Allows you to set an “Item ID” the collectable should affect, specified in the “Item ID” box. This value corresponds to which pickup value ID or variable the objects modify. By default the item ID will increase by 1 on pickup but enabling “Sub Count” (Subtract count) will decrease the item id by 1.

{{< youtube xEPtX2kVoRU >}}

**Toggle Trigger**: Enabling this checkbox will make the collectable inherit the properties of a toggle trigger. Like how the toggle trigger operates, you can select a group of objects in “Group ID” to toggle on/off. Enabling “Enable Group” will toggle on and spawn the group in “Group ID” simultaneously. To make use of the spawn property, set the trigger(s) to “Spawn Triggered”, otherwise it won’t perform any actions.

{{< youtube dMBGEMf5nds >}}

**Particle**: This input box inherits the function of the Spawn Particle Trigger and its ability to create custom particles. You can input the group ID of the particles in this box and it will spawn that particle where the collectable is.

**No Anim**: Normally collectables have a floaty animation where they move up and down. Enabling this option will disable this animation.

**Points**: The number you set in here will increase the level’s “Points” value. The amount of points is displayed in the level pause menu below the time or through an item label as shown in the video below.

{{< youtube rHlKqZXz470 >}}

Also found in this tab is the Silver User Coin. Its edit special menu is different from the rest of the collectable objects and is instead the same as the [Animated Objects’](/docs/guides/deco-1/animated-objects/) edit special menu.

