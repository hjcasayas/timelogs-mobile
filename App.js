import Config from 'react-native-config';
import App from './src/app';
import Storybook from './storybook';

let app = App;

if (Config.IS_STORYBOOK) {
  app = Storybook;
}

export default app;
