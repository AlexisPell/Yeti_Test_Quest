import React from 'react'
import './landing.scss'

const Landing = () => {
	return (
		<div className='landing'>
			<div class='jumbotron'>
				<div>Время выполнения: 12 часов</div>
				<h1 class='display-5'>Проектная документация</h1>
				<h5 class='lead text'>
					<strong>Функционал:</strong> В проекте реализована возможность вести
					учет/ создавать/ удалять/ редактировать учетные данные по заявкам, в
					соотвтетствии с ТЗ.
				</h5>
				<h5 class='lead text'>
					<strong>Общие аспекты:</strong> Выполненые все основные и
					дополнительные задания по ТЗ, за исключением ссылок на ATI (поздно
					заметил, заменил датой регистрации заявки)
				</h5>
				<hr class='my-4' />
				<h5 class='lead text'>
					<strong>Back-end:</strong> Составлена простая полноценная CRUD
					rest-api в соответствии ТЗ. БД - монго, модельное представление
					монгус, фреймоврк- экспресс. Конкретный список роутов:
				</h5>
				<ul className='list-group'>
					<li className='list-group-item'>GET api/orders/ </li>
					<li className='list-group-item'>GET api/orders/:id</li>
					<li className='list-group-item'>POST api/orders/</li>
					<li className='list-group-item'>PUT api/orders/:id</li>
					<li className='list-group-item'>DELETE api/orders/:id</li>
				</ul>
				<hr class='my-4' />
				<h5 class='lead text'>
					<strong>Front-end:</strong> На фронте сделан простой роутинг,
					компонент ошибок и предупреждений, фильтрация по всем данным в
					навбаре(Кроме даты регистрации), Вывод всех заявок в столбик с
					возможностью редактирования, добавления и удаления. Использованы
					несколько доп. библиотек для работы:
				</h5>
				<ul className='list-group'>
					<li className='list-group-item'>
						Moment для визуализации даты заявок
					</li>
					<li className='list-group-item'>Bootstrap для скорости верстки</li>
					<li className='list-group-item'>Redux для стейт-менеджмента</li>
				</ul>
			</div>
		</div>
	)
}

export default Landing
