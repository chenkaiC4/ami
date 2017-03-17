/* globals describe, fdescribe, it, fit, expect, beforeEach*/

import VolumeLoader from '../../src/loaders/loaders.volume';

describe('Volume Loader', function() {
  let loader;

  beforeEach(() => {
    loader = new VolumeLoader();
  });

  afterEach(() => {
    loader = null;
  });

  describe('parse data', () => {
    it('give a single url', (done) => {
      loader.load('/base/data/dicom/adi_slice.dcm')
                .then((data) => {
                  expect(Array.isArray(data)).toBe(true);
                  expect(data.length).toBe(1);
                  done();
                });
    });

    it('give urls with array', (done) => {
      const urls = [
        '/base/data/dicom/adi_slice.dcm',
        '/base/data/nifti/adi_slice.nii',
      ];
      loader.load(urls)
                .then((data) => {
                  expect(Array.isArray(data)).toBe(true);
                  expect(data.length).toBe(2);
                  done();
                });
    });
  });
});
