import { component$ } from '@builder.io/qwik';

export const Methods = component$(() => {
  return (
    <div innerHTML={'<hr>
<h2>aliases:
  - method</h2>
<h2>Overview</h2>
<p>Methods, often referred to as <em>functions</em>, are structures that allow for the logical grouping of blocks of code. Their primary purpose is to allow developers to create layers of abstraction around lower-level blocks of logic to allow for better readability and development of higher-order logic.</p>
<p>Let&#39;s use the solution for a question from a previous lesson as an example:</p>
<pre><code class="language-cs">var input = new int[] { 35, 30, 41, 12, 6, 14, 10, 31, 18, 24, 34, 5, 29, 23 };

// Reverse the order of each element in the array.
for (int i = 0; i &lt; input.Length / 2; i++) {
    var temp = input[i];
    input[i] = input[input.Length - i - 1];
    input[input.Length - i - 1] = temp;
}
</code></pre>
<p>This logic could be represented with the state diagram below:</p>
<pre><code class="language-mermaid">stateDiagram-v2
    state &quot;Set i to 0&quot; as Initialize
    state &quot;Check if i is less than Length / 2&quot; as Condition
    state &quot;Add 1 to i&quot; as Update
    state IfResult &lt;&lt;choice&gt;&gt; 
    state &quot;Create a temporary variable and store the first value&quot; as NewVar
    state &quot;Assign the first location to the second value&quot; as Assign1
    state &quot;Assign the second location to the temp variable&quot; as Assign2
    [*] --&gt; Initialize
    Initialize --&gt; Condition
    Condition --&gt; IfResult
    IfResult --&gt; NewVar: True
    NewVar --&gt; Assign1
    Assign1 --&gt; Assign2
    Assign2 --&gt; Update
    Update --&gt; Condition
    IfResult --&gt; [*]: False
</code></pre>
<p>To simplify the logic, we could group the logic for swapping to variables into its own operation. Doing so would make the diagram look like the below:</p>
<pre><code class="language-mermaid">stateDiagram-v2
    state &quot;Set i to 0&quot; as Initialize
    state &quot;Check if i is less than Length / 2&quot; as Condition
    state &quot;Add 1 to i&quot; as Update
    state IfResult &lt;&lt;choice&gt;&gt; 
    state &quot;Create a temporary variable and store the first value&quot; as NewVar
    state &quot;Assign the first location to the second value&quot; as Assign1
    state &quot;Assign the second location to the temp variable&quot; as Assign2
    state &quot;Swap the values&quot; as Swap {
        [*] --&gt; NewVar
        NewVar --&gt; Assign1
        Assign1 --&gt; Assign2
        Assign2 --&gt; [*]
    }
    [*] --&gt; Initialize
    Initialize --&gt; Condition
    Condition --&gt; IfResult
    IfResult --&gt; Swap: True
    Swap --&gt; Update
    Update --&gt; Condition
    IfResult --&gt; [*]: False
</code></pre>
<p>This process is called <em><strong>abstraction</strong></em>. It takes small pieces of low-level logic and groups them into higher-order functions that usually make more sense to humans that are trying to understand the big picture.</p>
<p>The process of abstraction is achieved by creating <em>methods</em> that perform logic but hide it away from view, allowing for cleaner, more readable code to be written.</p>
<p>When properly abstracted, the code described might look like this:</p>
<pre><code class="language-cs">var input = new int[] { 35, 30, 41, 12, 6, 14, 10, 31, 18, 24, 34, 5, 29, 23 };

// Reverse the order of each element in the array.
for (int i = 0; i &lt; input.Length / 2; i++) {
    SwapValues(input, i, input.Length - i - 1);
}

// the below code is a Method. continue reading to learn more about Methods
void SwapValues(int[] input, int index1, int index2) {
    var temp = input[index1];
    input[index1] = input[index2];
    input[index2] = temp;
}
</code></pre>
<h2>Components of a Method</h2>
<p>Methods have four components that are required for them to function properly:</p>
<ul>
<li>A Name</li>
<li>Parameters [Optional]</li>
<li>A Return Type</li>
<li>An Access Specifier</li>
</ul>
<p>Methods can be written in code using the below format:</p>
<pre><code class="language-cs">AccessSpecifier ReturnType Name(ParamType1 ParamName1, ParamType2 ParamName2, ...) {
    // method body goes here
}
</code></pre>
<h4>Parameters</h4>
<p>Parameters are the &#39;inputs&#39; for sending data to a method. Each parameter in a method must have a specified type, and a unique name to be valid. Parameters <strong>must</strong> have a type associated with them, and thus cannot use a type of <code>var</code>.</p>
<p>Creating a parameter declares a new variable scoped to the method it was created for, and assigns a value to that variable based on whatever value was passed in from wherever the call to the method was made. </p>
<p>Values passed in to a method are called <em>arguments</em>. It&#39;s important to note that when an argument is passed in to a method, it will match a parameter based on its position, and not its name.</p>
<h4>Method Returns</h4>
<p>Returning from a method allows you to output a single value to the context that originally called the method. To return in a method, simply use the <code>return</code> keyword, followed by the desired return value. Returning from a method will complete the execution of the method, so any statements written inside of the method after a return statement is encountered will not execute.</p>
<p>Return types specify the type of the value that will be returned from the method. This type will be used whenever the method&#39;s return value is used to create a variable, so this is a necessary part of writing a functional method.</p>
<h4>Access Specifiers</h4>
<p>Methods and fields utilize access specifiers to describe what is allowed to access them. There are two main access specifiers that you should know:</p>
<ul>
<li><code>public</code> - Allows access from external classes, regardless of where the call is made</li>
<li><code>private</code> - Only allows access from within the class it&#39;s specified in</li>
</ul>
<p>There are some <a href="https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers">additional access specifiers</a> that won&#39;t be relevant until we cover [[Future Lesson - Inheritance|inheritance]] in a future lesson.</p>
<h4>Calling a Method</h4>
<p>Methods can be <em>called</em>, which executes them in their own context. Once the execution of the logic described is complete, then any returned values will be sent back to wherever the method was called from.</p>
<p>To directly call a method located in the same class as the scope in which you call it from, simply follow the below format:</p>
<pre><code class="language-cs">MethodName(argument1, argument2, argument3, ...)
</code></pre>
<p>To call a method that is stored in a different class, you will need direct access to an object created from that class. You can call your target method using the object like so:</p>
<pre><code class="language-cs">yourObject.MethodName(argument1, argument2, argument3, ...)
</code></pre>
<p>Calling a method in this way will cause any global variables used by the method to utilize the values maintained in the object&#39;s state.</p>
<h4>Example Method</h4>
<pre><code class="language-cs">public int GetIntSumOfThreeValues(string Input1, string Input2, string Input3) {
    var val1 = int.Parse(Input1);
    var val2 = int.Parse(Input2);
    var val3 = int.Parse(Input3);
    return val1 + val2 + val3;
}
</code></pre>
<p>The order in which the data will flow in the above example can be represented using the below diagram:</p>
<pre><code class="language-mermaid">stateDiagram-v2
        direction LR
        state &quot;Call Method&quot; as RunMethod
        [*] --&gt; RunMethod
        state &quot;Pass in Parameter 1&quot; as Param1
        state &quot;Pass in Parameter 2&quot; as Param2
        state &quot;Pass in Parameter 3&quot; as Param3
        RunMethod --&gt; Param1
        RunMethod --&gt; Param2
        RunMethod --&gt; Param3
        Param1 --&gt; MethodBody
        Param2 --&gt; MethodBody
        Param3 --&gt; MethodBody
        MethodBody --&gt; ReturnToCall
        state &quot;Return to Calling Context&quot; as ReturnToCall
        ReturnToCall --&gt; [*]
    
        state &quot;Method Body&quot; as MethodBody {
            state &quot;Parse Inputs&quot; as ParseInput
            state &quot;Return Sum&quot; as Return
            [*] --&gt; ParseInput
            ParseInput --&gt; Return
            Return --&gt; [*]
        }
</code></pre>
<h2>Method Signatures</h2>
<p>Method signatures are what uniquely identify methods from other methods. Each method has a signature when it is created, specified by the properties below:</p>
<ul>
<li>The method name</li>
<li>The parameter types, count, and order</li>
</ul>
<p>Multiple methods can be created with the same name, or other properties, but they cannot be created with the same signature. This means that methods can be <em><strong>overloaded</strong></em>, which allows for multiple versions of a method to exist and be called using the same name.</p>
<h2>Scope</h2>
<p><em>Scope</em> refers to the context in which a variable, method, or other programming construct resides. Whenever a variable, method, or other construct is accessed from within code, it must be available to the scope it is being accessed from.</p>
<p>Variables created inside of methods are <em>locally scoped</em>, meaning that they are scoped to the method that they are created in. These kinds of variables are referred to as <em>local variables</em>. They are only able to be accessed from within the method, and will be deleted once the method execution is complete. This means that variables created inside of a method cannot be utilized for persistent data storage, and must be treated as temporary storage.</p>
'}></div>
  );
});