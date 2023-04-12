window.onload = function() {

    const divQuestion = document.getElementById('question');
    const myQuestion = document.createElement('p');
    myQuestion.textContent = 'Please choice your favourite emoji';
    myQuestion.setAttribute('style', 'padding-left: 13px');
    divQuestion.appendChild(myQuestion);

    let arrayEmoticons = ["😁", "😂", "😄", "😘", "😊"];

    const divParent = document.getElementById('parent');
    divParent.setAttribute('style', 'display: flex');

    for (let i = 0; i < arrayEmoticons.length; i++) {
        const divItem = document.createElement('div');
        divParent.appendChild(divItem);
        divItem.setAttribute('style', 'text-align: center');
        const emoticon = document.createElement('button');
        divItem.appendChild(emoticon);
        emoticon.setAttribute('style', 'cursor: pointer; border: 0; background-color: transparent; font-size: 25px');
        emoticon.innerHTML = arrayEmoticons[i];
        const myCount = document.createElement('p');
        divItem.appendChild(myCount);
        myCount.textContent = 0;
    }

    divParent.addEventListener('click', (event) => {
        let targetElement = event.target;
        if (targetElement.tagName !== 'BUTTON') {
            return;
        } else {
            let count = targetElement.nextSibling;
            count.textContent = parseInt(count.textContent, 10) + 1;
        }
    });

};