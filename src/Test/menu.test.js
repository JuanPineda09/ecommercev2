const {desplegarMenu} = require('../components/Nav')

test('Despliegue de menu', () => {
    expect(desplegarMenu).toBe(false);
  });