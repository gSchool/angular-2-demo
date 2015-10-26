System.register(['angular2/angular2', 'angular2/http'], function(exports_1) {
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
    var angular2_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            // @Component is an annotation that applies to the AppComponent class below
            //
            // **selector** determines the TagName of the new HTML element: <demo-component>
            // **templateUrl** the first time this template is rendered, Angular will load the heroes.html file
            // **providers** determines what will get injected into the AppComponent constructor
            // **directives** directives listed here are available to the template (ng-class, ng-if, ng-repeat)
            // **encapsulation** determines how Angular will display templates - shadow DOM or not
            // **styles** css that will _only_ apply to this component
            AppComponent = (function () {
                // by declaring the http parameter, Angular will inject the Http service
                // into this class automatically.  It _injects_ the Http service.
                function AppComponent(http) {
                    // declare some properties
                    this.title = "Tour of Heroes";
                    this.heroes = [];
                    this.http = http;
                }
                // this method is called after the constructor has run,
                // and also after properties have been set
                AppComponent.prototype.onInit = function () {
                    var _this = this;
                    this.http.get('/api/heroes')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (people) { return _this.heroes = people; });
                };
                // This is the event handler that fires when clicking a hero in the sidebar
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                // This method returns an object which the template passes to ng-class - basically:
                // "When the passed in hero matches the selectedHero, apply the 'active' class to the element"
                AppComponent.prototype.getSelectedClass = function (hero) {
                    return { 'active': hero === this.selectedHero };
                };
                // This is the event handler that fires when clicking "Add Hero"
                // It handles both calling the `addHero` method
                // and also clearing out the text field.
                // NOTE: there's a one-way data flow from the element to the class,
                // which is different from Angular 1's default 2-way binding
                AppComponent.prototype.doneTyping = function ($event) {
                    if ($event.which === 13) {
                        this.addHero($event.target.value);
                        $event.target.value = null;
                    }
                };
                AppComponent.prototype.addHero = function (hero) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.set('Content-Type', 'application/json');
                    this.http.post('/api/heroes', JSON.stringify({ name: hero }), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (hero) { return _this.heroes.push(hero); });
                };
                AppComponent = __decorate([
                    angular2_1.Component({
                        selector: 'demo-component',
                        templateUrl: "/partials/heroes.html",
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
                        encapsulation: angular2_1.ViewEncapsulation.Native,
                        styles: ["\n    @import url(/bootstrap/dist/css/bootstrap.min.css);\n    a { cursor: pointer; }\n    .list-group-item:first-of-type {\n      border-top-left-radius: 4px;\n      border-top-right-radius: 4px;\n    }\n  "],
                    }),
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            })();
            angular2_1.bootstrap(AppComponent);
        }
    }
});
//# sourceMappingURL=../../app/app/app.js.map
