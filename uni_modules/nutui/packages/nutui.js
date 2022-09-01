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
    },
    warn: (text) => {
        uni.showToast({
            title:text,
            icon:"error"
        })
    },
    error: (text) => {
        uni.showToast({
            title:text,
            icon:"error"
        })
    },
    success: (text) => {
        uni.showToast({
            title:text,
            icon:"success"
        })
    }
}
