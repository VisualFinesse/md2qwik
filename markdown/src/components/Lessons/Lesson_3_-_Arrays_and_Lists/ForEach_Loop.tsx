import { component$ } from '@builder.io/qwik';

export const ForEach_Loop = component$(() => {
  return (
    <div innerHTML={'<hr>
<h2>aliases:
  - foreach
  - foreach loops</h2>
<p>For-Each loops are a type of loop that can only be used on types that inherit from [[The IEnumerable Interface]]. These loops are fairly simple versions of loops, designed to allow for easy of iteration over elements in a collection.</p>
<p>For-Each loops can be written using the format below:</p>
<pre><code class="language-csharp">foreach (type name in enumerableVariable) {
    // loop body goes here
}
</code></pre>
<p>Both [[Arrays]] and [[Lists]] inherit from [[the IEnumerable interface]], so you can try using foreach loops on them. Here is an example of using each of them in a foreach loop:</p>
<pre><code class="language-csharp">var array = new int[] { 1, 2, 3 };
var list = new List&lt;int&gt;() { 1, 2, 3 };

foreach (var item in array) {
    Console.WriteLine(&quot;Array Value: &quot; + item);
}
//&gt; Array Value: 1
//&gt; Array Value: 2
//&gt; Array Value: 3

foreach (var item in list) {
    Console.WriteLine(&quot;List Value: &quot; + item);
}
//&gt; List Value: 1
//&gt; List Value: 2
//&gt; List Value: 3
</code></pre>
<h3>Order of Execution</h3>
<p>In each iteration of the loop, the foreach loop will assign the next value from the [[The IEnumerable Interface|IEnumerable]] to the variable declared in the loop. This value can be read from, but not directly assigned to.</p>
<pre><code class="language-csharp">var list = new List&lt;int&gt;() { 7, 2, 1 };

foreach (var element in list) {
    // element is 7 here during the first iteration
    // element is 2 here during the second iteration
    // element is 1 here during the third iteration
}
</code></pre>
'}></div>
  );
});