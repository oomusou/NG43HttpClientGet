import { NG43HttpClientPage } from './app.po';

describe('ng43-http-client App', () => {
  let page: NG43HttpClientPage;

  beforeEach(() => {
    page = new NG43HttpClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
