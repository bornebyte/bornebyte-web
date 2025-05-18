function wrapListItemsWithUl(text) {
  // Check if there are any <li> tags
  if (text.includes("<li>")) {
    // Match the entire block of consecutive <li>...</li> lines
    text = text.replace(/((?:\s*<li>[\s\S]*?<\/li>\s*)+)/, "<ul>$1</ul>");
  }
  return text;
}

const formatHTML = (text) => {
    text = text.replace(/^###\s*(.*)$/gm, "<h2>$1</h2>");
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
    text = text.replace(/^\*\s?(.*)$/gm, "<li>$1</li>");
    let result = wrapListItemsWithUl(text);
    text = text
        .split("\n\n")
        .map((para) => `<p>${para.trim()}</p><br />`)
        .join("");
    return text;
}

const MarkDown = ({ note }) => {
    const formattedText = formatHTML(note.body);
    return (
        <div className="py-4">
            <div dangerouslySetInnerHTML={{ __html: formattedText }} />
        </div>
    );
}

export default MarkDown