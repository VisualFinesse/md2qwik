import { component$ } from '@builder.io/qwik';

export const String_Functions = component$(() => {
  return <div innerHTML={'<p>Words, phrases, or sentences often need to be constructed programmatically. To do this, built-in functions are used to manipulate strings in ways that would normally need extensive looping logic. </p>
<h3>String Interpolation</h3>
<p>When inserting a variable in the middle of a string, the string needs to be constructed from parts. To solve this issue, C# includes <em>Interpolated Strings</em>. Interpolated strings allow the user to write variables directly into their strings without needing to construct a new string. There are also <a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated">special formatting options</a> that can be used for things like only printing a specific number of digits, or aligning text.</p>
<pre><code class="language-csharp">// previously, this would need to be used
&quot;beginning of the string &quot; + yourVariable + &quot; end of the string&quot;

// with interpolated strings, this results in the same value
$&quot;beginning of the string {yourVariable} end of the string&quot;
</code></pre>
<h3>Common String Functions</h3>
<table>
<thead>
<tr>
<th>Function</th>
<th>Description</th>
<th>Example Usage</th>
<th>Example Result</th>
</tr>
</thead>
<tbody><tr>
<td><code>.ToUpper()</code></td>
<td>Converts all alphabetic characters to their uppercase versions</td>
<td><code>&quot;pOtAto&quot;.ToUpper()</code></td>
<td><code>POTATO</code></td>
</tr>
<tr>
<td><code>.ToLower()</code></td>
<td>Converts all alphabetic characters to their lowercase versions</td>
<td><code>&quot;pOtAto&quot;.ToLower()</code></td>
<td><code>potato</code></td>
</tr>
<tr>
<td><code>.Length</code></td>
<td>Returns the length of a string</td>
<td><code>&quot;potato&quot;.Length</code></td>
<td><code>6</code></td>
</tr>
<tr>
<td><code>.ToCharArray()</code></td>
<td>Returns an array containing each character in the string</td>
<td><code>&quot;cat&quot;.ToCharArray()</code></td>
<td><code>[ &#39;c&#39;, &#39;a&#39;, &#39;t&#39; ]</code></td>
</tr>
<tr>
<td><code>.Substring(start, length)</code></td>
<td>Returns the first <em>n</em> characters in the string starting from the position specified in <code>start</code>, where n is the specified <code>length</code>.</td>
<td><code>&quot;potato&quot;.Substring(2,3)</code></td>
<td><code>tat</code></td>
</tr>
<tr>
<td><code>.Split(string)</code></td>
<td>Returns an array of strings, containing each substring split by the provided value</td>
<td><code>&quot;potato&quot;.Split(&quot;t&quot;)</code></td>
<td><code>[&quot;po&quot;, &quot;a&quot;, &quot;o&quot;]</code></td>
</tr>
<tr>
<td><code>string.Join(string, string[])</code></td>
<td>Returns a string that combines each</td>
<td><code>string[] in = { &quot;a&quot;, &quot;b&quot;, &quot;c&quot; };</code><br><code>string.Join(&quot;+&quot;, in)</code></td>
<td><code>a+b+c</code></td>
</tr>
</tbody></table>
'}></div>;
});