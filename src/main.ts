/* eslint-disable no-new */

import './styles.css';
import { series } from './series.ts';
import { Header } from './header.ts';
import { Serie } from './serie.ts';

new Header('header');
const pending = series.filter((item) => item.watched === false);
const watched = series.filter((item) => item.watched === true);

pending.map((item) => new Serie('.series-list--pending', item));
watched.map((item) => new Serie('.series-list--watched', item));
