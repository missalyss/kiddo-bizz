// CREATING THE GRID
function gridSize(rowArrLength, cellArrLength) {
  for (let i = 0; i < rowArrLength; i++) {
    let $row = $(`<div id="${i}" class="row"></div>`)
    $('.canvas').append($row)
  }
  for (let i = 0; i < cellArrLength; i++) {
    let $cell = $(`<div id="${i}" class="cell"></div>`)
    $('.row').append($cell)
  }
}
gridSize(100, 200)
let commandCenter;
function useMediumBackground() {
  console.log('using bgg');
    // change medium
  // $("#command").change(() => {
  //   this.medium = $("select#command").val()
  // })

  // while (commandCenter.medium === 'background') {
  //   console.log('COMAND CENTER IS BACKGROUND');
  //   // useMediumBackground()
  // }

  $('.cell').click(() => {
    console.log('background, isdown');
    $('.canvas').css('background-color', commandCenter.color, 'fast')
  })
  return;

}

$('.color').on('click', () => {
  console.log($(this).css('background-color'));

  commandCenter.color = $(this).css('background-color')
  console.log('commancetner adlskfjadls;k: ', commandCenter.color);

  $('.currentColor').css('background-color', commandCenter.color)
})


$(document).ready(() => {
  const commandCenter = {
    color: $('.currentColor').css('background-color'),
    medium: $("select#command").val()
  }
  console.log(commandCenter);

  // Change pallet color
  $('.palletColor').on('click', () => {
    // commandCenter.color = $(this).css('background-color')
    $('.currentColor').css('background-color', commandCenter.color)
  })

  let isDown = false;
  console.log('using paint', commandCenter.color);

  $(document).mousedown(() => {
    isDown = true;
    console.log('mousedown: ', isDown);

  })
    .mouseup(() => {
      isDown = false;
      console.log('mousup: ', isDown);

    })

  $('.cell').mouseover(() => {
    console.log('mouseover: ', isDown);

    if (isDown) {
      const currentColor = $.css('background-color');

      console.log(commandCenter.color, 'jlou', currentColor)
      $(this).css('background-color', (val) => {
        console.log(val);

        console.log('background-color');

      })
    }
  })
})
