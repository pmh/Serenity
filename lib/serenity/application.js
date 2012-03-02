var Serenity = { Object: require("./object") };

var Application = Serenity.Object.clone(function () {
  this._resolve_type = function (name, obj) {
    if (name.substring(0, 1).match(/[A-Z]/)) obj.type = name;
  };
  
  this._traverse = function (fn) {
    if (this.forEach) {
      this.forEach(function (name, obj) {
        fn(name, obj);
        Application._traverse.call(obj, fn);
      });
    }
  };
  
  this.run = function () {
    this._traverse(function (name, obj) {
      Application._resolve_type(name, obj);
    });
  };
});

module.exports = Application;