// Require does automatic caching, so there is no need to check if a resource has already been loaded
// Each resource is loaded lazily to reduce resource consumption
// The code can be changed to preload assets that take a long time to load on startup in order to increase frame load speed


class LoadableAsset {
  constructor(loadFunction) {
    this.loadFunction = loadFunction;
  }

  load() {
    return this.loadFunction();
  }
}

const user_png = new LoadableAsset(() => {
  return require('./images/user.png')
});

export {
  user_png,
};
