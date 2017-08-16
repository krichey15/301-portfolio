'use strict';

var projectArray = [];

function Project(myProjects){
  this.name = myProjects.name;
  this.url = myProjects.url;
  this.describe = myProjects.describe;
}
console.log(projectArray);

Project.prototype.toHTML = function() {
  var $newProject = $('div.thumbnail-container').clone();

  $newProject.find('h1').text(this.name);
  $newProject.find('iframe').attr('src', this.url);
  $newProject.find('p').text(this.describe);
}
