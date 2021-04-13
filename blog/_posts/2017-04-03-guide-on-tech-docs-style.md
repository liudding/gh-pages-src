---
title: 中文技术文档的写作规范
date: 2017-04-03
author: ding
location: 合肥
---

本文摘自阮一峰的《[中文技术文档的写作规范](http://www.ruanyifeng.com/blog/2016/10/document_style_guide.html)》

>
> 很多人说，不知道怎么写文档，都是凭着感觉写。<br/>
网上也很少有资料，教你写文档。这已经影响了中文软件的发展。
> 英语世界里，文档非常受重视，许多公司和组织都有自己的文档规范，清楚地规定写作要求，比如<a href="https://www.microsoftpressstore.com/store/microsoft-manual-of-style-9780735648715">微软</a>、<a href="http://styleguide.mailchimp.com">MailChimp</a>、<a href="http://help.apple.com/asg/mac/">Apple</a>、<a href="https://www.amazon.com/dp/B003P8QDFU/ref=dp-kindle-redirect?_encoding=UTF8&amp;btkr=1">Yahoo</a>、<a href="https://docs.docker.com/opensource/doc-style/">docker</a>、<a href="https://struts.apache.org/docs/documentation-style-guide.html">Struts</a> 等等（维基百科有一份完整的<a href="https://en.wikipedia.org/wiki/List_of_style_guides">清单</a>）。中文的也有不少，但都不令人满意，要么太简单，要么不太适用。<br/>
我就动手，参考上面的规范，也结合自己的实践，总结了一份简单的《<a href="https://github.com/ruanyf/document-style-guide">中文技术文档的写作规范</a>》。


看到这篇博文的时候甚是欢喜，因为这正是我想要在公司里推行的--规范的文档。为此还专门搭建了文档服务器。

《<a href="https://github.com/ruanyf/document-style-guide">中文技术文档的写作规范</a>》的地址是 <a href="https://github.com/ruanyf/document-style-guide">https://github.com/ruanyf/document-style-guide</a>

现摘抄一部分附上：

<blockquote>
<h1 id="toc_0">文档体系</h1>

<h2 id="toc_1">结构</h2>

软件手册是一部完整的书，建议采用下面的结构。

<ul>
<li><strong>简介</strong>（Introduction）： [必备] [文件] 提供对产品和文档本身的总体的、扼要的说明</li>
<li><strong>快速上手</strong>（Getting Started）：[可选] [文件] 如何最快速地使用产品</li>
<li><strong>入门篇</strong>（Basics）： [必备] [目录] 又称”使用篇“，提供初级的使用教程

<ul>
<li><strong>环境准备</strong>（Prerequisite）：[必备] [文件] 软件使用需要满足的前置条件</li>
<li><strong>安装</strong>（Installation）：[可选] [文件] 软件的安装方法</li>
<li><strong>设置</strong>（Configuration）：[必备] [文件] 软件的设置</li>
</ul></li>
<li><strong>进阶篇</strong>（Advanced)：[可选] [目录] 又称”开发篇“，提供中高级的开发教程</li>
<li><strong>API</strong>（Reference）：[可选] [目录|文件] 软件 API 的逐一介绍</li>
<li><strong>FAQ</strong>：[可选] [文件] 常见问题解答</li>
<li><strong>附录</strong>（Appendix）：[可选] [目录] 不属于教程本身、但对阅读教程有帮助的内容

<ul>
<li><strong>Glossary</strong>：[可选] [文件] 名词解释</li>
<li><strong>Recipes</strong>：[可选] [文件] 最佳实践</li>
<li><strong>Troubleshooting</strong>：[可选] [文件] 故障处理</li>
<li><strong>ChangeLog</strong>：[可选] [文件] 版本说明</li>
<li><strong>Feedback</strong>：[可选] [文件] 反馈方式</li>
</ul></li>
</ul>

下面是两个真实范例，可参考。

<ul>
<li><a href="http://redux.js.org/index.html">Redux 手册</a></li>
<li><a href="http://flight-manual.atom.io/">Atom 手册</a></li>
</ul>

<h2 id="toc_2">文件名</h2>

文档的文件名不得含有空格。

文件名必须使用半角字符，不得使用全角字符。这也意味着，中文不能用于文件名。

<pre><code>错误： 名词解释.md

正确： glossary.md
</code></pre>

文件名建议只使用小写字母，不使用大写字母。

<pre><code>错误：TroubleShooting.md

正确：troubleshooting.md 
</code></pre>

为了醒目，某些说明文件的文件名，可以使用大写字母，比如<code>README</code>、<code>LICENSE</code>。

文件名包含多个单词时，单词之间建议使用半角的连词线（<code>-</code>）分隔。

<pre><code>不佳：advanced_usage.md

正确：advanced-usage.md
</code></pre>
</blockquote>

<hr/>

<blockquote>
<h1 id="toc_3">标题</h1>

<h2 id="toc_4">层级</h2>

标题分为四级。

<ul>
<li>一级标题：文章的标题</li>
<li>二级标题：文章主要部分的大标题</li>
<li>三级标题：二级标题下面一级的小标题</li>
<li>四级标题：三级标题下面某一方面的小标题</li>
</ul>

<h2 id="toc_5">原则</h2>

