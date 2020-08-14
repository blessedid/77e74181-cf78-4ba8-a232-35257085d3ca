import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.sass']
})
export class EquipmentsComponent implements OnInit {
  data = [
    {group_name: 'Основная информация', url: 'main', group: [
      {rus_name: 'Название в системе', value: 'ШС1'},
      {rus_name: 'Текщий статус', value: 'Норма'},
      {rus_name: 'Вендор', value: 'НВП "Болид"'},
      {rus_name: 'Тип устройства', value: 'Извещатель пожарный ручной'},
      {rus_name: 'Модель устройства', value: 'ИПР 513-3ПАМ'},
      {rus_name: 'Версия прошивки', value: ''},
      {rus_name: 'Место установки устройства', value: 'Помещение 001'},
      {rus_name: 'История состояний', value: 'JSON2'}
    ]}
    ];
  data2 = [
    {group_name: 'Основная информация', url: 'main', group: [
        {rus_name: 'Название в системе', name: 'name', value: 'ШС1', type: 1},
        {rus_name: 'Текщий статус', name: 'status', value: 'Норма', type: 1},
        {rus_name: 'Вендор', name: 'vendor', value: '545', type: 2, options: [
            {label: 'НВП "Болид"', value: '545'},
            {label: 'Вендор 2', value: '246'},
          ]},
        {rus_name: 'Тип устройства', name: 'type_pr', value: '545', type: 2, options: [
            {label: 'Извещатель пожарный ручной', value: '545'},
            {label: 'Тип 2', value: '246'},
          ]},
        {rus_name: 'Модель устройства', name: 'model', value: 'ИПР 513-3ПАМ', type: 1},
        {rus_name: 'Версия прошивки', name: 'version', value: '', type: 1},
        {rus_name: 'Место установки устройства', name: 'w', value: 'Помещение 001', type: 1},
      ]}
  ];
  breadcrumbData = [
    {name: 'Объект #123'},
    {name: 'АПС'},
    {name: 'С2000-М'},
    {name: 'С2000-КДЛ (3)'},
    {name: 'ШС1'}
  ];
  isEdit = false;
  constructor(private route: Router) { }

  ngOnInit() {
    if (this.route.url.indexOf('edit') != -1) this.isEdit = true;
  }

}
