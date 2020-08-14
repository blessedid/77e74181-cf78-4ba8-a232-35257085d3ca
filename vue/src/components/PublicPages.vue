<template>
    <div>
        <v-container style="max-width: 1600px;">
            <div v-for="(item, i) of components" :key="i">
            <Header v-if="item.type === 'header'" v-bind:inputData="item.values" />

            <OurServices v-if="item.type === 'our_services'" v-bind:inputData="item.values" />

            <CouriersOnMap v-if="item.type === 'couriers_on_map'" />

            <GrayBlock v-if="item.type === 'gray_block'" v-bind:inputData="item.values" />

            <BlockPictureLeft v-if="item.type === 'block_picture_left'" v-bind:inputData="item.values" />

            <Statistics v-if="item.type === 'statistics'" v-bind:inputData="item.values" />

            <Reviews v-if="item.type === 'reviews'" />

            <Table v-if="item.type === 'table'" />

            <ImgDescription v-if="item.type === 'img_description'" />

            <VideoBlock v-if="item.type === 'video'" />

            <CourierCalculator v-if="item.type === 'courier_calculator'" />

            <two-column-text v-if="item.type === 'two_column_text'" />

            <ContactForm v-if="item.type === '2'" />

            <Requisites v-if="item.type === 'requisites'" />

            <Contacts v-if="item.type === 'contacts'" />

            <FAQ v-if="item.type === 'faq'" />

            <Partners v-if="item.type === 'partners'" />

            <NotFoundComponent v-if="item.type === 555" />

            </div>

        </v-container>
    </div>
</template>

