---
title: Publicações
layout: single
permalink: /publicacoes/
---

<style>
.bibtex_structure {
  padding: 1rem 0;
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
}

.bibtex_structure .group {
  margin-bottom: 1.5rem;
}

.bibtex_template li {
  margin-bottom: 1rem;
  line-height: 1.5;
}

.bibtex_template .title {
  font-weight: bold;
  color: #b0fe76;
}

.bibtex_template .author {
  color: #f0f0f0;
  font-size: 0.85rem;
}

h2 {
  margin-top: 2rem;
  color: #b0fe76;
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 1px solid #b0fe76;
  padding-bottom: 0.3rem;
}
</style>

<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/pcooksey/bibtex-js@1.0.0/src/bibtex_js.js"></script>

<p>Lista de publicações por membros do grupo de pesquisa:</p>

{% for pub in site.data.publications %}
  <bibtex src="{{ pub.bib }}"></bibtex>
{% endfor %}

<div class="bibtex_structure">
  <div class="group year" extra="DESC string">
    <a href="#top" style="display: inline"><em>(Topo da página)</em></a>
    <div style="padding-bottom:10px;"></div>
    <div class="sort journal" extra="ASC string">
      <div class="templates"></div>
    </div>
  </div>
</div>

<div id="bibtex_display">
  <div class="if bibtex_template" style="display: none;">
    <ul>
      <li>
        <span class="if journal !nolink">
          <a class="bibtexVar" href="+URLORDEFAULT+" extra="BIBTEXKEY">
            <span style="text-decoration: underline;" class="title"></span>,
          </a>
        </span>
        <b><span class="title"></span></b>,
        <div class="if author"><span class="author"></span></div>
        <div>
          <span class="if journal"><em><span class="journal"></span></em>,</span>
          <span class="if booktitle">In <em><span class="booktitle"></span></em>,</span>
          <span class="if editor"><span class="editor"></span> (editors),</span>
          <span class="if publisher"><em><span class="publisher"></span></em>,</span>
          <span class="if !journal number">Technical report <span class="number"></span>,</span>
          <span class="if institution"><span class="institution"></span>,</span>
          <span class="if address"><span class="address"></span>,</span>
          <span class="if volume"><span class="volume"></span>,</span>
          <span class="if journal number">(<span class="number"></span>),</span>
          <span class="if pages"> pages <span class="pages"></span>,</span>
          <span class="if month"><span class="month"></span>,</span>
          <span class="if year"><span class="year"></span>.</span>
          <span class="if note"><span class="note"></span>.</span>
        </div>
        <div style="display:none"><span class="bibtextype"></span></div>
        <div style="display:none"><span class="if topic"><span class="topic"></span></span></div>
      </li>
    </ul>
  </div>
</div>
