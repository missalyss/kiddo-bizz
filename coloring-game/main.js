// CREATING THE GRID
const canvasSize = () => {
  const height = window.innerHeight - 250
  const width = window.innerWidth - 100

  $('body').append(`<canvas style="left: 50px" height=${height} width=${width} class="canvas"></canvas >`)
}
canvasSize();

let color = 'red';
let medium = 'pensil';
$("canvas").css({ "overflow": "hidden", 'position': 'fixed' });
// SAVES COLOR FROM PALLET
$('.color').on('click', function () {
  color = $(this).css('background-color')
  $('.currentColor').css('background-color', color)
})

// while (commandCenter.medium === 'background') {
// console.log('COMAND CENTER IS BACKGROUND');
// useMediumBackground()
// }

//MAKES THE ART!
function paint() {
  const $canvas = $('.canvas');
  var isDown = false;

  $canvas.bind('mousedown touchstart', () => {
    isDown = true;
  })
    .bind('mouseup touchend', () => {
      isDown = false;
    })

    .bind('mousemove touchmove', (e) => {
      var mouseX;
      var mouseY;

      if (e.handleObj.type === 'touchmove') {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
      } else {
        const canvasPosition = $canvas.offset()
        mouseX = e.pageX -= canvasPosition.left;
        mouseY = e.pageY -= canvasPosition.top;
      }

      if (isDown) {
        $canvas.drawRect({
          fillStyle: $('.currentColor').css('background-color'),
          x: mouseX, y: mouseY,
          width: 5,
          height: 5
        });
      }
    })
}

$(document).ready(function () {
  // console.log('canvas defaults', $.jCanvas.defaults);
  // $('canvas').drawPolygon({
  //   layer: true,
  //   fillStyle: '#c33',
  //   x: 100, y: 100,
  //   radius: 50,
  //   sides: 5,
  //   concavity: 0.5,
  //   click: function (layer) {
  //     // Spin star
  //     $(this).animateLayer(layer, {
  //       rotate: '+=144'
  //     });
  //   }
  // });

  // change medium
  $("#command").change(() => {
    medium = $("select#command").val()
    return medium;
  })

  if (medium === 'pensil') {
    paint()
  } else {
    // if (medium === 'background') {
    $('.cell').click(() => {
      $('.canvas').css('background-color', color, 'fast')
    })
  }
})