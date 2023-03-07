



async function get(){
    let response = await fetch(" https://api.breakingbadquotes.xyz/v1/quotes/")
    let data = await response.json()
    console.log(data[0].author)
    console.log(data[0].quote)

    let task = document.querySelector(".task")

    task.innerHTML = ` character : <hr> ${data[0].author}<hr> <br>
    Quote: <hr> <br>
    ${data[0].quote}`
}
get()





