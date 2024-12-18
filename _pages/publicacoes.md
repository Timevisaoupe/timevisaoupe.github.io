---
title: Publicacoes
layout: single
permalink: /publicacoes/
---

<bibtex src="/assets/bibs/pablo_barros.bib"></bibtex>

<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/pcooksey/bibtex-js@1.0.0/src/bibtex_js.js"></script>


<script>     
		$(function() {
		  $("#Fontselector").on("change",function() {
		    var font = $("#Fontselector option:selected").text();
		    console.log(font);

		    $('.title.fonters').each(function() {
		    	$(this).css("font-family",font);
		    });
		  });
		});
		function reset() {
			$("select").each(function () {
			  localStorage.setItem($(this).attr("id"),"");
			  $(this).val("");
			});
			$("#searchbar").val("");
			$("#searchbar").trigger('change');
		}
		function resetOtherFilters(changedId) {
  $("select").each(function() {
    if ($(this).attr("id") !== changedId) {
      $(this).val("");
    }
  });
  $("#searchbar").val("");
}

$("#authorselectfirst, #authorselect").on("change", function() {
  resetOtherFilters($(this).attr("id"));
  $(this).trigger('change');
});

</script>

<style>
	    html,body,span,h1 {
	    	font-family: "Times New Roman", Times, serif;
	    	font-size: 17px;
	    }
	    bibtex { display: none; }
	    .searchbar { margin-left:0px;}
	    #bibtex_errors { margin-top:10px; color: red;}
	    h1.header {margin-left:8px;}
	    h1.YEAR { font-size: 17px; font-weight: bold; display: inline; margin-left:8px;}


</style>

Lista de publicacoes:


<div class="bibtex_structure">
    <div class="group year" extra="ASC number">
        <a href="#top" style="display: inline"><em>(Top of the page)</em></a>
        <div style="padding-bottom:10px;"></div>
        <div class="sort journal" extra="DESC string">
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

                <span class="if title nolink">
            <span class="title"></span>,
      </span>
                <div class="if author">
                    <span class="author"></span>
                </div>
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

            </li>
        </ul>
    </div>

</div>