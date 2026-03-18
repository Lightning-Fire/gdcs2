---
title: "Using Channels"
weight: 1180
date: 2024-01-15T00:00:00.000Z
authors:
  - "illusion2"
contributors:
  - "illusion2"
  - "vexilo5"
draft: false
seo:
  title: "How to Use Channels in Geometry Dash"
  description: "Trigger Order, Trigger Channels, and Color Channels are often misunderstood. This guide explains what they do and how to use them properly."
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- Color channels are important devices to color objects. You can edit your object’s colors by clicking on Edit Object.
- Trigger Order is an important mechanic used to make your gameplay go in order when working with arrow triggers, speed changes, and more.
- Trigger Channels are used in order to make sure your triggers activate correctly if you’re using arrow triggers.

{{< /callout >}}

** **

# 1: Color Channels

A **color channel** is a __unique identifier that can be assigned a color__, which can then be assigned to objects to show that specific color. Color channels are the basis for triggers such as color triggers and pulse triggers.

One way to edit your color channels is by clicking on the blue gear icon in the top right corner of the editor. The background (BG), ground (G/G2), ground line (Line), middleground (MG/MG2), default objects (Obj), and 3D lines (3DL) all have specific color channels assigned to them. Obj and 3DL are not in this particular menu, but can be changed using triggers.

{{< img src="https://lh3.googleusercontent.com/d/1depe43hc-oSOm62RvqvNbyEd29fc2rbp" >}}

If you click on a color channel, you will see a menu for changing its color, as well as other settings about the channel.

{{< img src="https://lh3.googleusercontent.com/d/1XEJuWFxbmVdoWVGICc5z0wTyvpRG4yRo" >}}

Here is a list of all the features and their uses:

- **Color wheel**: The outer ring affects the hue and the inner circle affects the saturation and value/brightness. You can use the color wheel by moving the small black circles inside of it.
- **RGB and HEX values**: These enable you to precisely replicate colors. Every color on a computer has a certain amount of red, green, and blue. The RGB values range from 0 to 255, but can also be represented as hexadecimal from 00 to FF. Putting each hexadecimal value together gives you the entire HEX code (think of it like RR GG BB).
- **Color compare**: The two boxes on the top left show you the before and after of your color, so you can compare them while choosing your color.
- **Copy & Paste**: These buttons copy the current color on the color wheel to your clipboard and pastes the most recent color you copied. You can use this to transfer colors between channels without needing to remember any RGB or HEX values. Keep in mind that *none of the other options get copied* between channels, only the color itself.
- **Opacity**: The opacity slider controls the transparency of the color. High opacity (closer to 1) will make the color more opaque, whereas low opacity (closer to 0) will make the color more transparent.
- **Player Color 1 & Player Color 2**: The checkboxes in the bottom left will make the color channel copy each of the two colors of a player’s icon. This means that a player with different colored icons will see their respective colors in that channel. The color wheel will not change when the box is checked and the color will only appear in the editor/level.

- **Copy Color**: Checking this box will bring up a new UI replacing the color wheel and RGB/HEX values.
- **Channel ID**: The color channel will now __continuously copy the color from another channel__ of the selected ID. You can manually adjust the opacity of your new color, or you can check the “Copy Opacity” box to copy the opacity of that channel as well.
- **Hue**: Shifts the channel’s color by a certain amount, similar to the outer ring of the color wheel. The slider rangers from -180 to 180, although the values of -180 and 180 result in the same hue shift.
- **Saturation**: Determines the intensity or vibrancy of a color; the lower the saturation, the more the color turns gray.
- **Brightness**: Shifts the channel’s color toward white or black to brighten or darken the color respectively.

{{< callout context="note" title="Note" icon="outline/clipboard-text" >}}
The checkboxes next to the saturation and brightness sliders let you use the full range of colors, instead of simply multiplying the colors. For example, while x0.70 and -0.30 do the exact same thing, using x2.00 on white will do nothing while using +1.00 saturation will make it fully saturated.
{{< /callout >}}

{{< img src="https://lh3.googleusercontent.com/d/1dVSXl63CbaEKthC64jcwLIPKXXCofVVK" >}}

The **blending** option will cause objects on that color channel to __add their color on top of any other color behind the object__. For example, a red object on top of a blue object both with blending enabled will cause the overlap to turn magenta. This is also known as **additive** blending because the HEX codes of the two colors are added together.

Blending colors are not visible when on top of white objects, as white is the “max” color value that can’t go any higher. The opposite goes for black objects; blending colors on top of black look identical to their original color because adding to black is the same as adding 0. This also means blending objects with a darker hue are more transparent since, the closer the color is to 0, the less color is being added.

However, black blending can still be a very useful color channel because pulse triggers are unable to affect opacity, so black blending can act as transparent until pulsed.

{{< img src="https://lh3.googleusercontent.com/d/1VZry1K6A_Dr3eC9YvGbXeO4asST58wS-" >}}

