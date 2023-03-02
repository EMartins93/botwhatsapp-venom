import { storage } from '../storage.js';

export const stageThree = {
  async exec({ from, message, client }) {
    storage[from].address = message;
    storage[from].stage = 4;

    if (message === '*') {
      storage[from].stage = 0;
      return 'Consulta *CANCELADA* com sucesso. \n Aguardo o seu retorno!';
    }

    let desserts = '';
    const itens = storage[from].itens;
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        desserts += item.description + '.';
      } else {
        desserts += item.description + ', ';
      }
    });
    const total = storage[from].itens.length;

    await client.sendText(
      message.from,
      `🗒️ *DADOS DA CONSULTA*: \n\n🥼 Profissional: *${desserts}* \n🚚 Local: *Clinica Girassol*. \n🎲 Nome: ${message} \n💰 Valor Consulta: *${
        total * 130
      },00 reais*. \n⏳ Tempo de sessão: *30 minutos*. \n\n` +
        '🔊 ```Agora, informe a forma de pagamento e se vai (Debito,Crédito,PIX ou Convenio Médico)``'
    );

    return '✅ *Prontinho, Consulta Agendada!* \n\nAgora, lembre-se de avisar o profissional caso não consiga vir no dia agendado*. \n\n⏳ *Até Breve*.';
  },
};
