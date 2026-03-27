---
title: Static Objects
weight: 1090
date: 2024-02-11T00:00:00.000Z
authors:
  - xplode09
contributors:
  - tv_box
  - xplode09
draft: false
seo:
  title: Every Type of Static Object in Geometry Dash
  description: A short explanation of static objects, such as blocks, spikes, and slopes.
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- Static objects are objects in the GD editor that have hitboxes the play can interact with; they include: blocks, slopes, spikes, and saws.
- Blocks can be stood on the top, but if the player hits them on the sides or the bottom, they will be killed.
- Slopes are similar to blocks, but they have an slanted side on the top and an angular hitbox.
- Spikes and saws kill the player on contact, but they differ in hitboxes.
- Static objects have many variations which can have different hitboxes.
- The properties of these objects can be modified by clicking on Edit Group, and checking the Extra button to the right.

{{< /callout >}}

** **

# 1: Blocks

**Blocks** are contained in the first and second tab of the editor. They are solid, meaning they __can be stood on without death__. However, if a player comes into contact on the sides or bottom, they will be killed. Their hitboxes are always a rectangle, being identical to how they appear visually.

{{< img src="https://lh3.googleusercontent.com/d/1G4IXGbzo7vRcRTJfrGZOaM35VjU_MBWJ" >}}

Blocks, due to being a solid, cannot be rotated. The rotate trigger simply moves the block instead of also putting it at an angle.

{{< img src="https://lh3.googleusercontent.com/d/1pR_VpQziA3ejZpAsYraNzBoDQRBi4X41" >}}

There are four types of blocks:
- The Square:

{{< img src="https://lh3.googleusercontent.com/d/1G2Q_Z8mEiuhLtRzz7K3rErbKACW0yb3A" >}}

- The Slab

{{< img src="https://lh3.googleusercontent.com/d/1uTRI6Gts4XD1wN2MQrl9OhIExJIcMVUF" >}}

