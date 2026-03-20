---
title: "Collectable Objects"
weight: 111
date: 2024-01-12T00:00:00.000Z
authors:
  - "naem.less"
contributors:
  - "naem.less"
  - "notamoderatr"
  - "icefire100062"
draft: false
seo:
  title: "How to Use Keys in Geometry Dash"
  description: "A full explanation of collectable objects in Geometry Dash, such as keys and coins."
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- The properties and functions of all collectable items.
- How collectables can be used to make levels more interactive using counters.

{{< /callout >}}


Collectable objects are ones like keys which players can collect by default. For instance, in Fingerdash the player must collect 10 small coins to receive a large one later on.

{{< youtube id=gd8KO_vD8jQ start=61 >}}

To edit their properties, you'll use the {{< img src="images/GDEmotes/Buttons/EditSpecial.png" class="emote">}} button.

# 1: Properties

Collectable objects can be set to give the player points, [toggle] or [spawn] groups, or change the value of an [item ID].

- Pickup Item: Lets you set an [Item ID] that the collectable affects. You specify the Item ID by typing one into the "Item ID" field.
- Sub Count: By default the Item ID's value will increase by 1. You can change this by activating this checkbox, which decreases its value by 1.
1: Properties

To edit the properties of a collectable you need to click on the edit special button. This will bring up the menu: Pickup Item, which allows you to set an “Item Id” that the collectable item affects. This is specified in the “Item ID” box. The value corresponds to which pickup value ID or variable the objects modify. By default on collection the item id will increase by 1, but if you enable the “Sub Count” (Subtract Count) it will decrease by 1.

{{< youtube xEPtX2kVoRU >}}


**Toggle Trigger:** Enabling this option will make the collectable use the properties of a toggle trigger. This works similar to how the toggle trigger operates, you can select a group of objects in the “Group ID” box, this toggles said group on or off. The “Enable Group” function will toggle and spawn the group in the “Group ID” box at the same time. To properly spawn the group, set the trigger(s) to “Spawn Triggered” (Findable in the bottom left of the trigger(s) edit object page), if this option is not enabled the spawn cannot perform any actions.

{{< youtube dMBGEMf5nds >}}

**Particle:** Lets you customize the particles created when the object is collected. You must create a particle with the [Particle Editor], give that object a group, and enter that group into this field. Multiple particles can be activated at once.

**No Anim:** If you enable this option it will turn off the "floaty" animation, making the objects stay completely still.

**Points:** The value you set in here will increase the level’s “Points” value. This is only usable in platformer mode, as it has no effect in the classic levels. You can your total point count in the level’s pause menu (not playtesting, just playing the level), this is shown in the video below.

{{< youtube rHlKqZXz470 >}}

In the collectible tab you can also find the Silver Coin objects. Its edit special menu is different from the rest of the collectable objects, it has the same edit special menu as an [Animated Object](https://www.gdcreatorschool.com/docs/guides/deco-1/animated-objects/) would.