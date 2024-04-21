import { component$ } from '@builder.io/qwik';

export const Characters = component$(() => {
  return <div innerHTML={'<hr>
<h2>aliases:
  - char
  - character</h2>
<p>The &#39;Char&#39; type is a <a href="Data%20Types.md">data type</a> used for storing a single text character.</p>
<p><strong>Operators of Note:</strong> <code>+</code>*, <code>-</code>* </p>
<h2>Example Usage</h2>
<p>Chars are typically used to store a single character in a variable, like so:</p>
<pre><code class="language-csharp">char myCharacter = &#39;h&#39;;

Console.WriteLine(myCharacter);
//&gt; h
</code></pre>
<p>Char literals must be written using single quotes ( &#39; ), instead of double quotes ( &quot; ). Double quotes are exclusively used for writing literals of [[Strings]].</p>
<h2>Internal usage</h2>
<p>Chars are stored internally using a positive integer. These integer values can be found on the <a href="https://www.ascii-code.com/">ASCII Table</a></p>
<p>The <code>+</code> and <code>-</code> operators may be used on chars, but these will always return an integer. This happens because internally the chars are actually just [[Integers|int]] values, so the int operators are always used.</p>
<h4>Example Uses of Operators</h4>
<p>Retrieving the distance between two chars</p>
<pre><code class="language-csharp">var char1 = &#39;a&#39;;
var char2 = &#39;c&#39;;

var output = char2 - char1;

Console.WriteLine(output);
//&gt; 2
</code></pre>
<p>Shifting chars numerically</p>
<pre><code class="language-csharp">var myChar = &#39;a&#39;;

// this is going to result in an integer
var resultCharValue = myChar + 3;

// this line casts (converts) the resulting integer to a char type
var output = (char)resultCharValue;

Console.WriteLine(output);
//&gt; d
</code></pre>
'}></div>;
});