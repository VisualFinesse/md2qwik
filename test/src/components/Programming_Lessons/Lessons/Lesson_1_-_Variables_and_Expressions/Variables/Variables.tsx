import { component$ } from '@builder.io/qwik';

export const Variables = component$(() => {
  return <div innerHTML={'<hr>
<h2>tags: 
aliases:
  - variable</h2>
<p>[[Variables]] are a feature of C# that allow programmers to store data in the computer&#39;s temporary memory. </p>
<h3>Data Types</h3>
<p>Each variable stores data in different ways depending on the [[Data Types|type]] of the variable. There are many data types available in C# which may be used.</p>
<h3>Variable Definitions</h3>
<p>To define a new variable, you simply write the [[Data Types|type]] and name of the variable, like in the below example:</p>
<pre><code class="language-csharp">// this line follows the below format:
// type name;
int x; 
// in this line, the type of the variable is &#39;int&#39; and the name of the variable is &#39;x&#39;.
// you can name your variable anything you like, as long as the 
// name does not already exist in the scope you defined it in.
</code></pre>
<p>When defining a new variable, you can also assign a value to the variable like below:</p>
<pre><code class="language-csharp">int x = 3; // in this line, we are declaring a new variable x, and giving it an initial
</code></pre>
<h5>Terminology</h5>
<ul>
<li><p><em><strong>Variable Definition</strong></em> - Ex: <code>int x;</code> </p>
<ul>
<li>Defining a variable creates a new variable in the scope that you define it in.</li>
</ul>
</li>
<li><p><em><strong>Variable Initialization</strong></em> - Ex: <code>x = 3;</code></p>
<ul>
<li>Initializing a variable sets its value for the first time. If a value has not been set, it is considered uninitialized.</li>
</ul>
</li>
</ul>
<p> You can use the <code>var</code> keyword instead of a type whenever you&#39;re creating a new variable <em>and assigning a value</em>. This keyword will tell the compiler to infer the type of your variable from the type of value you&#39;re assigning to it.</p>
<h3>Variable Assignment</h3>
<p>The primary usage of variables is to store and retrieve data. In the code block below, we are storing the value <code>3</code> into the line. When we use <code>myVariable</code> in the <code>Console.WriteLine</code> statement, it accesses the value stored in myVariable and passes that value into the <code>Console.WriteLine</code> function.</p>
<pre><code class="language-csharp">var myVariable;
myVariable = 3;
Console.WriteLine(myVariable);
//&gt; 3
</code></pre>
<p>When assigning a value, you must use the assignment operator <code>=</code>, which takes the value to the right of the operator and stores the value in the variable to the left of the operator.</p>
<pre><code class="language-csharp">int x = 3;
int y = 2;

x = y; // this operator assigns the left side to the value of the right side

Console.WriteLine(x);
//&gt; 2
Console.WriteLine(y);
//&gt; 2
</code></pre>
'}></div>;
});