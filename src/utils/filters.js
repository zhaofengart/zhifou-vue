// import MarkdownIt from 'markdown-it'
var hljs = require('highlight.js') // https://highlightjs.org/

// Actual default values
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return '' // use external default escaping
  }
})

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

export function mdToHtml (markdownContent) {
  // var md = new MarkdownIt()

  return md.render(markdownContent)
}
