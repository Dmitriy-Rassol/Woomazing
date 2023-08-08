export const NAV_PATH = [
  { title: 'Главная', path: '/' },
  {
    title: 'Магазин',
    path: '/shop/category',
    submenu: [
      { subTitle: 'Пальто', type: 'coat' },
      { subTitle: 'Свитшоты', type: 'sweatshot' },
      { subTitle: 'Купальники', type: 'swimwear' },
      { subTitle: 'Футболки', type: 'tshirt' }
    ]
  },
  { title: 'О бренде', path: '/about' },
  { title: 'Контакты', path: '/contacts' }
]

export const CATEGORY = [
  { title: 'Все', type: 'all' },
  { title: 'Пальто', type: 'coat' },
  { title: 'Свитшоты', type: 'sweatshot' },
  { title: 'Купальники', type: 'swimwear' },
  { title: 'Футболки', type: 'tshirt' }
]

export const PHONE = '+7 (495) 823-54-12'

export const HEADER_SLIDER = [
  {
    title: 'Новые поступления в этом сезоне',
    desc: 'Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.'
  },
  {
    title: 'Включай новый сезон с WOMAZING',
    desc: 'Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров'
  },
  {
    title: 'Что-то новенькое. Мы заждались тебя.',
    desc: 'Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!'
  }
]

export const IMPORTANTS = [
  {
    img: 'pic2.png',
    title: 'Качество',
    desc: 'Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества'
  },
  {
    img: 'pic3.png',
    title: 'Скорость',
    desc: 'Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах'
  },
  {
    img: 'pic1.png',
    title: 'Ответственность',
    desc: 'Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing'
  }
]

export const TEAM = [
  {
    title: 'slide1',
    img: 'slide-1.png'
  },
  {
    title: 'slide2',
    img: 'slide-2.png'
  },
  {
    title: 'slide3',
    img: 'slide-3.png'
  }
]

// yandex-map
export const settings = {
  apiKey: '8a7deb66-ca30-4ac7-9815-4db28221b7cd',
  lang: 'ru_RU',
  coordorder: 'latlong',
  debug: false,
  version: '2.1'
}

export const CONTACTS = [
  {title: 'Телефон', desc: '+7 (495) 823-54-12'},
  {title: 'E-mail', desc: 'hello@womazing.com'},
  {title: 'Адрес', desc: 'г. Москва, 3-я улица Строителей, 25'}
]
