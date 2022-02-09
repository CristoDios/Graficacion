var clicks = 0;
function obtenerCoords3(event) {

  clicks = clicks + 1;
  if (clicks == 1) {
    x1 = event.clientX - 8;
    y1 = event.clientY- 8;
    var coor = "X: " + x1 + ", Y: " + y1;

    console.log(coor);
  } else if (clicks == 2) {
    clicks = 0;
    x2 = event.clientX- 8;
    y2 = event.clientY- 8;
    var coor2 = "X2: " + x2 + ", Y2: " + y2;

    console.log(coor2);

    var Dx = x2 - x1;
    var Dy = y2 - y1;

    var inc_x = Dx >= 0 ? +1 : -1;
    var inc_y = Dy >= 0 ? +1 : -1;

    Dx = Dx < 0 ? -Dx : Dx;
    Dy = Dy < 0 ? -Dy : Dy;

    console.log("******************");
    console.log("Dx=" + Dx);
    console.log("Dy=" + Dy);
    console.log("******************");

    var lienzo = document.querySelector("canvas");
    var context = lienzo.getContext("2d");
    context.fillStyle = "red";

    if (Dx >= Dy) {
      var d = 2 * Dy - Dx;
      var delta_A = 2 * Dy;
      var delta_B = 2 * Dy - 2 * Dx;
      console.log("D=" + d);
      console.log("Delta A=" + delta_A);
      console.log("Delta B=" + delta_B);
      console.log("******************");

      var x = 0;
      var y = 0;
      for (i = 0; i <= Dx; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;

        } else {
          d += delta_A;
          x += inc_x;
        }
        console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************");
      }
    } else {
      var d = 2 * Dx - Dy;
      var delta_A = 2 * Dx;
      var delta_B = 2 * Dx - 2 * Dy;

      var x = 0;
      var y = 0;
      for (i = 0; i <= Dy; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;
        } else {
          d += delta_A;
          y += inc_y;
        }
        console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************");
      }
    }
  } 
}

