---
title: Projetos
layout: single
permalink: /projetos/
---

<style>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 2rem;
}

.project-link-wrapper {
  text-decoration: none;
  width: 280px;
}

.project {
  background-color: #1f2233;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease;
  height: 100%;
}

.project:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 2px solid #b0fe76;
}

.project-title {
  padding: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #b0fe76;
  text-align: center;
}

.project-description {
  font-size: 0.55rem;
  color: #ccc;
  padding: 0 1rem 0.5rem;
  text-align: center;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;
  padding: 0 1rem 0.5rem;
}

.tag {
  background-color: #b0fe76;
  color: #2d3047;
  padding: 0.2rem 0.5rem;
  font-size: 0.55rem;
  border-radius: 0.5rem;
  font-weight: 600;
}

.project-status {
  font-size: 0.45rem;
  color: #f0f0f0;
  background-color: #4c4c4c;
  border-top: 1px solid #b0fe76;
  padding: 0.5rem;
  text-align: center;
  font-style: italic;
}


/* Responsivo */
@media (max-width: 768px) {
  .project-link-wrapper {
    width: 100%;
  }
}
</style>




<div class="projects-container">
  {% for project in site.data.projects %}
    <a href="{{ project.url }}" class="project-link-wrapper">
      <div class="project">
        <img src="{{ project.image }}" alt="{{ project.name }}" class="project-image">
        <div class="project-title">{{ project.name }}</div>
        {% if project.description %}
          <div class="project-description">{{ project.description }}</div>
        {% endif %}
        {% if project.tags %}
          <div class="project-tags">
            {% for tag in project.tags %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
        {% if project.status %}
          <div class="project-status">{{ project.status }}</div>
        {% endif %}
      </div>
    </a>
  {% endfor %}
</div>

