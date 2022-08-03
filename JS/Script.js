const statbar = document.querySelectorAll('.statDecorNotLast');
let rgba = [211, 0, 100];
let indx = 0;
for (const decordiv of statbar) {
    decordiv.style.backgroundColor = `rgba(${rgba[0]},${rgba[1]}, ${rgba[2]})`
    indx += 1;
    indx > 0 ? rgba[0] = 248 : null;
    if (indx > 1) {
        rgba[1] += 33;
        rgba[2] += 17;
    }
}