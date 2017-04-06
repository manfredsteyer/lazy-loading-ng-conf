import { StarterPage } from './app.po';

describe('starter App', () => {
  let page: StarterPage;

  beforeEach(() => {
    page = new StarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
