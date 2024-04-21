import { component$ } from '@builder.io/qwik';

export const While_Loop = component$(() => {
  return <div innerHTML={'<hr>
<h2>aliases:
  - while</h2>
<p><strong>While loops</strong> are a type of loop that will iterate <em>until a condition is met</em>. Conditions used in a while loop must be expressions that evaluate to a [[Booleans|boolean]] value.</p>
<h2>Order of Iteration</h2>
<p>While loops will execute using the below steps when encountered:</p>
<ol>
<li>Evaluate the condition expression, and retrieve its boolean value</li>
<li>If the condition evaluates to <strong>True</strong>, the execute the [[Control Flow Structures|code block]] in the loop. Return to Step 1.</li>
<li>If the condition evaluates to <strong>False</strong>, do not run the [[Control Flow Structures|code block]] in the loop. Continue executing lines below the loop as normal.</li>
</ol>
<h2>Example Loops</h2>
<pre><code class="language-csharp">int x = 50;

while (x &gt;= 10) { // in this while loop, &#39;x &gt;= 10&#39; is the condition
    Console.WriteLine(x);
    x /= 2;
}

Console.WriteLine(&quot;Final Value: &quot; + x);

// This will print the below values:
//&gt; 50
//&gt; 25
//&gt; 12
//&gt; Final Value: 6
</code></pre>
<p>If the condition evaluates to false in the first iteration, the loop body will be skipped. </p>
<pre><code class="language-csharp">int x = 50;

while (x &lt; 10) { // this condition evaluates to false, so the loop will not run.
    Console.WriteLine(x);
    x /= 2;
}

Console.WriteLine(&quot;Final Value: &quot; + x);

// This will print the below value:
//&gt; Final Value: 50
</code></pre>
<h2>Infinite While Loops</h2>
<p>Because while loops iterate until a boolean value of <strong>False</strong> is given. Because of this, if a <strong>False</strong> value is never provided to the loop, it will never end. This can be used to create infinitely running loops to repeat something until the end of the program.</p>
<pre><code class="language-csharp">// This loop will run infinitely and never complete
while (true) { // in this while loop, the condition will never be false
    Console.WriteLine(&quot;Spam&quot;);
}

Console.WriteLine(&quot;Loop Complete.&quot;);
</code></pre>
'}></div>;
});