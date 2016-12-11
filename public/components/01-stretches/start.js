var template = require("./start.html")

angular.module('app').component('stretches', {
  template: template,

  controller: function() {
    this.stretches = [
      {
        name: "Shoulder Rolls",
        link: "https://youtu.be/H01oGIS1C_g",
        complete: false
      },
      {
        name: "Scapular Shrugs",
        link: "https://youtu.be/akgQbxhrhOc",
        complete: false
      },
      {
        name: "Cat/Camel Bends",
        link: "https://youtu.be/K9bK0BwKFjs",
        complete: false
      },
      {
        name: "Straigh Arm Overhead Pull Downs",
        link: "https://youtu.be/8lDC4Ri9zAQ",
        complete: false
      },
      {
        name: "Straight Arm Chest Flies",
        link: "https://youtu.be/8lDC4Ri9zAQ",
        complete: false
      },
      {
        name: "Band Dislocates",
        link: "https://youtu.be/8lDC4Ri9zAQ",
        complete: false
      },
      {
        name: "Wrist Mobility Exercises",
        link: "https://youtu.be/mSZWSQSSEjE",
        complete: false
      },
      {
        name: "Front and Side Leg Swings",
        link: "https://youtu.be/AkqakLhh1fI",
        complete: false
      }
    ]

    this.selectAll = function() {
      this.stretches.forEach(function(stretch){
        stretch.complete = true;
      })
    }
  }
})
