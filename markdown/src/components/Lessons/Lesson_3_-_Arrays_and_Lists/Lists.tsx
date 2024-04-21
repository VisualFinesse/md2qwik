import { component$ } from '@builder.io/qwik';

export const Lists = component$(() => {
  return (
    <div innerHTML={'<hr>
<h2>aliases:
  - list</h2>
<p>Lists are built-in [[Reference Types]] that allow for storage of multiple variables of a specified type. These lists are functionally similar to [[Arrays]], but they have a mutable length. This means that you do not have to specify a length like with an array, and can continuously insert elements into the list without hitting any maximum.</p>
<h3>Basic Usage</h3>
<h4>Initializing a List</h4>
<p>Like [[Arrays]], lists must be initialized using the <code>new</code> keyword. Initializing a new list follows the below format:</p>
<pre><code class="language-csharp">// this initializes a new variable &#39;myList&#39; and uses 
// it to create an empty list of type &#39;type&#39; 
var myList = new List&lt;type&gt;();

// this initializes a new variable &#39;myList&#39; and uses 
// it to create a list of type &#39;type&#39; with all of the provided values 
var myList = new List&lt;type&gt;() { value1, value2, value3, ... valueN };
</code></pre>
<h4>Reading and Updating Elements</h4>
<p>Elements can be read from and set using the same notation available when using [[Arrays]]. They also have a <code>Count</code> property, which displays the current number of elements in the list, much like how an array would use its <code>Length</code> property.</p>
<pre><code class="language-csharp">var list = new List&lt;int&gt;() { 5, 9, 1 };

Console.WriteLine(list[2]);
//&gt; 1

list[2] = 3;
Console.WriteLine(list[2]);
//&gt; 3

Console.WriteLine(list.Count);
//&gt; 3
</code></pre>
<h4>Inserting and Removing Elements</h4>
<p>Unlike arrays, lists aren&#39;t locked into having a specified number of elements. Elements can be added and removed from a list at will, allowing lists to change their size dynamically as needed. This is accomplished by the <code>.Add(T)</code>, <code>.Insert(int, T)</code>, <code>.RemoveAt(int)</code>, and <code>.Remove(T)</code> [[Methods]]. Take a look at an example of each of these below:</p>
<pre><code class="language-csharp">var someList = new List&lt;string&gt;() { &quot;Potato&quot;, &quot;Salad&quot;, &quot;Apple&quot;, &quot;Orange&quot; };

someList.Add(&quot;Foo&quot;); // adds &#39;Foo&#39; to the end of the list

foreach (var item in someList) {
    Console.Write(item + &quot;, &quot;);
}
Console.WriteLine();
//&gt; Potato, Salad, Apple, Orange, Foo, 

someList.Insert(3, &quot;Bar&quot;); // inserts &#39;Bar&#39; at position 3

foreach (var item in someList) {
    Console.Write(item + &quot;, &quot;);
}
Console.WriteLine();
//&gt; Potato, Salad, Apple, Bar, Orange, Foo, 

someList.RemoveAt(4); // removes the element in position 4, which is &#39;Orange&#39;
foreach (var item in someList) {
    Console.Write(item + &quot;, &quot;);
}
Console.WriteLine();

someList.Remove(&quot;Bar&quot;); // finds and removes &#39;Bar&#39; from the list
foreach (var item in someList) {
    Console.Write(item + &quot;, &quot;);
}
Console.WriteLine();
</code></pre>
<h3>Internal Functionality</h3>
<p>It&#39;s important to note that each instance of a List operates using an [[Arrays|array]] behind the scenes. Lists follow the below rules when managing a collection of elements internally:</p>
<ul>
<li>Initially, the list uses an array of size zero. </li>
<li>When you add your first element, the the array will be replaced with an array of size 4. </li>
<li>Every time you add an element that would exceed the maximum length of the internal array, a the List will transfer all elements over to a new internal array that has double the length.</li>
</ul>
<p>This internal behavior means that [[Arrays]] are more efficient to execute in your program, but lists have better utility for writing code quickly.</p>
<p>Here is a code example of this behavior, to help visualize how it works more easily:</p>
<pre><code class="language-csharp">var exampleList = new List&lt;int&gt;();

// the .Capacity property here returns the size of the internal list
Console.WriteLine();
Console.WriteLine(&quot;Internal Capacity: &quot; + exampleList.Capacity);
Console.WriteLine(&quot;List Length: &quot; + exampleList.Count);
//&gt; Internal Capacity: 0
//&gt; List Length: 0

// adding the first element sets the internal array size to 4
exampleList.Add(1337);
Console.WriteLine();
Console.WriteLine(&quot;Internal Capacity: &quot; + exampleList.Capacity);
Console.WriteLine(&quot;List Length: &quot; + exampleList.Count);
//&gt; Internal Capacity: 4
//&gt; List Length: 1

// adding 3 more elements fills the internal array but does not exceed it
// this will not expand the internal array
exampleList.Add(420);
exampleList.Add(69);
exampleList.Add(13);
Console.WriteLine();
Console.WriteLine(&quot;Internal Capacity: &quot; + exampleList.Capacity);
Console.WriteLine(&quot;List Length: &quot; + exampleList.Count);
//&gt; Internal Capacity: 4
//&gt; List Length: 4

// adding the next element will exceed the number of available slots internal array
// this will cause the list to copy all elements to an internal array of double the size
exampleList.Add(42);
Console.WriteLine();
Console.WriteLine(&quot;Internal Capacity: &quot; + exampleList.Capacity);
Console.WriteLine(&quot;List Length: &quot; + exampleList.Count);
//&gt; Internal Capacity: 8
//&gt; List Length: 5

exampleList.Add(420);
exampleList.Add(69);
exampleList.Add(13);
exampleList.Add(42);
Console.WriteLine();
Console.WriteLine(&quot;Internal Capacity: &quot; + exampleList.Capacity);
Console.WriteLine(&quot;List Length: &quot; + exampleList.Count);
//&gt; Internal Capacity: 16
//&gt; List Length: 9
</code></pre>
'}></div>
  );
});