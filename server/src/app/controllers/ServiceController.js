import * as Yup from 'yup';
import Service from '../models/Service';

class ServiceController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const services = await Service.findAll({
      order: ['name'],
      attributes: ['id', 'name', 'price', 'duration'],
      limit: 20,
      offset: (page - 1) * 20,
    })

    return res.json(services);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      duration: Yup.string().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const serviceExists = await Service.findOne({ where: { name: req.body.name } });

    if (serviceExists) {
      return res.status(400).json({ error: 'Service already exists' });
    }

    const { id, name, duration, price } = await Service.create(req.body);

    return res.json({ id, name, duration, price });
  }

  // async update(req, res) {
  //   const schema = Yup.object().shape({
  //     name: Yup.string(),
  //     email: Yup.string().email(),
  //     oldPassword: Yup.string().min(6),
  //     password: Yup.string()
  //       .min(6)
  //       .when('oldPassword', (oldPassword, field) =>
  //         oldPassword ? field.required() : field
  //       ),
  //     confirmPassword: Yup.string().when('password', (password, field) =>
  //       password ? field.required().oneOf([Yup.ref('password')]) : field
  //     ),
  //   });

  //   if (!(await schema.isValid(req.body))) {
  //     return res.status(400).json({ error: 'Validation error' });
  //   }
  //   const { email, oldPassword } = req.body;

  //   const user = await User.findByPk(req.userId);

  //   if (email !== user.email) {
  //     const userExists = await User.findOne({ where: { email } });
  //     if (userExists) {
  //       return res.status(400).json({ error: 'User already exists' });
  //     }
  //   }

  //   if (oldPassword && !(await user.checkPassword(oldPassword))) {
  //     return res.status(401).json({ error: 'Password does not match' });
  //   }

  //   await user.update(req.body);

  //   const { id, name, avatar } = await User.findByPk(req.userId, {
  //     include: [
  //       {
  //         model: File,
  //         as: 'avatar',
  //         attributes: ['id', 'path', 'url'],
  //       },
  //     ],
  //   });

  //   return res.json({ id, name, email, avatar });
  // }
}

export default new ServiceController();
