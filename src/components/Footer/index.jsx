import React from 'react'
import s from './style.module.css'

export default function Footer() {
  return (
    <div>
        <div className={s.wrapper}>
            <div>
                <p className={s.title}>Contact</p>
                <p className={s.phone}>+49 999 999 99 99</p>
                <div>
                    <span className={s.icon}>
                        <i className="lab la-instagram"></i>
                    </span>
                    <span className={s.icon}>
                        <i className="lab la-telegram"></i>
                    </span>
                    <span className={s.icon}>
                        <i className="lab la-facebook"></i>
                    </span>
                    <span className={s.icon}>
                        <i className="lab la-twitter"></i>
                    </span>
                </div>
            </div>
            <div>
                <p className={s.title}>Address</p>
                <p className={s.address}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                <p className={s.hours}>Working Hours</p>
                <p className={s.days}>24 hours a day</p>
            </div>
        </div>
        <iframe className={s.frame} allowpaymentrequest='false' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.410460381963!2d13.372912915765522!3d52.5079104798119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2sLinkstra%C3%9Fe%202%2F8.%20Etage%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1681209103795!5m2!1sru!2sde" width="100%" height="525" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

