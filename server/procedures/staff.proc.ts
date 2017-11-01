import { rows } from '../config/db';

export function ElementaryTeachers(school: string): Promise<Array<models.ITeacher>> {
    return rows ('GetTeachers', [school]);
}

export function JrAndHighschoolTeachers(school: string): Promise<Array<models.ITeacher>> {
    return rows ('GetTeachers', [school]);
}

