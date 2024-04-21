import { component$ } from '@builder.io/qwik';

export const Lesson_5_-_Objects_and_Methods = component$(() => {
  return <div innerHTML={'<hr>
<h2>tags:
  - Lesson</h2>
<h2>Top Level Statements</h2>
<p>Up until now, you have likely been writing code using the newly-added <a href="https://learn.microsoft.com/en-us/dotnet/core/tutorials/top-level-templates">console app template used for top-level statements.</a> This template greatly simplifies how you begin writing code, but it abstracts away some things that are valuable to know once you understand [[Classes and Objects|Objects]] and [[Methods]]. </p>
<p>Whenever you write code, you would normally write it into a block like the below: </p>
<pre><code class="language-cs">// your code would go here
</code></pre>
<p>Writing code like the above will actually compile down to the old console app format below. You can still copy/paste this format to your program file to try it for yourself.</p>
<pre><code class="language-cs">using System;

namespace ConsoleApp1 
{
    internal class Program 
    {
        static void Main(string[] args) 
        {
            // your code would go here
        }
        
    }
}
</code></pre>
<p>All of the code that you have been writing up to this point is code that has been placed inside of the <code>Main</code> method, which is the only method that would be invoked whenever a project is run. All other classes and objects will need be called by this method in some way if they are going to be executed in your programs.</p>
<h2>Using Multiple Files to Code</h2>
<p>Let&#39;s try creating a new file and writing some code to be used in our original program file. First, navigate to the Solution Explorer in your Visual Studio.</p>
<p>![[Screenshot 1.png|500]]</p>
<p>The Solution Explorer view will look something like the above picture. Next, right-click on your project to open the context menu for that project.</p>
<p>![[Screenshot 2.png|300]] </p>
<p>Select Add &gt; New Item...</p>
<p>![[Screenshot 3.png|300]]</p>
<p>A dialog window should pop up, providing you with options to create a new file in your project. Select Class (C# Items), and provide a name for your [[Classes and Objects|class]] in the bar on the bottom. I&#39;ll leave mine as the default <code>Class1.cs</code> value.</p>
<p>![[Screenshot 4.png]]
You should now have multiple classes available to you in the solution explorer view. Let&#39;s try writing a [[Methods|method]] in the new file, and calling its logic from the original <code>Program.cs</code> file.</p>
<p>To do this, let&#39;s put the following method inside of the new class we created.</p>
<pre><code class="language-cs">public void TestMethod() {
    Console.WriteLine(&quot;This line was printed from Class1!&quot;);
}
</code></pre>
<p>Now, we will want to call the object from inside of the original <code>Program.cs</code> file. To do so, you can simply write the below lines:</p>
<pre><code class="language-cs">var obj = new Class1(); // this line creates a Class1 object
obj.TestMethod(); // this line executes the TestMethod using that object
</code></pre>
<p>Running the program now will print the expected line, <code>This line was printed from Class1!</code>.</p>
<h2>Exercises</h2>
<ol>
<li>Create &quot;Rectangle&quot; a class with width and height attributes. Use a method to calculate the area and perimeter of the rectangle.</li>
<li>Create a class called &quot;Circle&quot; with a private radius attribute. Create three different Circle objects, and calculate the area and circumference of the circle for each object by invoking a method.</li>
<li>Create a class called &quot;Triangle&quot; with base and height attributes. The value of these attributes should be externally accessible, but not externally modifiable. Create three Triangle objects in your <code>Program.cs</code> file. Calculate the area and circumference of the triangle for each object.</li>
<li>Create a &quot;Deck&quot; class, filled with &quot;Cards&quot;.<ul>
<li>Each &quot;Card&quot; will have a number and suit attribute. The number will be an integer value from 1-13. The suit will be represented by an integer value from 0-3.</li>
<li>Each &quot;Deck&quot; will have a method that chooses a random card from the deck and returns it.</li>
<li>Each &quot;Deck&quot; will be populated with 52 different cards.</li>
<li>Write logic in your <code>Program.cs</code> file to create three decks of cards. Pull two random cards from each deck and print out the sum of the &#39;number&#39; attribute from all six cards.</li>
</ul>
</li>
</ol>
'}></div>;
});