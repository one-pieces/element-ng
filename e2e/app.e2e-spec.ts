import { ElementNgPage } from './app.po';

describe('element-ng App', () => {
  let page: ElementNgPage;

  beforeEach(() => {
    page = new ElementNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
