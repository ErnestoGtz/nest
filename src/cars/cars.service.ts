import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Omoda',
            model: 'C5'
        },
        {
            id: uuid(),
            brand: 'Dodge',
            model: 'Attitude'
        },
    ];


    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }

    create(createCarDto: CreateCarDto) {
        const car = {
            id: uuid(),
            // brand: createCarDto.brand,
            // model: createCarDto.model
            ...createCarDto
        }
        this.cars.push(car);
        return car;
    }

}
