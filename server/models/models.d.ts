declare namespace models {
    interface IAdministration {
        id: number;
        name: string;
        password: string;
        role: string;
        title: string;
        imageUrl: string
    }

    interface ITeacher {
        id: number;
        name: string;
        course: string;
        school: string;
        imageUrl: string;
    }

    interface IBoard {
        id: number;
        name: string;
        title: string;
    }
}