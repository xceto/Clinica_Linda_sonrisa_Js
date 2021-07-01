const Sequelize = require("sequelize");
const Model = require("../models");

const add = async (req, res) => {
  const { id } = req.params;
  const { horarioReserva } = req.body;
  const addReserva = await Model.Reserva.create({
    id_agenda: Number(id),
    status_reserva: 'activo',
    horario_reserva: horarioReserva,
  })
  return res.status(200).json({ addReserva })
}

const show = async (req, res) => {
  const { id } = req.params;
  const reservas = await Model.Reserva.findAll({ where: { id_agenda: Number(id) } })
  return res.status(200).json(reservas)
}

const edit = async () => {
  // cambiar el status a reservado
  const { id, idReserva } = req.params; // Se destructuro el req.params. 
};

const remove = async (req, res) => {
  const reserva = await Model.Reserva.destroy({ where: {
    id: req.params.idReserva,
    id_agenda: req.params.id
  }})
  console.log(reserva)
  if (reserva === 1) {
    return res.status(200).json({ message: 'Eliminado' })
  }
  return res.status(400).json({ message: 'Problemas al borrar al reserva'})
}

module.exports = {
  add,
  show,
  remove,
  edit,
}