import { component$ } from '@builder.io/qwik';

export const Booleans = component$(() => {
  return <div innerHTML={'<hr>
<h2>aliases:
  - bool
  - boolean</h2>
<p> The &#39;Bool&#39; type is a <a href="Data%20Types.md">data type</a> used for storing a True or False value.</p>
<p>Booleans are primarily used in [[If Statements]], which will be covered in a future lesson.</p>
<p>All <a href="Numeric%20Types.md">numeric</a> comparison operators will return a boolean as a result.</p>
<pre><code class="language-csharp">var x = 3;
var y = 5;

var result = ( x &gt; y );
Console.WriteLine(result);
//&gt; False
</code></pre>
<h4>Operators</h4>
<p>Booleans have multiple mathematical operators available to them:</p>
<ul>
<li><code>!x</code> - the &#39;not&#39; operator, which inverts the value of the boolean</li>
<li><code>x &amp; y</code> - the &#39;and&#39; operator, which results in True if both values are True</li>
<li><code>x | y</code> - the &#39;or&#39; operator, which results in True if any of the values are True</li>
<li><code>x &amp;&amp; y</code> - the &#39;and&#39; operator, which results in True if both values are True (short circuits)</li>
<li><code>x || y</code> - the &#39;or&#39; operator, which results in True if any of the values are True (short circuits)</li>
<li><code>x ^ y</code> - the &#39;xor&#39; operator (short for exclusive or), which results in True if exactly one of the values is True</li>
</ul>
<p>Booleans also have two comparison operators available to them:</p>
<ul>
<li><code>x == y</code> - the &#39;equals&#39; operator, which checks if two values are equal</li>
<li><code>x != y</code> - the &#39;not equals&#39; operator, which checks if two values are equal</li>
</ul>
<pre><code class="language-csharp">bool x = true;
bool y = true;
bool z = false;

Console.WriteLine(!x);
//&gt; False

Console.WriteLine(x == y);
//&gt; True

Console.WriteLine(x &amp;&amp; y);
//&gt; True

Console.WriteLine((!x != y) == z);
//&gt; False
</code></pre>
<h4>Short Circuit Operators</h4>
<p>Short Circuit operators are a special kind of operator that calculates its results differently than other operators. These operators do not evaluate the variable right-hand variable if it would not be able to change the result.</p>
<p>Cases where short circuiting will happen:</p>
<ul>
<li><code>x &amp;&amp; y</code> - If x is False, the result will always be False. This means that the runtime will not evaluate y.</li>
<li><code>x || y</code> - If x is True, the result will always be True. This means that the runtime will not evaluate y.</li>
</ul>
<p>Here are some examples of short-circuiting at work:</p>
<pre><code class="language-csharp">bool x = false;

// This will not wait for user input, because x was False. 
// The &amp;&amp; can never evaluate to True, so it skips running the last half of the operator.
bool result = x &amp;&amp; (Console.ReadLine() == &quot;y&quot;);
Console.WriteLine(result);
//&gt; False


x = true; // Let&#39;s set x to true and rerun the code for the next test.

// This will wait for user input, because x was True. 
// The &amp;&amp; might be able to evaluate to True, so it runs last half of the operator.
bool result = x &amp;&amp; (Console.ReadLine() == &quot;y&quot;);
Console.WriteLine(result);
// The answer here will depend on whether or not you enter &#39;y&#39; into the console.
</code></pre>
'}></div>;
});