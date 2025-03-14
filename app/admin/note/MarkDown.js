const formatHTML = (text) => {
    text = text.replace(/^###\s*(.*)$/gm, "<h2>$1</h2>");
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // text = text.replace(/`(.*?)`/g, "<Badge>$1</Badge>");
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