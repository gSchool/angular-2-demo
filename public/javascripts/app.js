var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var Hero = (function () {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    }
    return Hero;
})();
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.title = 'Tour of Heroes';
        this.heroes = [];
        this.http = http;
        http.get('/api/heroes')
            .map(function (res) { return res.json(); })
            .subscribe(function (people) { return _this.heroes = people; });
    }
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    AppComponent.prototype.addHero = function (hero) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.set('Content-Type', 'application/json');
        this.http.post('/api/heroes', JSON.stringify({ name: hero }), new http_1.RequestOptions({ headers: headers })).map(function (res) { return res.json(); })
            .subscribe(function (hero) { return _this.heroes.push(hero); });
    };
    AppComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addHero($event.target.value);
            $event.target.value = null;
        }
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'demo-component',
            viewProviders: [http_1.HTTP_PROVIDERS],
            templateUrl: "/partials/heroes.html",
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            styles: ["\n    @import url(/bootstrap/dist/css/bootstrap.min.css);\n  "],
            encapsulation: angular2_1.ViewEncapsulation.Native,
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map