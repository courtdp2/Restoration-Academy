import { rows } from '../config/db';

export function getTeachers(school: string): Promise<Array<models.ITeacher>> {
    return rows ('GetTeachersBySchool', [school]);
}

export function getBoard(): Promise<Array<models.IBoard>> {
    return rows ('GetBoard');
}

