import {provide, bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES, ViewEncapsulation} from 'angular2/angular2';
import {HTTP_PROVIDERS, Http, BaseRequestOptions, RequestOptions, Headers} from 'angular2/http';
import {Hero} from './hero';

// @Component is an annotation that applies to the AppComponent class below
//
// **selector** determines the TagName of the new HTML element: <demo-component>
// **templateUrl** the first time this template is rendered, Angular will load the heroes.html file
// **providers** determines what will get injected into the AppComponent constructor
// **directives** directives listed here are available to the template (ng-class, ng-if, ng-repeat)
// **encapsulation** determines how Angular will display templates - shadow DOM or not
// **styles** css that will _only_ apply to this component
@Component({
  selector: 'demo-component',
  templateUrl: "/partials/heroes.html",
  providers: [HTTP_PROVIDERS],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  encapsulation: ViewEncapsulation.Native,
  styles:[`
    @import url(/bootstrap/dist/css/bootstrap.min.css);
    a { cursor: pointer; }
    .list-group-item:first-of-type {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  `],
})
class AppComponent {

  // declare some properties
  public title = "Tour of Heroes";
  public selectedHero: Hero;
  public heroes: Hero[] = [];
  public http: Http;

  // by declaring the http parameter, Angular will inject the Http service
  // into this class automatically.  It _injects_ the Http service.
  constructor(http: Http) {
    this.http = http
  }

  // this method is called after the constructor has run,
  // and also after properties have been set
  onInit() {
    this.http.get('/api/heroes')
      .map(res => res.json())
      .subscribe(people => this.heroes = people);
  }

  // This is the event handler that fires when clicking a hero in the sidebar
  onSelect(hero: Hero) { this.selectedHero = hero; }

  // This method returns an object which the template passes to ng-class - basically:
  // "When the passed in hero matches the selectedHero, apply the 'active' class to the element"
  getSelectedClass(hero: Hero) {
    return { 'active': hero === this.selectedHero };
  }

  // This is the event handler that fires when clicking "Add Hero"
  // It handles both calling the `addHero` method
  // and also clearing out the text field.
  // NOTE: there's a one-way data flow from the element to the class,
  // which is different from Angular 1's default 2-way binding
  doneTyping($event) {
    if($event.which === 13) {
      this.addHero($event.target.value);
      $event.target.value = null;
    }
  }

  addHero(hero: string) {
    var headers: Headers = new Headers();
    headers.set('Content-Type', 'application/json')
    this.http.post( '/api/heroes', JSON.stringify({name: hero}), { headers: headers } )
      .map(res => res.json())
      .subscribe(hero => this.heroes.push(hero));
  }
}

bootstrap(AppComponent);
