import { SanitizeHtmlPipe } from './sanitize-html.pipe';

describe('SanitizeHtmlPipe', () => {
  it('create an instance', () => {
    // @ts-ignore
    const pipe = new SanitizeHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
