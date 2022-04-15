import {
  JupyterLiteServer,
  JupyterLiteServerPlugin
} from '@jupyterlite/server';

/**
 * Initialization data for the mpy-web-kernel extension.
 */
const plugin: JupyterLiteServerPlugin<void> = {
  id: 'mpy-web-kernel:plugin',
  autoStart: true,
  activate: (app: JupyterLiteServer) => {
    console.log('JupyterLite server extension mpy-web-kernel is activated!');
  }
};

export default plugin;
