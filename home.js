document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById("image").style.opacity = "100%";
    }, 3000);
  });

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById("countdown").style.opacity = "100%";
    }, 3000);
  });

  console.log("yoohoo2")

  var end = new Date('09/07/2024 7:00 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }

    timer = setInterval(showRemaining, 1000);