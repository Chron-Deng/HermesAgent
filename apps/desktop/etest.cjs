try { const e = require('electron'); console.log('TYPE', typeof e, 'APP', typeof e.app, 'KEYS', Object.keys(e).slice(0,12)); } catch (err) { console.log('ERR', err.message); }
