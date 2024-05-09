---
layout: onelevelup
---
<nav id='topbar'>
  {% include top-nav.html %}
</nav>

<nav id='sidebar'>
	{% include nav.html %}
</nav>

<section id='content' class='api-content'>
  <div class="info-msg">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
    <i class="fa fa-info-circle"></i>
    TableJS versions 1.0.0 - 1.4.* are for Angular 11 and lower. Versions 2.0.0+ are for Angular 12+.
  </div>
{% for post in site.posts %}
  {% if post.page == 'api' %}
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
