'use strict';

const Q = require('@nmq/q/client');

const filesQ = new Q('filesQueue'); //files Queue; needs to reference specific name used in server

const dbQ = new Q('databaseQueue'); //db Queue

////subscribing to the dbQueue

dbQ.subscribe('alive', (payload) => {
  console.log('its alive!', payload);
});

dbQ.subscribe('create', (payload) => {
  console.log('create happened', payload);
});

dbQ.subscribe('read', (payload) => {
  console.log('read happened', payload);
});

dbQ.subscribe('update', (payload) => {
  console.log('update happened', payload);
});

dbQ.subscribe('delete', (payload) => {
  console.log('delete happened', payload);
});

dbQ.subscribe('error', (payload) => {
  console.log('error happened', payload);
});

///////subscribing to the filesQueue

filesQ.subscribe('save', (payload) => {
  console.log('save happened', payload);
});

filesQ.subscribe('error', (payload) => {
  console.log('error happened', payload);
});

