export const Toast = {
    text: (text) => {
        uni.showToast({
            title:text,
            icon:'none'
        })
    },
    loading: (text) => {
        uni.showLoading({
            title:text,
        })
    },
    hide: () => {
        uni.hideLoading()
    }
}
