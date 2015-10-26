# Angular 2 Preview

## Setup

In one terminal session:

```
npm install
npm run tsc
```

In another terminal session:

```
npm start
```

Then open http://localhost:3000

## Get familiar

- Add some heroes
- Click on some heroes
- Edit the names of some heroes

## Activity #1

Create a new component that will show the number of Heroes in the upper right-hand corner.

### Step 1

Create a new component.  In `app/app.ts`, below line 3, add the following:

```js
@Component({
  selector: 'counter',
  template: `{{heroes.length}}`,
  properties: ['heroes']
})
class CountComponent {
  public heroes: Hero[]
}
```

### Step 2

Tell the AppComponent about the new component by changing the directives line to:

```js
directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, CountComponent],
```

### Step 3

Use the new component.  In `public/partials/heroes.html` replace the comment with:

```html
<counter [heroes]="heroes"></counter>
```

## Activity #2

Experiment how `ViewEncapsulation` options change the markup.  Options are:

- `None`
- `Emulated`
- `Native`

With each change, add and remove the `@import url(/bootstrap/dist/css/bootstrap.min.css);` line.

http://blog.thoughtram.io/angular/2015/06/29/shadow-dom-strategies-in-angular2.html

## Activity #3

Look at better alternatives:

- [React](https://facebook.github.io/react/docs/component-api.html)
- [Ember](http://guides.emberjs.com/v2.1.0/components/defining-a-component/)

## Resources

- http://victorsavkin.com/post/119943127151/angular-2-template-syntax
- https://blogs.windows.com/msedgedev/2015/07/14/bringing-componentization-to-the-web-an-overview-of-web-components/#javascript-and-scopes

## Stretch Goals
