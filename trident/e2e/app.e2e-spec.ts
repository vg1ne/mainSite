import { TridentPage } from './app.po';

describe('trident App', () => {
  let page: TridentPage;

  beforeEach(() => {
    page = new TridentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
