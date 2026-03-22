---
title: "Formatting"
weight: 500
authors:
  - "komatic5"
  - "chuckolate"
contributors:
  - "komatic5"
  - "chuckolate"
draft: false
---

Here's how to format pages for the website.

An example of a fully formatted page is this: https://www.gdcreatorschool.com/docs/guides/the-editor/placing-objects/. It goes with this link in the repository: https://github.com/komatic5/gdcs2/blob/main/content/docs/guides/The%20Editor/Placing%20Objects.md

# 1: Basics

Most markdown formatting is similar to Discord formatting. For instance, all the typical formatting tools work on Markdown.
- **Bold**: Surround your text in **double asterisks**.
- *Italics*: Surround your text in *single asterisks*.
- `Code Blocks`: Surround your text in `backticks`.
> - Quotes: Place an angle bracket (>) before your text, along with a space.
- [Embed Links](https://www.youtube.com/watch?v=dQw4w9WgXcQ): These come in the form `[text you want](link you want)`.
- You can also use embed links for page references. For instance, an embed link with the destination `/docs/guides/the-editor/object-types` will link users to the "Object Types" guide in The Editor. Note that this uses the folder and file names on the website, and not in Github.

Headers: Place a hashtag (#) before your text, along with a space.

<h1> Large Headers use one hashtag (# text) - use these for main sections (e.g., "1: Navigation") </h1>
<h2> Medium Headers use two hashtags (## text) - use these for subsections (e.g., "Tilesets") </h2>
<h3> Small Headers use three hashtags (### text) - these are rare </h3>

Note that underlining does not work in Markdown.

# 2: Shortcodes

I mentioned shortcodes a few times already, but here's a full section on them. They're basically just reusable bits of formatting on the website for things that are more complex to make otherwise. Since they're standardized, it's much easier to use them compared to working from scratch.

## Images

We typically use Google Drive for guide images. In fact, you can find the full list of images [here](https://drive.google.com/drive/folders/1K5_PvefU8SsakcN2kDn-xiTEA-Pbl5Np). However, Google Drive is famously fussy when it comes to linking images from it.

To ensure your images show up properly and don't error out when building, follow these steps:
1. Find the image you want to show. Right-click on it, press "Share", and click "Copy link".
2. You should have a link in the form `https://drive.google.com/file/d/1ThDEWCIk2bmPvnOqptCKacg5eLBrGyth/view?usp=drive_link`. What you want from this link is the File ID. This can be found between the /file/d/ part, and the /view? part. For this example, the **file ID** is 1ThDEWCIk2bmPvnOqptCKacg5eLBrGyth.
3. Create a new link with the form `https://lh3.googleusercontent.com/d/{FILE ID}`. For this example, the link would be `https://lh3.googleusercontent.com/d/1ThDEWCIk2bmPvnOqptCKacg5eLBrGyth`.
4. Insert your new link into an `{{</* img src="{LINK}" */>}}` shortcode. For this example, the shortcode would be `{{</* img src="https://lh3.googleusercontent.com/d/1ThDEWCIk2bmPvnOqptCKacg5eLBrGyth" */>}}`.

## Emojis

Some guides make use of certain emojis, such as :Move: triggers and :EditSpecial: editor buttons.

You can find a list of all emojis here. If you need to add more emojis, this is also where you add them.

When inserting an emoji, use the `{{</* img */>}}` shortcode. For instance, `{{</* img src="images/GDEmotes/Icons/Clock.png" class="emote" */>}}` displays as the {{< img src="images/GDEmotes/Icons/Clock.png" class="emote" >}} emoji. Use the `class="emote"` part to ensure emotes show as the right size.

You can find multiple examples of emojis in the [github page](https://github.com/komatic5/gdcs2/blob/main/content/docs/guides/The%20Editor/Placing%20Objects.md) for this example.

## Videos

We typically use YouTube for guide videos. The full playlist of [videos](https://www.youtube.com/playlist?list=PLZ5NwCCPN0OCMA2QuNYNP1VEMf-aUiPUX) can be found here. Fortunately, embedding YouTube links is much simpler than Google Drive links.

Each YouTube video has a **Video** ID which can be found after the `youtu.be/` or `youtube.com/watch/` parts. It's always 11 characters long, and has letters, numbers, `-`, and `_` in it. For instance, in the link `https://youtu.be/v9PjLdzX3Vw?si=5JJm_mzjYPFupCHC`, the video ID is `v9PjLdzX3Vw`.
Copy ONLY the video ID, and place it in a `{{</* youtube */>}}` shortcode. For this example, the shortcode will be `{{</* youtube v9PjLdzX3Vw */>}}`. (Pasting the full link will break the shortcode, so don't do it.)
You can control what parts of the video are shown. For instance, the shortcode `{{</* youtube id=v9PjLdzX3Vw start=1 end=2 */>}}` will play the video starting at second 1, and ending at second 2.

You might've noticed that the Google Drive linked above contains videos, and that the website references these videos. **This needs to be fixed**, and you can help by replacing these Google Drive videos with ones linked on YouTube.
Each video in the drive has the same name as a video in the playlist. For instance, "1_Zoom_Pan" in the Placing Objects guide is on YouTube as "1_Zoom_Pan (Placing Objects, The Editor)". This should help make it clear which videos to replace Google Drive links with.

## Audio

## Callout

One type of shortcode is a callout. This highlights an area of the site in blue, such as in this example. Guide summaries / TLDRs, such as the one shown below, should use callouts to separate them from the rest of the page.

(img)

Here is the shortcode used for the callout above.

```
{{</* callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" */>}}

    Click and drag in the editor to move around.
    Use the Build tab to place objects, the Edit tab to edit objects, and the Delete tab to remove them.

{{</* /callout */>}}
```

A few things to note:
- Callouts come in different types, known as "contexts". The example above uses the note context, but others exist, such as **tip**, **caution**, and **danger**. A full list of callout types can be found [here](https://getdoks.org/docs/basics/shortcodes/).
- There are two shortcodes here: the `{{</* callout */>}}` one starts the callout, and the `{{</* /callout */>}}` one ends it. You must include both for a callout, otherwise the page will not work properly.


# 3: Frontmatter

## Basic Parameters

## Contributors

## SEO

It's important to give pages a title and description. This ensures that more people will see your work.
To do this, modify the frontmatter for your page. Every page starts with a frontmatter which is inside these marked --- triple dash areas.

Here's the frontmatter for the page used above:

```
---
title: Placing Objects
description: "A basic guide to the most important features in the GD Editor."
weight: 101
draft: false

seo:
  title: "How to Use the Geometry Dash Editor" # custom title (optional)
  description: "The basics of how to use Geometry Dash's level editor." # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---
```

The `title` specified in the frontmatter is what shows on the page, while the title and description in the SEO section are what show in embeds.

(2 imgs)

The `weight` of the page determines its order: lower weight means a page shows up first. For example, Placing Objects has a weight of 101, Editing Objects has a weight of 102, and Organizing Objects has a weight of 103. (The "Next" and "Previous" buttons also use page weight to link between pages.)

(img)

If you want to hide your page, set the draft setting to "true". It will be visible on Github but users won't see it when viewing the site