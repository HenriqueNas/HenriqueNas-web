/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
      },
      cursor: {
        move: 'url("../assets/cursors/grab.cur") , move',
        grab: 'url("../assets/cursors/grab.cur") , grab',
        grabbing: 'url("../assets/cursors/grabbing.cur") , grabbing',
        pointer: 'url("../assets/cursors/pointer.cur") , none',
        notAllowed: 'url("../assets/cursors/not-allowed.cur") , not-allowed',
        progress: 'url("../assets/cursors/progress.cur") , progress',
        wait: 'url("../assets/cursors/wait.png") , wait',
        text: 'url("../assets/cursors/text.cur") , text',
        colResize: 'url("../assets/cursors/col-resize.cur") , col-resize',
        rowResize: 'url("../assets/cursors/row-resize.cur") , row-resize',
        allScroll: 'url("../assets/cursors/grab.cur") , all-scroll',
        neswResize: 'url("../assets/cursors/diagonal-tr-bl.cur") , nesw-resize',
        nwseResize: 'url("../assets/cursors/diagonal-tl-br.cur") , nwse-resize',
        wResize: 'url("../assets/cursors/col-resize.cur") , w-resize',
        eResize: 'url("../assets/cursors/col-resize.cur") , e-resize',
        nResize: 'url("../assets/cursors/row-resize.cur") , n-resize',
        sResize: 'url("../assets/cursors/row-resize.cur") , s-resize',
        nsResize: 'url("../assets/cursors/row-resize.cur") , ns-resize',
        ewResize: 'url("../assets/cursors/col-resize.cur") , ew-resize',
      },
    },
    plugins: [],
  },
};
