import { rows, row, empty } from '../config/db';

export function allTeachers(): Promise<Array<models.IAdministration>> {
    return rows('GetAllTeachers');
}

export function create(name: string, course: string, imageurl: string) {
    return row('InsertTeacher', [name, course, imageurl]);
}

export function destroy(id: number) {
    return empty('DeleteTeacher', [id])
}