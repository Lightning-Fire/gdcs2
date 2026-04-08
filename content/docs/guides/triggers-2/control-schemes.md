---
draft: false
authors:
  - theibra
title: Control Schemes
weight: 6160
date: 2026-03-05T00:00:00.000Z
contributors:
  - theibra
description: When making minigames, one of the important aspects to get right is
  controls, as they are the way that the player interacts with your level,
  making them complicated or confusing would lead to an unsatisfying experience
  despite how good the gameplay is. However, doing so with the limited number of
  inputs that Geometry Dash gives can be quite challenging. This guide discusses
  how you can use different button combinations to create more actions all while
  maintaining a manageable control layout.
tags:
  - Grade 2
  - Trigger Setups
seo:
  title: How to Make Minigame Controls in Geometry Dash
  description: A complete guide to creating custom controls for a Geometry Dash level.
  canonical: ""
  noindex: false
---
{{< callout context="caution" title="Incomplete guide" icon="outline/info-circle" >}}

This guide is missing the following:
- Examples


{{< /callout >}}

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}

- While Geometry Dash offers a limited number of usable keys, it is possible to add more actions to your level using various trigger setups.
- However, you should always keep in mind that your control scheme must feel intuitive and easy to learn.


{{< /callout >}}

{{< callout context="tip" title="Note" icon="outline/circle-plus" >}}

This guide contains interactive images; you can click or hover over elements to learn more about them.

{{< /callout >}}

- - -

# 1: Inputs

## Single Player Mode

For mobile, taping on the screen anywhere (except for the pause and practice buttons) will count as a jump.
The Left/Right buttons are also visible on screen in platformer mode when on mobile.

<!-- EXAMPLE HERE -->

## 2-Player mode

The 8 keys are spread across the 2 players, with P1 having more options for jumping.
In mobile the key is also split into 2, with the left side controlling P1 and the right side controlling P2
The buttons are also visible on screen in platformer mode when on mobile.

<!-- EXAMPLE HERE -->

# 2: Input detection methods

Geometry Dash provides various methods to detect when the player presses a button, this section lists them in order from most direct (detects when a key is pressed) to least direct (detects the player changing position, which is caused by them pressing a button)

## Triggers (Event and Touch)

The Event and Touch trigger are the most versatile ways to detect player input, however, they function differently

| Touch Trigger                                    | Event Trigger                              |
| ------------------------------------------------ | ------------------------------------------ |
| detects all keys, even on classic                | only detects jumps on classic              |
| cannot differentiate between jump, left or right | can detect one specific action or multiple |
| is not blocked by the options trigger            | is blocked by the options trigger          |

Choosing between using the touch trigger or event trigger mostly comes down to your level’s gamemode; touch is more suited for classic while event is made with platformer in mind, but both can be used depending on your needs.

## Toggle orb and Toggle block

Toggle orb and blocks can only detect jumping, but they allow for a simpler way to activate/deactivate actions.

For example, if you want to add a “chest opening” action, you can simply place a toggle block near your chest, this means that the player will only be able to open the chest when near it, making the same action using event or touch triggers would additionally require collision blocks.

## Collision

Collisions work differently than the other methods, while triggers and toggle blocks exclusively detect a player input, collisions don’t, as they only require the player to be touching them, this makes them the least reliable option of the three, so the player must be boxed to prevent any unexpected movement outside of player inputs.

One of the most popular use cases for collision is making mutually exclusive actions: the player can only go left or right, and never both

{{< callout context="note" title="Note" icon="outline/clipboard-text" >}}

It is possible to also detect collisions when the player interacts with a portal or pad using the event trigger, however this doesn’t provide any actual benefits from using collision blocks

{{< /callout >}}

# 3: Custom player

If the normal player controls don’t fit your needs (creating a top down level for example), you might consider creating your own playable character.

We will break this down into individual directional movements, which can be created using one of 2 trigger setups:

## Setup A: Spawn loop:

