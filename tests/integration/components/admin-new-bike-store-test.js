import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-new-bike-store', 'Integration | Component | admin new bike store', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin-new-bike-store}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin-new-bike-store}}
      template block text
    {{/admin-new-bike-store}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
