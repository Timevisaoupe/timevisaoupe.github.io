---
title: Pesquisadores
layout: single
permalink: /pesquisadores/
---

<style>
.researchers-container {
  padding: 2rem;
}

.category-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.researcher {
  background-color: #1f2233;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 220px;
  min-height: 310px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza a imagem horizontalmente */
  justify-content: space-between; /* Distribui imagem e nome com espaço entre */
  text-align: center;
  transition: transform 0.3s ease;
}

.researcher:hover {
  transform: translateY(-5px);
}

.researcher-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #b0fe76;
  margin-bottom: 0.5rem;
}

.researcher-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: #b0fe76;
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}


.researcher-name a {
  color: #b0fe76;
  text-decoration: none;
}

.researcher-name a:hover {
  text-decoration: underline;
}

.researcher-link-wrapper {
  text-decoration: none;
  width: 220px;
}

.researcher-link-wrapper:hover .researcher-name {
  text-decoration: underline;
}

.researcher-bio {
  font-size: 0.45rem;
  color: #ccc;
  margin-top: 0.25rem;
}

.researcher-area {
  font-size: 0.45rem;
  color: #b0fe76;
  margin-top: 0.25rem;
}

@media (max-width: 992px) {
  .category-container {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .researcher {
    width: 80%;
  }
}

</style>


<div class="researchers-container">
    {% for category in site.data.researchers %}
    <h2>{{ category.name }}</h2> 
    <div class="category-container">
        {% for researcher in category.members %}
        <a href="{{ researcher.url }}" class="researcher-link-wrapper">
        <div class="researcher">
            <img src="{{ researcher.image }}" alt="{{ researcher.name }}" class="researcher-image">
            <div class="researcher-name">{{ researcher.name }}</div>
            {% if researcher.bio %}
            <div class="researcher-bio">{{ researcher.bio }}</div>
            {% endif %}
            {% if researcher.area %}
            <div class="researcher-area">{{ researcher.area }}</div>
            {% endif %}
        </div>
        </a>
        {% endfor %}
    </div>
    {% endfor %}
</div>
