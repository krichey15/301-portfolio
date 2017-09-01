'use strict';

var projects = [];

function Project(rawDataProj){
  this.name = rawDataProj.name;
  this.url = rawDataProj.url;
  this.describe = rawDataProj.describe;
}
console.log(projects);

Project.prototype.toHtml = function () {
  var $newProject = $('div.thumbnail-container').clone();

  $newProject.find('h1').html(this.name);
  $newProject.find('iframe').attr('src', this.url);
  $newProject.find('p').html(this.describe);

  return $newProject;
}

myProjects.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});
