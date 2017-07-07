import { DemoReactiveFormsPage } from './app.po';

describe('demo-reactive-forms App', () => {
  let page: DemoReactiveFormsPage;

  beforeEach(() => {
    page = new DemoReactiveFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
