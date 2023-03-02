import { storage } from '../storage.js';

export const stageFour = {
  exec({ from, message }) {
    const address = storage[from].address;
    const phone = from.split('@');

    storage[from].stage = 5;
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

    return `🔔 *DADOS CONSULTA* 🔔: \n\n📞 Telefone Cliente: +${
      phone[0]
    } \n🧁 Especialidades: *${desserts}* \n📍 Dados Paciente: *${address}* \n🚚 Valor Consulta: *R$ 130,00*. \n💰 Tempo de Sessão: *${
       50
    }minutos*. \n⏳ Profissional: *Samara Oliveira Bordim*. \n🛑 Detalhes: *${message}*`;
  },
  
};
