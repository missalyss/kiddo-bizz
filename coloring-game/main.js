const createCanvas = () => {
  var varH = 175;
  var varW = 100;
  if (window.innerWidth <= 800) {
    varH = 20;
    varW = 0;
  }
  const height = window.innerHeight - varH
  const width = window.innerWidth - varW
  var autoMargin = varW <= 10 ? 0 : varW / 2;

  $('body').append(`<canvas id="canvas" style="margin-left: ${autoMargin}px; width:${width}px;" height=${height} width=${width} class="canvas"></canvas >`)
  console.log({ height });
  console.log({ width });


  $('#canvas').drawRect({
    id: 'background',
    layer: true,
    fillStyle: '#000',
    x: 0, y: 0,
    width: '100%',
    height: '100%'
  });
}
createCanvas();

// SAVES COLOR FROM PALLET
$('.color').on('click', function () {
  const color = $(this).css('background-color')
  $('.currentColor').css('background-color', color)
})

// change shape
$("#shape").change(() => {
  const shape = $("select#shape").val()
  shape === 'hello' ? $('.shape').append(() =>
    '<input type="text" name="hello" id="hello" value="hello sophie" />'
  ) : null;
})

//MAKES THE ART!
const playColoringGame = () => {
  const $canvas = $('.canvas');
  var isDown = false;

  $canvas.bind('mousedown touchstart', () => {
    isDown = true;
  })
    .bind('mouseup touchend', () => {
      isDown = false;
    })
    .bind('mousemove touchmove', (e) => {
      e.preventDefault()
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
        const $medium = $("select#medium").val()
        const $currentShape = $('select#shape').val();
        const $currentColor = $('.currentColor').css('background-color');

        const shapers = () => {

          switch ($currentShape) {
            case 'square': {
              $('canvas').drawPath({
                strokeStyle: '#000',
                strokeWidth: 4,
                p1: {
                  type: 'line',
                  x1: mouseX, y1: mouseY
                }
              })
            }
              //   $canvas.drawRect({
              //     layer: true,
              //     fillStyle: $currentColor,
              //     x: mouseX, y: mouseY,
              //     width: 5,
              //     height: 5
              //   });
              // }
              break;
            case 'circle': {
              $canvas.drawArc({
                layer: true,
                fillStyle: $currentColor,
                x: mouseX, y: mouseY,
                radius: 5
              });
            }
              break;
            case 'star':
              $canvas.drawPolygon({
                layer: true,
                fillStyle: $currentColor,
                x: mouseX, y: mouseY,
                radius: 5,
                sides: 5,
                concavity: 0.5,
              });
              break;
            case 'rectangle':
              $canvas.drawRect({
                layer: true,
                fillStyle: $currentColor,
                x: mouseX, y: mouseY,
                width: 6,
                height: 4
              });
              break;
            case 'triangle':
              $canvas.drawPolygon({
                layer: true,
                fillStyle: $currentColor,
                x: mouseX, y: mouseY,
                radius: 5,
                sides: 3
              });
              break;
            case 'oval':
              $canvas.drawEllipse({
                layer: true,
                fillStyle: $currentColor,
                x: mouseX, y: mouseY,
                width: 6,
                height: 4
              });
              break;
            case 'hello':
              $canvas.drawText({
                layer: true,
                fillStyle: $currentColor,
                x: mouseX, y: mouseY,
                width: 6, height: 4,
                strokeWidth: 1,
                fontSize: 64,
                fontFamily: 'Verdana, sans-serif',
                text: $('#hello').val()
              });
          }
        }
        $medium === 'background' ? $('.canvas').css('background-color', $currentColor) : shapers()
      }
    })
}

playColoringGame()

const mostRecent = () => {
  const layer = $('#canvas').getLayer(-1);
  $('#canvas').removeLayer(layer).drawLayers()
  console.log('undun');

}

const refresh = () => {
  $('#canvas').clearCanvas()
}

const downloadImage = () => {
  const imageUrl = $('#canvas').getCanvasImage()
  $('#save').attr('href', imageUrl)
}


  // console.log('canvas defaults', $.jCanvas.defaults);

// $.getScript('/path/to/imported/script.js', function () {
//   // script is now loaded and executed.
//   // put your dependent JS here.
// });