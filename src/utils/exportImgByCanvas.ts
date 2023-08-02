import html2canvas from 'html2canvas'

export default () => {
  const app: HTMLElement | null = document.querySelector('#app')
  if (!app) {
    return new Error('app is not found')
  }

  html2canvas(app, {
    allowTaint: true,
    useCORS: true,
    scale: window.devicePixelRatio || 1,
    backgroundColor: '#fff',
    logging: true,
  }).then((canvas) => {
    canvas.toBlob((blob) => {
      blob && download(blob)
    })
    // const width = canvas.width
    // const height = canvas.height

    // const { canvas: mergeCanvas, ctx: mergeCtx } = createCanvas(width, height)
    // mergeCtx.drawImage(canvas, 0, 0, width, height)

    // // 合并下载二维码
    // createImg().then((myImage) => {
    //   mergeCtx.drawImage(myImage, 0, 0)
    //   mergeCanvas.toBlob((blob) => {
    //     download(blob)
    //     // appendBody(blob);
    //   })
    // })
  })

  function download(blob: Blob) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = '个性化手册.png'
    a.click()
  }

  function appendBody(blob: Blob) {
    const url = URL.createObjectURL(blob)
    const img = document.createElement('img')
    img.src = url
    document.body.appendChild(img)
  }

  function createImg(): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.setAttribute('crossOrigin', 'anonymous')
      img.src = '/logo.png'
      img.onload = function () {
        resolve(img)
      }

      img.onerror = function () {
        reject(new Error('图片加载失败'))
      }
    })
  }

  function createCanvas(width: number, height: number): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    return { canvas, ctx: canvas.getContext('2d') as CanvasRenderingContext2D }
  }
}
