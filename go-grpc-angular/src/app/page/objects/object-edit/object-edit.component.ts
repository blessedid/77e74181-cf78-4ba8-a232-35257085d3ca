import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-edit',
  templateUrl: './object-edit.component.html',
  styleUrls: ['./object-edit.component.css']
})
export class ObjectEditComponent implements OnInit {
  data = [
    {group_name: 'Основная информация', url: 'main', group: [
        {rus_name: 'Статус функционирования', name: 'functioning_status', value: '1', type: 2, options: [
          {label: 'Открыт', value: '1'},
          {label: 'Закрыт', value: '0'},
          ]},
        {rus_name: 'Номер объекта', name: 'room', value: '545', type: 2, options: [
            {label: '545', value: '545'},
            {label: '5248528', value: '5248528'},
          ]},
        {rus_name: 'Дата открытия', name: 'opening_date', value: '1990-11-21', type: 3},
        {rus_name: 'Тип объекта', name: 'object_type', value: '1', type: 2, options: [
            {label: 'Магазин', value: '1'},
            {label: 'Торговый центр', value: '2'},
          ]},
        {rus_name: 'Тип помещения объекта', name: 'type_of_facility', value: 'Отдельно стоящее здание', type: 1},
        {rus_name: 'Общая площадь, м2', name: 'total_area_m2', value: '1475.0', type: 1},
        {rus_name: 'Регион', name: 'region', value: '77', type: 2, options: [
            {label: 'Москва', value: '77'},
            {label: 'Московская область', value: '712'},
          ]},
        {rus_name: 'Населенный пункт', name: 'locality', value: '77', type: 2, options: [
            {label: 'Москва', value: '77'},
            {label: 'Балашиха', value: '5248528'},
          ]},
        {rus_name: 'Адрес', name: 'address', value: 'Большой Овчинниковский переулок, дом 16', type: 1},
        {rus_name: 'Наименование юридического лица', name: 'name_of_legal_entity', value: '545', type: 2, options: [
            {label: 'ООО "АТАК"', value: '545'},
            {label: 'ООО "АШАН"', value: '5248528'},
          ]},
        {rus_name: 'Тип собственности', name: 'type_of_property', value: '545', type: 2, options: [
            {label: 'Аренда', value: '545'},
            {label: 'Собственность', value: '5248528'},
          ]},
        {rus_name: 'Директор', name: 'director', value: 'Ф.И.О.', type: 1},
        {rus_name: 'Телефон рабочий', name: 'work_phone', value: ['+74950000000'], type: 4},
        {rus_name: 'Телефон мобильный', name: 'mobile_phone', value: ['+74950000000'], type: 4},
        {rus_name: 'Телефон дополнительный', name: 'additional_telephone', value: ['+74950000000'], type: 4},
        {rus_name: 'E-mail', name: 'email1', value: ['dir_sm_545@auchan.ru'], type: 4}
      ]},
    {group_name: 'Организация подрядчик, обслуживающая СПЗ', url: 'serving', group: [
        {rus_name: 'Наименование юридического лица', name: 'name_of_legal_entity2', value: '545', type: 2, options: [
            {label: 'ООО "АльянсГрупп"', value: '545'},
            {label: 'ООО "Рога и копыта"', value: '5248528'},
          ]},
        {rus_name: 'Контактное лицо', name: 'contact_person', value: 'Василий Владимирович Юминов - Заместитель генерального директора', type: 1},
        {rus_name: 'Телефон 1', name: 'phone_number', value: ['+74950000000 - по вопросам ПБ'], type: 4},
        {rus_name: 'Телефон 2', name: 'phone', value: ['+74950000000 - оперативный дежурный'], type: 4},
        {rus_name: 'E-mail', name: 'email2', value: ['6602140@mail.ru', 'operdd@datadextra.ru'], type: 4}
      ]},
    {group_name: 'Организация подрядчик, обеспечивающая\r\n эксплуатационное обслуживание инженерных систем', url: 'engineering_systems', group: [
        {rus_name: 'Наименование юридического лица', name: 'name_of_legal_entity3', value: '545', type: 2, options: [
            {label: 'ООО "АльянсГрупп"', value: '545'},
            {label: 'ООО "Рога и копыта"', value: '5248528'},
          ]},
        {rus_name: 'Контактное лицо', name: 'contact_person2', value: 'Ф.И.О.', type: 1},
        {rus_name: 'Телефон 1', name: 'phone_number1', value: ['+74950000000'], type: 4},
        {rus_name: 'Телефон 2', name: 'phone1', value: ['+74950000000'], type: 4},
        {rus_name: 'E-mail', name: 'email3', value: ['mail'], type: 4}
      ]}
  ];
  constructor() { }

  ngOnInit() {
  }

}
