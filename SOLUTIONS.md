## Step 1

Create a new component.  In `app/app.ts`, below line 3, add the following:

```js
@Component({
  selector: 'counter',
  template: `
    {{heroes.length}}
  `,
  properties: ['heroes']
})
class CountComponent {
}
```

## Step 2

Tell the AppComponent about the new component by changing the directives line to:

```js
directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, CountComponent],
```

## Step 3

Use the new component.  In `public/partials/heroes.html` replace the comment with:

```html
<counter heroes={heroes}></counter>
```
