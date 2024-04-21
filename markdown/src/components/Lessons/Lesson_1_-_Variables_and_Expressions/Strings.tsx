import { component$ } from '@builder.io/qwik';

export const Strings = component$(() => {
  return (
    <div innerHTML={'<hr>
<h2>aliases:
  - string</h2>
<p>Strings are represented in memory as a sequence of characters, stored using an array.</p>
<p>Operators of Note: <code>+</code>, <code>+=</code>, and [[String Functions|some additional functions]].</p>
<h4>Writing Strings</h4>
<p>String literals are denoted using a double quote character (<code>&quot;</code>). These are not to be confused with [[Characters|chars]], which use literals denoted by single quotes (<code>&#39;</code>).</p>
<pre><code class="language-csharp">string someVariable = &quot;potato&quot;;

var x = &quot;c&quot;;
var y = &#39;c&#39;;
</code></pre>
<h4>Operators</h4>
<ul>
<li><code>x + y</code> - concatenates two strings<ul>
<li>This places the contents of x before the contents of y. See the example code block below.</li>
</ul>
</li>
<li><code>x += y</code> - concatenates x and y, then saves the results to x<ul>
<li>Equivalent to <code>x = x + y</code></li>
</ul>
</li>
</ul>
<pre><code class="language-csharp">string a = &#39;potato&#39;;
string b = &#39;salad&#39;;

Console.WriteLine(a + b);
//&gt; potatosalad
</code></pre>
'}></div>
  );
});