const btn = document.querySelector('button')

const sayAloha = () => {
    axios.get(`http://ec2-35-160-76-204.us-west-2.compute.amazonaws.com/api/aloha`)
        .then(res => {
            alert(res.data)
        })
            .catch(err => {
                console.log(err)
            })
}

btn.addEventListener('click', sayAloha)