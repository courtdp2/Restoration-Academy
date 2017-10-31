import { rows, row } from '../config/db';

export function all(): Promise<Array<models.IUser>> {
    return rows('GetAdmins');
}

export function read(id: number): Promise<models.IUser> {
    return row('GetAdmin', [id]);
}

export function readByEmail(email: string): Promise<models.IUser> {
    return row('GetAdminByEmail', [email]);
}

export function create(email: string, hash: string, firstName: string, lastName: string) {
    return row('InsertAdmin', [firstName, lastName, email, hash]);
}