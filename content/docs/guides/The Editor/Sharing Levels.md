---
title: "Sharing Levels"
weight: 106
date: 2023-03-20T00:00:00.000Z
authors:
  - "sparktwee"
contributors:
  - "komatic5"
  - "sparktwee"
  - "lagwerious"
draft: false
seo:
  title: "How to Upload a Geometry Dash Level"
  description: "An explanation of every feature you can use when uploading a GD level."
  canonical: ""
  noindex: false
---

{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}
- When you’re on the main level page, you can use the rightmost button to upload your level.
- The level name and description can be set on this main page. Once you complete this, you must verify your level and all its coins.
- You can set your level so everyone can view it, or only people with the level ID. You can also request a difficulty for the level.
- Levels that were copied from other levels have a C tag, while high-object levels have a red Plus tag.

{{< /callout >}}

** **

# 1: The Main Page

When you first create a new level, or exit from the editor, you will be directed to this page.

Notice the three big buttons at the center. From left to right, the tools button leads you to the editor, the yellow play button puts you in the level, and the red curvy arrow button is the upload button that will allow you to share your level.

{{< img src="https://lh3.googleusercontent.com/d/1P3Ljtx9_CrtxT6amGPs8IeJK8KW0G3JI" >}}

# 2: Level Name and Description

Above the three big buttons are the Level Name and Description.

Level Name is your level’s title. The Description allows you to explain your level with more detail.

Leaving the level name empty will give you its default name "Unnamed". For Descriptions, leaving them empty will give you (No description provided)

Once that is settled, delete any start pos triggers, and verify your level. If you have user coins, you’ll need to collect them too before uploading your level.

{{< img src="https://lh3.googleusercontent.com/d/1BGtQTyejX5or7TQkoWUaOUqz5rb0mrem" >}}

# 3: Public vs Unlisted

Once you press the red upload button, it will lead you to another checkbox to confirm a few things: Request Stars, Allow Copy, Level Password, and Unlisted.

You can request stars to help players know what difficulty to expect.

{{< img src="https://lh3.googleusercontent.com/d/1AUzk1zx1pgzYIe_wUHqa4xddEYnuZj7V" >}}

On the top right, you can see a gear which leads you to the other three elements.

If you choose to allow copy, the uploaded level will have a folder button allowing players to check the level in the editor.

Ticking Requires Password will lock the level by a passcode-protected keypad. If players can type the right code in the keypad, they can copy the level. (Though from personal experience, I have bypassed some of them by completing practice mode.)

If you choose to upload your level as “Unlisted”, you’ll only allow your GD Friends to play the level, as long as you also give them the level ID. This is how creators can collab with each other and merge their parts.

{{< img src="https://lh3.googleusercontent.com/d/19QA-zcQbgkWj1BClzlP_CLxgQq0tLda5" >}}

If you successfully upload your level, you will receive the official level ID that you can use to find it in the search bar (before that, the ID would show “NA”). Public levels will also be accessible through https://gdbrowser.com, while unlisted levels are not.

# 4: Copied Level and Red Plus stickers

You might have noticed that some levels have the {{< img src="images/GDEmotes/Icons/CopiedLevel.png" class="emote">}} Copied Level and {{< img src="images/GDEmotes/Icons/RedPlus.png" class="emote">}} Red Plus sticker placed on the right of the level name.
You might have noticed that some levels have the {{< img src="images/GDEmotes/Icons/CopiedLevel.png" class="emote">}} and {{< img src="images/GDEmotes/Icons/RedPlus.png" class="emote">}} sticker placed on the right of the level name.

If a level has a {{< img src="images/GDEmotes/Icons/CopiedLevel.png" class="emote">}} sticker, it means it was originally copied from an existing level in the server. The original ID will also be displayed alongside the new copied ID. Many would assume that a level with {{< img src="images/GDEmotes/Icons/CopiedLevel.png" class="emote">}} means it is stolen. And you’d be correct sometimes, but other times it's used for collabs. In order to merge collab parts together, creators will need to share the level as unlisted and copying these parts will give you that {{< img src="images/GDEmotes/Icons/CopiedLevel.png" class="emote">}} sticker too.

The {{< img src="images/GDEmotes/Icons/RedPlus.png" class="emote">}} sticker deals with Object count. If your level has more than 40,000 objects, this sticker will show up. Many levels have very high object counts for a variety of reasons. They range from poor optimization to visual details to effects.

# 5: Misc. Features

{{< img src="images/GDEmotes/Icons/x.png" class="emote">}} The red X deletes your level from existence. This cannot be undone.

The {{< img src="images/GDEmotes/Buttons/HelpButton.png" class="emote">}} button directs you to the outdated GD Guide that inspired GDCS to exist and surpass it.

{{< img src="images/GDEmotes/Buttons/Files.png" class="emote">}} The File button lets you duplicate your level. This is perfect for backups.
{{< img src="images/GDEmotes/Buttons/MoveToTop.png" class="emote">}} The white up arrow places the level you're making to the top of your created levels list.

On the left, you'll see a lone folder staying away from the crowd on the right. If you want to categorize your levels and organize them into previews, collab parts, fully uploaded levels, experiments, or whatever category you wish, this folder will be your best friend.

If you decide to update your level and make some changes, the level will become unverified again, and your version number at the bottom will go up by 1.

If you create a new level with a name that already exists in your list of levels, a revision label will appear showing “Rev 1”.

Here’s another wacky thing about descriptions: you can add color to the text by putting them in between the symbols `<c>` and `</c>`. Depending on the color you want, the `<c>` string can be replaced with the following symbols:

- `<cr>` for <span style="color: #FF0000"> Red (#FF0000) </span>
- `<cb>` for <span style="color: #0000FF">Blue (#0000FF) </span>
- `<cg>` for <span style="color: #00FF00">Green (#00FF00)</span>
- `<cj>` for <span style="color: #00FFFF">Cyan (#00FFFF)</span>
- `<co>` for <span style="color: #FF7F00">Orange (#FF7F00)</span>
- `<cp>` for <span style="color: #CC8899">Purple (#CC8899)</span>

{{< img src="https://lh3.googleusercontent.com/d/1RsYDyh7MMiL8N_0XrafLP-8Dmoy_Y_9o" >}}

For example, the text `<cr>Hello level!</c>` will output <span style="color: #FF0000">Hello level!</span>.