* place 2 event triggers {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}}
* the first detects \[key] push and activates groupID X
* place a spawn trigger that activates groupID X, and a move trigger that moves your character a certain direction
* give both these triggers the same delay and groupID X
* the second event trigger detects \[key] release and activates a stop trigger that stops groupID X

<!-- EXAMPLE HERE -->

{{< callout context="note" title="Note" icon="outline/clipboard-text" >}}

You can also replace the move trigger with a rotate trigger.

{{< /callout >}}

## Setup B: Adv Follow:

* your character has a groupID X, with a center object being the parent of this group
* place an object away from the center of your character and in your desired direction, give it groupIDs X and Y
* place 2 event triggers {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}}
* the first detects \[key] push and activates groupID Z
* place an adv follow trigger and give it groupID Z
* set TargetGID: X, FollowGID: Y and speed to a desired finite number
* the second event trigger detects \[key] release and activates a stop trigger that stops groupID Z

<!-- EXAMPLE HERE -->

You can combine these 2 setups to create various controls:

## Example 1: 8-Directional controls

using setup A for each of the 4 directions (up, down, right, left) you can create a simple 8 directional movement.

<!-- EXAMPLE HERE -->

However, moving 2 opposite directions at the same time can give some unexpected results, to fix this, use either of these 2 solutions:

* Newest pressed direction overrides the old one: event trigger 1 also activates a stop trigger that stops the spawn loop of the opposite direction
* Only change directions after releasing a key: event trigger 1 activates a pause trigger that pauses the event trigger of the opposite direction, event trigger 2 activates a resume trigger that resumes it
  You can also use these solutions to turn 8 directional movement into 4 directional!

## Example 2: Driving controls

If you want to create a top down racing game for example, you can use this setup:

* Move forward: use setup B on your character
* Steer left/right: use setup A on the object your character follows, replace the move trigger with a rotate trigger that rotates it around the center

<!-- EXAMPLE HERE -->

# 4: Advanced inputs

With the limited number of available inputs, you may have to think differently to add more actions to your level. This section will teach you how to create useful key combinations like holding or double tapping

## Hold (and release)

### Touch trigger:

This trigger already has a built in hold mode, it is generally used in classic mode as it doesn’t differentiate between keys. Since this mode toggles on and off objects, it can be used with collision blocks to create a similar effects to what event triggers can do

### Event triggers:

* Place 2 event triggers {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}} A and B:
* Event trigger A detects \[key] push, this is the hold state that activates your action
* Event trigger B detects \[key] release, this means the player stopped holding, this trigger spawns a trigger that reverts your action, either using a stop trigger, toggle off trigger... etc.

<!-- EXAMPLE HERE -->

## Double taps

This can be used to create actions like sprinting, or generally a stronger variation of your single tap action

* Place an event trigger {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}} with \[key] push enabled
* This event trigger activates 2 triggers:
* A pickup trigger that adds 1 to itemID X
* A spawn trigger with a small delay, it activates a pickup trigger that subtracts 1 from itemID X
* Place a count trigger (multi activate) that detects when itemID X reaches a value of 2, this trigger is what detects a double tap

<!-- EXAMPLE HERE -->

This setup can work for any number of taps by adjusting the value in the count trigger, just make sure the delay you place on the spawn trigger gives a reasonable time for the player to perform the double tap.

## Key combos

Sometimes you may need multiple keys at once to be pressed

### Unordered key combination:

Order doesn’t matter, but the action should be done when all keys are pressed at once, the combo can either be detected when all keys are held, or when all keys are pressed in a specific time window

* For each key in your combo, place an event trigger {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}} that detects \[key] push
* This event trigger activates 2 triggers:
* a pickup trigger that adds 1 to itemID X
* a spawn trigger with a small delay. Either activate a pickup trigger that subtracts 1 from itemID X
* Place a count trigger (multi activate) that detects when ItemID X reaches the number of keys in your combo, this is the trigger that detects your combination

<!-- EXAMPLE HERE -->

{{< callout context="note" title="Note" icon="outline/clipboard-text" >}}

