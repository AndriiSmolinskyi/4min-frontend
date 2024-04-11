import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";

export const Lesson2 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Проект, основа html.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми навчимось створювати та налаштовувати проєкт та вивчимо основні html теги.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Що таке HTML?</h3>
                    <div className="content__block">
                        <p className="content__paragraph">HTML (від англ. HyperText Markup Language — 'мова гіпертекстової розмітки') — стандартизована мова розмітки документів у Всесвітній павутині. Більшість вебсторінок мають зміст розмітки мовою HTML (або XHTML). Мова HTML інтерпретується браузерами; отриманий в результаті інтерпретації форматований текст відображається на екрані монітора комп’ютера або мобільного пристрою.</p>
                        <p className="content__paragraph">Мова HTML до 5-ї версії визначалась як додаток SGML (стандартної узагальненої мови розмітки за стандартом ISO 8879). Специфікації HTML5 формулюються в термінах DOM (об’єктній моделі документа).</p>
                        <p className="content__paragraph">Мова XHTML є більш суворим варіантом HTML, вона слідує синтаксису XML і є додатком мови XML в області розмітки гіпертексту. У всесвітній мережі HTML-сторінки, як правило, передаються браузерам від сервера по протоколам HTTP або HTTPS, у вигляді простого тексту або з використанням шифрування.</p>
                        <p className="content__paragraph">Тобто, HTML документ буде складатися з деякої групи елементів, де кожен елемент буде визначатися (починатися та закінчуватися) певним тегом (Для деяких елементів кінцевий тег не є обов'язвовим). Тобто, тег — це назва елементу, записана у кутових дужках (&lt; &gt;) </p>
                        <p className="content__paragraph">Кожен HTML тег має свою унікальну назву з визначеним синтаксисом, яка записується латинськими літерами і не чутлива до регістру. HTML документ оброблюється браузером та відтворюється на екрані у звичному для людини вигляді.</p>
                        <p className="content__paragraph">Можна з цього зрозуміти що html це не мова програмування, а мова розмітки. <a className="link" target="blank" href="https://w3schoolsua.github.io/html/index.html#gsc.tab=0">Посилання</a></p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Основні теги</h3>
                    <div className="content__block">
                        <p className="content__paragraph">&lt;h1&gt;, &lt;h2&gt;, ..., &lt;h6&gt;: Заголовки різних рівнів, де &lt;h1&gt; - найбільший, а &lt;h6&gt; - найменший.</p>
                        <p className="content__paragraph">&lt;p&gt; : Тег для створення абзаців тексту.</p>
                        <p className="content__paragraph">&lt;a&gt; : Використовується для створення посилань (гіперпосилань).</p>
                        <p className="content__paragraph">&lt;ul&gt; i &lt;ol&gt; : Для створення неупорядкованих (список з маркерами) і упорядкованих (нумерованих) списків.</p>
                        <p className="content__paragraph">&lt;li&gt; : Елемент списку, який визначає окремий пункт списку.</p>
                        <p className="content__paragraph">&lt;img&gt; : Для вставки зображень на сторінку.</p>
                        <p className="content__paragraph">&lt;div&gt; : Блочний контейнер для групування і стилізації елементів.</p>
                        <p className="content__paragraph">&lt;span&gt; : Інлайн-контейнер для стилізації частин тексту або інших елементів.</p>
                        <p className="content__paragraph"> Ці теги є основними будівельними блоками в HTML і дозволяють створювати структуру та вміст веб-сторінок. Не соромтеся дізнатися більше про кожен з них та як їх використовувати в вашій роботі з HTML.</p>
                        <a className="link" target="blank" href="https://dma-development.net/html/osnovni-tehy-html/">Детальніше про теги.</a>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Основні поняття.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Мова розмітки - це набір символів або послідовностей, які вставляються в текст, щоб надати інформацію про його форматування та структуру. Вона використовується у комп'ютерних мовах. Текстовий документ, створений за допомогою мови розмітки, містить не лише текст, але і додаткову інформацію про різні його частини, такі як заголовки, виділення та списки. У більш складних випадках мова розмітки дозволяє вставляти інтерактивні елементи та вміст інших документів.</p>
                        <p className="content__paragraph">Браузер - це програмне забезпечення для перегляду веб-сторінок, веб-документів, файлів та каталогів на комп'ютері, а також для взаємодії з веб-застосунками та вирішення інших завдань. У мережі Інтернет браузери використовуються для запитів, обробки та відображення вмісту веб-сайтів.</p>
                        <p className="content__paragraph">Тег (дескриптор) - це іменована мітка в мові розмітки гіпертексту, такі як HTML або XML. Текст, розміщений між початковим і кінцевим тегами, відображається та форматується згідно з властивостями, вказаними у початковому тегу.</p>
                        <p className="content__paragraph">Атрибут - це частина тега, яка дозволяє розширити можливості окремих тегів і забезпечити більш гнучкий контроль над вмістом контейнерів. Синтаксис - це набір правил, які описують комбінації символів алфавіту, які вважаються правильною структурою програми (документа) або її фрагменту. Синтаксис описує структуру мови, в той час як семантика надає значення конструкціям в цій мові.</p>
                        <p className="content__paragraph">Семантика - це галузь, яка досліджує формалізацію значень конструкцій у мовах програмування, шляхом створення формальних математичних моделей для цих конструкцій.</p>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Ознайомитись добре зі всіма основними тегами.</p>
                        <p className="content__paragraph">2. Створити сторінку есе автобіографію, з місцями роботи, соцмережами і так далі або резюме.</p>
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson2