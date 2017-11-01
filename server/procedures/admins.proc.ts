import { rows, row } from '../config/db';

export function all(): Promise<Array<models.IAdministration>> {
    return rows('GetAdmins');
}

export function read(id: number): Promise<models.IAdministration> {
    return row('GetAdmin', [id]);
}

export function readByEmail(email: string): Promise<models.IAdministration> {
    return row('GetAdminByEmail', [email]);
}

export function create(name: string, course: string, imageurl: string) {
    return row('InsertTeacher', [name, course, imageurl]);
}