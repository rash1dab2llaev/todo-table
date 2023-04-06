//add button
let addBtn = document.querySelector('.Add_btn')
// add modal div class
let addModalBlock = document.querySelector('.add_modal_block')
//add modal name input
let nameAddInput = document.querySelector('.name_add_input')
//add modal sourName input
let sourNameAddInput = document.querySelector('.sourName_add_input')
//add modal age input
let ageAddInput = document.querySelector('.age_add_input')
////add modal select input
let courseAddInput = document.querySelector('#select')
//add modal input
let addModalInput = document.querySelector('.add_modal_input')
//canle add input
let addCanleInput = document.querySelector('.canle_modal_input')
/* get tbody */
let tbody = document.querySelector('tbody')


//edit modal
let editModalBlock = document.querySelector('.edit_modal_block')
//edit modal name input
let nameEditInput = document.querySelector('.name_edit_input')
//edit modal sourName input
let sourNameEditInput = document.querySelector('.sourName_edit_input')
//edit modal age input
let ageEditInput = document.querySelector('.age_edit_input')
////edit modal select input
let courseEditInput = document.querySelector('#select_edit')
//edit modal input
let editModalInput = document.querySelector('.edit_add_modal_input')
//canle add input
let editCanleInput = document.querySelector('.edit_canle_modal_input')


//show modal in click
addBtn.onclick = () => {
    addModalBlock.style.display = 'block'
}

/* none modal in click */
addCanleInput.onclick = () => {
    addModalBlock.style.display = 'none'
}
//оставляем section пустым
courseAddInput.value = ''

let person = []

/* creat new object and push to person array in click */
addModalInput.onclick = () => {
    let newObj = {}
    newObj.id = new Date().getTime()
    newObj.name = nameAddInput.value
    newObj.sourName = sourNameAddInput.value
    newObj.age = ageAddInput.value
    newObj.course = courseAddInput.value
    person.push(newObj)

    nameAddInput.value = ''
    sourNameAddInput.value = ''
    ageAddInput.value = ''
    courseAddInput.value = ''
    getUser()
    addModalBlock.style.display = 'none'
}

//delete function
function deleteFunc(id) {
    person = person.filter(elem => {
        return elem.id != id
    })
    getUser()
}

courseEditInput.value = ''

/* none edit modal in click */
editCanleInput.onclick = () => {
    editModalBlock.style.display = 'none'
}

//edit function
let idx
function editFunc(id) {
    idx = id
    editModalBlock.style.display = 'block'
    let list = person.find(elem => {
        if (elem.id == id) {
            return elem
        }
    })
    nameEditInput.value = list.name
    sourNameEditInput.value=list.sourName
    ageEditInput.value=list.age
    courseEditInput.value=list.course

}

editModalInput.onclick = edit

function edit() {
    person = person.map(elem => {
        if (elem.id == idx) {
            elem.name = nameEditInput.value
            elem.sourName = sourNameEditInput.value
            elem.age = ageEditInput.value
            elem.course = courseEditInput.value
        }
        return elem
    })
    editModalBlock.style.display = 'none'
    getUser()
}


function getUser() {
    tbody.innerHTML = ''
    person.forEach(elem => {
        let newTr = document.createElement('tr')
        let newTh1 = document.createElement('th')
        let newTh2 = document.createElement('th')
        let newTh3 = document.createElement('th')
        let newTh4 = document.createElement('th')
        let newTh5 = document.createElement('th')
        let newTh6 = document.createElement('th')

        //delete button
        let deletBtn = document.createElement('button')
        deletBtn.innerHTML = 'delete'
        deletBtn.style.backgroundColor = 'black'
        deletBtn.style.color = 'white'
        deletBtn.onclick = () => {
            deleteFunc(elem.id)
        }

        //edit button
        let editBtn = document.createElement('button')
        editBtn.innerHTML = 'edit'
        editBtn.style.backgroundColor = 'black'
        editBtn.style.color = 'white'
        editBtn.onclick = () => {
            editFunc(elem.id)
        }


        newTh1.innerHTML = elem.id
        newTh2.innerHTML = elem.name
        newTh3.innerHTML = elem.sourName
        newTh4.innerHTML = elem.age
        newTh5.innerHTML = elem.course
        newTh6.appendChild(deletBtn)
        newTh6.appendChild(editBtn)

        tbody.appendChild(newTr)
        newTr.appendChild(newTh1)
        newTr.appendChild(newTh2)
        newTr.appendChild(newTh3)
        newTr.appendChild(newTh4)
        newTr.appendChild(newTh5)
        newTr.appendChild(newTh6)
    })
}
getUser()