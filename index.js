const num = document.getElementById('num');
const option = document.getElementById('option');
const genBtn = document.getElementById('genBtn');
const copyBtn = document.getElementById('copyBtn');
const content = document.getElementById('content');

genBtn.addEventListener('click', genValue);


async function genValue() {
    const count = num.value;
    const options = option.value;
    const url = `https://baconipsum.com/api/?type=meat-and-filler&${options}=${count}&start-with-lorem=1`;

    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            displayGenContent(data);
        } else {
            console.error('Failed to fetch content:', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayGenContent(data) {
    const text = data.join('<br><br>');
    content.innerHTML = text;
}

copyBtn.addEventListener('click', copyContentClipboardAPI)

function copyContentClipboardAPI() {
    const text = content.innerText || content.textContent;
    if (text.length > 0) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Content copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    } else {
        alert('click generate button to show content')
    }
}



