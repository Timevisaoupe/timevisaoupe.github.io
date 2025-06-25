---
title: Novidades
layout: single
permalink: /novidades/
---

<style>
.posts-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 0;
}

.post-card {
  background-color: #1f2233;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  transition: transform 0.2s ease;
  align-items: flex-start;
}

.post-card:hover {
  transform: translateY(-3px);
}

.post-card img {
  width: 180px;
  height: 120px;
  border-radius: 0.5rem;
  object-fit: cover;
  flex-shrink: 0;
}

.post-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.post-content h2 {
  font-size: 1rem;
  color: #b0fe76;
  margin: 0 0 0.5rem;
}

.post-content h2 a {
  text-decoration: none;
  color: #b0fe76;
}

.post-content .meta {
  font-size: 0.7rem;
  color: #aaa;
  margin-bottom: 0.5rem;
}

.post-content .excerpt {
  font-size: 0.8rem;
  color: #f0f0f0;
  text-align: justify;
}

@media (max-width: 768px) {
  .post-card {
    flex-direction: column;
  }

  .post-card img {
    width: 100%;
    height: auto;
  }
}
</style>

<h1>Últimas Notícias do Time Visão</h1>

<div class="posts-grid">
{% for post in site.posts %}
  <div class="post-card">
    {% if post.image %}
    <div style="text-align: center; margin-bottom: 1rem;">
        <img src="{{ post.image }}" alt="{{ post.title }}" style="max-width: 100%; border-radius: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
    </div>
    {% endif %}
    <div class="post-content">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <div class="meta">Publicado em {{ post.date | date: "%d/%m/%Y" }} · {{ post.author | default: "Time Visão" }}</div>
      <div class="excerpt">
        {{ post.excerpt | strip_html | truncatewords: 35 }}
      </div>
    </div>
  </div>
{% endfor %}
</div>
