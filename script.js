var sentenceList = [
    "The mailbox was bent and broken and looked like someone had knocked it over on purpose.",
    "I was so thirsty I couldn't wait to get a drink of water.",
    "I found a gold coin on the playground after school today.",
    "The chocolate chip cookies smelled so good that I ate one without asking.",
    "My bandaid wasn't sticky any more so it fell off on the way to school.",
    "He had a sore throat so I gave him my bottle of water and told him to keep it.",
    "The church was white and brown and looked very old.",
    "I was so scared to go to a monster movie but my dad said he would sit with me so we went last night.",
    "Your mom is so nice she gave me a ride home today.",
    "I fell in the mud when I was walking home from school today.",
    "This dinner is so delicious I can't stop eating.",
    "The school principal was so mean that all the children were scared of him.",
    "I went to the dentist the other day and he let me pick a prize out of the prize box.",
    "The box was small and wrapped in paper with tiny silver and red glitter dots.",
    "My dad is so funny that he told us jokes all night long and we never fell asleep.",
    "How did you know that I was going to have a peanut butter sandwich for lunch?",
    "That boy is so mean that he doesn't care if a door slams in your face or if he cuts in line."
];

        

        const btn1 = document.getElementById("btn1");
        const textarea = document.getElementById("text-area");
        const prompttext = document.getElementById("prompt-text");
        const timetaken = document.getElementById("timetaken");
        const wordcount = document.getElementById("wordcount");
        const typingspeed = document.getElementById("typingspeed");

        textarea.disabled = true;

        btn1.addEventListener('click', function(){
            if (this.innerText == "Start") {
                textarea.disabled = false;
                this.innerText = "Stop";
                let sentence_number = Math.floor(Math.random()*17);
                prompttext.innerText = sentenceList[sentence_number];
                let date = new Date();
                startTime = date.getTime();

            }
            else {

                textarea.disabled = true;
                this.innerText = "Start";
                let date = new Date();
                stopTime = date.getTime();
                const timeTaken = ((stopTime - startTime)/1000).toFixed(2);
                timetaken.innerText = "Time Taken: " + timeTaken + " seconds";
                const wordCount = (textarea.value).match(/(\w+)/g).length;
                wordcount.innerText = "Word Count: " + wordCount;
                typingspeed.innerText = "Typing Speed: " + Math.round((wordCount/timeTaken)*60) + " words/min";
                textarea.value = "";                                

            }
        });

        btn2.addEventListener("click", function() {
                timetaken.innerText = "";
                wordcount.innerText = "";
                typingspeed.innerText = "";
        });
