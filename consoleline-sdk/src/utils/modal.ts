let modalEl = null;

function removeMask() {
    if (modalEl) {
        document.getElementById('__vconsole').removeChild(modalEl);
        modalEl = null;
    }
}

function createMask() {
    removeMask();
    modalEl = document.createElement('div');
    modalEl.id = 'console-line-modal'
    modalEl.style.backgroundColor = 'rgba(0,0,0,0.3)';
    modalEl.style.position = 'absolute';
    modalEl.style.zIndex = '100000';
    modalEl.style.top = '0';
    modalEl.style.left = '0';
    modalEl.style.right = '0';
    modalEl.style.bottom = '0';
    document.getElementById('__vconsole').appendChild(modalEl);
}

function copyText(data: string) {
    const input = document.createElement('input');
    input.value = data;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    input.style.display = 'none';
    alert('复制成功');
}

function showModal (options: {
    message: string;
    title?: string;
    click?: () => void;
    buttonTxt?: string;
}) {
    createMask();

    const header = document.createElement('div');
    header.innerHTML = options.title || '温馨提示';
    header.style.fontSize = '16px';
    header.style.fontWeight = '500';
    header.style.marginBottom = '10px';
    header.style.textAlign = 'center';

    const content = document.createElement('div');
    content.style.backgroundColor = '#fff';
    content.style.padding = '10px';
    content.style.borderRadius = '4px';
    content.style.boxSizing = 'border-box';
    content.style.width = `${window.innerWidth * 0.8}px`;
    content.style.marginLeft = `${window.innerWidth * 0.1}px`;
    content.style.marginTop = `${window.innerHeight * 0.3}px`;

    const valueEl = document.createElement('div');
    valueEl.innerHTML = options.message;
    valueEl.style.textAlign = 'center';

    const footer = document.createElement('div');
    footer.style.color = '#4499ee';
    footer.style.borderTop = '1px solid #f1f1f1';
    footer.style.paddingTop = '10px';
    footer.style.marginTop = '10px';
    footer.style.textAlign = 'center';
    footer.innerHTML = options.buttonTxt || '我知道了';

    footer.onclick = function() {
        if (options.click) options.click();
        removeMask();
    }

    content.appendChild(header);
    content.appendChild(valueEl);
    content.appendChild(footer);
    modalEl.appendChild(content);
}

function showLoading(percent?: number) {
    createMask();
    const wrapper = document.createElement('div');
    wrapper.style.backgroundColor = '#fff';
    wrapper.style.padding = '20px';
    wrapper.style.borderRadius = '4px';
    wrapper.style.boxSizing = 'border-box';
    wrapper.style.width = `${window.innerWidth * 0.6}px`;
    wrapper.style.marginLeft = `${window.innerWidth * 0.2}px`;
    wrapper.style.marginTop = `${window.innerHeight * 0.3}px`;
    wrapper.style.textAlign = 'center';

    const content = document.createElement('div');
    content.style.width = '30px';
    content.style.height = '30px';
    content.style.borderRadius = '50%';
    content.style.border = '2px solid #f1f1f1';
    content.style.borderTop = '2px solid #4499ee';
    content.style.fontSize = '16px';
    content.style.fontWeight = '500';
    content.style.marginLeft = `${window.innerWidth * 0.3 - 35}px`;
    content.style.animation = 'spin 1s linear infinite';

    const style = document.createElement('style');
    style.innerHTML = `@keyframes spin {
        0% {
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -o-transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -o-transform: rotate(360deg);
        }
    `;
    wrapper.appendChild(style);


    wrapper.appendChild(content);
    if (percent !== undefined) {
        const progress = document.createElement('div');
        progress.innerHTML = `正在处理中（${percent}%）`;
        progress.style.marginTop = '5px';
        progress.style.marginBottom = '10px';
        wrapper.appendChild(progress);
    }

    modalEl.appendChild(wrapper);
}

export default {
    copyText,
    showModal,
    hideModal: removeMask,
    showLoading,
    hideLoading: removeMask,
}