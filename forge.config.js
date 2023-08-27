module.exports = {
  packagerConfig: {
    asar: true,
    // ...
    osxSign: {
    optionsForFile: (filePath) => {
      // Here, we keep it simple and return a single entitlements.plist file.
      // You can use this callback to map different sets of entitlements
      // to specific files in your packaged app.
      return {
        entitlements: 'mactest.provisionprofile'
      };
    }
  }
  // ...
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-dmg',
      config: {
        // Config here
        format: 'ULFO'
      }
    }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Bonifase',
          name: 'electronApp'
        },
        prerelease: false,
        draft: true
      }
    }
],
};
