import { rows } from '../config/db';

export function getTeachers(school: string): Promise<Array<models.ITeacher>> {
    return rows ('GetTeachers', [school]);
}


