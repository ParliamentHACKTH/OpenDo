export const style = {
    getImgDefault
}

function getImgDefault(e) {
    e.target.src = new URL('/src/assets/image.png', import.meta.url).href
}
