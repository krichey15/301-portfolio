'use strict';

<<<<<<< HEAD
<<<<<<< HEAD
=======
var projects = [];

>>>>>>> master
=======
>>>>>>> master
function Project(rawDataProj){
  this.name = rawDataProj.name;
  this.url = rawDataProj.url;
  this.describe = rawDataProj.describe;
}
<<<<<<< HEAD
<<<<<<< HEAD

Project.all =[];

Project.prototype.toHtml = function () {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);

  return template(this);

  // var $newProject = $('div.thumbnail-container').clone();
  // $newProject.removeClass('thumbnail-container');
  //
  // $newProject.find('h1').text(this.name);
  // $newProject.find('img').attr('src', this.url);
  // $newProject.find('img').attr('alt', this.name);
  // $newProject.find('p').html(this.describe);
  //
  // return $newProject;
}

Project.loadAll = function (myProjects) {
  myProjects.forEach(function(ele){
    Project.all.push(new Project(ele));
  });
};

// Project.forEach(function(project) {
//   $('body').append(project.toHtml());
// });

Project.fetchAll = function () {
  if (localStorage.myProjects) {
    Project.loadAll(JSON.parse(localStorage.myProjects));
    projectView.initIndex();
  } else {
    $.getJSON('data/rawProjects.json', function (myProjects){
      Project.loadAll(myProjects);
      localStorage.myProjects = JSON.stringify(myProjects);
      projectView.initIndex();
    },function (err){
      console.log(err);
    });
  }
}
=======
console.log(projects);
=======

Project.all =[];
>>>>>>> master

Project.prototype.toHtml = function () {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);

  return template(this);

  // var $newProject = $('div.thumbnail-container').clone();
  // $newProject.removeClass('thumbnail-container');
  //
  // $newProject.find('h1').text(this.name);
  // $newProject.find('img').attr('src', this.url);
  // $newProject.find('img').attr('alt', this.name);
  // $newProject.find('p').html(this.describe);
  //
  // return $newProject;
}

Project.loadAll = function (myProjects) {
  myProjects.forEach(function(ele){
    Project.all.push(new Project(ele));
  });
};

<<<<<<< HEAD
projects.forEach(function(project) {
  $('body').append(project.toHtml());
});
>>>>>>> master
=======
// Project.forEach(function(project) {
//   $('body').append(project.toHtml());
// });

Project.fetchAll = function () {
  if (localStorage.myProjects) {
    Project.loadAll(JSON.parse(localStorage.myProjects));
    projectView.initIndex();
  } else {
    $.getJSON('data/rawProjects.json', function (myProjects){
      Project.loadAll(myProjects);
      localStorage.myProjects = JSON.stringify(myProjects);
      projectView.initIndex();
    },function (err){
      console.log(err);
    });
  }
}
>>>>>>> master
