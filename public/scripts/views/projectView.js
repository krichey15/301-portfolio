'use strict';

var projectView = {};

projectView.populateFilter = function (){
  $('div').each(function(){
    if (!$(this).hasClass('thumbnail-container')){
      var val = $(this).find('h1').text();
      var optionTag = `<option value="${val}">${val}</option>`;
    }

    if ($(`#project-filter option[value="${val}"]`).length === 0) {
      $('#project-filter').append(optionTag);
    }
  });
}

projectView.initIndex = function () {
  Project.all.forEach(function(article) {
    $('body').append(article.toHtml())
  });

  projectView.populateFilter();
}
