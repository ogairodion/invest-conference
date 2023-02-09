<template>
    <div class="card">
        <div class="card__description">электронный билет</div>
        <div class="card__number">№ 001</div>
        <div class="card__title">Конференция</div>
        <div class="card__subtitle">Invest Heroes</div>
        <div class="card__name">Иванов Александр Владимирович</div>
        <div class="card__price">
          <div class="card__price-top">
            <div class="card__price-description">тариф</div>
            <div class="card__price-title">Конференция</div>
            <div class="card__price-label">+ мастер-класс по криптовалюте</div>
          </div>
          <ul class="card__list">
            <li class="card__list-item">Участие в конференции</li>
            <li class="card__list-item">Фуршет</li>
            <li class="card__list-item">Общение со спикерами и гостями</li>
            <li class="card__list-item">Перед началом основной конференции, корифеи рынка криптовалют, расскажут поделятся практическим опытом для участников мастер-класса, а также ответят на ваши вопросы</li>
          </ul>
          <div class="card__price-bottom">
            <div class="card__price-when">
              <div class="card__price-when--date">09.07.2022 / </div>
              <div class="card__price-when--time">&nbsp;15:00</div>
            </div>
            <div class="card__price-address">Москва, Спартаковский переулок 2с1, подъезд №7</div>
          </div>
        </div>
      </div>
</template>

<style>
    .card {
        max-width: 375px;
        padding: 50px 37px 0;
        background: url(".././img/card/bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .card__description {
        font-size: 18px;
        line-height: 120%;
        text-align: center;
        margin-bottom: 6px;
    }

    .card__number {
        font-size: 30px;
        line-height: 120%;
        font-weight: 600;
        text-align: center;
        margin-bottom: 18px;
    }

    .card__title {
        font-size: 36px;
        line-height: 120%;
        font-weight: 900;
        text-transform: uppercase;
        text-align: center;
    }

    .card__subtitle {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 34px;
        line-height: 120%;
        font-weight: 600;
        text-align: center;
    }

    .card__subtitle:after {
        content: '';
        width: 52px;
        height: 4px;
        background: #fff;
        border-radius: 26px;
        margin: 26px 0;
    }

    .card__name {
        font-size: 27px;
        line-height: 120%;
        font-weight: 900;
        text-align: center;
        margin-bottom: 44px;
    }

    .card__price {
        padding: 22px 0 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        color: #253B59;
        background: #fff;
    }

    .card__price-desctiption {
        font-size: 16px;
        line-height: 120%;
        margin-bottom: 4px;
    }

    .card__price-title {
        font-size: 25px;
        line-height: 120%;
        font-weight: 900;
        text-transform: uppercase;
        color: #126DC0;
        margin-bottom: 4px;
    }

    .card__price-label {
        font-size: 16px;
        line-height: 120%;
        color: #126DC0;
    }

    .card__price-top {
        padding: 0 19px 15px;
        border-bottom: 1px solid #F2F2F2;
    }

    .card__price-bottom {
        padding: 15px 19px 46px;
    }

    .card__price-when {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 22px;
        line-height: 120%;
        font-weight: 600;
        margin-bottom: 9px;
    }

    .card__price-when--date {
        font-weight: 900;
        color: #70CBFF;
    }

    .card__price-place {
        font-size: 16px;
        line-height: 120%;
    }

    .card__list {
        padding: 15px 19px;
        border-bottom: 1px solid #F2F2F2;
    }

    .card__list li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        list-style-type: none;
        font-size: 13px;
        line-height: 120%;
        margin-top: 0;
        margin-bottom: 11px;
    }

    .card__list li:last-child {
        margin-bottom: 0;
    }

    .card__list li:before {
        content: url(".././img/svg/check.svg");
        margin-right: 12px;
    }

    @media screen and (max-width: 374px) {
        .card {
            padding: 50px 16px 0;
        }

        .card__number {
            font-size: 24px;
        }

        .card__title {
            font-size: 28px;
        }

        .card__subtitle {
            font-size: 28px;
        }
    }
</style>