<ul>
<li>一级标题下，不能直接出现三级标题。</li>
<li>标题要避免孤立编号（即同级标题只有一个）。</li>
<li>下级标题不重复上一级标题的内容。</li>
<li>谨慎使用四级标题，尽量避免出现，保持层级的简单和防止出现过于复杂的章节。如果三级标题下有并列性的内容，建议只使用项目列表（Item list）。</li>
</ul>
</blockquote>

<hr/>

<blockquote>
<h1 id="toc_6">文本</h1>

<h2 id="toc_7">字间距</h2>

全角中文字符与半角英文字符之间，应有一个半角空格。

<pre><code>错误：本文介绍如何快速启动Windows系统。

正确：本文介绍如何快速启动 Windows 系统。
</code></pre>

全角中文字符与半角阿拉伯数字之间，有没有半角空格都可，但必须保证风格统一，不能两种风格混杂。

<pre><code>正确：2011年5月15日，我订购了5台笔记本电脑与10台平板电脑。

正确：2011 年 5 月 15 日，我订购了 5 台笔记本电脑与 10 台平板电脑。
</code></pre>

半角的百分号，视同阿拉伯数字。

英文单位若不翻译，单位前的阿拉伯数字与单位间不留空格。

<pre><code>错误：一部容量为 16 GB 的智能手机

正确：一部容量为 16GB 的智能手机
</code></pre>

半角英文字符和半角阿拉伯数字，与全角标点符号之间不留空格。

<pre><code>错误：他的电脑是 MacBook Air 。

正确：他的电脑是 MacBook Air。
</code></pre>

<h2 id="toc_8">句子</h2>

<ul>
<li>避免使用长句。一个句子建议不超过 100 字或者正文的 3 行。</li>
<li>尽量使用简单句和并列句，避免使用复合句。</li>
</ul>

<h2 id="toc_9">写作风格</h2>

尽量不使用被动语态，改为使用主动语态。

<pre><code>错误：假如此软件尚未被安装，

正确：假如尚未安装这个软件，
</code></pre>

不使用非正式的语言风格。

<pre><code>错误：Lady Gaga 的演唱会真是酷毙了，从没看过这么给力的表演！！！

正确：无法参加本次活动，我深感遗憾。
</code></pre>

用对“的”、“地”、“得”。

<pre><code>她露出了开心的笑容。
（形容词＋的＋名词）

她开心地笑了。
（副词＋地＋动词）

她笑得很开心。
（动词＋得＋副词）
</code></pre>

使用代词时（比如“其”、“该”、“此”、“这”等词），必须明确指代的内容，保证只有一个含义。

<pre><code>错误：从管理系统可以监视中继系统和受其直接控制的分配系统。

正确：从管理系统可以监视两个系统：中继系统和受中继系统直接控制的分配系统。
</code></pre>

名词前不要使用过多的形容词。

<pre><code>错误：此设备的使用必须在接受过本公司举办的正式的设备培训的技师的指导下进行。

正确：此设备必须在技师的指导下使用，且指导技师必须接受过由本公司举办的正式设备培训。
</code></pre>

单个句子的长度尽量保持在 20 个字以内；20～29 个字的句子，可以接受；30～39 个字的句子，语义必须明确，才能接受；多于 40 个字的句子，在任何情况下都不能接受。

<pre><code>错误：本产品适用于从由一台服务器进行动作控制的单一节点结构到由多台服务器进行动作控制的并行处理程序结构等多种体系结构。

正确：本产品适用于多种体系结构。无论是由一台服务器（单一节点结构），还是由多台服务器（并行处理结构）进行动作控制，均可以使用本产品。
</code></pre>

同样一个意思，尽量使用肯定句表达，不使用否定句表达。

<pre><code>错误：请确认没有接通装置的电源。

正确：请确认装置的电源已关闭。
</code></pre>

避免使用双重否定句。

<pre><code>错误：没有删除权限的用户，不能删除此文件。

正确：用户必须拥有删除权限，才能删除此文件。
</code></pre>

<h2 id="toc_10">英文处理</h2>

英文原文如果使用了复数形式，翻译成中文时，应该将其还原为单数形式。

<pre><code>英文：⋯information stored in random access memory (RAMs)⋯

中文：……存储在随机存取存储器（RAM）里的信息……
</code></pre>

外文缩写可以使用半角圆点(<code>.</code>)表示缩写。

<pre><code>U.S.A.
Apple, Inc.
</code></pre>

表示中文时，英文省略号（<code>⋯</code>）应改为中文省略号（<code>……</code>）。

<pre><code>英文：5 minutes later⋯

中文：5 分钟过去了⋯⋯
</code></pre>

英文书名或电影名改用中文表达时，双引号应改为书名号。

<pre><code>英文：He published an article entitled &quot;The Future of the Aviation&quot;.

中文：他发表了一篇名为《航空业的未来》的文章。
</code></pre>

第一次出现英文词汇时，在括号中给出中文标注。此后再次出现时，直接使用英文缩写即可。

<pre><code>IOC（International Olympic Committee，国际奥林匹克委员会）。这样定义后，便可以直接使用“IOC”了。
</code></pre>

专有名词中每个词第一个字母均应大写，非专有名词则不需要大写。

<pre><code>“American Association of Physicists in Medicine”（美国医学物理学家协会）是专有名词，需要大写。

“online transaction processing”（在线事务处理）不是专有名词，不应大写。
</code></pre>
</blockquote>

<hr/>