- The Small Square (1/2 of the Square's size)

{{< img src="https://lh3.googleusercontent.com/d/18nwsQZlttUGT5bMTQLbK0ur2XTB4H3ma" >}}

- The Small Slab (1/2 of the Slab's size)

{{< img src="https://lh3.googleusercontent.com/d/1KSZFzbDUP7ILZOGD6wLU2TmMD0bKn5dU" >}}

## Outline Blocks
**Outline Blocks** __act identically to blocks, but work better as a blank canvas for decoration__, giving the player a clearer idea of what is and isn't decorational.

{{< img src="https://lh3.googleusercontent.com/d/1H3gKKFafLstmH6L02riW9taO6OErHCWB" >}}

They have many more variations than just a simple box, having a single line (which has a different hitbox), an L shape, the pillar blocks, and a corner piece. There are also three different thicknesses.

## Other Blocks
**Breakable Blocks** get __destroyed when approached from the side or the bottom__. In Platformer mode, hitting it from the bottom bounces the player off of the block as if it has an H block on it, but in Classic mode they go through it.

{{< img src="https://lh3.googleusercontent.com/d/10zqkGBANs1QPmRqwsj3tsAEaapxeBrjA" >}}

**Vanishing Blocks** __slowly fade away, reaching a near-zero opacity as they get closer to the player__. This effect then reverses as it moves away. This is purely visual, and does not have an effect on how the player interacts with it. This opacity can change depending on whether âNoGlowâ is ticked in the Edit Group's Extra menu. For the examples below, NoGlow is disabled.

{{< img src="https://lh3.googleusercontent.com/d/1w9IbDE6aAnn0fRfA6GSLfY7wdB9CmGuh" >}}

Some blocks also have different, more unconventional hitboxes.

{{< img src="https://lh3.googleusercontent.com/d/1uWjAOwpSlFOST-chf8-lkqnsrjAe_Czb" >}}

# 2: Slopes

**Slopes** are located in the second and third tab of the editor. Just like blocks, they can be stood on and kill you if hit from the bottom or a side. Unlike blocks, they have a triangular hitbox which lets you slide on the angled part.

{{< img src="https://lh3.googleusercontent.com/d/1OARHTUlHRvLczPUyfM7eojzYQSqCVbIB" >}}

Slopes, like blocks and all other solids, cannot be rotated. However, you can warp them to change their angle.

{{< img src="https://lh3.googleusercontent.com/d/1rTsHqQ8wOYsNCzb8FnsWTE4EP-WBmnRA" >}}

There are only two types of slopes:

- The 45° Slope:

{{< img src="https://lh3.googleusercontent.com/d/1Ka0KDffi2bsT6GuvKX87Ifubn8IQAGyh" >}}

- The 22.5° Slope:

{{< img src="https://lh3.googleusercontent.com/d/1CsVSjR5eVtOaTrv8okL_wYRv4UEe1N_5" >}}

## Outline Slopes
Slopes also have outlines, although they have no thickness variations except on the corner pieces. They are still just as useful for decoration.

{{< img src="https://lh3.googleusercontent.com/d/1Pb3gF6igYwPxrZiVizW41CIcq9Y97dmE" >}}

## Vanishing Slopes
Vanishing Slopes do the exact same thing as Vanishing Blocks.

{{< img src="https://lh3.googleusercontent.com/d/1-sJIqRYn3FgZYyExyfi5SapWujLLwdcw" >}}

{{< img src="https://lh3.googleusercontent.com/d/1x55XnecNDXjPp6HSMy_frBsxX5qoAqTV" >}}

{{< img src="https://lh3.googleusercontent.com/d/12p8IoQuUYwne3OxWMQ7B8zwXkA50u1qV" >}}

# 3: Spikes

**Spikes** are located in the fourth tab of the editor. They are hazards, __killing the player upon contact__. Their hitbox is rectangular, being elevated around ~Â¼ of the spike's height.

{{< img src="https://lh3.googleusercontent.com/d/1dRr20ezZcc9PiaycVrsoROVQShLtQNff" >}}

Unlike blocks and slopes, spikes can be rotated, as it is not a solid; however, the slope spikes are an exception to this since they have a solid slope hitbox on them.

{{< img src="https://lh3.googleusercontent.com/d/1GQklMwnxta7zwMYDBolmG3OMhYUxcmSW" >}}

There are four types of spikes:

- The Spike:

{{< img src="https://lh3.googleusercontent.com/d/1WNedAQSQxXT69916ADgDxZsjOVo22NRk" >}}

- The Flat Spike:

{{< img src="https://lh3.googleusercontent.com/d/1YHmM9vP1xKVck7lUXf7xqloI2cmA3v6l" >}}

- The Small Spike (~2/3 of the Spike):

{{< img src="https://lh3.googleusercontent.com/d/1WCEIPJKGO6l7cs8MLt5ED69-iZ-Iu14q" >}}

- The Mini Spike (~1/2 of the Spike):

{{< img src="https://lh3.googleusercontent.com/d/1r5ETG8yDAp-GWWXaF32M8mi16p5mTQiB" >}}

Unlike solids, spikes do not have outline objects. They can be recreated using the color spikes, but they are not a default object in the editor.
## Ground Spikes
**Ground Spikes** are __spikes made to be put on the ground__. They are often used to catch the player, preventing skips while looking more natural in groups. They are more useful for decoration, but are still good to know about. Their hitboxes vary, and don't follow the same conventions that traditional spikes do.

{{< img src="https://lh3.googleusercontent.com/d/1G-mNV9530BGGzddOFwEMrNlRW7ZJgHl-" >}}

## Other Spikes
Vanishing Spikes act the same way as any other Vanishing object.

{{< img src="https://lh3.googleusercontent.com/d/1KSaYn20I6JbNQU9jb0aueA0aZWnACnsy" >}}

Some of the spikes have slightly unconventional hitboxes.

{{< img src="https://lh3.googleusercontent.com/d/1WWrg3ygHMKnU9G3Vny7wAkHtSpAVI5lt" >}}

# 4: Saws

**Saws** are located in the twelfth tab of the editor. __Just like spikes, saws are hazards and kill the player upon contact. Instead of the spike's rectangular hitbox, the saws' hitboxes have a circular shape__, usually extending (approximately) until the teeth.

{{< img src="https://lh3.googleusercontent.com/d/1RYtcqJ_0fEQrRDG7vVIyAiPpkD3pIywL" >}}

Saws can also be rotated, just like spikes, although it isn't as noticeable since they spin anyway. However, you can customize the rotation using {{< img src="images/GDEmotes/Buttons/EditSpecial.png" class="emote">}} Edit Special.

{{< img src="https://lh3.googleusercontent.com/d/1CYhJOv5Y2IOellQmptCprT_ouQUMw2rO" >}}

There are three types of saws:

- The Big Saw:

{{< img src="https://lh3.googleusercontent.com/d/16b--3-kAZjBDwe3_SEDQ9vmvUB9QfLa9" >}}

- The Medium Saw:

{{< img src="https://lh3.googleusercontent.com/d/1QqVfq458qOPQMfMiKZmUysdtbhJM1uFR" >}}

- The Small Saw:

{{< img src="https://lh3.googleusercontent.com/d/1Yug_iyuFk6IBDMOvyhO5rKnBX4Et-PYI" >}}

## Variations
Saws have a lot of variations - 8 of them, to be exact. These all share different hitboxes between each other. These differences need to be kept in mind when making gameplay (especially with the last one), since choosing the right saw can make a positive or negative impact on the gameplay.

{{< img src="https://lh3.googleusercontent.com/d/1yQa73pc1j-14LKiw5W66f0RwtOqa5iOb" >}}

Vanishing Saws also exist, having a blue button instead of a grey one. They do exactly what all other vanishing objects do - slowly fade away as the player approaches.

{{< img src="https://lh3.googleusercontent.com/d/1etQnWDATTFPtnBAL0WC8t9OtQP0Y7v6m" >}}

{{< img src="https://lh3.googleusercontent.com/d/1D4XKMDwK6T9wvo6DWRvlHnpFwrglW5_q" >}}

These objects are a hybrid between saws and spikes. Despite being in the saws tab, looking like saws, and having the same circular hitboxes as them, they act more like spikes, due to having no automatic rotation.

{{< img src="https://lh3.googleusercontent.com/d/1qgqSXPfgYIu0k-DF3SL2O8KuKiadHdQE" >}}

These saws have incredibly unconventional hitboxes, so use them wisely.

{{< img src="https://lh3.googleusercontent.com/d/1RYZdPrPUSDVJSv8u-OV9Zu_Fp9aByveg" >}}

## Rotation
You can select a saw and click on {{< img src="images/GDEmotes/Buttons/EditSpecial.png" class="emote" >}} Edit Special to give them a custom rotation. There are three options: the default rotation, which randomly fluctuates between a set of rotation speeds; the custom rotation which lets you input a specific rotation speed measured in degrees per second; and the disable rotation, which ceases all rotation on the block.

{{< img src="https://lh3.googleusercontent.com/d/1qYYVLJlhcQVqDTTYzUatCLoAg94QIIxp" >}}

# 5: Object Options

In addition to these objects, you can modify their properties to your liking. To do this, select an object, click on {{< img src="images/GDEmotes/Buttons/EditGroup.png" class="emote">}} Edit Group, and click on the Extra button to the right.

- **IceBlock** __gives blocks in Platformer an ice-like property__, making acceleration much slower when the player attempts to do so on the block's surface.

{{< img src="https://lh3.googleusercontent.com/d/1TSlMDTVPWB45myZm7rJuWZSeAWMU8_RE" >}}

{{< youtube 05Z6yPc7ZSM >}} 

- **NoTouch** __removes the object's hitbox completely__, making it unable to be interacted with by the player.

{{< img src="https://lh3.googleusercontent.com/d/1yhkBYgZnFhYFg8LuXc-Gc3KesqWFcMzK" >}}

{{< youtube -5S0WJjHYXE >}} 

- **GripSlope** __allows the player to stand still on a 45° slope__, instead of sliding down it in Platformer.

{{< img src="https://lh3.googleusercontent.com/d/1gob0D7oJ2paa3UpK-rDPjKTWVq9zZ5kx" >}}

{{< youtube Tfcru5SFdKE >}} 

- **Passable** __allows the player to pass through a block from the bottom, but still allows the players to stand on the block__. You can move onto the top from below too.

{{< img src="https://lh3.googleusercontent.com/d/1dkR6fbq-2UD0aoEefUUPkQ2SNyqgz2qr" >}}

{{< youtube PngcEN0fDRM >}} 

- **Hide** __completely removes the visual appearance of an object__. You can press `F6` in the editor to show these hidden objects if needed.

{{< img src="https://lh3.googleusercontent.com/d/1XK-4cyA_wFJ86juqLeyKEP0KQYsEV5FI" >}}

{{< youtube yoJi1rqKi5Q >}} 

- **NonStickX/NonStickY** __stops the player from sticking to moving blocks in Platformer__.

{{< img src="https://lh3.googleusercontent.com/d/1nIugS0VRHjjPBgmEcpYg03gItaBhYmHn" >}}

{{< youtube PSOZ5TvpH5Y >}} 

- **DontBoostX/DontBoostY** __stops the player from being boosted by moving blocks__.

{{< img src="https://lh3.googleusercontent.com/d/1LiJSLoQaeBfmp--O_VtVCXKKAsemGwNR" >}}

{{< youtube RSaNW87d0iQ >}} 

- **ExtraSticky** __keeps the player stuck onto blocks moving downwards at higher speeds__. This has a limit, however: moving too fast can still cause the player to stop sticking to the block.

{{< img src="https://lh3.googleusercontent.com/d/1ixiYaIj0SvYVpJtzr6QFW3ff63O0plfc" >}}

{{< youtube IBtR39cuu9Q >}} 

- **ScaleStick** __allows the player to move along the X axis of a block relative to its center when it is scaled__.

{{< img src="https://lh3.googleusercontent.com/d/1NHYm2FqTxGyGykqTHyjx2E3Ulrk3tjir" >}}

{{< youtube OBZ90fm9_D8 >}} 

- **Extended Collision** __fixes the hitboxes of objects with a scale above 6__.

{{< img src="https://lh3.googleusercontent.com/d/1PV8LK4QG3ToTXgWZVFIoXmvRopaIkMXH" >}}

{{< youtube -7X9YNVWyb0 >}} 
