---
title: Pesquisadores
layout: single
permalink: /pesquisadores/
---

<style type="text/css">
.researchers-container {
    padding: 20px;
}

.category-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 20px;
}

.researcher {
    width: 20%;
    text-align: center;
    margin: 10px;
}

.researcher-image {
    width: 100%;
    height: auto;
    border-radius: 50%; /* Opcional, para imagens redondas */
}

.researcher-name {
    margin-top: 10px;
    font-size: 16px;
}
</style>

<div class="researchers-container">
    {% for category in site.data.researchers %}
    <h2>{{ category.name }}</h2> 
    <div class="category-container">
        {% assign sorted_researchers = category.members | sort: "name" %}
        {% for researcher in sorted_researchers %}
        <div class="researcher">
            <img src="{{ researcher.image }}" alt="{{ researcher.name }}" class="researcher-image">
            <div class="researcher-name"><a href="{{ researcher.url }}" class="project-link">{{ researcher.name }}</a></div>
        </div>
        {% endfor %}
    </div>
    {% endfor %}
</div>
