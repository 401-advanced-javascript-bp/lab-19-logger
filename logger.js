'use strict';

const Q = require('@nmq/q/client');

const filesQ = new Q('filesQ');

const dbQ = new Q('databaseQ');

//subscribing to the dbQueue
dbQ.subscribe('create', (payload) => {
  console.log('create happened', payload);
});

dbQ.subscribe('read', (payload) => {
  console.log('delete happened', payload);
});

dbQ.subscribe('update', (payload) => {
  console.log('create happened', payload);
});

dbQ.subscribe('delete', (payload) => {
  console.log('delete happened', payload);
});

dbQ.subscribe('error', (payload) => {
  console.log('delete happened', payload);
});

///////subscribing to the filesQueue

filesQ.subscribe('create', (payload) => {
  console.log('create happened', payload);
});

filesQ.subscribe('read', (payload) => {
  console.log('delete happened', payload);
});

