import { component$ } from '@builder.io/qwik';

export const Welcome_to_the_class = component$(() => {
  return <div innerHTML={'<hr>
<h2>aliases:
  - Lessons</h2>
<p>Welcome to the notes for Diego&#39;s programming lessons! The notes here will be organized into folders, but should also be viewable using the graph view in the bar on your left. Each of our Lessons are tagged with #Lesson , so you should be able to filter on those in the graph view if desired.</p>
<p>You can join our classes live at any time using <a href="https://discord.gg/zv3TpFnA6X?event=1190707056412467420">this link</a>. Before joining the classes, you&#39;ll want to [[Lesson 0 - Environment Setup|install visual studio]] and create a new project to work in.</p>
'}></div>;
});