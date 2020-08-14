import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afa',
  templateUrl: './afa.component.html',
  styleUrls: ['./afa.component.sass']
})
export class AfaComponent implements OnInit {
  data = [
    {group_name: 'Основная информация', url: 'main', group: [
        {rus_name: 'Вендор', name: 'name', value: 'НВП "Болид"', type: 1},
        {rus_name: 'Наименование', name: 'status', value: 'ИСО "Орион"', type: 1},
        {rus_name: 'Модель управляющего устройства', name: 'status2', value: 'Пульс С2000-м', type: 1},
        {rus_name: 'Месторасположение управляющего устройства', name: 'status3', value: 'Помещение 001', type: 1},
        {rus_name: 'Структура', name: 'status4', value: 'JSON data', type: 1},
        {rus_name: 'Система подключена к источнику бесперебойного питания', name: 'vendor', value: '0', type: 2, options: [
            {label: 'Да', value: '1'},
            {label: 'Нет', value: '0'},
          ]},
        {rus_name: 'Система автономная или от ТЦ (здания)', name: 'type_pr', value: '0', type: 2, options: [
            {label: 'Да', value: '1'},
            {label: 'Нет', value: '0'},
          ]},
        {rus_name: 'Наличие интеграции с ТЦ', name: 'model2', value: 'Интеграции нет', type: 1},
        {rus_name: 'Происходит ли передача сигнала "ПОЖАР" на круглосуточный пост охраны магазина и/или ТЦ', name: 'vendor', value: '1', type: 2, options: [
            {label: 'Да', value: '1'},
            {label: 'Нет', value: '0'},
          ]},
        {rus_name: 'Сигнал передается по GSM в мониторинговый центр', name: 'type_pr2', value: '0', type: 2, options: [
            {label: 'Да', value: '1'},
            {label: 'Нет', value: '0'},
          ]},
        {rus_name: 'Марка кабельных линий АПС (FRLS / FRHF / другое)', name: 'version', value: 'FRHF', type: 1},
        {rus_name: 'Перечень помещений не оборудованных системой АПС, \r\nкроме холодильных камер и помещений с мокрыми процессами', name: 'w', value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae consequuntur hic illo rem! Illum, perferendis, tempora. A atque eius laudantium provident quaerat. Accusamus corporis cumque esse iusto, quibusdam veniam.', type: 5},
        {rus_name: 'Наличие на объекте копии исполнительной документации АПС', name: 'type_pr3', value: '1', type: 2, options: [
            {label: 'Да', value: '1'},
            {label: 'Нет', value: '0'},
          ]},
      ]}
  ];
  constructor() { }

  ngOnInit() {
  }

}
