// Rich content renderer for pageContent.additionalContent
//
// The dashboard editor outputs HTML but has no table button, so when an editor
// types a Markdown pipe-table each line is stored as a literal <p>| a | b |</p>.
// This helper detects runs of those paragraphs (and plain newline markdown
// tables too) and converts them into real HTML <table> markup, leaving all
// other HTML untouched. The result is safe to pass to dangerouslySetInnerHTML.

// Split a single "| a | b | c |" row into trimmed cells.
const parseRow = (row) =>
  row
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());

// A markdown separator row looks like |---|:--:|---| (dashes, colons, pipes).
const isSeparatorRow = (row) =>
  /-/.test(row) && /^\s*\|?[\s:|-]+\|?\s*$/.test(row);

// Build an HTML table from an array of markdown row strings.
const buildTable = (rows) => {
  if (rows.length < 2 || !isSeparatorRow(rows[1])) return null;

  const header = parseRow(rows[0]);
  const bodyRows = rows.slice(2).filter((r) => r.trim() !== "");

  let html = '<table class="content-table"><thead><tr>';
  html += header.map((cell) => `<th>${cell}</th>`).join("");
  html += "</tr></thead><tbody>";
  for (const row of bodyRows) {
    const cells = parseRow(row);
    html += "<tr>" + cells.map((cell) => `<td>${cell}</td>`).join("") + "</tr>";
  }
  html += "</tbody></table>";
  return html;
};

export const renderRichContent = (html) => {
  if (!html || typeof html !== "string") return html;

  let output = html;

  // Case 1: editor stored each table line inside its own <p> tag.
  output = output.replace(
    /(?:\s*<p>\s*\|[^\n]*?\|\s*<\/p>)+/gi,
    (block) => {
      const rows = [...block.matchAll(/<p>\s*(\|[^\n]*?\|)\s*<\/p>/gi)].map(
        (m) => m[1]
      );
      return buildTable(rows) || block;
    }
  );

  // Case 2: plain newline-separated markdown table (not wrapped in <p>).
  output = output.replace(
    /(?:^|\n)((?:\s*\|[^\n]*\|\s*(?:\n|$))+)/g,
    (match, tableBlock) => {
      const rows = tableBlock
        .split("\n")
        .map((r) => r.trim())
        .filter((r) => r.startsWith("|"));
      const table = buildTable(rows);
      return table ? "\n" + table : match;
    }
  );

  return output;
};
