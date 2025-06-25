---
layout: home
permalink: /
header:
  image: /assets/images/time_visao_2025.jpg
  caption: "Reunião Time Visão 2025"
---


<!-- mantém o visual do header -->
<div style="text-align: center; margin-bottom: 2rem;">
  <img src="/assets/images/time_visao_2025.jpg" alt="Reunião Time Visão 2025" style="max-width: 100%; border-radius: 1rem;">
  <p style="font-size: 0.8rem; color: #ccc;">Reunião Time Visão 2025</p>
</div>

<!-- QUEM SOMOS -->
<div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: center; justify-content: center; padding: 2rem;">
  <div style="max-width: 700px; color: #f0f0f0; text-align: justify;">
    <h2 style="color: #b0fe76;">Quem somos</h2>
    <p>
      O <strong>Time Visão</strong> é um grupo de pesquisa da Universidade de Pernambuco focado no desenvolvimento de soluções em inteligência artificial com ênfase em visão computacional, aprendizado profundo e robótica. Reunimos estudantes e pesquisadores de graduação, mestrado, doutorado e pós-doutorado, unindo excelência acadêmica e impacto social.
    </p>
    <a href="/sobre/" style="color: #b0fe76; text-decoration: underline;">Conheça mais sobre o grupo →</a>
  </div>
</div>

<!-- ÁREAS DE ATUAÇÃO -->
<div style="text-align: center; padding: 2rem;">
  <h2 style="color: #b0fe76;">Áreas de Atuação</h2>
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 1rem;">
    {% assign areas = "Visão Computacional, Aprendizado de Máquina, Robótica, IA Distribuída, Processamento de Vídeo, Reconhecimento Facial" | split: ", " %}
    {% for area in areas %}
    <span style="background: #1f2233; color: #b0fe76; padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.85rem;">
      {{ area }}
    </span>
    {% endfor %}
  </div>
</div>

<!-- ÚLTIMAS NOVIDADES -->
<div style="padding: 2rem;">
  <h2 style="color: #b0fe76; text-align: center;">Últimas Novidades</h2>
  <div class="posts-grid">
    {% for post in site.posts limit: 3 %}
    <div class="post-card">
      {% if post.image %}
        <img src="{{ post.image }}" alt="{{ post.title }}">
      {% endif %}
      <div class="post-content">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <div class="meta">Publicado em {{ post.date | date: "%d/%m/%Y" }}</div>
        <div class="excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</div>
      </div>
    </div>
    {% endfor %}
  </div>
  <div style="text-align: center; margin-top: 1rem;">
    <a href="/novidades/" style="color: #b0fe76;">Ver todas as notícias →</a>
  </div>
</div>

<!-- PROJETOS EM DESTAQUE -->
<div style="padding: 2rem;">
  <h2 style="color: #b0fe76; text-align: center;">Projetos em Destaque</h2>
  <div class="projects-container">
    {% for project in site.data.projects limit: 3 %}
    <a href="{{ project.url }}" class="project-link-wrapper">
      <div class="project">
        <img src="{{ project.image }}" alt="{{ project.name }}" class="project-image">
        <div class="project-title">{{ project.name }}</div>
      </div>
    </a>
    {% endfor %}
  </div>
  <div style="text-align: center; margin-top: 1rem;">
    <a href="/projetos/" style="color: #b0fe76;">Ver todos os projetos →</a>
  </div>
</div>

---