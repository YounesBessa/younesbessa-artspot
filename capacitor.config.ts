import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'fr.younesbessa.artspot',
    appName: 'Art',
    webDir: 'www',
    bundledWebRuntime: false,
    plugins: {
        SplashScreen: {
            launchShowDuration: 4000,
        }
    },
};

export default config;
