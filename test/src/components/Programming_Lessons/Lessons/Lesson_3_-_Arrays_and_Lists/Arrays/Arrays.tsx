import { component$ } from '@builder.io/qwik';

export const Arrays = component$(() => {
  return <div innerHTML={'<hr>
<h2>aliases:
  - array</h2>
<p>[[Arrays]] are complex [[Data Types|types]] that allow you to store multiple things under one variable name. Each array has a <em>specific number of slots</em> that values can be stored in.</p>
<h3>Definition</h3>
<p>Arrays can be declared using the format below:</p>
<pre><code class="language-csharp">type[] name;
</code></pre>
<p>Note that the above is nearly identical to declaring a variable, except it uses square brackets to denote an <em>array</em> of type, instead of just the type itself.</p>
<h3>Initialization</h3>
<p>Initializing arrays can be done in multiple ways. They can either be initialized using a literal or an empty array. You can initialize arrays using the format below:</p>
<pre><code class="language-csharp">// this line initializes an empty array of whatever type is specified,
// with n slots for variable storage
var name = new type[n];

// this line initializes an array filled with values.
// any number of values may be passed in, but they must be separated by commas.
// the length of this array is always assigned based on the number of values provided.
var name = new type[] { value1, value2, value3, ... valueN };
</code></pre>
<h3>Empty Arrays</h3>
<p>When initializing an array to a set of empty values, a number of slots are created to store values. Each slot will be created using a value of whatever the specified type&#39;s <a href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/default-values">default</a> value is.</p>
<pre><code class="language-csharp">new int[3]; // this statement would create an array of length 3 with the values below
// [ 0, 0, 0 ]
</code></pre>
<h3>Accessing and Manipulating Values In Arrays</h3>
<p>Values stored in arrays can be accessed like variables would normally be accessed, except that arrays require an additional index value to be provided to them. This index value represents the position.</p>
<p><strong>Arrays are indexed starting from zero</strong>, meaning that the first element in the array can be accessed by passing in an index value of 0. Each subsequent value is accessed by providing the previous index value plus 1.</p>
<p>Below is a visualized example of how values would be indexed in an array.</p>
<pre><code>Array values:
[ 7, 234, -3 ]

Length:
3

array[0]: 7
array[1]: 234
array[2]: -3
</code></pre>
<p>Arrays also have a <code>Length</code> property on them, which can be used to check the number of elements in the array. This is typically used when iterating over arrays, to construct [[For Loop|for loops]] that run as many times as there are elements in the array. You can iterate over arrays using any of the loops taught in the previous section, or using [[ForEach Loop|foreach loops]].</p>
<p>These values are like variables, they can be both read from and assigned to. Here is an example of accessing array values in code:</p>
<pre><code class="language-csharp">
var values = new string[] { &quot;first value&quot;, &quot;second value&quot;, &quot;third value&quot; };

// Here we read the middle element and print it
Console.WriteLine(values[1]);
//&gt; second value

// Here we update the first and second element
values[0] = &quot;a different first value&quot;;
values[1] = &quot;a different second value&quot;;

// Here we read the middle element and print it
Console.WriteLine(values[1]);
//&gt; a different second value


Console.WriteLine(values.Length);
//&gt; 3
</code></pre>
<h2>Example Usage</h2>
<pre><code class="language-csharp">int[] x; // this line would declare a new integer array variable named &#39;x&#39;

// this line would initialize a new integer array with an internal length of 5
x = new int[5];

// array literals can be written using curly brackets like below
var y = new string[] { &quot;apple&quot;, &quot;orange&quot;, &quot;pear&quot; };  

// this block will iterate over all values in y and print them
for (int i = 0; i &lt; y.Length; i++) {
    Console.WriteLine(y[i]);
}
</code></pre>
<h3>Multi-Dimensional Arrays</h3>
<p>Because arrays can be created for any [[Data Types|data type]], one of the types they can be made from is another array type. This means that you can have an &#39;array of arrays of something&#39;, with as many layers of nesting as you&#39;d like.</p>
<p>Here&#39;s a visual example of how these kinds of arrays would be stored:</p>
<pre><code>Normal Int Array:
[ 5, -1, 324 ]

Nested 2-dimensional array:
[ [5, 57, -13], [9, 13, 64], [20, -4] ]

The same 2-dimensional array, but visualized differently
index 0: [5, 57, -13],
index 1: [9, 13, 64],
index 2: [20, -4]
</code></pre>
<p>Here is the code-equivalent of the above example:</p>
<pre><code class="language-csharp">var simpleArray = new int[] { 5, -1, 324 };

Console.WriteLine(&quot;Simple Array Values:&quot;);
for (int i = 0; i &lt; simpleArray.Length; i++) {
    Console.Write(simpleArray[i] + &quot; &quot;);
}

// create some space between the two sections
Console.WriteLine();
Console.WriteLine();

Console.WriteLine(&quot;2D Array Values:&quot;);
var twoDimensionalArray = new int[][] {
    new int[] { 5, 57, -13 },
    new int[] { 9, 13, 64 },
    new int[] { 20, -4 }
};

for (int i = 0; i &lt; twoDimensionalArray.Length; i++) {
    for (int j = 0; j &lt; twoDimensionalArray[i].Length; j++) {
        Console.Write(twoDimensionalArray[i][j] + &quot; &quot;);
    }
    Console.WriteLine();
}
</code></pre>
'}></div>;
});