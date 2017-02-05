import { BenoitJehannoNetPage } from './app.po';

describe('benoit-jehanno-net App', function() {
  let page: BenoitJehannoNetPage;

  beforeEach(() => {
    page = new BenoitJehannoNetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
