import {
  IInfoReply,
  IExecuteRequestMsg,
  IExecuteReplyMsg
} from '@jupyterlab/services/lib/kernel/messages';
import { KernelMessage } from '@jupyterlab/services';

import { BaseKernel } from '@jupyterlite/kernel';

export class MpyWebKernel extends BaseKernel {
  constructor(options: any) {
    console.log('mpy-web-kernel is created!');
    super(options);
  }

  // Info about the kernel
  async kernelInfoRequest(): Promise<IInfoReply> {
    const content: IInfoReply = {
      status: 'ok',
      protocol_version: '5.3',
      implementation: 'mpy-web',
      implementation_version: '0.0.1',
      language_info: {
        name: 'python',
        version: '3.7',
        mimetype: 'text/x-python',
        file_extension: '.py'
      },
      banner: 'Micropython kernel with WebSerial for JupyterLite',
      help_links: [
        {
          text: 'Mpy-web-kernel GitHub',
          url: 'https://github.com/kumekay/mpy-web-kernel'
        }
      ]
    };
    return content;
  }

  // Handle an execute_request message
  async executeRequest(
    content: IExecuteRequestMsg['content']
  ): Promise<IExecuteReplyMsg['content']> {
    const { code } = content;

    this.publishExecuteResult({
      execution_count: this.executionCount,
      metadata: {},
      data: {
        // Just do something simple for now
        'text/plain': code.toUpperCase()
      }
    });

    return {
      status: 'ok',
      execution_count: this.executionCount,
      user_expressions: {}
    };
  }

  // Throw "not implemented" error for all other abstract methods
  async completeRequest(
    content: KernelMessage.ICompleteRequestMsg['content']
  ): Promise<KernelMessage.ICompleteReplyMsg['content']> {
    throw new Error('Not implemented');
  }

  async inspectRequest(
    content: KernelMessage.IInspectRequestMsg['content']
  ): Promise<KernelMessage.IInspectReplyMsg['content']> {
    throw new Error('Not implemented');
  }

  async isCompleteRequest(
    content: KernelMessage.IIsCompleteRequestMsg['content']
  ): Promise<KernelMessage.IIsCompleteReplyMsg['content']> {
    throw new Error('Not implemented');
  }

  async commInfoRequest(
    content: KernelMessage.ICommInfoRequestMsg['content']
  ): Promise<KernelMessage.ICommInfoReplyMsg['content']> {
    throw new Error('Not implemented');
  }

  inputReply(content: KernelMessage.IInputReplyMsg['content']) {
    throw new Error('Not implemented');
  }

  async commOpen(msg: KernelMessage.ICommOpenMsg): Promise<void> {
    throw new Error('Not implemented');
  }

  async commMsg(msg: KernelMessage.ICommMsgMsg): Promise<void> {
    throw new Error('Not implemented');
  }

  async commClose(msg: KernelMessage.ICommCloseMsg): Promise<void> {
    throw new Error('Not implemented');
  }
}
