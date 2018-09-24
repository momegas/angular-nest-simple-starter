import { FrontModule } from './front.module';

describe('FrontModule', () => {
  let frontModule: FrontModule;

  beforeEach(() => {
    frontModule = new FrontModule();
  });

  it('should create an instance', () => {
    expect(frontModule).toBeTruthy();
  });
});
