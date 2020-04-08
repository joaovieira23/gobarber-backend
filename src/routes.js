import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'João Victor Vieira de Andrade',
    email: 'joaovictorvieira.23@hotmail.com',
    password_hash: '22091623',
  });

  return res.json(user);
});

export default routes;
