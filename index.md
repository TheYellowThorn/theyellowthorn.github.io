---
layout: default
---
<nav id='topbar'>
  {% include top-nav.html %}
</nav>
<h1 id='navtitle'>{{ site.title }}</h1>

<section id='content' class='no-shift overview'>

  <article>
    <section class="body always-show">
      <div class="callout-card">
        <div class="callout">
          <h1>TableJS</h1>
          <h2>An open-source solution for displaying complex grid content in Angular using familiar HTML, CSS, and Javascript concepts</h2>
          <form method="get" action="/tablejs/#getStarted" target="_self">
            <button class="primary">Get Started</button>
          </form>
          <form method="get" action="./tablejs/examples">
            <button class="secondary">Examples</button>
          </form>
        </div>
        <div class="img movie-table">
          {% include small-demo/index.html %}
        </div>
      </div>
    </section>
    
  </article>
{% for post in site.posts %}
  {% if post.page == 'overview' %}
    <article id="getStarted" class='{{ post.type }}'>
      <section class='body always-show install'>
        <h1>Install TableJS</h1>
        {{ post.content }}
      </section>
    </article>
    {% endif %}
{% endfor %}
  <article>
    <section class="body features">
    <h1>Grid Features</h1>
    <div class="floatBlock">
      <div class="float33">
        <div class="feature-block">
          <i class="fas fa-lg fa-infinity"></i>
        </div>
        <div class="feature-text">
          <h3>Infinite scrolling</h3>
          <div>TableJS utitlizes a technique to only render items that are within the scroll's viewport. This maximizes browser response time for render hundreds of thousands of rows of data.</div>
        </div>
      </div>
      <div class="float33">
        <div class="feature-block">
          <i class="fas fa-lg fa-arrows-alt-h"></i>
        </div>
        <div class="feature-text">
          <h3>Resizable columns</h3>
          <div>Columns can be resized with ease and minimal code.  The developer can determine resizing based on pixels or percentages. Column widths are determined based on CSS classes and not inline code, making alterations simpler and uniform.</div>
        </div>
      </div>
      <div class="float33">
        <div class="feature-block">
          <i class="fas fa-lg fa-arrows-alt"></i>
        </div>
        <div class="feature-text">
          <h3>Reorderable columns</h3>
          <div>TableJS supports both single header reordering and nested header reordering. </div>
        </div>
      </div>
    </div>
    <div class="floatBlock">
      <div class="float33">
        <div class="feature-block">
          <i class="fas fa-lg fa-project-diagram"></i>
        </div>
        <div class="feature-text">
          <h3>Nested headers</h3>
          <div>Bring clarity to your information by organizing your headers data.  Assign multiple headers under a parent header.  Child headers will resize proportionately when resizing the parent header.  Subheaders will be reorderable within the confines of the parent header.</div>
        </div>
      </div>
      <div class="float33">
        <div class="feature-block">
          <i class="fab fa-lg fa-html5"></i>
        </div>
        <div class="feature-text">
          <h3>Utilizes standard HTML tables</h3>
          <div>Table data should be displayed in tables.  Many other table and grid solutions rewrite tables with div tags.  Take advantage of the browser's natural table rendering by using TableJS.</div>
        </div>
      </div>
      <div class="float33">
        <div class="feature-block">
          <i class="fas fa-lg fa-expand"></i>
        </div>
        <div class="feature-text">
          <h3>Expandable Rows</h3>
          <div>Improve your user's experience.  Hide and reveal detailed content with expandable rows.</div>
        </div>
      </div>
    </div>
    <div class="floatBlock">
      <div class="float33">
        <div class="feature-block">
          <i class="fas fa-lg fa-link"></i>
        </div>
        <div class="feature-text">
          <h3>Linked table resizing</h3>
          <div>Column resizing and multiple tables can be linked together to improve performance and user experience.</div>
        </div>
      </div>
      <div class="float33">
        <div class="feature-block">
          <i class="fas fa-lg fa-route"></i>
        </div>
        <div class="feature-text">
          <h3>Resize and reorder event handling</h3>
          <div>The TableJS API provides resize and reorder event triggers for more responsive user interfaces.</div>
        </div>
      </div>
      <div class="float33">
        <div class="feature-block">
          <i class="fas fa-lg fa-filter"></i>
        </div>
        <div class="feature-text">
          <h3>Custom filtering</h3>
          <div>Provide custom functions for filtering grid data in almost any way imaginable.</div>
        </div>
      </div>
    </div>
    <div class="floatBlock">
      <div class="float33">
        <div class="feature-block">
          <i class="fas fa-lg fa-edit"></i>
        </div>
        <div class="feature-text">
          <h3>Cell editing</h3>
          <div>Update table cell content in real time.  The TableJS API allows for custom cell validation functions and regular expressions.</div>
        </div>
      </div>
      <div class="float33">
        <div class="feature-block">
          <i class="fab fa-lg fa-css3-alt"></i>
        </div>
        <div class="feature-text">
          <h3>CSS styling</h3>
          <div>TableJS uses CSS for all styling.  This makes integrating your tables into your web pages easy and customizable.</div>
        </div>
      </div>
      <div class="float33">
        <div class="feature-block">
          <i class="fas fa-lg fa-table"></i>
        </div>
        <div class="feature-text">
          <h3>Nested Tables in expandable rows</h3>
          <div>Tables can be placed inside other tables, and expanded rows can contain tables with their own autonomous TableJS content.</div>
        </div>
      </div>
    </div>
    <div class="floatBlock">
      <div class="float33">
        <div class="feature-block">
          <i class="fas fa-lg fa-universal-access"></i>
        </div>
        <div class="feature-text">
          <h3>Screen reader compatible</h3>
          <div>Provide better access to your customers by utitlizing the power of native HTML tables.  TableJS provides unparalleled accessibility by screen readers by adhering to standard HTML table practices.</div>
        </div>
      </div>
      <div class="float33">
        <div class="feature-block">
          <i class="fas fa-lg fa-print"></i>
        </div>
        <div class="feature-text">
          <h3>Print fidelity</h3>
          <div>Because TableJS is built upon HTML tables, the browser's print renderer will display the data as you see it on the screen.</div>
        </div>
      </div>
    </div>
    </section>
  </article>

</section>
