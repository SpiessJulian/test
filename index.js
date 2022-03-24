const button = document.getElementById('btnClick');

button.onclick = () => {
    const title = document.createElement('h1');
    title.innerHTML = 'Hola mundo';
    document.body.appendChild(title);
};
