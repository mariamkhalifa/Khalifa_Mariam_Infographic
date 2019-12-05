
(() => {

    // try to get the object and do stuff with it
    let seeMoreButtons =document.querySelectorAll('.see-more'),
        popOver = document.querySelector('.popover');

    // set up waypoints and make thinsg happen
    let waypoint1 = new Waypoint({
        element: document.getElementById('beer2'),
        handler: function(direction) {
            console.log('Scrolled to waypoint!');
            // this.element.innerHTML += "<p>I got added with Waypoint!</p>";
        }
        
    });

    let waypoint2 = new Waypoint({
        element: document.getElementById('beer3'),
        handler: function(direction) {
            console.log('scrolled  to waypoint');
            let svg = this.element.firstElementChild.contentDocument;
            // svg.querySelector('#beerText').classList.add('yellow');
        },
        offset: 300
    });


    let svgWrapper = document.querySelector(".svg-wrapper");

    // function showSVG(e) {
    //     //debugger;
    // }

    // svgWrapper.addEventListener("mouseover", showSVG);

    function showPopover(beerdata, el) {
        popOver.querySelector('.ipa-rating').textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOver.querySelector('.rating').textContent = `IPA Rating: ${beerdata.rating}`;
        popOver.querySelector('.beer-description').textContent = beerdata.description;

        popOver.classList.add('show-popover');

        el.appendChild(popOver);
    }

    // do our fethc call to database
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

    seeMoreButtons.forEach(button => button.addEventListener('click', fetchData));
})();