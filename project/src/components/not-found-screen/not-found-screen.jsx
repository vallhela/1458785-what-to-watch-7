import React from 'react';
import {AppRoute} from '../../const';

function NotFoundScreen() {

  return (
    <section>
      <h1>404. Page not found</h1>
      <a href={AppRoute.MAIN}>Вернуться на главную</a>
    </section>
  );
}

export default NotFoundScreen;
