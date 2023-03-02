import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '👋 Olá, como vai? \n\nEu sou a Sol, a *assistente virtual* da Clinica Espaço Girassol🌻. \n*Posso te ajudar?* 🙋‍♂️ \n-----------------------------------\n1️⃣ - ```AGENDAR CONSULTA``` \n2️⃣ - ```CANCELAR / CONFIRMAR CONSULTA``\n0️⃣ - ```FALAR COM ATENDENTE```';
  },
};
