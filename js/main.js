
$(function () {
    var navMain = $("#ca-navbar");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

var pvue = new Vue({
    el: '#preise_vue',
    data: {
        message: 'Hello Vue!',
        produkte: produkte
    }
})

var cvue = new Vue({
    el: '#counter_vue',
    data: {
        frisuren: 2234,
        customers: 330,
        clients: 401,
        start_year: 2012,
        days_since_start: days_passed(new Date(2012, 1, 1))
    },
    computed: {
        // a computed getter
        calculate_years: function () {
          // `this` points to the vm instance
          const current = new Date().getFullYear()
          return current - this.start_year
        },
        calculate_clients: function() {
          console.log(this.days_since_start)
          return this.days_since_start * 2
        },
        calculate_customers: function() {
            console.log(this.days_since_start)
            return Math.round( this.days_since_start * 1.05 );
        },
        calculate_fix_clients: function() {
            console.log(this.days_since_start)
            return Math.round( this.days_since_start * 0.2 );
        }
    }
})

function days_passed(dt) {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var today = new Date();
    var secondDate = new Date(dt.getTime());
    return Math.round(Math.abs((today.getTime() - secondDate.getTime())/(oneDay)));  
  }