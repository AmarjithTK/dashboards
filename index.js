const dialBox = document.querySelector('.dialbox')
const floatForm = document.querySelector('.floatbox__form')
const floatName = document.querySelector('#name')
const floatUrl = document.querySelector('#url')


const removeButton = document.querySelector('.remove-btn')



const UpdatePage = (dials_data) => {

    localData = dials_data
    dialBox.innerHTML = ''
    localData.forEach(element => {
    dialBox.innerHTML += `
        <div class="dialbox__dials" data-url = ${element.url}>
           <div class = "remove-btn">&minus;</div>
         <h2 class="dialbox__heading">${element.name}</h2>             
        </div>  `    
        });

}


const RemoveElement = (element) =>{

}

if (JSON.parse(localStorage.getItem('dials')) != null){
    UpdatePage(JSON.parse(localStorage.getItem('dials')))
}
else
    localData = []




// localstorage data format . Can accomodate images later

// localData = [
//     {'name':'google','url':'https://www.google.co.in'},
//     {'name':'apple','url':'https://www.google.co.in'},
//     {'name':'google','url':'https://www.google.co.in'},
//     {'name':'google','url':'https://www.google.co.in'}
// ]




floatForm.addEventListener('submit',e=>{
    e.preventDefault()
    data = {name:floatName.value,url:floatUrl.value}
    floatName.value =''
    floatUrl.value = ''
    localData.push(data)
    alert('New entry added Successfully')
    jsonData = JSON.stringify(localData)
    localStorage.setItem(key='dials',value=jsonData)
    UpdatePage(localData)

})









dialBox.addEventListener('click',(e)=>{
    targetDial = e.target.closest('.dialbox__dials')
    targetDialUrl =  targetDial.getAttribute('data-url')
    console.log(targetDialUrl)
    window.open(url=targetDialUrl)
})







// console.log(localdata[0]['name'])

// stringify = JSON.stringify(localdata)

// obj = JSON.parse(stringify)

// console.log(obj)



