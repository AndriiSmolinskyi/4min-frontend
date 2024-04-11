import "./Lesson.scss";
import { LessonBtn } from "./LessonBtn";

export const Lesson6 = ( {lessonId, groupId} ) => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Figma.</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Привіт, сьогодні ми дізнаємось що таке Figma і навіщо вона для фронтенда.</h3>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Що таке Figma?</h3>
                    <div className="content__block">               
                        <p className="content__paragraph">Figma - це веб-сервіс і програма для дизайну та прототипування інтерфейсів. Вона дозволяє дизайнерам створювати макети веб-сайтів, мобільних додатків та інших інтерфейсів у візуальному режимі. Figma стала дуже популярною серед фронтенд розробників і дизайнерів, і ось чому вона корисна для фронтенда:</p>
                        <p className="content__paragraph">Співпраця: Figma забезпечує можливість спільно працювати над дизайном та прототипами. Розробники та дизайнери можуть легко обговорювати та вносити зміни до проекту одночасно.</p>
                        <p className="content__paragraph">Відкритий доступ: Дизайн проекту в Figma може бути доступним для всієї команди, що спрощує спільну роботу і дозволяє уникнути непорозумінь між дизайнерами і розробниками.</p>
                        <p className="content__paragraph">Прототипування: Figma дозволяє створювати прототипи взаємодії веб-сайту або додатка. Це допомагає фронтенд розробникам краще розуміти, як має працювати інтерфейс і які анімації використовувати.</p>
                        <p className="content__paragraph">Відправка до розробки: З Figma можна легко відправити графічний дизайн до розробки, використовуючи різні плагіни та інструменти. Це спрощує процес розробки фронтенда, оскільки дизайн може бути імпортованим без зайвого зусилля.</p>
                        <p className="content__paragraph">Інспекція: Figma надає інструменти для інспекції дизайну, включаючи кольори, шрифти, розміри та відстані. Це полегшує реалізацію дизайну на реальному веб-сайті або додатку.</p>
                        <p className="content__paragraph">Векторна графіка: Figma працює з векторною графікою, що дозволяє створювати масштабований і адаптивний дизайн, що важливо для розробки веб-сайтів та додатків на різних пристроях.</p>
                        <p className="content__paragraph">У підсумку, Figma є потужним інструментом для співпраці між дизайнерами та фронтенд розробниками, а також для створення дизайну та прототипів, які служать основою для створення візуально привабливих та функціональних веб-сайтів і додатків.</p>
                        <a className="link" target="blank" href="https://www.figma.com/signup">https://www.figma.com/signup</a>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Основні поняття.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Векторна графіка - це метод представлення об'єктів і зображень у комп'ютерній графіці, використовуючи математичні об'єкти, такі як лінії і криві.</p>
                        <p className="content__paragraph">Растрове зображення - це зображення, яке складається з пікселів та використовується для відображення на моніторі, папері та інших відображальних пристроях та матеріалах.</p>
                        <p className="content__paragraph">Пункт - одиниця виміру в поліграфічній системі, рівна 1/72 дюйма і часто використовується для вимірювання розмірів шрифтів.</p>
                        <p className="content__paragraph">Роздільна здатність - це кількість пікселів на одиницю довжини, зазвичай виражена в дюймах.</p>
                        <p className="content__paragraph">Піксель - це найменший елемент зображення, який може бути відображений на екрані або в растрі.</p>
                        <p className="content__paragraph">Півтон - це метод передачі тонів за допомогою різних розмірів точок одного кольору, які об'єднуються візуально.</p>
                        <p className="content__paragraph">Смарт-об'єкт - це шар, що містить зображення з півтонових або векторних шарів у програмі Adobe Photoshop, з можливістю редагування стилів і ефектів.</p>
                        <p className="content__paragraph">Трансформації - це зміни вибраної області, такі як переміщення, масштабування, обертання та інші, які можуть бути застосовані до графічних об'єктів.</p>
                        <p className="content__paragraph">Макет сайту - це візуальна концепція майбутнього веб-сайту, що служить основою для розробки його інтерфейсу.</p>
                        <p className="content__paragraph">Злиття шарів - процес об'єднання видимих шарів в один з урахуванням різних ефектів і режимів накладання.</p>
                        <p className="content__paragraph">Шар - це додатковий рівень для малювання, аналогічний прозорій кальці в традиційному дизайні.</p>
                        <p className="content__paragraph">Роловер - це інтерактивний елемент веб-дизайну, який реагує на розташування курсору миші і стан його кнопок.</p>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title-h3">Домашнє завдання.</h2>
                    <div className="content__block">
                        <p className="content__paragraph">1. Семантично створити HTML структуру макету <a className="link" target="blank" href="https://www.figma.com/file/nrCixAA88N1oUGPThLvwGZ/Untitled?type=design&node-id=1%3A38&mode=design&t=wv9E3dqZIDjFi6F1-1">Посилання</a></p>   
                    </div>
                    
                </div>
            </div>
            <LessonBtn lessonId={lessonId} groupId={groupId}></LessonBtn>
        </div>    
    )
}

export default Lesson6