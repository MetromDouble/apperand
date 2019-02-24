import endpoints from './endpoints';

/* eslint-disable import/prefer-default-export */
// export class Api {
//   static get(endpoint, options) {
//     options.method = 'GET';
//     return this._initRequest(endpoint, options);
//   }
//   static post(endpoint, options) {
//     options.method = 'POST';
//     return this._initRequest(endpoint, options);
//   }
//   static put(endpoint, options) {
//     options.method = 'PUT';
//     return this._initRequest(endpoint, options);
//   }
//   static delete(endpoint, options) {
//     options.method = 'DELETE';
//     return this._initRequest(endpoint, options);
//   }
//   static _initRequest(endpoint, { snakeCase = false, params = {}, query, ...rest }) {
//     const url = new URL(this.baseUrl);

//     url.pathname = this._fillInParams(endpoint, params);
//     url.search = this._composeQueryString(query, snakeCase);

//     return fetch(url, rest);
//   }
//   static _fillInParams(endpoint, params) {
//     let route = this.endpoints[endpoint];
//     let invalidParams = [];

//     if (!route) return this._errorHandler(`\`${endpoint}\` endpoint does not exist`);
//     route = route[route.length - 1] === '/' ? route.slice(0, -1) : route;
//     route = route[0] !== '/' ? '/' + route : route;

//     const filledRoute = route.replace(/:([A-Za-z0-9_-]+)(?:\/|$)/g, (match, group) => {
//       if (!params[group]) invalidParams.push(group);
//       return match.replace(`:${group}`, params[group]);
//     });

//     if (invalidParams.length) return this._errorHandler(
//       `Params ${invalidParams.map(p => `\`${p}\` `).join(', ')}do not defined`
//     );
//     return filledRoute;
//   }
//   static _composeQueryString(query = {}, snakeCase = false) {
//     const qs = new URLSearchParams();

//     Object.keys(query).forEach(key => qs.append(
//       snakeCase
//         ? key.replace(/([A-Z]+)/g, (match, p1, offset) => (offset > 0 ? '_' : '') + match.toLowerCase())
//         : key,
//       query[key]))
//     return qs;
//   }
//   _errorHandler(reason) {
//     throw new Error(`Api Helper: ${reason}`);
//   }
//   constructor(baseUrl, _endpoints) {
//     this.baseUrl = new URL(baseUrl);
//     this.endpoints = _endpoints || endpoints;
//   }
// }

// export default new Api(process.env.REACT_APP_API_BASE);
