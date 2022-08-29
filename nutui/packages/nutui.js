export const Toast = {
    text: (text) => {
        uni.showToast({
            title:text,
            icon:'none'
        })
    }
}
