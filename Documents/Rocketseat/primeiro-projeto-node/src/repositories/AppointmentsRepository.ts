import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentRepositories extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

// por ser async ela obrigatóriamente retorna uma promise...
// Aí dentro da :Promise<> a gente pode colocar qual será o tipo da saída
// const response = await findByDate(date) ---> response é do tipo <Appointment ou null>
export default AppointmentRepositories;
