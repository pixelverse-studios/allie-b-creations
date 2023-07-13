// Use this function to check if the URL provides a working image link

const validImageUrls = async (data: []) => {
    const validImgUrls = await Promise.all(
        data.map((data: any) => {
            return new Promise((resolve, reject) => {
                const img = new Image()
                img.src = data.media_url
                img.onload = () =>
                    resolve({
                        media_url: data.media_url,
                        capion: data.caption
                    })
                img.onerror = () => resolve(null)
            })
        })
    )

    return validImgUrls.filter(data => data !== null)
}

export default validImageUrls
