import { PostAppPage } from './app.po';

describe('post-app App', () => {
  let page: PostAppPage;

  beforeEach(() => {
    page = new PostAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
