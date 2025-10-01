import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.mwilman.photoGallery',
  appName: 'Photo Gallery',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: '00d45a69',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
