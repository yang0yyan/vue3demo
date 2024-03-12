export interface Callback<T> {
    (data: T): void;
}
export interface ReplaceCallback<T, N> {
    (data: T, level: number): N;
}
export interface BaseTreeItem<T> {
    children: Array<T> | null,
    parent: T | null
}
export class TreeUtil {
    /**
     * 正向树结构数据遍历
     * 
     * @param treeList 树结构数组
     * @param callback 回调
     * @param field 子参数
     */
    static forwardTreeFor<T>(treeList: Array<T>, callback: Callback<T>, field = 'children'): void {
        for (let index = 0; index < treeList.length; index++) {
            const treeItem = treeList[index];
            const treeItemAny = treeItem as any
            callback(treeItem)
            if (treeItemAny[field] && treeItemAny[field].length) {
                this.forwardTreeFor((treeItemAny[field] as Array<T>), callback, field)
            }
        }
    }
    /**
     * 反向树结构数据遍历
     * 
     * @param treeList 树结构数组
     * @param callback 回调
     * @param field 子参数
     */
    static reverseTreeFor<T>(treeList: Array<T>, callback: Callback<T>, field = 'children'): void {
        for (let index = 0; index < treeList.length; index++) {
            const treeItem = treeList[index];
            const treeItemAny = treeItem as any
            if (treeItemAny[field] && treeItemAny[field].length) {
                this.forwardTreeFor((treeItemAny[field] as Array<T>), callback, field)
            }
            callback(treeItem)
        }
    }
    /**
     * 父级遍历 
     * @param treeData 
     * @param callback 
     * @param field 
     */
    static forwardTreeForParent<T>(treeData: T, callback: Callback<T>, field = 'parent') {
        const treeDataAny = treeData as any
        callback(treeData)
        if (treeDataAny.parent) {
            this.forwardTreeForParent(treeDataAny.parent as T, callback)
        }
    }
    /**
     * 反向树结构数据遍历
     */
    static forwardTreeForReplace<T, N extends BaseTreeItem<N>>(treeData: Array<T>, newTreeData: Array<N>, callback: ReplaceCallback<T, N>, field: string = 'children', parent: N | null = null, level: number = 0) {
        for (let index = 0; index < treeData.length; index++) {
            const treeItem = treeData[index];
            const treeItemAny = treeItem as any
            let newData = callback(treeItem, level)
            newTreeData.push(newData)
            newData.parent = parent
            if (treeItemAny[field] && treeItemAny[field].length) {
                newData.children = []
                this.forwardTreeForReplace(treeItemAny[field], newData.children || [], callback, field, newData, level + 1)
            }
        }
    }
}