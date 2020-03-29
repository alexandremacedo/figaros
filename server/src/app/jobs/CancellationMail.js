import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Mail from '../../lib/Mail';

class CancellaltionMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { appointiment } = data;

    console.log('EXECUTOU');

    await Mail.sendMail({
      to: `${appointiment.provider.name} <${appointiment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'cancellation',
      context: {
        provider: appointiment.provider.name,
        user: appointiment.user.name,
        date: format(
          parseISO(appointiment.date),
          "dd 'de' MMMM', às' H:mm'h'",
          {
            locale: ptBR,
          }
        ),
      },
    });
  }
}

export default new CancellaltionMail();
