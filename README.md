### Accordion0 is simple JS accordion script. It's not required any dependencies.
(Accordion0 - это простой JS-скрипт аккордиона, не требующий зависимостей)

### Installation:
1. Clone or download this library. Copy file /dist/accordion0.min.js or /dist/accordion0.js into scripts folder of your project. (Клонируйте или скачайте эту библиотеку. Скопируйте файл /dist/accordion0.min.js или /dist/accordion0.js в папку со скриптами вашего проекта).

2. Link library file in your html code (подключите библиотеку в вашем html-коде):
```html
<script src='path/to/accordion0.js'></script>
```

3. Insert this code into your html (поместите этот код в ваш html):
```html
<ul id="accordion0">
    <li>
        <a href="#">first group</a>
        <ul>
            <li><a href="#">link 1</a></li>
            <li><a href="#">link 2</a></li>
        </ul>
    </li>
    <li>
        <a href="#">second group</a>
        <ul>
            <li><a href="#">link 1</a></li>
            <li><a href="#">link 2</a></li>
            <li><a href="#">link 3</a></li>
        </ul>
    </li>
    <li>
        <a href="#">third group</a>
        <ul>
            <li><a href="#">link 1</a></li>
            <li><a href="#">link 2</a></li>
            <li><a href="#">link 3</a></li>
            <li><a href="#">link 4</a></li>
        </ul>
    </li>
</ul>
```

4. Create object in your script tag or .js file, write your list ID as first argument and params as second argument, "params" is not necessary (Создайте объект в вашем тэге "script" или .js-файле, передайте ID вашего списка как первый аргумент и параметры как второй аргумент, параметры передавать не обязательно):
```html js
<script>
    var accordion0 = new Accordion0('accordion0', {
        transitionTimingFunction: 'cubic-bezier(.17,.67,.83,.67)', //ease-in, ease-out, ease-in-out, linear
        transitionDuration: '2s' //animation time, время анимации
    })
</script>
```

5. Edit list and make your own CSS selectors and properties (Отредактируйте список, создайте свои CSS-селекторы и свойства).
