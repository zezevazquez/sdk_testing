(() => {
  const inbenta_secret= API_SECRET
  const inbenta_key= API_KEY
  // make sure to replace placeholders ^^^
  const authPOST =(inbenta_key, inbenta_secret, callback) => {
    const data = {"secret":inbenta_secret}
    const xhr = new XMLHttpRequest()
    let inbenta_token = ""

    xhr.open("POST", "https://api.inbenta.io/v1/auth")
    xhr.setRequestHeader("content-type", "application/json")
    xhr.setRequestHeader("x-inbenta-key", inbenta_key)

    xhr.onreadystatechange = () => {
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        inbenta_token = JSON.parse(xhr.responseText).accessToken
        inbenta_token = JSON.stringify(inbenta_token)
        callback(inbenta_token, inbenta_key)
        return inbenta_token
    }}
    xhr.send(JSON.stringify(data))
  }

  const initBot = (inbenta_token, inbenta_key) => {
    const InbentaAuth =  InbentaChatbotSDK.createFromAccessToken(inbenta_token,inbenta_key)
    const InbentaConfiguration = {
      lang:'es',
      answers:{
        answerAttributes: ['ANSWER_TEXT'],
        sideBubbleAttributes: ['SIDEBUBBLE_TEXT'],
      },
      usertype: 0,
      environment: "development",
      launcher: {
        title:"Ayuda_Claro-EC"
      },
      labels: {
        es: {
          'yes' : 'Si',
          'no' : 'No',
          'generic-error-message' : 'Haz otra pregunta por favor',
          'enter-question' : 'Escribe aqui tu pregunta',
          'interface-title' : 'Pregúntame...',
          'guest-name' : 'Usted',
          'help-question' : 'Con que le puedo ayudar?',
          'thanks' : 'Gracias!',
          'rate-content' : 'Le ayudo la respuesta?',
          'form-message' : 'Por favor indique por que',
          'submit' : 'Enviar'
        }
      },
      avatar : {
        name : 'Laura',
        shouldUse : true,
        videos : {
          enter: [
            'https://static-or01.inbenta.com/49974c4abf8377d0900f49cc37a6b6089eae4bbf30887e36c5ce35ee9e68416b/LauraVideos/va_idle_04.mp4'
          ],
          idle : [
            'https://static-or01.inbenta.com/49974c4abf8377d0900f49cc37a6b6089eae4bbf30887e36c5ce35ee9e68416b/LauraVideos/va_idle_05.mp4'
          ],
          speak : [
            'https://static-or01.inbenta.com/49974c4abf8377d0900f49cc37a6b6089eae4bbf30887e36c5ce35ee9e68416b/LauraVideos/va_5sec_02.mp4'
          ]
        },
        fallbackImage : ''
      },
      ratingOptions: [
        {
          id: 1,
          label: 'si',
          comment: false
        },
        {
          id: 2,
          label: 'no',
          comment: true
        }
      ],
    }
    InbentaChatbotSDK.build(InbentaAuth, InbentaConfiguration)
  }

  const inbenta_token = authPOST(inbenta_key, inbenta_secret, initBot)
})()
