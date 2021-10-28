'use strict';

const typewriterTimeline = [
    {
        _kind: 'wait',
        duration: 1600,
    },
    {
        _kind: 'type',
        content: ', I\'m Marco :)',
        perLetterDuration: 190,
    },
    {
        _kind: 'wait',
        duration: 2300,
    },
    {
        _kind: 'delete',
        count: 3,
        perLetterDuration: 50,
    },
    {
        _kind: 'wait',
        duration: 600,
    },
    {
        _kind: 'insert',
        content: '.',
    },
];

window.addEventListener('load', () => {
    // Typewriter.
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl != null) {
        let currentDelay = 0;
        typewriterTimeline.forEach((x) => {
            switch(x._kind) {
                case 'wait':
                    currentDelay += x.duration;
                    break;
                case 'type':
                    for(let i = 0; i < x.content.length; i++) {
                        setTimeout(() => {
                            typewriterEl.innerHTML += x.content.charAt(i);
                        }, currentDelay + x.perLetterDuration * i);
                    }
                    currentDelay += x.perLetterDuration * (x.content.length - 1);
                    break;
                case 'insert':
                    setTimeout(() => {
                        typewriterEl.innerHTML += x.content;
                    }, currentDelay);
                    break;
                case 'delete':
                    for(let i = 0; i < x.count; i++) {
                        setTimeout(() => {
                            typewriterEl.innerHTML = typewriterEl.innerHTML.slice(0, -1);
                        }, currentDelay + x.perLetterDuration * i);
                        currentDelay += x.perLetterDuration * (x.count - 1);
                    }
                    break;
            }
        });
    }
});
