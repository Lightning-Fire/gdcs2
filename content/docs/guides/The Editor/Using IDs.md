---
title: Using IDs
weight: 117
date: 2025-03-31
authors:
- sparktwee
contributors:
- infernuz_bunni
- komatic5
- sparktwee
draft: false

seo:
  title: "Every Type of ID in Geometry Dash Explained" # custom title (optional)
  description: "This explains every type of ID in the Geometry Dash level editor, such as color channels, Group IDs, and more."
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- IDs give objects specific roles in levels.
- Groups are the most common and versatile ID, and they can also assist other IDs.
- Depending on your level's complexity, you may end up integrating multiple types of IDs.
- To keep track of the IDs you’ve used, especially for highly complex setups, you can mark them down in the provided logistics template.

{{< /callout >}}

** **

# 1: Group IDs

Let’s start with the most common and versatile ID in the editor: **group IDs**. As noted in the [Groups](/docs/guides/triggers-1/groups/) guide, these are commonly used so your triggers can target a specific set of objects.

As of Update 2.2, the maximum group IDs that you can use is 9999, up from 999 in Update 2.1.

To add a group ID to an object/group of objects, you will have to do these four steps:
1. Select the objects
2. Press “Edit Group”
3. Choose a desired group
4. Press “Add”

We will revisit group IDs in a later section, because they have a certain property which makes them more complex to use.

# 2: Simple IDs

These IDs are straightforward to set up and only rarely depend on other IDs to work. There are six IDs that will be explained here:
1. Color IDs/Color Channels
2. Force IDs
3. Song Channel IDs
4. Animation IDs
5. Material IDs
6. Enter Channel IDs

## Color IDs
Color IDs refer to the color channels when you press {{< img src="images/GDEmotes/Buttons/EditObject.png" class="emote" >}} Edit Object. If you give your object a specific color channel, it will show that specific color.

Of course, the type of objects you use will affect how the color appears. Some objects only have a base color or a detail color, and others will appear brighter, darker, or more transparent because of how the base sprite was made. This is the oldest ID type in the game.

You may notice that when copying objects across levels, they don’t retain their colors. This is because the color channels they use may have different values across levels. If you want to __copy objects and the specific colors they use__, click the **Copy + Color** button in the editor’s pause menu. You can then use **Paste + Color** to paste the objects with their colors & HSV intact, even across different levels.

{{< youtube 28DmrjoweBg >}}

As a final note, be aware that only color ids 1-999 are typically available in-game. You can technically input a value above 999 when using Edit Object, but you cannot use color triggers to modify the color later.

## Force IDs
Force IDs are only used in force blocks. Blocks with the same force ID will not stack, but this doesn’t apply to blocks with Force ID 0. Let’s compare these 3 force block setups below:

1. 1 Force block with power of 5.
2. 2 Force blocks with power of 5 and force ID of 1.
3. 2 Force blocks with power of 5 and force ID of 0.

{{< youtube tkvUBGYX0bE >}}

## Song Channel IDs
These IDs allow you to add multiple songs in the same level. Depending on how you set up the {{< img src="images/GDEmotes/Triggers/Song.png" class="emote" >}} [Song or Edit Song trigger](/docs/guides/triggers-1/song-edit-song/), the songs can be switched or played simultaneously.

## Animation IDs

Animation IDs give monsters different expressions in the animate trigger. If you want the bat monster to sleep, for example, you would simply type the animation ID which corresponds with the bat’s sleeping animation. The {{< img src="images/GDEmotes/Triggers/Animate.png" class="emote" >}} [Animate Trigger](/docs/guides/triggers-1/animate/) guide details the many possible expressions that you can give.

