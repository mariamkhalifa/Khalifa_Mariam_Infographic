
(() => {

    let seeMore =document.querySelectorAll('.see-more'),
        popOver = document.querySelector('.popover');

    let waypoint1 = new Waypoint({
        element: document.getElementById('book1'),
        handler: function(direction) {
            console.log('Scrolled to waypoint!');
        }
        
    });

    let waypoint2 = new Waypoint({
        element: document.getElementById('book2'),
        handler: function(direction) {
            console.log('scrolled  to waypoint');
            let svg = this.element.firstElementChild.contentDocument;
            // svg.querySelector('#beerText').classList.add('yellow');
        },
        offset: 300
    });

    function showPopover(bookdata, el) {
        popOver.querySelector('.rating-text').textContent = `Goodread's Rating:${bookdata.rating}`;
        popOver.querySelector('.year-text').textContent = `Publishing Year: ${bookdata.rating}`;
        popOver.querySelector('.age-text').textContent = `Harry's Age: ${bookdata.age}`;
        popOver.querySelector('.villain-text').textContent = `Villain: ${bookdata.villain}`;

        popOver.classList.add('show-popover');

        el.appendChild(popOver);
    }

    function fetchData() {
        let url = `/info/${this.dataset.target}`;
            targetElement = this;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            showPopover(data, targetElement);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    seeMore.forEach(button => button.addEventListener('click', fetchData));
})();