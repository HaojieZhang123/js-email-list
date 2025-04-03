const requestTarget = 'https://flynn.boolean.careers/exercises/api/random/mail'

const generateMail = (string) => {
    // ciclo for per ripetere la richiesta 10 volte
    for(let i=0; i < 10; i++){
        axios.get(string)
            .then((resp) => {
                console.log(resp.data.response)
                document.getElementById(`email${i}`).innerHTML = resp.data.response;
            })

    }

}

// chiamata funzione
generateMail(requestTarget);