<script>
    import OurServices from './public/OurServices';
    import GrayBlock from "./public/GrayBlock";
    import CouriersOnMap from "./public/CouriersOnMap";
    import BlockPictureLeft from "./public/BlockPictureLeft";
    import Statistics from "./public/Statistics";
    import Header from "./public/Header";
    import Reviews from "./public/Reviews";
    import Table from "./public/Table";
    import ImgDescription from "./public/ImgDescription";
    import VideoBlock from "./public/VideoBlock";
    import CourierCalculator from "./public/CourierCalculator";
    import TwoColumnText from "./public/TwoColumnText";
    import ContactForm from "./public/ContactForm";
    import Requisites from "./public/Requisites";
    import Contacts from "./public/Contacts";
    import FAQ from "./public/FAQ";
    import Partners from "./public/Partners";
    import NotFoundComponent from "./NotFoundComponent";

    export default {
        name: 'PublicPages',
        components: {
            NotFoundComponent,
            OurServices, GrayBlock, CouriersOnMap, BlockPictureLeft, Statistics, Header, Reviews, Table,
            ImgDescription, VideoBlock, CourierCalculator, TwoColumnText, ContactForm, Requisites, Contacts, FAQ, Partners},
        watch: {
            $route: 'updatePage'
        },
        created() {
            this.updatePage();
        },
        methods: {
            updatePage() {
                this.components = [];
                import('@/assets/data/'+ this.$route.name +'.json').then(res => this.components = [...res.default]).catch(err => console.log(err));
            }
        },
        data: () => ({
            components: [],
            ourServices: [
                {
                    icon: 'special-delivery.svg',
                    title: 'Срочная доставка',
                    link: '',
                    description: 'С другой стороны реализация намеченных плановых заданий в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям.'
                }, {
                    icon: 'food.svg',
                    title: 'Доставка для кафе',
                    link: '',
                    description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры позволяет оценить значение систем массового участия.'
                }, {
                    icon: 'courier.svg',
                    title: 'Аренда курьера',
                    link: '',
                    description: 'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности требуют определения и уточнения систем массового участия.'
                }, {
                    icon: 'produce.svg',
                    title: 'Доставка продуктов',
                    link: '',
                    description: 'Таким образом укрепление и развитие структуры позволяет оценить значение форм развития. Повседневная практика показывает, что реализация намеченных'
                }, {
                    icon: 'prison.svg',
                    title: 'Доставка в тюрьму',
                    link: '',
                    description: 'Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации позиций'
                }, {
                    icon: 'flowers.svg',
                    title: 'Доставка цветов',
                    link: '',
                    description: 'Не следует, однако забывать, что дальнейшее развитие различных форм деятельности требуют от нас анализа модели развития.'
                }, {
                    icon: 'long-distance.svg',
                    title: 'Междугородняя доставка',
                    link: '',
                    description: 'Но существующая теория обеспечивает актуальность новых принципов формирования материально-технической и кадровой базы.'
                }, {
                    icon: 'API.svg',
                    title: 'API интеграция',
                    link: '',
                    description: 'Но существующая теория обеспечивает актуальность новых принципов формирования материально-технической и кадровой базы.'
                }, {
                    icon: 'online-store.svg',
                    title: 'Доставка для интернет-магазина',
                    link: '',
                    description: 'Не следует, однако забывать, что дальнейшее развитие различных форм деятельности требуют от нас анализа модели развития.'
                }
            ],
            howItWorks: {title: 'Как работает?', items: [
                {
                    icon: 'order.svg',
                    title: 'Создайте заказ',
                    description: 'Чтобы робот подбрал курьера'
                }, {
                    icon: 'courier.svg',
                    title: 'Дождитесь курьера',
                    description: 'Отдайте посылку и оплатите доставку'
                }, {
                    icon: 'maps.svg',
                    title: 'Отслеживайте маршрут',
                    description: 'Курьеры отображаются на карте в режиме реального времени'
                }, {
                    icon: 'communication.svg',
                    title: 'Получите уведомление',
                    description: 'В Whatsapp и на почту придут уведомления о доставке'
                }, {
                    icon: 'assessment.svg',
                    title: 'Поставьте оценку',
                    description: 'Благодаря Вашим отзывам и оценкам мы можем развиваться'
                }
            ]},
            howItWorks2: {title: 'Почему с нами выгодно?', items: [
                {
                    icon: 'order.svg',
                    title: 'Доставка от 40 минут'
                }, {
                    icon: 'courier.svg',
                    title: 'Компенсация потери',
                }, {
                    icon: 'maps.svg',
                    title: 'Круглосуточная доставка',
                }, {
                    icon: 'communication.svg',
                    title: 'Доставляем 98% всех заказов',
                }, {
                    icon: 'assessment.svg',
                    title: 'Отслеживание курьера на карте',
                }
            ]},
            about: {
                title: 'О компании',
                image: 'http://via.placeholder.com/600x417',
                text: '<p>Таким образом, начало повседневной работы по формированию позиции позволяет оценить значение инновационных методов управления процессами. Принимая во внимание показатели успешности, высокотехнологичная концепция общественного уклада играет определяющее значение для благоприятных перспектив.</p>\n' +
                    '<p>Интерактивные прототипы, инициированные исключительно синтетически, указаны как претенденты на роль ключевых факторов.</p>',
                links: [
                    {
                        text: 'Подробнее о компании',
                        link: '#'
                    }
                ]
            },
            statistics: [
                {
                    count: 90,
                    title: 'тысяч доставок',
                    description: 'Многие известные личности лишь добавляют фракционных разногласий и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.'
                },
                {
                    count: 400,
                    title: 'миллионов рублей',
                    description: 'Многие известные личности лишь добавляют фракционных разногласий и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.'
                },
                {
                    count: 500,
                    title: 'постоянных клиентов',
                    description: 'Многие известные личности лишь добавляют фракционных разногласий и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.'
                },
            ],
            сouriers: {
                title: 'Курьерам',
                image: 'http://via.placeholder.com/350x651',
                text: '<p>Равным образом, синтетическое тестирование представляет собой интересный эксперимент проверки дальнейших направлений развития. В своём стремлении повысить качество жизни, они забывают, что консультация с широким активом обеспечивает актуальность системы массового участия.</p>\n' +
                    '<p>А также диаграммы связей, превозмогая сложившуюся непростую экономическую ситуацию, подвергнуты целой серии независимых исследований.</p>',
                links: [
                    {
                        link: '#',
                        image: 'http://via.placeholder.com/137x40'
                    },
                    {
                        link: '#',
                        image: 'http://via.placeholder.com/137x40'
                    }
                ]
            },
            headerData: {
                title: 'Курьерская доставка <br/> день в день от 140 &#8381;',
                subtitle: 'Оставляйте заявки на доставку <br/>в удобное для вас время',
                button: [
                    {text: '', link: '', outlined: false},
                    {text: '', link: '', outlined: true},
                ],
                tongue: {
                    width: 1200,
                    height: '245px',
                    type: 'text',
                    text: [
                        '45 000 ₽ Ср. заработок',
                        'Ежедневные выплаты',
                        'Выбор удобого графика',
                        'Премии за высокий рейтинг'
                    ]
                }
            },
        }),
    }
</script>

<style scoped>
    .wrap {
        max-width: 1600px;
    }
</style>
