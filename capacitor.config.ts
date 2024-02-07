import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.codemovers.basemapillary',
  appName: 'BaseMapillary',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
