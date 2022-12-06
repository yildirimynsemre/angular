import { AmcambirnumaraTemplatePage } from './app.po';

describe('Amcambirnumara App', function() {
  let page: AmcambirnumaraTemplatePage;

  beforeEach(() => {
    page = new AmcambirnumaraTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
