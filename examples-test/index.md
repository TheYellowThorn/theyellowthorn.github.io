---
layout: onelevelup
---
<nav id='topbar'>
  {% include top-nav.html %}
</nav>

<nav id='sidebar'>
	{% include examples-test-side-nav.html %}
</nav>

<section id='content' class='example-section'>
{% for post in site.posts %}
  {% if post.page == 'examplestest' %}
    {% if post.header %}
    <h2 class="docs-header">{{ post.header }}</h2>
    {% endif %}
    <article class='{{ post.type }}'>
      <a name='{{ post.url }}' href='#{{ post.url }}'><h2>{% if post.type %}<code><b>{{ post.type }}</b> {{ post.url_path }}</code> {% endif %}{{ post.title }}</h2></a>
      <section class='body'>
        {{ post.content }}
      </section>
    </article>
    {% endif %}
{% endfor %}
</section>
