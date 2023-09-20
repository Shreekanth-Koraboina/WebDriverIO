import { config as sharedConfig } from './wdio.common.conf.js'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            'wdio:devtoolsOptions': {
                headless: true
            }
        }]
    }
}
