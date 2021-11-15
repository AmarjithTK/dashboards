const addDialsButton = document.querySelector('.add')
const deleteDialsButton = document.querySelector('.delete')

const addPickerDiv = document.querySelector('.floatbox-add-picker')
const deletePickerDiv = document.querySelector('.floatbox-delete-picker')
const exitButton = document.querySelector('.close-btn')


const addDialsForm = document.querySelector('.addset')

const addDialName = document.querySelector('.addset-name')
const addDialUrl = document.querySelector('.addset-url')



const dialsContainerDiv = document.querySelector('.floatbox-delete-picker .centered')


deletePickerDiv.classList.add('hidden')


class storageProvider {

    constructor(key) {
        this.key = key;
    }

    pushData(data) {
        let string = this.Stringify(data)
        localStorage.setItem(this.key, string)
    }

    fetchData() {
        let data = localStorage.getItem(this.key)
        if(data == null ) {
           
            console.log('fine here')
            return null
        }
        else{
            console.log(data)
            return this.Parse(data)
        }
    }

    Parse(data) {
        console.log(data)
        return JSON.parse(data)
    }

    Stringify(data) {
        return JSON.stringify(data)
    }


}

const storeapi = new storageProvider('apidata');


const updateDeleteDials = (data) => {

    dialsContainerDiv.innerHTML = ''

    data.forEach(element => {

        template = `  <div class="dialset clearfix">
        <div class="dialset-name"> ${element.name} - ${element.url}</div>
        <div class="dialset-delete" data-url=${element.url}>X</div>
        </div>
        `

        dialsContainerDiv.innerHTML += template
        
    });

  
}



let localData = [];


// basic defenitions over -------------------------------------------------------

if(storeapi.fetchData() != null){
 console.log(storeapi.fetchData())
localData = storeapi.fetchData()
updateDeleteDials(localData)
}



addDialsForm.addEventListener('submit',e=>{
    e.preventDefault()
    data = {name:addDialName.value,url:addDialUrl.value,icon:'null'}
    addDialName.value=''
    addDialUrl.value = ''
    localData.push(data)
    alert('New entry added Successfully')
    // jsonData = JSON.stringify(localData)
    // localStorage.setItem(key='dials',value=jsonData)
    storeapi.pushData(localData)
    updateDeleteDials(localData)

})




deletePickerDiv.addEventListener('click', (e) => {

    if (e.target.className.match('dialset-delete')) {
        

        targetUrl = e.target.getAttribute('data-url')
        console.log(localData)
        let b = []
        
        localData.forEach((a)=>{
            if(a.url != targetUrl)
            b.push(a)

        })
        
        e.target.parentNode.remove()
        localData = b
        storeapi.pushData(localData)
        console.log(b)

    }


})

addDialsButton.addEventListener('click', (e) => {
    if (addPickerDiv.classList.contains('hidden'))
        addPickerDiv.classList.remove('hidden')
    if (!deletePickerDiv.classList.contains('hidden'))
        deletePickerDiv.classList.add('hidden')
})

deleteDialsButton.addEventListener('click', (e) => {
    console.log(e)
    if (deletePickerDiv.classList.contains('hidden'))
        deletePickerDiv.classList.remove('hidden')
    if (!addPickerDiv.classList.contains('hidden'))
        addPickerDiv.classList.add('hidden')
})


exitButton.addEventListener('click', (e) => {
    // window.open('../index.html','_home')
    window.location.replace('index.html')
})