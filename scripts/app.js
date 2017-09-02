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
  $newProject.removeClass('thumbnail-container');

  $newProject.find('h1').text(this.name);
  $newProject.find('img').attr('src', this.url);
  $newProject.find('img').attr('alt', this.name);
  $newProject.find('p').html(this.describe);

  return $newProject;
}

myProjects.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('body').append(project.toHtml());
});
