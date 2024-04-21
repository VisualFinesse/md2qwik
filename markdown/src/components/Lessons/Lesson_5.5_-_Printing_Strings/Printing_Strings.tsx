import { component$ } from '@builder.io/qwik';

export const Printing_Strings = component$(() => {
  return (
    <div innerHTML={'<hr>
<h2>aliases:
  - ToString</h2>
<h2>Escape Characters</h2>
<p>When writing strings, there are some characters that may seem difficult to write, like new line characters, tabs, double quotes, and the like.</p>
<p>To do this, simply use write a backslash and an escape character to insert that character into the string. Microsoft has a full list of escape characters <a href="https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/strings/#string-escape-sequences">here</a>, but I&#39;ve written some of the more useful ones below. </p>
<ul>
<li><code>\n</code> - New line</li>
<li><code>\t</code> - A tab character used for spacing</li>
<li><code>\&#39;</code> - A single quote</li>
<li><code>\&quot;</code> - A double quote</li>
<li><code>\\</code> - A backslash</li>
</ul>
<h2>The .ToString() Method</h2>
<p>The <code>.ToString()</code> method is a <em>virtual</em> method that exists on all objects that [[Future Lesson - Inheritance|inherit]] from the <code>Object</code> class. Inheritance will be covered in a future lesson. For now, you just need to understand that the <em>virtual</em> keyword means that you can <em>override</em> the logic of the previously existing method. </p>
<p>Because all classes/objects inherit from the <code>Object</code> class, the <code>.ToString()</code> method can be overridden in any user-defined class. Here is an example of how to do this:</p>
<pre><code class="language-cs">public override string ToString() {
    return /* your result here */;
} 
</code></pre>
<h4>Why does this matter?</h4>
<p>The <code>.ToString()</code> method is <em>implicitly</em> called whenever we print out an object. Most objects print out some odd-looking value including namespace and class names. Overriding this method allows any implicit conversions to use the logic specified in the method, which can print out more user-friendly messages.</p>
<p>Below is an example of how this logic might be implemented:</p>
<pre><code class="language-cs">public class Potato {
    public int TestValue;
    
    public Potato(int TestValue) {
        this.TestValue = TestValue;
    }
    
    public string ToString() {
        return $&quot;Potato: {TestValue}&quot;;
    }
}
</code></pre>
<pre><code class="language-cs">var potato = new Potato(7);
Console.WriteLine(potato); // .ToString() is called here before the print statement
//&gt; Potato: 7
</code></pre>
'}></div>
  );
});