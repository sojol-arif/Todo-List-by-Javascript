const form = document.querySelector('.new-task-form');
const taskInput = document.getElementById("new-input-task");
const taskLists = document.getElementById("tasks");

form.addEventListener("submit", function (event) {
    //console.log(event);
    event.preventDefault();

    if (taskInput.value) {
        // creating the task div
        const taskEl = document.createElement("div");
        taskEl.classList.add('task');

        // creating the content div
        const taskContent = document.createElement("div");
        taskContent.classList.add('content');

        // insterting element div to task div
        taskEl.appendChild(taskContent);

        // creating input task
        const taskElInput = document.createElement("input");
        taskElInput.classList.add('text');
        taskElInput.value = taskInput.value;
        taskElInput.setAttribute("readonly", "readonly");

        // inserting input to content
        taskContent.appendChild(taskElInput);

        // inserting task element div to tasks div
        taskLists.appendChild(taskEl);

        // creating action div
        const taskElAction = document.createElement("div");
        taskElAction.classList.add('actions');

        // inserting task element action to content
        taskContent.appendChild(taskElAction);

        // creating edit button
        const taskElEditBtn = document.createElement('button');
        taskElEditBtn.classList.add('edit');

        taskElEditBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="139.000000pt" height="139.000000pt" viewBox="0 0 139.000000 139.000000"  preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,139.000000) scale(0.100000,-0.100000)"      fill="#000000" stroke="none"><path d="M959 1180 c-24 -16 -200 -186 -390 -377 l-347 -348 -56 -169 c-31 -93 -54 -171 -53 -173 2 -1 80 22 173 53 l169 56 368 367 c399 397 409 410 388 487 -11 39 -64 101 -108 123 -40 20 -96 13 -144 -19z m-29 -255 l55 -55 -285 -285 -285 -285 -86 -29 -86 -29 12 42 c40 127 33 119 328 414 155 155 284 282 287 282 3 0 30 -25 60 -55z" /> </g> </svg>'

        // creating delete button
        const taskElDeletetBtn = document.createElement('button');
        taskElDeletetBtn.classList.add('delete');

        taskElDeletetBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="225.000000pt"  height="225.000000pt" viewBox="0 0 225.000000 225.000000"    preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"       fill="#000000" stroke="none"> <path d="M812 2221 c-49 -13 -106 -57 -132 -103 -20 -35 -24 -61 -28 -150 l-5 -108 -242 0 c-222 0 -243 -2 -258 -18 -20 -22 -22 -53 -5 -70 8 -8 53 -12 134 -12 l123 0 6 -42 c3 -24 37 -374 75 -778 39 -404 75 -752 80 -772 14 -48 52 -93 104 -121 40 -22 47 -22 461 -22 414 0 421 0 461 22 52 28 90 73 104 121 5 20 41 368 80 772 38 404 72 754 75 778 l6 42 123 0 c81 0 126 4 134 12 18 18 15 53 -6 71 -16 15 -49 17 -260 17 l-242 0 0 83 c0 104 -20 173 -62 216 -65 66 -62 66 -393 68 -165 1 -315 -2 -333 -6z m649 -130 c28 -29 29 -32 29 -130 l0 -101 -365 0 -365 0 0 101 c0 98 1 101 29 130 l29 29 307 0 307 0 29 -29z m280 -336 c4 -3 -130 -1418 -144 -1530 -4 -28 -15 -48 -37 -67 l-30 -28 -405 0 -405 0 -32 29 -32 29 -76 781 c-42 430 -74 784 -71 787 6 5 1226 5 1232 -1z" /><path d="M770 1525 c-10 -12 -7 -131 14 -577 15 -310 29 -571 32 -580 7 -22 51 -35 73 -21 10 7 17 28 19 61 6 96 -48 1105 -59 1119 -15 18 -64 17 -79 -2z" /> <path d="M1086 1518 c-14 -20 -16 -91 -16 -578 0 -604 0 -600 55 -600 55 0 55 -4 55 600 0 604 0 600 -55 600 -13 0 -31 -10 -39 -22z" /><path d="M1401 1527 c-11 -14 -65 -1023 -59 -1119 2 -33 9 -54 19 -61 22 -14 66 -1 73 21 3 9 17 270 32 580 21 446 24 565 14 577 -15 19 -64 20 -79 2z" /> </g></svg>'


        // creating delete button
        const taskElCompleteBtn = document.createElement('button');
        taskElCompleteBtn.classList.add('complete');

        taskElCompleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">  <image id="image0" width="512" height="512" x="0" y="0" href="data:image/png;base64,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"/></svg>'

        taskElAction.appendChild(taskElEditBtn);
        taskElAction.appendChild(taskElDeletetBtn);
        taskElAction.appendChild(taskElCompleteBtn);

        // clear the input field
        taskInput.value = "";

        // edit button click
        taskElEditBtn.addEventListener('click', function () {
            taskElInput.removeAttribute("readonly");
            taskElInput.focus();
        });

        // delete button click
        taskElDeletetBtn.addEventListener('click', function () {
            this.closest('.task').remove();
        });

        // complete button click
        taskElCompleteBtn.addEventListener('click', function () {
            this.closest('.content').classList.add('mark-completed');
        });

    }
    else {
        alert("Enter some task!");
    }

});