## Material IDs
Material IDs make {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote" >}} [Event Link Triggers](/docs/guides/triggers-1/event-link/) activate when you interact with objects of the specified material ID.

You may assign a Material ID in the “Extra ID” box of the trigger.

{{< img src="https://lh3.googleusercontent.com/d/1Z8aaTQSpimzshT9shW9W7umM1gy2RPZg" >}}

For objects you want to assign a Material ID, go to {{< img src="images/GDEmotes/Buttons/EditGroup.png" class="emote" >}} Edit Group and then “Extra 2”.

{{< img src="https://lh3.googleusercontent.com/d/1V3ANa3YDDDzLxs69KB80gtDjnEaDC8qZ" >}}

{{< img src="https://lh3.googleusercontent.com/d/1UqivtGVN1NPMsG7jlhD1J5dN2hkMWb0x" >}}

In this example you can see two blocks; one has Material ID 1, while the other has Material ID 0. The Extra ID in the Event trigger is set to 1.

{{< youtube e4kKNkBr08o >}}

Unlike Force IDs, objects with Material ID 0 actually have some interesting applications and bugs. For instance, Material IDs don’t work on objects like orbs or portals. Additionally, if you have triggers for “Tiny/Feather/Soft/Normal or Hard landing”, the trigger will only activate when you hit the ground, not for merely touching the block.

## Enter Channel IDs
Enter Channels are only used for enter triggers as shown in the image below. Only blocks with the specified Enter Channel will be affected by a certain Enter trigger. This is also set in {{< img src="images/GDEmotes/Buttons/EditGroup.png" class="emote" >}} Edit Group’s “Extra 2” config.

{{< img src="https://lh3.googleusercontent.com/d/1scCXnL0MdgYING9ko-IWqtpaWXOSWrVQ" >}}

You might notice that these triggers are split into two groups and that’s due to their UI. The UI in group 1 is simple, while group 2 has more factors to tweak which makes a more complex UI.

With the triggers in the first group, you can set their Enter Channel using the “Target Enter Channel” box. Triggers in this category will override each other if you have many of them targeting the same Channel ID.

{{< img src="https://lh3.googleusercontent.com/d/16Fgoww8GrgJIVOBOTFyMYU0x13MvQcom" >}}

The triggers in the second category are used for custom enter effects. With these, you can set the Enter Channel ID using the “Enter Channel” box. Triggers in this category can stack when using the same Enter Channel, unless they’re triggers of the same type (such as two Enter Move triggers).

{{< img src="https://lh3.googleusercontent.com/d/19l7g_G-DySjAWGk-sczHjf8rn_imamJn" >}}

# 3: Medium complexity IDs

The next set of IDs are easy to grasp on their own, but they also depend on other IDs to work, usually Group IDs. There are four IDs in this category:
1. Effect IDs
2. Block IDs
3. Unique IDs / SFX Group IDs
4. Gradient IDs

## Effect IDs
Effect IDs are used by {{< img src="images/GDEmotes/Triggers/AreaMove.png" class="emote" >}} [Area](/docs/guides/triggers-1/area-triggers/) and {{< img src="images/GDEmotes/Triggers/EnterMove.png" class="emote" >}} [Enter](/docs/guides/triggers-1/enter-triggers/) triggers. They have four uses depending on the group of triggers they’re used in.

{{< img src="https://lh3.googleusercontent.com/d/1AsKKUBZ1X12_S3z1Ur7EqTy6IDl9sPK6" >}}

Category 1 is the simplest, as these triggers simply stop existing Area and Enter effects. You simply type in the Effect ID to stop any triggers that use that ID.

{{< img src="https://lh3.googleusercontent.com/d/1LDD-19XT2JETZalYA_UUQ8TVcExWqgbq" >}}

{{< img src="https://lh3.googleusercontent.com/d/1zpTLb-5h4mfmYJ-B4mNAWqLxZ5Ri5W_D" >}}

Category 2 contains Enter Effect Triggers which have more variables to tweak. If you give two of the same Enter Effect triggers the same EffectID, the second one will override the first.

{{< img src="https://lh3.googleusercontent.com/d/1_NTgu9GXADrMrmZpsS3dIgOAC9o9_9Ma" >}}

Group 3 contains Area Triggers. As before, if you give two of the same Area triggers the same EffectID, the second one will override the first. You can set the EffectID on the second page of each Area Trigger. This is not required to set up these triggers, but it gives you more control when using the fourth category of these triggers.

{{< img src="https://lh3.googleusercontent.com/d/1pzoqTeU4_klBOACD8TtSUllADzoi7lp-" >}}

The last group contains Edit Area Triggers. **You must enable “Use EID” to use EffectIDs instead of Group IDs.** This lets you edit the properties of existing Area Triggers with those EffectIDs.

{{< img src="https://lh3.googleusercontent.com/d/1AhTnTOpH4EK5896QJqQUksAvbuJEJr8Z" >}}

Another crucial note about EffectIDs is that Area and Enter triggers can share these IDs. Since the Edit Area & Edit Enter triggers are separate, these triggers can occupy the same ID and be stopped separately.

## Block IDs
BlockIDs are assigned to collision blocks, which are used by the {{< img src="images/GDEmotes/CustomGuideIcons/BasicTriggers/collision-instant-collision.png" class="emote" >}} [Collision and Instant Collision triggers](/docs/guides/triggers-1/collision-instant-collision/). You’ll need at least one BlockID to set up these triggers – usually two, but you can also use the player’s hitbox as well. When using a trigger with two BlockIDs, one of them needs to have “Dynamic Block” enabled.

## Unique IDs / SFX Group IDs
UniqueIDs and SFXGroupIDs are used for the {{< img src="images/GDEmotes/Triggers/SFX.png" class="emote" >}} [SFX and Edit SFX triggers](/docs/guides/triggers-1/sfx-edit-sfx/). Just like EffectIDs, they let you edit existing SFX triggers by specifying an ID to modify. The difference between them is that multiple SFX triggers can share a SFX Group, but only one trigger within a SFX Group can have a Unique ID.

When combined with a one object group, you can adjust the sound’s proximity, where the noise changes depending on the player’s distance.

## Gradient IDs

GradientIDs allow you to construct multiple gradient shapes when using “Vertex Mode” in the {{< img src="images/GDEmotes/Triggers/Gradient.png" class="emote" >}} [Gradient trigger](/docs/guides/triggers-1/gradient/). Depending on the shape, you will end up using at least 3 group IDs for every 1 gradient ID used.

Unlike effect IDs, you can only assign one gradient ID for one gradient trigger. If multiple gradients use the same gradient ID, the most recently activated gradient will override the others.

Additionally, note that GradientIDs have a maximum value of 999, unlike other IDs.

# 4: High complexity IDs

These IDs have many varied applications, but can also be tedious to set up. Make sure you’re aware of how you’re using them because they can be difficult to bugfix otherwise. Besides Group IDs which have their own section, there are three IDs which will be explained here:
1. Control IDs
2. Item IDs/Timer IDs
3. Trigger Channels

## Control IDs
ControlIDs only target triggers and gameplay objects. They limit the groups that a trigger targets, much like how you use groups for the same purpose. This can help save groups you’d otherwise use for these objects.

For example, when using a {{< img src="images/GDEmotes/Triggers/Stop.png" class="emote" >}} [Stop trigger](/docs/guides/triggers-1/stop/), you can use Control IDs to stop specific triggers instead of giving them additional groups. Another use for them is in Advanced Follow Triggers where instead of targeting groups, you target control IDs.

## Item IDs/Timer IDs
Item IDs act like a variable. You use these IDs to store numbers that can then be compared with a specific condition in the level.

Arguably, Item IDs have the most use cases because the triggers they connect with have the most variables to tweak. Update 2.1 added the {{< img src="images/GDEmotes/Triggers/Pickup.png" class="emote" >}} [Pickup](/docs/guides/triggers-1/pickup/), {{< img src="images/GDEmotes/CustomGuideIcons/BasicTriggers/count-instant-count.png" class="emote" >}} [Count, and Instant Count triggers](/docs/guides/triggers-1/count-instant-count/), and 2.2 added {{< img src="images/GDEmotes/CustomGuideIcons/BasicTriggers/item-edit-comp-pers.png" class="emote" >}} [Item Edit, Item Compare and Item Persistence](/docs/guides/triggers-1/item-edit-comp-pers/).

Timer IDs are another type of Item ID used for the {{< img src="images/GDEmotes/CustomGuideIcons/BasicTriggers/time-time-event-time-control.png" class="emote" >}} [Time, Time Event, and Time Control triggers](/docs/guides/triggers-1/time-time-event-time-control/). Their main feature is that they can take decimals up to the hundredths place, while Item IDs can only take whole numbers.

## Trigger Channels
Trigger Channels act like a separate limiter on objects. When you’re playing through a level normally, the only triggers that will activate normally are ones which have the active Trigger Channel. This is explained further in the [Using Channels](/docs/guides/the-editor/using-channels/) guide.

You can change trigger channels using the {{< img src="images/GDEmotes/Triggers/Arrow.png" class="emote" >}} [Arrow Trigger](/docs/guides/triggers-1/reverse-arrow/).

## Group IDs (again)
To come full circle, let’s revisit group IDs once more. Because of their use cases, they are basically the simplest and most complex ID at the same time. Not only are they necessary for many of the triggers used in this game, but they also come with many different labels:

- Target ID
- Animation Group ID
- True ID/False ID
- Follow ID
- State ON/State OFF
- Parent ID
- Spawn ID
- Position ID

These may look like different IDs entirely, but they are actually describing group IDs, based on the trigger you see them used for.

# 5: ID Organization

As you read through the more complex IDs, you may realize that the editor is not helpful for keeping track of the many IDs that you have. The main ways to tell what objects use certain groups is the magnifying glass in the Delete Tab, but two issues exist here:

1. You have 9999 possible group IDs to look into, and the magnifying glass searches one ID at a time. You can’t search for multiple IDs at once, or if an object has many IDs, or exclude certain groups from the search.
2. Even if you use a few group IDs, that still excludes the many other IDs in the editor that you may end up using for your levels, especially the highly complex IDs. Additionally, some IDs don’t have the convenience of “Next Free” for you to click on, meaning you may forget which IDs you’ve used and when.

Luckily, we have a [logistics template](https://docs.google.com/spreadsheets/d/1ULxPkpFOVAw6Z9c__JgNq_5O244WofHKSkG9pvTMW2s/edit) specifically for keeping track of IDs, so that you can organize your setups confidently without second guessing yourself. This is especially useful for collabs where creators need to be mindful with the IDs they’ve already used.

{{< img src="https://lh3.googleusercontent.com/d/1Pxwi2vVkIr3J5ipq8dWa6QAgB-HFLZub" >}}

Of course, this is optional. Unless you have an ambitious project where you need a variety of IDs for your details or trigger setups, let this template serve as a guide.