If instead of having a small delay to press all keys you want to have the keys held all at once, you can change the spawn triggers with event triggers that detect [key] release

{{< /callout >}}

### Modifier key:

This is like the Shift and Ctrl keys used in computer shortcuts

* Place two event triggers {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}} that detect \[mod key] push (A) and \[mod key] release (B) respectively
* The event trigger A spawns another event trigger C that detects \[key] push
* the second event trigger B spawns a stop trigger that stops the event trigger C

### Key sequence:

This is for when you need an ordered sequence of keys to activate your action and is technically a, in this example we’ll use the following sequence: keyA -> keyB -> keyC

* Place an event trigger {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}} X that detects \[keyA] push
* This event trigger activates 2 triggers:
* an event trigger {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}} Y that detects \[KeyB] push
* a spawn trigger with a delay, it activates a stop trigger that stops the event trigger Y
* Repeat the same step for event trigger Y, where it should activate another event trigger Z that detects \[keyC] push
* Since event trigger Z detects the last key in our sequence, this is the trigger that detects our key combo

<!-- EXAMPLE HERE -->

{{< callout context="note" title="Note" icon="outline/clipboard-text" >}}

if instead of having a small delay for your key sequence you want to have keys held in a specific order, you can change the spawn triggers with event triggers that detect [key] release

{{< /callout >}}

## Buttons

Buttons require different controls from what the player icon uses, depending on your use case, you might want to implement a different approach.
In the following examples that don’t use the player as a cursor, we will use a collision block, collision can be either detected using the collision trigger and toggling on and off this block, or by spawning an instant collision trigger

### Cycling through buttons:

This is the most common way to create buttons in the level, the player can control the cursor to cycle through all available buttons. This is useful for creating menus or inventory systems.
there are various ways to achieve this:

* for a 2-key setup (cycle and select), use a sequence trigger with loop enabled, that loops over move triggers, each one teleports a collision trigger (your cursor) to the buttons

{{< image-details src="https://lh3.googleusercontent.com/d/1LEGZMgmZAbU4pHS8p0k3MnOfeqvxfMm4" tlbr="89 94 10 5">}}

{{< detail name="sequence" src="https://lh3.googleusercontent.com/d/1lGUmQok9Q84FITBvTnOZRnCeo5O4P5Zj" tlbr="35 18.5 10 7.5" >}}

{{< detail name="eventselect" src="https://lh3.googleusercontent.com/d/1nsrrVodamcmOWE6yjFS7wZpqp-AlNCkQ" tlbr="15 19 10 6.5" >}}
{{< detail name="eventclick" src="https://lh3.googleusercontent.com/d/1cukhbL63arpX5fwGcP9uLQbI1oWFP0Jl" tlbr="15 70.5 10 6.5" >}}

{{< detail name="move2" src="https://lh3.googleusercontent.com/d/1n8_w4pcVrmioJPSqrPZNti8iounpL_yl" tlbr="35 35 10 5" >}}
{{< detail name="move3" src="https://lh3.googleusercontent.com/d/1Gw5cd5PFBmSSRk_btJPzw15BAi810PEn" tlbr="53 35 10 5" >}}
{{< detail name="move4" src="https://lh3.googleusercontent.com/d/1VfJH7woXE16fdbJbiDl4WcM5vlI__tQ1" tlbr="71 35 10 5" >}}

{{< detail name="instcoll2" src="https://lh3.googleusercontent.com/d/1-PMYWrMAR7rMjKzsjCUIS6Qzmw1tGWlK" tlbr="32 70.5 12 7" >}}
{{< detail name="instcoll3" src="https://lh3.googleusercontent.com/d/1BCSue8QubLMgdID4kh205VLrg9PVXYaZ" tlbr="51 70.5 12 7" >}}
{{< detail name="instcoll4" src="https://lh3.googleusercontent.com/d/1LMjWl6X_NkYO4IbeP1N5eNAsb8Awvm30" tlbr="69 70.5 12 7" >}}

