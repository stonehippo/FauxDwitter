/*
    A recreation of the API of dwitter.net for local development

    MIT License

    Copyright (c) 2018 George White

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

/* Set up math constants */
const S = a => Math.sin(a);
const C = a => Math.cos(a);
const T = a => Math.tan(a);

/* RGB rgba string generator */
const R = (r, g, b, a) => `rgba(${r},${g},${b},${a})`;

/* Expose the canvas, its 2D context, and the current running time in seconds globally */
let c,x,t;

const FauxDwitter = {
    interval:null,
    f:null,
    init(id, reset, counter) {
        c = document.getElementById(id);
        x = c.getContext('2d');
        c.width = 2e3;
        c.height = 1e3;
        document.getElementById(reset).addEventListener("click", () => this.reset());
        this.counter = document.getElementById(counter);
    },
    run(u) {
        this.f=u,t=0;
        this.interval = setInterval(() => {
            u(t);
            t += 0.01667;
            this.counter.innerHTML = `Seconds since start: ${t}`;
        }, 16.667);
    },
    reset() {
        clearInterval(this.interval);
        this.run(this.f);
    }
};
