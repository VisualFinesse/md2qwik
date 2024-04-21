import { component$ } from '@builder.io/qwik';

export const For_Loop = component$(() => {
  return (
    <div innerHTML={'<hr>
<h2>aliases:
  - for</h2>
<p><strong>For loops</strong> are a type of loop that are typically used to iterate <em>a specific number of times</em>. </p>
<p>The for loop has three parts: [[For Loop#^Initialization|initialization]], [[For Loop#^Condition|condition]], and [[For Loop#^Update|update]]. For loops are written using the below syntax:</p>
<pre><code class="language-csharp">// expressions before the loop
for (initialization; condition; update) {
    // loop body goes here
}
// expressions after loop
</code></pre>
<h4>Initialization</h4>
<p>^Initialization
The initialization part of a for loop initializes or instantiates any variables necessary to perform the loop logic. This section may be left empty if desired.</p>
<p>The most common usage of this section is to declare an iterator variable (usually named <code>i</code> or <code>index</code>). Generally these will have a starting value of 0.</p>
<h4>Condition</h4>
<p>^Condition
The condition part of a for loop does exactly what the name implies: it is a [[Booleans|boolean]] condition used very much like an [[If Statements|if statement]]. The value here can be any expression that evaluates to a boolean, and the expression will be reevaluated every time the loop executes. If the condition is evaluated to <strong>true</strong>, the [[Control Flow Structures|code block]] in the loop&#39;s body will run. If the condition is evaluated to <strong>false</strong>, then the loop will exit, and any code below the loop will continue execution.</p>
<p>The most common usage of this section is to compare an iterator variable (usually named <code>i</code> or <code>index</code>) to a number used to designate the number of times the loop should execute.</p>
<h4>Update</h4>
<p>^Update
The update part of a for loop contains a statement to be executed after each iteration of the for loop is complete. This section may be left empty if desired.</p>
<p>The most common usage of this section is to increment an iterator variable when using it to loop a specified number of times.</p>
<h2>Example</h2>
<p>This pattern is one of the most common for loops you will see. It specifies an exact number of times the loop will run, and iterates until that number is reached.</p>
<pre><code class="language-csharp">var timesToRun = 7;

Console.WriteLine(&quot;Before the loop&quot;);
for (int i = 0; i &lt; timesToRun; i++) {
    Console.WriteLine(i);
}
Console.WriteLine(&quot;After the loop&quot;);

// this will concatenate i to the string before printing
Console.WriteLine(&quot;Final Value of &#39;i&#39;: &quot; + i); 


// this code will print out the values below:
//&gt; Before the loop
//&gt; 0
//&gt; 1
//&gt; 2
//&gt; 3
//&gt; 4
//&gt; 5
//&gt; 6
//&gt; After the loop
//&gt; Final Value of &#39;i&#39;: 7
</code></pre>
'}></div>
  );
});