{{< tooltip-detail tooltip="Cursor GID1" tlbr="35 45 9 6" >}}
{{< tooltip-detail tooltip="Button GID2" tlbr="32 49 14 8" >}}
{{< tooltip-detail tooltip="Button GID3" tlbr="51 49 14 8" >}}
{{< tooltip-detail tooltip="Button GID4" tlbr="69 49 14 8" >}}

{{< /image-details >}}

* for a 3-key setup (previous, next and select), space out your buttons evenly, then use 2 event triggers to move your cursor to the next or previous button, make sure the cursor can’t go out of bounds by placing a collision trigger in the end that either prevents the player from moving outside or loops them back to the first button. You can also use this trick for other behaviors like moving to the next row of buttons

{{< image-details src="https://lh3.googleusercontent.com/d/1Lc1cc4XFF4x-ZSc4Dym7XD9YA25UOQXE" tlbr="89 94 10 5">}}

{{< detail name="eventup" src="https://lh3.googleusercontent.com/d/1XUAvrfgP3gekTs08ILa_HZuptjyzhjK9" tlbr="37 20 10 6.5" >}}
{{< detail name="eventdown" src="https://lh3.googleusercontent.com/d/1G50RipDXjYFm0CFFXG0uiWEKiuv7CfWj" tlbr="56 20 10 6.5" >}}
{{< detail name="eventclick" src="https://lh3.googleusercontent.com/d/1cukhbL63arpX5fwGcP9uLQbI1oWFP0Jl" tlbr="10 71.5 10 6.5" >}}

{{< detail name="collisiondown" src="https://lh3.googleusercontent.com/d/12rb8FnMpxDA-vLc6qJ6GpuTGm0hp1G6y" tlbr="10 30 10 7" >}}
{{< detail name="collisionup" src="https://lh3.googleusercontent.com/d/1HWvww3uJBOqrO9Y_J3J3mNnqRsdE8cc4" tlbr="84 30 10 7" >}}
{{< detail name="moveup" src="https://lh3.googleusercontent.com/d/1FD8Q2heXDNgZaQqyD8vr1A3I0qslwAOR" tlbr="38 31 10 5" tooltip="Moves the cursor up">}}
{{< detail name="movedown" src="https://lh3.googleusercontent.com/d/1bH6AEmpvJ0fvBDc8f7djZvNU8augjHXf" tlbr="57 31 10 5" tooltip="Moves the cursor down">}}

{{< detail name="move2" src="https://lh3.googleusercontent.com/d/1yL7fdlZXKvTsHzk3_CZKJuMYBxCeR5SY" tlbr="10 41.5 10 5" >}}
{{< detail name="move4" src="https://lh3.googleusercontent.com/d/1V1CGOi6sfWyhl7rDS5ui4G-84IRxAdjg" tlbr="84 41.5 10 5" >}}

{{< detail name="instcoll2" src="https://lh3.googleusercontent.com/d/1-PMYWrMAR7rMjKzsjCUIS6Qzmw1tGWlK" tlbr="26 71 13 7.5" >}}
{{< detail name="instcoll3" src="https://lh3.googleusercontent.com/d/1BCSue8QubLMgdID4kh205VLrg9PVXYaZ" tlbr="44 71 13 7.5" >}}
{{< detail name="instcoll4" src="https://lh3.googleusercontent.com/d/1LMjWl6X_NkYO4IbeP1N5eNAsb8Awvm30" tlbr="62 71 13 7.5" >}}

{{< tooltip-detail tooltip="Top limit" tlbr="9 50 14 8" >}}
{{< tooltip-detail tooltip="Cursor GID1" tlbr="29.5 46 9 5" >}}
{{< tooltip-detail tooltip="Button GID2" tlbr="27 50 14 8" >}}
{{< tooltip-detail tooltip="Button GID3" tlbr="45 50 14 8" >}}
{{< tooltip-detail tooltip="Button GID4" tlbr="64 50 14 8" >}}
{{< tooltip-detail tooltip="Bottom limit" tlbr="82 50 14 8" >}}

