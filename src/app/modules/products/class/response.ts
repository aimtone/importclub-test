import { Producto } from './producto';

export class Response {
    constructor(
        public data: Producto[] = [],
        public error: boolean = true
    ) { }
}
