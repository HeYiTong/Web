export class User {
    constructor(
        public id: string,
        public password: string,
        public phone?: string,
        public teacher?: string,
        public isadmin?: boolean) {}
}