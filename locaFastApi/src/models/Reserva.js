const mongoose = require("mongoose");
const agencias = require("../Enums/agencias")

const reservaSchema = new mongoose.Schema({
    clienteId: String,
    dateRetirada: Date,
    dateDevolucao: Date,
    agenciaRetirada: {
        type: String,
        enum: agencias
    },
    agenciaDevolucao: {
        type: String,
        enum: agencias
    },
    categoriaVeiculo: {
        type: String,
        enum: [
            'A', 
            'B',
            'C',
            'D',
            'E'
        ]
    },
    valorDiaria: String,
    nomeRequisitante: String,
    telefoneRequisitante: String,
    colaboradorId: String,

})

reservaSchema.statics.modelIsValid = function(reserva) {

    if (Object.values(reserva).some(value => value === null || value === undefined || value === "")) {
        return new Error('Todos os campos devem ser preenchidos.');
    }

    if (reserva.dateRetirada <=  Date.now()) {
        return new Error('Data inválida.');
    }

    if (reserva.dateDevolucao < reserva.dateRetirada  ) {
        return new Error('A locação do automóvel deve ser de pelo menos 1 dia.');
    }

    if (reserva.valorDiaria < 0) {
        return new Error('Valor de diária inválida.');
    }

    return true;
}

const Reserva = mongoose.model('Reserva', reservaSchema)

module.exports = Reserva
