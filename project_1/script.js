const boxes = document.querySelectorAll('.box');
const strArray = document.querySelectorAll('h2')

boxes.forEach(function (value, index) {


    boxes[index].onclick = function () {
        boxes.forEach(function (value, index) {
            boxes[index].className = 'box';
            strArray[index].style.display = 'none';
        })

        this.className = 'box active';
        strArray[index].style.display = 'block';
    }
})
