import React from 'react';
import './info.css';

const Info = () => {
  return (
    <div className='info'>
      <div className='heading'>
        <h1>Информация</h1>
        <span>Рекомендуется к прочтению перед использованием приложения</span>
      </div>
      <section>
        <h2>ДИСКЛЕЙМЕР</h2>
        <p className='a'>
          Фотографии, опубликованные в социальных сетях являются достоянием общественности и доступны для использования в сети интернет
          повсеместно. Проект не преследует цели оскорбить либо унизить кого-либо.
        </p>
      </section>
      <section>
        <h2>FAQ</h2>
        <p className='q'>
          <b>Q:</b> Как это работает?
        </p>
        <p className='a'>
          <b>A:</b> Имеется база данных, в которую изначально были помещены страницы всех девушек, состоящих в паблике{' '}
          <a href='https://vk.com/mgol3overheard'>Подслушано "МГОЛ №3"</a>, после чего потенциальные участницы были просеяны через
          специальный алгоритм, отсеивающий страницы без фотографии/с картинкой не являющейся фотографией. На странице{' '}
          <a href='/'>"БИТВА"</a> Вам предлагается выбрать одну из двух случайных участниц, выбранная девушка получает 1 очко, на основе
          которых в последствии формируется рейтинговая таблица, проигравашая - ничего. После чего предлагается две новые случайные
          участницы и так далее.
        </p>
        <hr />
        <p className='q'>
          <b>Q:</b> Почему некоторые фотографии имеют низкое разрешение?
        </p>
        <p className='a'>
          <b>A:</b> К сожалению, получить доступ к полноразмерной фотографии в профиле представляется возможным только для открытых
          страниц, в случае, если страница пользователя закрыта, нам остаётся довольствоваться миниматюрой аватара. Если вы располагаете
          полными версиями фотографий с некоторых закрытых страниц и хотите помочь -{' '}
          <a href='mailto:mndabslt@gmail.com'>присылайте их нам</a> вместе с именами запечатлённых на них девушех.
        </p>
        <hr />
        <p className='q'>
          <b>Q:</b> Я состою в "Подслушано", но не нашла себя здесь, почему?
        </p>
        <p className='a'>
          <b>A:</b> В таблице лидеров отображается топ-50 участниц по количеству набранных очков, возможно, Ваш рейтинг ниже или же вы не
          были отобраны алгоритмом. В любом случае, Вы всегда можете <a href='mailto:mndabslt@gmail.com'>отправить</a> нам ваши данные (id
          страницы вк, фотография, полное имя), после чего в скором времени Вы будете добавлены в базу данных проекта.
        </p>
        <hr />
        <p className='q'>
          <b>Q:</b> Мне нравится проект и я хочу поддержать создателей материально. Как я могу это сделать?
        </p>
        <p className='a'>
          <b>A:</b> <a href='mailto:mndabslt@gmail.com'>Пишите</a> - что-нибудь придумаем :)
        </p>
        <hr />
        <p className='q'>
          <b>Q:</b> Приложение неестественно вытянуто на экране, шрифт едва различим. Что делать?
        </p>
        <p className='a'>
          <b>A:</b> Подобные проблемы могут возникать на мобильных устройствах в вертикальном режиме, попробуйте повернуть телефон
          горизонтально и проблема исчёзнет
        </p>
        <hr />
        <p className='q'>
          <b>Q:</b> Приложение долго прогружается, не реагирует на клики. Что делать?
        </p>
        <p className='a'>
          <b>A:</b> Поскольку приложение размещено на бесплатном хостинге, могут наблюдаться проблемы с производительностью из-за
          перегруженности сервера. Наиболее верным решением в таком случае будет просто подождать, не выполняя повторных нажатий
          куда-либо.
        </p>
        <hr />
      </section>
      <p>Обратная связь: mndabslt@gmail.com </p>
    </div>
  );
};

export default Info;
