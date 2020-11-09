window.onload = initialize;

function initialize() {
    document.getElementById('NameBox').classList.add('MoveNameBox');

//Hide the pointy arrow after users have scrolled a significant distance from the top (You could sneak a peak at the nav suggestion on an iphone by scrolling past the content).
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $('#NavSuggestion').hide();
        } else {
            $('#NavSuggestion').show();
        }
    });
}

function shake(_this) {
    _this.classList.remove('uk-animation-shake');
    setTimeout(() => {
        _this.classList.add('uk-animation-shake');
    }, 50);
    UIkit.tooltip(_this).show();
}

function menuClicked(x) {
    x.classList.toggle("change");

    let menuClassList = document.getElementById("Menu").classList; //The menu as a whole
    let menuContentClassList = document.getElementById("MenuContent").classList; //The rectangular div with Navigation titles ("Main", "TinkerBox")

    if (menuContentClassList === undefined || menuContentClassList.length == 0) { //If the menu has not been interacted with yet

        menuContentClassList.add('MenuContentDisplayed');
        menuClassList.add('MenuDisplayed');

    } else if (menuContentClassList[0] === 'MenuContentDisplayed') { //If the menu is displayed

        menuContentClassList.remove('MenuContentDisplayed');
        menuClassList.remove('MenuDisplayed');

        menuContentClassList.add('MenuContentHidden');
        menuClassList.add('MenuHidden');
    } else { //Else the menu is hidden

        menuContentClassList.remove('MenuContentHidden');
        menuClassList.remove('MenuHidden');

        menuContentClassList.add('MenuContentDisplayed');
        menuClassList.add('MenuDisplayed');
    }

}