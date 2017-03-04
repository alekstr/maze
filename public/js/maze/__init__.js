var $builtinmodule = function(name) {
  var mod = {};

  mod.Maze = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function(self) {

    });

    $loc.getMaze = new Sk.builtin.func(function(self) {
        alert(window.API.getMaze());
    });

    $loc.getCurrentPosition = new Sk.builtin.func(function(self) {
        var pos = window.API.getCurrentPosition();
    });


    $loc.up = new Sk.builtin.func(function(self) {
        window.API.up();
    });

    $loc.down = new Sk.builtin.func(function(self) {
      window.API.down();
    });
    $loc.left = new Sk.builtin.func(function(self) {
      window.API.left();
    });
    $loc.right = new Sk.builtin.func(function(self) {
      window.API.right();
  });

  },'Maze', []);

return mod;
}
