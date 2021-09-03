// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCookie from '../../../app/middleware/cookie';
import ExportJwt from '../../../app/middleware/jwt';

declare module 'egg' {
  interface IMiddleware {
    cookie: typeof ExportCookie;
    jwt: typeof ExportJwt;
  }
}
