 (function() {
     function CompleteCtrl($scope, Todo) {
     	//this.todos = Todo.todos;
     	this.todos = Todo.todos;
     	this.current_time = (new Date()).getTime();
     	
     }
 
     angular
         .module('blocitoff')
         .controller('CompleteCtrl', ['$scope', 'Todo', CompleteCtrl]);
 })();