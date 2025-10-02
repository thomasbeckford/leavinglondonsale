import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('.swiper-detail')
  if (swiperEl) {
    new Swiper('.swiper-detail', {
      modules: [Navigation, Pagination],
      loop: true,
      pagination: {
        el: '.swiper-pagination-detail',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next-detail',
        prevEl: '.swiper-button-prev-detail',
      },
    })
  }
})
