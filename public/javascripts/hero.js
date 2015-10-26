// This is a simple class in TypeScript
// In this application, the Hero class is a simple value object
// that represents one of the Heroes in the database
System.register([], function(exports_1) {
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Hero;
            })();
            exports_1("Hero", Hero);
        }
    }
});
//# sourceMappingURL=../../app/app/hero.js.map