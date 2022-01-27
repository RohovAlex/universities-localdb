import { Injectable } from '@nestjs/common';

import universities from 'data/universities';
import { University, CreateUniversityInput, UpdateUniversityInput } from './university.schema';


@Injectable()
export class UniversityService {

    universities: University[]

    constructor() {
        this.universities = universities
    } 

    async find() {
        return this.universities;
    }

    async findById(id) {
        return this.universities.find(el => el.id === id);
    }

    async create(university: CreateUniversityInput) {
        this.universities.push(university);
        return this.universities;
    }

    async updateById(university: UpdateUniversityInput) {
        const index = this.universities.findIndex(el => el.id === university.id);
        if(index > -1) {
            this.universities[index] = university;
        }
        return this.universities;
    }
}
