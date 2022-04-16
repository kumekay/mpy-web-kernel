import {
  JupyterLiteServer,
  JupyterLiteServerPlugin
} from '@jupyterlite/server';
import { IKernelSpecs, IKernel } from '@jupyterlite/kernel';
import { MpyWebKernel } from './kernel';
/**
 * Initialization data for the mpy-web-kernel extension.
 */
const kernel: JupyterLiteServerPlugin<void> = {
  id: 'mpy-web-kernel:kernel',
  autoStart: true,
  requires: [IKernelSpecs],
  activate: (app: JupyterLiteServer, kernelspecs: IKernelSpecs) => {
    console.log('JupyterLite server extension mpy-web-kernel is activated!');
    kernelspecs.register({
      spec: {
        name: 'mpy-web',
        language: 'python',
        argv: [],
        display_name: 'Micropython WebSerial Kernel',
        spec: {
          argv: [],
          env: {},
          display_name: 'Micropython WebSerial Kernel',
          language: 'python',
          interrupt_mode: 'message',
          metadata: {}
        },
        resources: {
          'logo-32x32': '',
          'logo-64x64': ''
        }
      },
      create: async (options: IKernel.IOptions): Promise<IKernel> => {
        return new MpyWebKernel(options);
      }
    });
  }
};

const plugins: JupyterLiteServerPlugin<any>[] = [kernel];
export default plugins;
