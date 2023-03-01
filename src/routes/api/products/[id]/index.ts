import { type RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async (ev) => {
  console.log(`Get Product`, { ev });
  
  ev.redirect(301, '/product/200');
}