{{< /image-details >}}

### Cursor-like controls using ship:

This is the simplest method to create a cursor, which is useful when creating point and click games.

* The ship gamemode is the cursor
* use toggle orbs/blocks for buttons, resize them to make sure that they fit your button and that the player can’t accidentally click multiple at the same time

<!-- EXAMPLE HERE -->

### Cursor-like directional controls:

Unlike the previous method, this one controls the cursor using 4 directional buttons, with additional buttons for interacting with objects.

This example creates a simple cursor, with one click button

* Place a collision block and toggle it off, this will be your cursor
* use the 4 directional control setup discussed in Custom Player
* place 2 event triggers {{< img src="images/GDEmotes/Triggers/EventLink.png" class="emote">}} , the first detects \[key] push and activates a toggle on trigger, the second activates a toggle off trigger, this will be your clicking action

<!-- EXAMPLE HERE -->

# 5: Custom keybinds

Sometimes, your player controls may turn out to be unintuitive to some players.

While mobile players can change the button layout, pc players are stuck with the default keybinds as the game doesn’t support custom ones (as of 2.206). So for the moment you can implement a custom keybind system inside your level.

## Custom keybinds system

We’ll use the cursor system discussed in [the previous section](<>) as the middle man between the input detection(touch, event trigger...) and the action; the input detection acts on the cursor collision blocks, which interact with buttons that are tied to your actions.

Now, you can add a room or menu to the start of your level where the player can change their keybinds:

* First, organize your cursor and button collision blocks for better clarity. Give each cursor collision block a groupID that we’ll note c1, c2... cn. do the same for button collision blocks that we’ll note b1, b2... bn.
* Use any of the custom cursor techniques discussed in the previous section to create buttons for actions.
* When the player selects which action to rebind (for example action1), activate a spawn trigger that remaps a groupID X to b1 and activates the following:
* the system now has to wait for the player to press a key to bind to, place an event trigger for each possible key, when the player selects a key (for example key1) which activates a move trigger with target mode that moves groupID c1 to X (which will be remapped to b1 from the previous spawn trigger)

<!-- EXAMPLE HERE -->

{{< callout context="note" title="Notes" icon="outline/clipboard-text" >}}

* make sure to add a timer or a special key to cancel the key selection, for example, the event triggers could detect [key] release, the player can hold a key for 1s to cancel this action
* cursors and buttons are interchangeable; you can move buttons to the cursors and vice-versa


{{< /callout >}}

# 6: Limitations

The previous sections discussed what is possible to achieve using the tools you are provided in the editor, though you should keep in mind that the game has some limitations which define what can and cannot be achieved, so you may have to approach your level differently:

* There is a maximum of 6 keys (as of 2.206), so adding more actions requires using techniques like key combos, which get harder to remember the more complex they are.
* Mouse controls are slow and finicky, so only use them when making slow paced gameplay or for menus.
* On PC, since there is no in-game keymap customization feature, players are stuck with WAD, arrow keys, space bar and left click, which means adding actions like moving down for example may lead to confusing controls
* On mobile, players will realistically only be able to use their 2 thumbs.

There are some rules you can follow to help you design a more robust control scheme:

* **Intuitive:** The player should be able to pick them up in the first minutes of your level. If you’re introducing new mechanics, you can include a tutorial
* **Simple:** Key combos get exponentially harder to remember the more keys you have to press, so it’s best to only use 2-key combos (considering mobile players too), and include less important and non time critical actions in menus
* **Compact:** One key can fit multiple actions when they are mutually exclusive (one action can be performed at a time). Some examples include:

  * the player doesn’t move while using a menu, so you can use player left/right to navigate them
  * toggle orbs/blocks can be used to interact with objects, as you don’t need to jump
  * player jump can be used to jump while grounded and dash while mid-air

These rules can be broken in some specific cases (fighting games sometimes include 10-key combos), this is where playtesting comes in to confirm whether or not players can quickly adapt to your controls
