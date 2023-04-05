import {render} from '..';

test('renders Markdown', async () => {
  const html = await render('- Hello world!');
  expect(html).toBe('<ul>\n<li>Hello world!</li>\n</ul>\n');
}, 30000);
