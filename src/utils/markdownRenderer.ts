import {marked,Renderer } from 'marked';
import hljs from 'highlight.js';

// 创建一个自定义渲染器
const renderer = new marked.Renderer();

// 处理代码块的渲染，添加代码高亮
// renderer.code = ({ text, lang }) => {
//     let highlightedCode = code;
//
//     // 如果指定了语言类型，使用 highlight.js 高亮代码
//     if (lang) {
//         // 使用 highlight 方法高亮代码，不需要检查语言是否存在
//         highlightedCode = hljs.highlight(lang, code, true).value;
//     } else {
//         // 如果没有指定语言类型，则尝试自动高亮
//         highlightedCode = hljs.highlightAuto(code).value;
//     }
//     // 返回经过高亮处理的代码块
//     return `<pre><code class="hljs ${lang}">${highlightedCode}</code></pre>`;
// };
renderer.code = ({ text, lang }) => {
  console.log(text,lang)
  const validLang = hljs.getLanguage(lang) ? lang : 'plaintext';
  const highlighted = hljs.highlight(text, { language: validLang }).value;
    // 返回经过高亮处理的代码块
    return `<pre><code class="hljs ${lang}">${highlighted}</code></pre>`;
};
// renderer.heading = ({text, level}) => {
//     return `<h${level} class="my-heading">${text}</h${level}>`;
// };

// 设置 marked 使用自定义的渲染器
// marked.setOptions({
//     renderer: renderer,
//     gfm: true,  // 启用 GitHub 风格的 Markdown
//     breaks: true,  // 支持换行
//     smartLists: true,  // 优化列表
//     smartypants: true,  // 优化排版
// });
marked.setOptions({
    renderer:renderer,
    gfm: true, // GitHub 风格的 Markdown
    breaks: true, // 支持换行
    pedantic:false,
    // highlight: function(code, lang) {
    //     const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    //     return hljs.highlight(code, { language }).value;
    // },
    // tables: true  // 启用表格支持
    // smartLists: true,  // 优化列表
    // smartypants: true,  // 优化排版

});
// 设置 marked 配置选项
// marked.setOptions({
//     renderer: renderer,  // 自定义渲染器
//     gfm: true,           // 启用 GitHub 风格的 Markdown
//     breaks: true,        // 启用换行符解析（支持换行符 \n）
//     tables: true,        // 启用表格支持
//     pedantic: false,     // 禁用严格模式，使用 GFM 扩展
//     smartLists: true,    // 启用智能列表
//     smartypants: true,   // 启用聪明引号
//     highlight: function(code, lang) {  // 启用语法高亮
//         const language = hljs.getLanguage(lang) ? lang : 'plaintext';
//         return hljs.highlight(code, { language }).value;
//     }
// });

export default marked;
