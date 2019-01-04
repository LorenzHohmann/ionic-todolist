export class Todo {
	title: string;
	done: boolean = false;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}