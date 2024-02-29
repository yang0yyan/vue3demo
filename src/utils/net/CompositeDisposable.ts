/**
 * 
 */
interface DisposableContainer {

    add(a: AbortController): boolean;

    remove(a: AbortController): boolean;

    delete(a: AbortController): boolean;
}

export class CompositeDisposable implements DisposableContainer {
    disposed: boolean = false;

    resources: Array<AbortController> = new Array<AbortController>();

    add(a: AbortController): boolean {
        if (!this.disposed) {
            this.resources.push(a);
            return true;
        }
        a.abort();
        return false;
    }
    addAll(...as: AbortController[]): boolean {
        if (!this.disposed) {
            for (const a of as) {
                this.resources.push(a);
            }
            return true;
        }
        for (const a of as) {
            a.abort();
        }
        return false;
    }

    remove(a: AbortController): boolean {
        if (this.delete(a)) {
            a.abort();
            return true;
        }
        return false;
    }
    delete(a: AbortController): boolean {
        if (this.disposed) {
            return false;
        }
        const index = this.resources.indexOf(a)
        if (index === -1) return false
        this.resources.splice(index, 1)
        return true
    }

    dispose(): void {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        this.disposeList(this.resources)
    }

    disposeList(list: Array<AbortController>): void {
        for (const a of list) {
            a.abort()
        }
    }
}