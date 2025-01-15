/**  修改vconsole的logo图 */
export const updateVconsoleLog = (themeColor: string) => {
    const vconsoles = document.getElementsByClassName('vc-switch');
    for (const item of Array.from(vconsoles)) {
        item.innerHTML = `Console`;
        (item as HTMLDivElement).style.backgroundColor = themeColor || '#800080';
    }
}