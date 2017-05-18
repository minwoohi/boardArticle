import { ArticleboardPage } from './app.po';

describe('articleboard App', function() {
  let page: ArticleboardPage;

  beforeEach(() => {
    page = new ArticleboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
