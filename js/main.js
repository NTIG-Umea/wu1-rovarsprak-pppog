document.addEventListener('DOMContentLoaded', () => {
    // kolla i webbläsarens console för att se vad som händer
    console.log('Laddat');

    // välj de element vi behöver
    const message = document.querySelector('#message');
    const textbox = document.querySelector('#textbox');
    const button = document.querySelector('#translate');

    // lyssna på knapptryck

    button.addEventListener('click', (e) => {
        // läs in texten från textboxen
        const text = textbox.value;
        // skicka texten till funktionen för att översätta
        const translation = translate(text);
        // Hur kan du rensa textboxen?
        // skriv ut översättningen i message
        display(translation, message);
    });

    textbox.addEventListener('change', (e) => {
        // läs in texten från textboxen
        const text = textbox.value;
        // skicka texten till funktionen för att översätta
        const translation = translate(text);
        // Hur kan du rensa textboxen?
        // skriv ut översättningen i message
        display(translation, message);
    });

});

const translate = (text) => {
    // översätt texten till rövarspråket
    let nyttOrd = "";
    for(var i = 0; i < text.length; i++)
    {
        let k = text.charAt(i);
        if(k == 'a' || k == 'o' || k == 'u' || k == 'i' || k == 'e' || k == 'ä' || k == 'å' || k == 'ö' || k == '')
        {
            nyttOrd = nyttOrd + k;
        }
        else
        {
            if(i == 0)
            {
                nyttOrd = k + "o" + k.toLowerCase();
            }
            else
            {
            nyttOrd = nyttOrd + k.toLowerCase() + "o" + k.toLowerCase();
            }
        }
    }
    text = nyttOrd;
    console.log(text)
    return text;
};

const display = (translation, element) => {
    // skapa ett p element för texten
    const p = document.createElement('p');
    // sätt texten till översättningen
    p.textContent = translation;
    // fäst elementet
    element.insertBefore(p, element.firstChild);
}
