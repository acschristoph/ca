// Nav hide on click event handling
$(function () {
    var navMain = $("#ca-navbar");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

// Produkte Preise Komponente
var pvue = new Vue({
    el: '#preise_vue',
    data: {
        produkte: produkte
    }
})

// Image Komponente
var pvue = new Vue({
    el: '#img_vue',
    data: {
        images: bilder_name,
        dir: bilder_dir
    },

    created: function () {
        Vue.nextTick(function () {
            $(".welcome_slides").owlCarousel({
                items: 3,
                loop: true,
                autoplay: true,
                smartSpeed: 1500,
                nav: true,
                navText: ["<i class='pe-7s-angle-left'</i>", "<i class='pe-7s-angle-right'</i>"]
            });
            $(".app_screenshots_slides").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                smartSpeed: 800,
                margin: 30,
                center: true,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 3
                    },
                    992: {
                        items: 5
                    }
                }
            });
        }.bind(this));
    }
})

// Counter Komponente
var cvue = new Vue({
    el: '#counter_vue',
    data: {
        start_year: counters.start_year,
        frisuren_per_day: counters.frisuren_per_day,
        h_frisuren_per_day: counters.h_frisuren_per_day,
        days_since_start: counters.days_since_start,
        clients_per_day: counters.clients_per_day
    },
    computed: {
        calculate_years: function () {
          return new Date().getFullYear() - this.start_year
        },
        calculate_frisuren: function() {
          console.log(this.days_since_start)
          return Math.round( this.days_since_start * this.frisuren_per_day )
        },
        calculate_h_firusren: function() {
            console.log(this.days_since_start)
            return Math.round( this.days_since_start * this.h_frisuren_per_day );
        },
        calculate_fix_clients: function() {
            console.log(this.days_since_start)
            return Math.round( this.days_since_start * this.clients_per_day );
        }
    }
})