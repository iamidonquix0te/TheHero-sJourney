$(document).ready(function () {
    $.getScript('non-combat.js', function() {
        console.log('noncombat works')
      $.getScript('combat.js', function() {
          console.log("combatworks")
    })
  })
})

//give r and v points for clearly stating whether you want to right your wrongs or be a dick, as well as expressing opinions about your past with the cult