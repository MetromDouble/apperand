import { Api } from './api';

const API_URL = 'http://test';

test('URL Validating', () => {
  const API_URL_WITHOUT_PROTOCOL = 'test';
  const API_URL_PRE_DOUBLE_SLASHED = '//test';

  expect(() => new Api(API_URL_WITHOUT_PROTOCOL, {})).toThrow();
  expect(() => new Api(API_URL_PRE_DOUBLE_SLASHED, {})).toThrow();
});

const SIMPLE_ROUTE = '/v1/example';
const PARAMETRIZED_ROUTE = '/v1/example/:param';
const PARAMETRIZED_MULTI_ROUTE = '/v1/example/:param/:subparam/:subsubparam';
const WITHOUT_PREFIX_SLASH_ROUTE = 'v1/example';
const POSTFIX_SLASH_ROUTE = '/v1/example/';

const api = new Api('http://test', {
  SIMPLE_ROUTE,
  PARAMETRIZED_ROUTE,
  PARAMETRIZED_MULTI_ROUTE,
  WITHOUT_PREFIX_SLASH_ROUTE,
  POSTFIX_SLASH_ROUTE
});

test('Filling in params into endpoints', () => {
  const ERROR_FEW_PARAMETERS = new Error('Api Helper: Too few parameters');
  const ERROR_NONEXISTENT_ROUTE = new Error('Api Helper: `NONEXISTENT_ROUTE` endpoint does not exist');

  expect(Api._fillInParams.apply(api, ['SIMPLE_ROUTE', {}])).toBe(SIMPLE_ROUTE);
  expect(() => Api._fillInParams.apply(api, ['NONEXISTENT_ROUTE', {}])).toThrow(ERROR_NONEXISTENT_ROUTE);
  expect(Api._fillInParams.apply(api, ['POSTFIX_SLASH_ROUTE', {}])).toBe(SIMPLE_ROUTE);
  expect(Api._fillInParams.apply(api, ['WITHOUT_PREFIX_SLASH_ROUTE', {}])).toBe(SIMPLE_ROUTE);
  expect(Api._fillInParams.apply(api, ['POSTFIX_SLASH_ROUTE', {}])).toBe(SIMPLE_ROUTE);
  expect(Api._fillInParams.apply(api, ['PARAMETRIZED_ROUTE', { param: 1 }])).toBe(SIMPLE_ROUTE + '/1');
  expect(() => Api._fillInParams.apply(api, ['PARAMETRIZED_ROUTE', {
    fake: 1
  }])).toThrow(new Error('Api Helper: Params `param` do not defined'));
  expect(Api._fillInParams.apply(api, ['PARAMETRIZED_MULTI_ROUTE', {
    param: 1,
    subparam: 1,
    subsubparam: 1
  }])).toBe('/v1/example/1/1/1');
});
