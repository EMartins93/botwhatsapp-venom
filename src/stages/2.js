import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const stageTwo = {
  exec({ from, message }) {
    const order =
      '\n-----------------------------------\n#️⃣ - ```CONFIRMAR CONSULTA``` \n*️⃣ - ```CANCELAR CONSULTA```';
    if (message === '*') {
      storage[from].stage = 0;
      storage[from].itens = [];

      return '🔴 CONSULTA *CANCELADA* com sucesso. \n\n ```Obrigado por informar, aguardo seu retorno!```';
    } else if (message === '#') {
      storage[from].stage = 3;

      return (
        '🗺️ Agora, informe os *Dados*. \n ( ```Nome, Idade, Queixa``` ) \n\n ' +
        '\n-----------------------------------\n*️⃣ - ```Confirmar consulta```'
      );
    } else {
      if (!menu[message]) {
        return `❌ *Código inválido, digite novamente!* \n\n ${order}`;
      }
    }

    storage[from].itens.push(menu[message]);

    return (
      `✅ *${menu[message].description}* Consulta agendada com sucesso! \n\n` +
      '`Digite outra opção`: \n\n' +
      order
    );
  },
};
