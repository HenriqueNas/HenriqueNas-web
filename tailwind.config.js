/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      cursor: {
        move: 'url("../assets/cursors/move.png") , move',
        grab: 'url("../assets/cursors/move.png") , grab',
        grabbing: 'url("../assets/cursors/grabbing.png") , grabbing',
        pointer: 'url("../assets/cursors/pointer.png") , none',
        notAllowed: 'url("../assets/cursors/not-allowed.png") , not-allowed',
        progress: 'url("../assets/cursors/progress.png") , progress',
        wait: 'url("../assets/cursors/wait.png") , wait',
        colResize: 'url("../assets/cursors/col-resize.png") , col-resize',
        rowResize: 'url("../assets/cursors/row-resize.png") , row-resize',
        allScroll: 'url("../assets/cursors/move.png") , all-scroll',
        precision: 'url("../assets/cursors/precision.png") , row-resize',
        neswResize: 'url("../assets/cursors/diagonal-tr-bl.png") , nesw-resize',
        nwseResize: 'url("../assets/cursors/diagonal-tl-br.png") , nwse-resize',
        wResize: 'url("../assets/cursors/col-resize.png") , w-resize',
        eResize: 'url("../assets/cursors/col-resize.png") , e-resize',
        nResize: 'url("../assets/cursors/row-resize.png") , n-resize',
        sResize: 'url("../assets/cursors/row-resize.png") , s-resize',
        neResize: 'url("../assets/cursors/precision.png") , ne-resize',
        nwResize: 'url("../assets/cursors/precision.png") , nw-resize',
        seResize: 'url("../assets/cursors/precision.png") , se-resize',
        swResize: 'url("../assets/cursors/precision.png") , sw-resize',
        nsResize: 'url("../assets/cursors/row-resize.png") , ns-resize',
        ewResize: 'url("../assets/cursors/col-resize.png") , ew-resize',
      },
    },
    plugins: [],
  },
}
