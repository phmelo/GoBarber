import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'PH',
    email: 'phmelomorais@gmail.com',
    password_hash: '123',
  });
  return res.json(user);
});

//  module.exports = routes;
export default routes;
