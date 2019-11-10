const config = require('./env.json');
const defaultConfig = config.development;
// const environment = process.env.NODE_ENV || 'development';

global.myConfig = defaultConfig;

// log global.gConfig
// console.log(`global.gConfig: ${JSON.stringify(global.myConfig, undefined, global.myConfig.json_indentation)}`);