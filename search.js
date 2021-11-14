const searchForm = document.querySelector('.searchbox__form')
const floatButton = document.querySelector('.floatopen-btn')
const floatBox = document.querySelector('.floatbox')
const closeButton = document.querySelector('.close-btn')




// opening the add wizard

floatButton.addEventListener('click',(e)=>{

    floatBox.classList.remove('hidden')

})

// closing the add wizard

closeButton.addEventListener('click',(e)=>{
    window.scrollTo(top)
    floatBox.classList.add('hidden')

})


// searching google on input 

searchForm.addEventListener('submit' , (e)=>{
    let query = searchForm.children[0].value;
    let querysplit = query.split(' ')
    let querystring =''
    querysplit.forEach(element => {
        querystring += `${element}+`
    });
    searchForm.children[0].value=''
    window.open(url=`https://www.google.co.in/search?q=${querystring}`)
    e.preventDefault()
})

