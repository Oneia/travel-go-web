import { TravelGoWebPage } from './app.po';

describe('travel-go-web App', () => {
  let page: TravelGoWebPage;

  beforeEach(() => {
    page = new TravelGoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
