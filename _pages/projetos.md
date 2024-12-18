---
title: Projetos
layout: single
permalink: /projetos/
---

<style type="text/css">

.projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 20px;
}

.project {
    width: 30%;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin: 10px;
    text-align: center;
}

.project-image {
    width: 100%;
    height: auto;
}

.project-link {
    display: block;
    padding: 10px 0;
    font-size: 16px;
    color: #333;
    text-decoration: none;
}
</style>


<div class="projects-container">
    {% for project in site.data.projects %}
    <div class="project">
        <img src="{{ project.image }}" alt="{{ project.name }}" class="project-image">
        <a href="{{ project.url }}" class="project-link">{{ project.name }}</a>
    </div>
    {% endfor %}
</div>
