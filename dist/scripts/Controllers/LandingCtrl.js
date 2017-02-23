 (function() {
     function LandingCtrl(Todo) {
     	this.todos = Todo.todos;
     }
 
     angular
         .module('blocitoff')
         .controller('LandingCtrl', ['Todo', LandingCtrl]);
 })();