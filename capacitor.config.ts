import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.codemovers.basemapillary',
  appName: 'BaseMapillary',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
