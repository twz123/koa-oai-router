import test from 'ava';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import request from 'supertest';

import Router from '../lib/oai-router';

test('load wrong apiDoc', t => {
  const app = new Koa();
  const opt = {
    apiDoc: `${__dirname}/fixtures/api/api-error.json`,
    controllerDir: `${__dirname}/fixtures/controller`,
    apiExplorerVisible: false
  };

  const router = new Router(opt);
  const server = app.listen();

  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.apiExplorer());
  t.pass();
})

test('with server options', t => {
  const app = new Koa();
  const server = app.listen();

  const opt = {
    apiDoc: `${__dirname}/fixtures/api/api.json`,
    controllerDir: `${__dirname}/fixtures/controller`,
    apiExplorerVisible: false,
    server: server
  };

  const router = new Router(opt);

  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.apiExplorer());
  t.pass();
})


test('with no server and no port options', t => {
  const app = new Koa();
  const server = app.listen();

  const opt = {
    apiDoc: `${__dirname}/fixtures/api/api.json`,
    controllerDir: `${__dirname}/fixtures/controller`,
    apiExplorerVisible: false
  };

  const router = new Router(opt);

  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.apiExplorer());
  t.pass();
})