To assign an object to a color channel, select the object and click :EditObject:. The following menu will open.

{{< img src="https://lh3.googleusercontent.com/d/1v7JcZCHilUD95ktQTT8l6Zk7O354d8vj" >}}

Once again, here is a list of all the features.

- **Base & Detail**: These options only appear within objects where you can change 2 colors; not all objects have a Base or Detail. If an object has both, swap between these tabs to change the color channels of different parts of the object. You can use the :Settings: button to choose if your object is treated as a Base or Detail color when using :PasteState: or :RGB:.
- **Copy & Paste**: These buttons copy the color channel(s) and the HSV settings of the object, allowing you to paste it onto other objects.
- **Color Channels**: Represented by the table of numbers, these let you select any color channel to give the object. If you click on channel 10, a counter appears on the right where you can select any channel above 10.
- **P-Col 1 & P-Col 2**: Player color 1 and player color 2 respectively; however, they both have blending enabled by default so it would be more accurate to make your own color channel with those options.
- **Light BG**: This copies the background color, except lighter and with blending enabled, but the color is tinted to player color 1 as the background gets darker.
- **Default**: This differs between objects, but usually, it’s a different color channel that the object defaults to.
- **HSV**: Another menu will appear with sliders for hue, saturation, and brightness, similar to the menu that appears when you check “Copy Color.” You can move these sliders to adjust the color of only that object, *not* the color channel it uses.
- **Next Free**: Automatically selects the next unused color channel.
- **Browse**: Opens a separate menu to scroll through every single numbered color channel.

When selecting an object in the editor, there is a color button in the cluster of colored buttons on the right of the screen (it looks exactly like the color trigger). Clicking it will open a small menu to the left, where you can __change a selected color channel while looking at the editor__. This is useful when you need constant adjustments to find the perfect color, but keep in mind this affects the *whole color channel* and not just the selected object.

{{< img src="https://lh3.googleusercontent.com/d/1MqJCpcuHiYUryHhhOU_9yxxdTrifhMv2" >}}

While active, clicking that same button again turns it into an HSV button which changes the side menu into the HSV sliders, which now only affect the *selected object* rather than the whole channel.

# 2: Trigger Channels

**Trigger channels** are a new 2.2 feature that __allow for the correct timing of trigger activations when arrow triggers are involved__. In order to understand trigger channels, we first need to go over trigger order.
## Trigger Order

**Trigger order** __allows for gameplay objects to activate in the correct order__. These objects include anything that affects the green music line when you play the song in the editor, such as arrow triggers and speed changes. It’s important to use trigger order rather than applying “Touch Trigger” to everything because the triggers no longer rely on where the player touches the trigger’s hitbox, which might make your gameplay out of sync.

When selecting a trigger and clicking on :EditGroup:, a menu appears. We only need to pay attention to the two counters below the Z layer buttons.

{{< img src="https://lh3.googleusercontent.com/d/1RZ3ho1phswAgN7KSBZYFjIIuBpS4XTZ8" >}}

The “ORD” counter refers to the trigger order. The number in the counter dictates the order that object will activate in. For example, an arrow trigger with order 1 will go first, then 2, and lastly 3. However, your numbers don’t have to go strictly one after another; you could use orders 1, 4, 5, and 8 and it would still work, provided that the numbers keep increasing.

Keep in mind that reversed orbs and teleport orbs all affect the music line but are heavily player-dependent, which might desync your gameplay despite being ordered.

{{< youtube 0soHKShq800 >}}

{{< callout context="caution" title="Important" icon="outline/info-circle" >}}

Using trigger order on :ArrowTrigger: arrow triggers only works if you enable “Change Channel.” Select the arrow trigger, click :EditObject:, and check the corresponding box. We don’t know why you need to enable this, but the level will break otherwise.

{{< /callout >}}

{{< img src="https://lh3.googleusercontent.com/d/1g_eZCvV6P8ZfTyyalsQn2AM6VOJGYaDY" >}}

## Trigger Channels

Using the menu above in the :ArrowTrigger:, you can change the target channel of the level. The level constantly runs on a certain channel, and triggers will only be able to activate *if their channel matches the current channel*.

To change the level’s channel, open the menu of the arrow trigger, enable “Change Channel,” and select your channel using the counter that appears below.

You can set the channel of triggers with the “CH” counter in the :EditGroup: menu, next to the “ORD” counter. If you ever wonder why your triggers aren’t activating, check to make sure they’re on the correct channel. *Only arrow triggers can change the level’s channel*, not reverse triggers or reversed orbs.

{{< youtube OZnDpqJ8T0M >}}

{{< callout context="note" title="Note" icon="outline/clipboard-text" >}}

Note: Both orders and channels require the “EDP” or "Playtest" box checked in the :EditGroup: menu.

{{< /callout >}}

