import { NgInitPage } from './app.po';

describe('ng-init App', () => {
  let page: NgInitPage;

  beforeEach(() => {
    page = new NgInitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
