(function() {
  function Todo($firebaseArray) {
    var ref = firebase.database().ref().child("todos");
    var todos = $firebaseArray(ref);
    Todo.todos = todos;

    Todo.addToDo = function(todo){
      current_time = (new Date()).getTime();
      if (todo.priority.toLowerCase() == "high"){
          todos.$add({ Description : todo.description, Priority : 2, Complete : false, Created_at : current_time }).then(function(ref) {
          var id = ref.key;
          console.log("added record with id " + id);
          todos.$indexFor(id); // returns location in the array
        });
      } else if (todo.priority.toLowerCase() == "medium"){
          todos.$add({ Description : todo.description, Priority : 1, Complete : false, Created_at : current_time }).then(function(ref) {
          var id = ref.key;
          console.log("added record with id " + id);
          todos.$indexFor(id); // returns location in the array
        });
      } else {
          todos.$add({ Description : todo.description, Priority : 0, Complete : false, Created_at : current_time }).then(function(ref) {
          var id = ref.key;
          console.log("added record with id " + id);
          todos.$indexFor(id); // returns location in the array
        });
      }
    };

    Todo.updateToDo = function(todo){
      console.log(ref.child(todo['$id']));
      ref.child(todo['$id']).update({ Complete: true });
    };

    return Todo;
  }

  angular
    .module('blocitoff')
    .factory('Todo', ['$firebaseArray', Todo]);
})();