(function() {
    "use strict"
    
    let x = 0;
    let size;
    while(x === 0) {
        size = Number(prompt("Please set size of the pyramid"));
        if (size !== size || typeof size !== 'number') {
            alert('Value should be number');
        } else {
            x += 1;
            drawPyramid(size);
            drawReversePyramid(size);
            drawMirrorPyramid(size);
            drawMirrorReversePyramid(size);
            WholePyramid(size);
            WholeReversePyramid(size);
        }
    }

    function drawPyramid(pyrSize) {
        console.group('%cPyramid', 'color: Red');
        for (let i = 1; i <= pyrSize; i += 1) {
            let str = '';
            for (let j = 0; j < i; j += 1) {
                str += '#'
            }
            
            console.log('%c' + str, 'color: DeepPink');
        }
        console.groupEnd('%cPyramid', 'color: Red');
    }

    function drawReversePyramid(pyrSize) {
        console.group('%cReverse Pyramid', 'color: Red');
        for (let i = pyrSize; i > 0; i -= 1) {
            let str = '';
            for (let j = 0; j < i; j += 1) {
                str += '#'
            }
            
            console.log('%c' + str, 'color: Lime');
        }
        console.groupEnd('%cReverse Pyramid', 'color: Red');
    }

    function drawMirrorPyramid(pyrSize) {
        console.group('%cMirror Pyramid', 'color: Red');
        for (let i = 1; i <= pyrSize; i += 1) {
            let str = '';
            let spaces = pyrSize - i;
            let hashes = i;

            for (let j = 0; j < spaces; j++) {
                str += ' ';
            }

            for (let k = 0; k < hashes; k++) {
                str += '#';
            }

            console.log('%c' + str, 'color: Cyan');
        }
        console.groupEnd('%cMirror Pyramid', 'color: Red');
    }

    function drawMirrorReversePyramid(pyrSize) {
        console.group('%cMirror Reverse Pyramid', 'color: Red');
        for (let i = pyrSize; i > 0; i -= 1) {
            let str = '';
            let spaces = pyrSize - i;
            let hashes = i;

            for (let j = 0; j < spaces; j++) {
                str += ' ';
            }

            for (let k = 0; k < hashes; k++) {
                str += '#';
            }

            console.log('%c' + str, 'color: DeepSkyBlue');
        }
        console.groupEnd('%cMirror Reverse Pyramid', 'color: Red');
    }

    function WholePyramid(pyrSize) {
        console.group('%cWhole Pyramid', 'color: Red');
        for (let i = 1; i <= pyrSize; i += 1) {
            let str = '';
            let hashes = i * 2;
            let spaces = pyrSize - i;

            for (let j = 0; j < spaces; j++) {
                str += ' ';
            }


            for (let k = 0; k < hashes; k++) {
                str += '#';
            }

            console.log('%c' + str, 'color: Indigo');
        }
        console.groupEnd('%cWhole Pyramid', 'color: Red');
    }

    function WholeReversePyramid(pyrSize) {
        console.group('%cWhole Reverse Pyramid', 'color: Red');
        for (let i = pyrSize; i > 0; i -= 1) {
            let str = '';
            let hashes = i * 2;
            let spaces = pyrSize - i;

            for (let j = 0; j < spaces; j++) {
                str += ' ';
            }


            for (let k = 0; k < hashes; k++) {
                str += '#';
            }

            console.log('%c' + str, 'color: Khaki');
        }
        console.groupEnd('%cWhole Reverse Pyramid', 'color: Red');
    }

})()