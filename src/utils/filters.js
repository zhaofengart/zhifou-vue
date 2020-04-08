// 转义
export function unescape (html) {
  return html.replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'')
}

export function escapeStringHTML (str) {
  str = str.replace(/&lt;/g, '<')
  str = str.replace(/&gt;/g, '>')
  return str
}
