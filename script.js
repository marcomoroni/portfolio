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

    // Cursor.
    const cursor = document.getElementsByClassName('cursor')[0];
    document.querySelector('body').addEventListener('mouseleave', (e) => {
        cursor.classList.remove('visible');
        cursor.classList.add('hidden');
    });
    document.querySelectorAll('a, .cursor-interactable').forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            cursor.classList.add('hover-link');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-link');
        });
    });

    // Full-screen images.
    document.querySelectorAll('.can-toggle-full-width').forEach((el) => {
        el.onclick = (e) => {
            if (el.classList.contains('full-width')) {
                el.classList.remove('full-width');
            }
            else {
                el.classList.add('full-width');
            }
        };
    });
});
