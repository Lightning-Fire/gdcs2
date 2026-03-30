CMS.registerEditorComponent({
  id: "youtube",
  label: "YouTube",
  fields: [
    { name: "id", label: "Video ID", widget: "string" },
    { name: "start", label: "Start (seconds)", widget: "number", required: false }
  ],

  pattern: /{{<\s*youtube\s+([^>]+)\s*>}}/,

  fromBlock(match) {
    const attrs = match[1].trim();

    const idAttrMatch = attrs.match(/id\s*=\s*"?([^\s"]+)"?/);
    const startAttrMatch = attrs.match(/start\s*=\s*"?(\d+)"?/);

    let id = "";
    let start = "";

    if (idAttrMatch) {
      // case: {{< youtube id="XYZ" start="ABC" >}}
      id = idAttrMatch[1];
      start = startAttrMatch ? startAttrMatch[1] : "";
    } else {
      // case: {{< youtube XYZ ABC >}}
      const parts = attrs.split(/\s+/);
      id = parts[0] || "";
      start = parts[1] || "";
    }

    return { id, start };
  },

  toBlock(data) {
    const id = data.id?.trim();
    const start = data.start?.toString().trim();

    if (start) {
      return `{{< youtube id="${id}" start="${start}" >}}`;
    }
    return `{{< youtube ${id} >}}`;
  },
});
