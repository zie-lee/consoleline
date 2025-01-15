declare function removeMask(): void;
declare function copyText(data: string): void;
declare function showModal(options: {
    message: string;
    title?: string;
    click?: () => void;
    buttonTxt?: string;
}): void;
declare function showLoading(percent?: number): void;
declare const _default: {
    copyText: typeof copyText;
    showModal: typeof showModal;
    hideModal: typeof removeMask;
    showLoading: typeof showLoading;
    hideLoading: typeof removeMask;
};
export default _default;
//# sourceMappingURL=modal.d.ts.map