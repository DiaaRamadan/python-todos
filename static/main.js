document.getElementById("form").onsubmit = function (e) {
    e.preventDefault();
    fetch("/todos/create", {
        method: "POST",
        body: JSON.stringify({
            'description': document.getElementById('description').value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
            const liItem = document.createElement('li')
            liItem.innerHTML = responseJson['description']
            document.getElementById('todos').append(liItem)
            document.getElementById('error').className = 'hidden'
        })
        .catch(function (error) {
            document.getElementById('error').className = ''
        })
}

const checkBoxs = document.querySelectorAll('.check-completed')

for (let i = 0; i < checkBoxs.length; i++) {
    const checkBox = checkBoxs[i]
    checkBox.onchange = function (e) {
        const newCompleted = e.target.checked
        const todoId = e.target.dataset['id'];
        fetch('/todos/' + todoId + '/set-completed', {
            method: "POST",
            body: JSON.stringify({
                'completed': newCompleted
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function () {
                document.getElementById('error').className = 'hidden'
            })
            .catch(function () {
                document.getElementById('error').className = ''
            })
    }
}


const deleteBtns = document.querySelectorAll('.delete-btn')

for (let i = 0; i < deleteBtns.length; i++) {
    const deleteBtn = deleteBtns[i]
    deleteBtn.onclick = function (e) {
        const todoId = e.target.dataset['id']
        fetch('/todos/' + todoId, {
            method: "DELETE",
        })
            .then(function () {
                document.getElementById('error').className = 'hidden'
                deleteBtn.parentElement.remove()
            })
            .catch(function () {
                document.getElementById('error').className = ''
            })
    }
}