function PruebaRendBre(event){
  console.log("BRESENHAM");
  x1 = 0;
  y1 = 0;
  x2 = 0;
  y2 = 1000;

  for (let index = 1; index < 500; index++) {

    x2 += 2;
    x1 += 2;
    
    var Dx = x2 - x1;
    var Dy = y2 - y1;

    var inc_x = Dx >= 0 ? +1 : -1;
    var inc_y = Dy >= 0 ? +1 : -1;

    Dx = Dx < 0 ? -Dx : Dx;
    Dy = Dy < 0 ? -Dy : Dy;

    /* console.log("******************");
    console.log("Dx=" + Dx);
    console.log("Dy=" + Dy);
    console.log("******************"); */

    var lienzo = document.querySelector("canvas");
    var context = lienzo.getContext("2d");
    context.fillStyle = "red";

    if (Dx >= Dy) {
      var d = 2 * Dy - Dx;
      var delta_A = 2 * Dy;
      var delta_B = 2 * Dy - 2 * Dx;
      /* console.log("D=" + d);
      console.log("Delta A=" + delta_A);
      console.log("Delta B=" + delta_B);
      console.log("******************"); */

      var x = 0;
      var y = 0;
      for (i = 0; i <= Dx; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;

        } else {
          d += delta_A;
          x += inc_x;
        }
        /* console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    } else {
      var d = 2 * Dx - Dy;
      var delta_A = 2 * Dx;
      var delta_B = 2 * Dx - 2 * Dy;

      var x = 0;
      var y = 0;
      for (i = 0; i <= Dy; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;
        } else {
          d += delta_A;
          y += inc_y;
        }
        /* console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    }
    }

    x1 = 0;
    x2 = 0;
    y1 = 0;
    y2 = 0;

    for(let index = 1; index <= 500; index++){
      x1 = 0;
      x2 = 1000;
      y1 = y1 + 2;
      y2 = y2 + 2;

      var Dx = x2 - x1;
    var Dy = y2 - y1;

    var inc_x = Dx >= 0 ? +1 : -1;
    var inc_y = Dy >= 0 ? +1 : -1;

    Dx = Dx < 0 ? -Dx : Dx;
    Dy = Dy < 0 ? -Dy : Dy;

    /* console.log("******************");
    console.log("Dx=" + Dx);
    console.log("Dy=" + Dy);
    console.log("******************"); */

    var lienzo = document.querySelector("canvas");
    var context = lienzo.getContext("2d");
    context.fillStyle = "red";

    if (Dx >= Dy) {
      var d = 2 * Dy - Dx;
      var delta_A = 2 * Dy;
      var delta_B = 2 * Dy - 2 * Dx;
      /* console.log("D=" + d);
      console.log("Delta A=" + delta_A);
      console.log("Delta B=" + delta_B);
      console.log("******************"); */

      var x = 0;
      var y = 0;
      for (i = 0; i <= Dx; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;

        } else {
          d += delta_A;
          x += inc_x;
        }
       /*  console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    } else {
      var d = 2 * Dx - Dy;
      var delta_A = 2 * Dx;
      var delta_B = 2 * Dx - 2 * Dy;

      var x = 0;
      var y = 0;
      for (i = 0; i <= Dy; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;
        } else {
          d += delta_A;
          y += inc_y;
        }
        /* console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    }
    }

    x1 = 0;
    x2 = 0;
    y1 = 0;
    y2 = 0;

    for(let index = 1; index <= 1000; index++){
         
        x2 += 2;
        y1 += 2;

        var Dx = x2 - x1;
    var Dy = y2 - y1;

    var inc_x = Dx >= 0 ? +1 : -1;
    var inc_y = Dy >= 0 ? +1 : -1;

    Dx = Dx < 0 ? -Dx : Dx;
    Dy = Dy < 0 ? -Dy : Dy;

    /* console.log("******************");
    console.log("Dx=" + Dx);
    console.log("Dy=" + Dy);
    console.log("******************") */;

    var lienzo = document.querySelector("canvas");
    var context = lienzo.getContext("2d");
    context.fillStyle = "red";

    if (Dx >= Dy) {
      var d = 2 * Dy - Dx;
      var delta_A = 2 * Dy;
      var delta_B = 2 * Dy - 2 * Dx;
      /* console.log("D=" + d);
      console.log("Delta A=" + delta_A);
      console.log("Delta B=" + delta_B);
      console.log("******************"); */

      var x = 0;
      var y = 0;
      for (i = 0; i <= Dx; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;

        } else {
          d += delta_A;
          x += inc_x;
        }
        /* console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    } else {
      var d = 2 * Dx - Dy;
      var delta_A = 2 * Dx;
      var delta_B = 2 * Dx - 2 * Dy;

      var x = 0;
      var y = 0;
      for (i = 0; i <= Dy; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;
        } else {
          d += delta_A;
          y += inc_y;
        }
        /* console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    }
    }

    x1 = 1000;
    y1 = 0;
    x2 = 1000;
    y2 = 0;

    for(let index = 1; index <= 1000; index++){
         
        x2 -= 2;
        y1 += 2;

        var Dx = x2 - x1;
    var Dy = y2 - y1;

    var inc_x = Dx >= 0 ? +1 : -1;
    var inc_y = Dy >= 0 ? +1 : -1;

    Dx = Dx < 0 ? -Dx : Dx;
    Dy = Dy < 0 ? -Dy : Dy;

    /* console.log("******************");
    console.log("Dx=" + Dx);
    console.log("Dy=" + Dy);
    console.log("******************"); */

    var lienzo = document.querySelector("canvas");
    var context = lienzo.getContext("2d");
    context.fillStyle = "red";

    if (Dx >= Dy) {
      var d = 2 * Dy - Dx;
      var delta_A = 2 * Dy;
      var delta_B = 2 * Dy - 2 * Dx;
      /* console.log("D=" + d);
      console.log("Delta A=" + delta_A);
      console.log("Delta B=" + delta_B);
      console.log("******************"); */

      var x = 0;
      var y = 0;
      for (i = 0; i <= Dx; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;

        } else {
          d += delta_A;
          x += inc_x;
        }
       /*  console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    } else {
      var d = 2 * Dx - Dy;
      var delta_A = 2 * Dx;
      var delta_B = 2 * Dx - 2 * Dy;

      var x = 0;
      var y = 0;
      for (i = 0; i <= Dy; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;
        } else {
          d += delta_A;
          y += inc_y;
        }
        /* console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    }
    }
}