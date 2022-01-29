(() => {
    const studens = document.getElementById('studens')
    studens.classList.add('pt-5')
    let studentsArray = []


    function titleScool (title) {
        const head = document.createElement('h1')
        head.classList.add('h1', 'text-left', 'font-weight-bold', 'text-primary', 'pb-3')
        head.textContent = title
        return head
    }
    // Создали что то новое
    // Создаем форму для создания студента
    function createFormStudens() {
        // Создаем форму
        const form = document.createElement('form')
        form.classList.add('row', 'g-3', 'mb-4')
        // Создаем поле имя
        const nameDiv = document.createElement('div')
        const nameLabel = document.createElement('label')
        const nameInput = document.createElement('input')

        // Создаем отчество
        const lastName = document.createElement('div')
        const lastNameLabel = document.createElement('label')
        const lastNameInput = document.createElement('input')


        // Создаем поле Фамилия
        const surName = document.createElement('div')
        const surNameLabel = document.createElement('label')
        const surNameInput = document.createElement('input')

        // Создаем поле даты рождения
        const dateBirth = document.createElement('div')
        const dateBirthLabel = document.createElement('label')
        const dateBirthInput = document.createElement('input')

        // Создаем год начала обучения

        const startTraining = document.createElement('div')
        const startTrainingLabel = document.createElement('label')
        const startTrainingInput = document.createElement('input')

        // Создаем выбор факультета
        const facultyArray= ['Факультет Энергетики', 'Строительный факультет','СПО', 'Международный факультет']
        const faculty = document.createElement('div')
        const facultyLabel = document.createElement('label')
        const facultySelect = document.createElement('select')

        for(let arr of facultyArray) {
            const facultyOption = document.createElement('option')
            facultyOption.textContent = arr
            facultySelect.append(facultyOption)
        }

        // Создаем кнопку
        const buttonDiv = document.createElement('div')
        const button = document.createElement('button')


        // Классы для имени
        nameDiv.classList.add('col-md-4')
        nameLabel.classList.add('form-label')
        nameLabel.textContent = 'Имя'
        nameInput.classList.add('form-control')
        nameInput.required = true
        nameDiv.append(nameLabel)
        nameDiv.append(nameInput)

        // Классы для отчества
        lastName.classList.add('col-md-4')
        lastNameLabel.classList.add('form-label')
        lastNameLabel.textContent = 'Отчество'
        lastNameInput.classList.add('form-control')
        lastNameInput.required = true
        lastName.append(lastNameLabel)
        lastName.append(lastNameInput)


        // Классы для фамилии
        surName.classList.add('col-md-4')
        surNameLabel.classList.add('form-label')
        surNameLabel.textContent = 'Фамилия'
        surNameInput.classList.add('form-control')
        surNameInput.required = true
        surName.append(surNameLabel)
        surName.append(surNameInput)

        // Классы для Даты рождения
        dateBirth.classList.add('col-md-4')
        dateBirthLabel.classList.add('form-label')
        dateBirthLabel.textContent = 'Дата рождения'
        dateBirthInput.classList.add('form-control')
        dateBirthInput.required = true
        dateBirthInput.type = 'date'
        dateBirth.append(dateBirthLabel)
        dateBirth.append(dateBirthInput)

        // Классы для "Начала обучения"
        startTraining.classList.add('col-md-4')
        startTrainingLabel.classList.add('form-label')
        startTrainingLabel.textContent = 'Год начала обучения'
        startTrainingInput.classList.add('form-control')
        startTrainingInput.required = true
        startTrainingInput.type = 'date'
        startTraining.append(startTrainingLabel)
        startTraining.append(startTrainingInput)

        // Классы для Факультета
        faculty.classList.add('col-md-4')
        facultyLabel.classList.add('form-label')
        facultyLabel.textContent = 'Факультет'
        facultySelect.classList.add('form-select')
        faculty.append(facultyLabel)
        faculty.append(facultySelect)

        // Классы для кнопки
        buttonDiv.classList.add('col-12', 'd-flex', 'justify-content-end')
        button.classList.add('btn', 'btn-primary')
        button.type = 'submit'
        button.textContent = 'Отправить данные'
        buttonDiv.append(button)

        // Классы для формы

        form.classList.add('p-3', 'border', 'border-primary')

        form.append(nameDiv)
        form.append(lastName)
        form.append(surName)
        form.append(dateBirth)
        form.append(startTraining)
        form.append(faculty)
        form.append(buttonDiv)
        return {
            form,
            nameInput,
            lastNameInput,
            surNameInput,
            dateBirthInput,
            startTrainingInput,
            facultySelect,
            button
        }
    }

    // Создаем список для студентов
    function createListStudens() {
        const row = document.createElement('div')
        const tableStudens = document.createElement('ul')
        tableStudens.classList.add('list-group','border', 'border-primary')
        row.classList.add('row', 'g-3')
        row.append(tableStudens)
        return {
            row,
            tableStudens
        }
    }

    // Создаем ячейку студента
    function createItemStudens() {
        const item = document.createElement('li')
        const name = document.createElement('div')
        const age = document.createElement('div')
        const startTraining = document.createElement('div')
        const faculty = document.createElement('div')

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'item')
        name.classList.add('col-md-6')
        age.classList.add('col-md-2')
        startTraining.classList.add('col-md-2')
        faculty.classList.add('col-md-2')

        item.append(name)
        item.append(age)
        item.append(startTraining)
        item.append(faculty)
        return {
            item,
            name,
            age,
            startTraining,
            faculty
        }
    }

    // Заголовок таблицы со студентами
    function headListStudens() {
        const item = document.createElement('li')
        const name = document.createElement('div')
        const age = document.createElement('div')
        const startTraining = document.createElement('div')
        const faculty = document.createElement('div')

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'border-bottom', 'border-primary', 'font-weight-bold')
        name.classList.add('col-md-6', 'name-search', 'search')
        age.classList.add('col-md-2', 'age-search', 'search')
        startTraining.classList.add('col-md-2', 'start-training-search', 'search')
        faculty.classList.add('col-md-2', 'faculty-search', 'search')

        name.textContent = 'Фамилия Имя Отчество'
        age.textContent = 'Возраст'
        startTraining.textContent = 'Начало обучения'
        faculty.textContent = 'Факультет'

        item.append(name)
        item.append(age)
        item.append(startTraining)
        item.append(faculty)
        return {
            item,
            name,
            age,
            startTraining,
            faculty
        }
    }

    function createSearchStudens() {
        const itemSearch = document.createElement('div')
        itemSearch.classList.add('row', 'mb-4', 'g-3')
        const item = document.createElement('div')
        item.classList.add('input-group', 'input-search', 'd-flex', 'justify-content-between', 'border', 'border-primary', 'p-3', 'gx-4')
        

        const nameInputSearch = document.createElement('div')
        const name = document.createElement('input')
        nameInputSearch.append(name)
        name.placeholder = 'Введите ФИО'

        nameInputSearch.classList.add('col-md-3')

        const facultyInputSearch = document.createElement('div')
        facultyInputSearch.classList.add('col-md-3')
        const faculty = document.createElement('input')
        facultyInputSearch.append(faculty)
        faculty.placeholder = 'Введите факультет'

        const dateStartSearch = document.createElement('div')
        const dateStatrTraining = document.createElement('input')
        dateStartSearch.classList.add('col-md-3')
        dateStartSearch.append(dateStatrTraining)
        dateStatrTraining.placeholder = 'Введите начала обучения'

        const dateEndSearch = document.createElement('div')
        dateEndSearch.classList.add('col-md-3')
        const dateEndTraining = document.createElement('input')
        dateEndSearch.append(dateEndTraining)
        dateEndTraining.placeholder = 'Введите конец обучения'


        name.classList.add('form-control', 'name', 'filter')
        faculty.classList.add('form-control', 'faculty', 'filter')
        dateStatrTraining.classList.add('form-control', 'datestart', 'filter')
        dateEndTraining.classList.add('form-control', 'dateend', 'filter')


        item.append(nameInputSearch)
        item.append(facultyInputSearch)
        item.append(dateStartSearch)
        item.append(dateEndSearch)
        itemSearch.append(item)
        return {
            itemSearch,
            item,
            name,
            faculty,
            dateStatrTraining,
            dateEndTraining,
            
        }
    }

    function receivingStatus(date) {
        let course
        let year = Math.floor((new Date().getTime()/1000/60/60/24/365) - (new Date(date).getTime()/1000/60/60/24/365))
        switch(year) {
            case 0:
                course = `Только поступил`
            case 1:
                course = `1 курс`
                break
            case 2:
                course = `2 курс`
                break
            case 3:
                course = `3 курс`
                break
            case 4:
                course = `4 курс`
                break
            default:
                course = `Окончил`
        }
        return course
    }

    function createObj(form) {
        const obj = {}
        obj.id = Math.round(Math.random()*1000)
        obj.nameInput = form.nameInput.value
        obj.lastNameInput = form.lastNameInput.value
        obj.surNameInput = form.surNameInput.value
        obj.dateBirthInput = form.dateBirthInput.value
        obj.age = Math.floor((new Date().getTime()/1000/60/60/24/365) - (new Date(obj.dateBirthInput).getTime()/1000/60/60/24/365))
        obj.startTrainingInput = form.startTrainingInput.value
        obj.statusStudens = receivingStatus(obj.startTrainingInput)
        obj.facultySelect = form.facultySelect.value
        return obj
    }

    // Даем ячейкам студента значени
    

    function pushStudens(studens, key) {
        const title = titleScool('Список студентов')
        const form = createFormStudens()
        const list = createListStudens()
        const search = createSearchStudens()
        const headList = headListStudens()

        studens.append(title)
        studens.append(form.form)
        studens.append(search.itemSearch)
        studens.append(list.row) 
        list.tableStudens.append(headList.item)

        function createValueStudens(studentsArray) {
            for (let obj of studentsArray) {
                const item = createItemStudens()
                item.name.textContent = `${obj.nameInput} ${obj.lastNameInput} ${obj.surNameInput}`
                item.age.textContent = obj.age
                item.startTraining.textContent = `${obj.startTrainingInput} ${obj.statusStudens}`
                item.faculty.textContent = `${obj.facultySelect}`
                list.tableStudens.append(item.item)
            }
        }

        let localStorageNow = JSON.parse(localStorage.getItem(key))
        if (!localStorageNow) {
            studentsArray = []
        } else {
            studentsArray = JSON.parse(localStorage.getItem(key))
            createValueStudens(studentsArray)
        }


        form.form.addEventListener('submit', function(e){
            // Отменяем перезагрузку
            e.preventDefault()
            // Добавляем в массив обект созданного студента
            const objStudent = createObj(form)
            studentsArray.push(objStudent)

            for(let obj of studentsArray) {
                if(obj.id === objStudent.id) {
                    const item = createItemStudens()
                    item.name.textContent = `${obj.nameInput} ${obj.lastNameInput} ${obj.surNameInput}`
                    item.age.textContent = obj.age
                    item.startTraining.textContent = `${obj.startTrainingInput} ${obj.statusStudens}`
                    item.faculty.textContent = `${obj.facultySelect}`
                    list.tableStudens.append(item.item)
                } else {
                    continue
                }
            }
            localStorage.setItem(key, JSON.stringify(studentsArray))
        })

        const itemSerarch = document.querySelectorAll('.search')
        itemSerarch.forEach((item) => {
            item.addEventListener('click', (e) => {
                const item = document.querySelectorAll('.item')
                item.forEach((item) => item.remove())
                if(e.target.classList.contains('name-search')) {
                    studentsArray.sort((prev, next) => {
                        if (prev.nameInput < next.nameInput) return -1
                        if (prev.nameInput > next.nameInput) return 1
                    })

                    createValueStudens(studentsArray)
                } else if(e.target.classList.contains('age-search')) {
                    studentsArray.sort((prev, next) => prev.age - next.age)
                    createValueStudens(studentsArray)
                } else if(e.target.classList.contains('faculty-search')) {
                    studentsArray.sort((prev, next) => {
                        if (prev.facultySelect < next.facultySelect) return -1
                        if (prev.facultySelect > next.facultySelect) return 1
                    })

                    createValueStudens(studentsArray)
                } else if(e.target.classList.contains('start-training-search')){
                    studentsArray.sort((prev, next) => new Date(prev.startTrainingInput) - new Date(next.startTrainingInput))
                    createValueStudens(studentsArray)
                }
            })
        })

        
        const filter = document.querySelectorAll('.filter')
        filter.forEach((item) => {
            item.addEventListener('input', (e) => {
                const listItem = document.querySelectorAll('.item')
                listItem.forEach((item) => item.remove())
                if(e.target.classList.contains('name')) {
                    const searchValue = e.target.value.toLowerCase();
                    const searchResult = studentsArray.filter((students) =>
                    students.nameInput.toLowerCase().includes(searchValue));
                    createValueStudens(searchResult)
                }
                if(e.target.classList.contains('faculty')) {
                    const searchValue = e.target.value.toLowerCase();
                    const searchResult = studentsArray.filter((students) =>
                    students.facultySelect.toLowerCase().includes(searchValue));
                    createValueStudens(searchResult)
                }

                if(e.target.classList.contains('datestart')) {
                    const searchValue = e.target.value.toLowerCase();
                    const searchResult = studentsArray.filter((students) =>
                    students.startTrainingInput.toLowerCase().includes(searchValue));
                    createValueStudens(searchResult)
                }
                
                if(e.target.classList.contains('dateend')) {
                    const searchValue = e.target.value.toLowerCase();
                    const searchResult = studentsArray.filter((students) =>
                    students.startTrainingInput.toLowerCase().includes(searchValue));
                    createValueStudens(searchResult)
                }
            })
        })
    }

    window.addEventListener('DOMContentLoaded', function() {
        pushStudens(studens, 'key')
    })
})()