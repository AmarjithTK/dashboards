const dialBox = document.querySelector('.dialbox')
const floatForm = document.querySelector('.floatbox__form')
const floatName = document.querySelector('#name')
const floatUrl = document.querySelector('#url')


const removeButton = document.querySelector('.remove-btn')

const extraIcons = [
    "bag-outline",
    "book-outline",
    "chatbox-outline",
    "cloud-outline",
    "code-outline",
    "color-palette-outline",
    "flower-outline",
    "globe-outline",
    "grid-outline",
    "images-outline",
    "mail-outline",
    "navigate-outline",
    "newspaper-outline",
    "prism-outline",
    "rocket-outline",
    "timer-outline",
    "logo-google-playstore"
]

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
        console.log(data)
        return this.Parse(data)
    }

    Parse(data) {
        console.log(data)
        return JSON.parse(data)
    }

    Stringify(data) {
        return JSON.stringify(data)
    }


}



const storeapi = new storageProvider('apidata')

dialBox.innerHTML = ''

let iconIndex = 0
const UpdatePage = (data) => {

    data.forEach(element => {
        if (element.icon == 'null') {
            if (iconIndex == extraIcons.length)
                iconIndex = 0
           
            template = `
            <div class="dialbox__dials" data-url = ${element.url}>
                <div class = "dialbox__dials-wrap">
                    <ion-icon name="${extraIcons[iconIndex]}" class="ionicon"></ion-icon>
                    <h2 class="dialbox__heading">${element.name}</h2>   
                </div>          
            </div>  `
            iconIndex++
        }
        else {
            template = `
     <div class="dialbox__dials" data-url = ${element.url}>
         <div class = "dialbox__dials-wrap">
             <ion-icon name="${element.icon}" class="ionicon"></ion-icon>
             <h2 class="dialbox__heading">${element.name}</h2>   
         </div>          
     </div>  `}


        dialBox.innerHTML += template

    });

}










fetch('https://raw.githubusercontent.com/AmarjithTK/storage__bin/master/dashboard-dials.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        jsondata = data;
        // dialBox.innerHTML = ''
        UpdatePage(jsondata)
        console.log('this is fetch')

        if(storeapi.fetchData() != null){
            UpdatePage(storeapi.fetchData())
            console.log('this is loalstorage')
            }


    }).catch(
        (r) => {
            console.log(r)  
            if(storeapi.fetchData() != null){
                UpdatePage(storeapi.fetchData())
                console.log('this is loalstorage')
                }       
        })




// const RemoveElement = (element) =>{

// }







// localstorage data format . Can accomodate images later

// localData = [
//     {'name':'google','url':'https://www.google.co.in'},
//     {'name':'apple','url':'https://www.google.co.in'},
//     {'name':'google','url':'https://www.google.co.in'},
//     {'name':'google','url':'https://www.google.co.in'}
// ]




// floatForm.addEventListener('submit', e => {
//     e.preventDefault()
//     data = { name: floatName.value, url: floatUrl.value, icon: 'icon-google' }
//     floatName.value = ''
//     floatUrl.value = ''
//     localData.push(data)
//     alert('New entry added Successfully')
//     // jsonData = JSON.stringify(localData)
//     // localStorage.setItem(key='dials',value=jsonData)
//     storeapi.pushData(localData)
//     UpdatePage(localData)

// })


dialBox.addEventListener('click', (e) => {
    targetDial = e.target.closest('.dialbox__dials')
    targetDialUrl = targetDial.getAttribute('data-url')
    console.log(targetDialUrl)
    window.open(url = targetDialUrl)
})







// console.log(localdata[0]['name'])

// stringify = JSON.stringify(localdata)

// obj = JSON.parse(stringify)

// console.log(obj)



