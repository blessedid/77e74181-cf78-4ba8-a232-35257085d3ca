import {Component, OnInit} from '@angular/core';
import {MonObjectInfoListByIndService} from '../../../services/mon-object-info-list-by-ind.service';
import {ActivatedRoute} from '@angular/router';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-object-view',
  templateUrl: './object-view.component.html',
  styleUrls: ['./object-view.component.css']
})
export class ObjectViewComponent implements OnInit {
  data = [
    // {group_name: 'Основная информация', url: 'main', group: [
    //     {rus_name: 'Статус функционирования', value: 'Открыт'},
    //     {rus_name: 'Номер объекта', value: '545'},
    //     {rus_name: 'Дата открытия', value: '1/1/2000'},
    //     {rus_name: 'Тип объекта', value: 'Магазин'},
    //     {rus_name: 'Тип помещения объекта ', value: 'Отдельно стоящее здание'},
    //     {rus_name: 'Общая площадь, м2', value: '1475.0'},
    //     {rus_name: 'Регион', value: 'Москва'},
    //     {rus_name: 'Населенный пункт', value: 'Москва'},
    //     {rus_name: 'Адрес', value: 'Большой Овчинниковский переулок, дом 16'},
    //     {rus_name: 'Наименование юридического лица', value: 'ООО "АТАК"'},
    //     {rus_name: 'Тип собственности', value: 'Собственность'},
    //     {rus_name: 'Директор объекта', value: 'Ф.И.О.'},
    //     {rus_name: 'Телефон объекта рабочий', value: '+74950000000'},
    //     {rus_name: 'Телефон объекта мобильный', value: '+74950000000'},
    //     {rus_name: 'Телефон объекта дополнительный', value: '+74950000000'},
    //     {rus_name: 'Электронная почта объекта', value: 'dir_sm_545@auchan.ru'}
    //   ]},
    // {group_name: 'Организация подрядчик, обслуживающая СПЗ', url: 'serving', group: [
    //     {rus_name: 'Наименование юридического лица', value: 'ООО "АльянсГрупп"'},
    //     {rus_name: 'Контактное лицо', value: 'Василий Владимирович Юминов - Заместитель генерального директора'},
    //     {rus_name: 'Телефон обслуживающей организации 1', value: '+74950000000 - по вопросам ПБ'},
    //     {rus_name: 'Телефон обслуживающей организации 2', value: '+74950000000 - оперативный дежурный'},
    //     {rus_name: 'Электронная почта обслуживающей организации', value: '6602140@mail.ru, operdd@datadextra.ru'}
    //   ]},
    // {group_name: 'Организация подрядчик, обеспечивающая эксплуатационное обслуживание инженерных систем', url: 'engineering_systems', group: [
    //     {rus_name: 'Наименование юридического лица', value: 'ООО "АльянсГрупп"'},
    //     {rus_name: 'Контактное лицо', value: 'Ф.И.О.'},
    //     {rus_name: 'Телефон обслуживающей организации 1', value: '+74950000000'},
    //     {rus_name: 'Телефон обслуживающей организации 2', value: '+74950000000'},
    //     {rus_name: 'Электронная почта обслуживающей организации', value: 'mail'}
    //   ]}
  ];
  afaData = [
    {group_name: 'Основная информация', url: 'main', group: [
        {rus_name: 'Вендор', value: 'НВП "Болид"'},
        {rus_name: 'Наименование', value: 'ИСО "Орион"'},
        {rus_name: 'Модель управляющего устройства', value: 'Пульс С2000-м'},
        {rus_name: 'Месторасположение управляющего устройства', value: 'Помещение 001'},
        {rus_name: 'Структура', value: 'JSON data'},
        {rus_name: 'Система подключена к источнику бесперебойного питания', value: 'Нет'},
        {rus_name: 'Система автономная или от ТЦ (здания)', value: 'Нет'},
        {rus_name: 'Наличие интеграции с ТЦ', value: 'Интеграции нет'},
        {rus_name: 'Происходит ли передача сигнала "ПОЖАР" на круглосуточный пост охраны магазина и/или ТЦ', value: 'Да'},
        {rus_name: 'Сигнал передается по GSM в мониторинговый центр', value: 'Нет'},
        {rus_name: 'Марка кабельных линий АПС (FRLS / FRHF / другое)', value: 'FRHF'},
        {rus_name: 'Перечень помещений не оборудованных системой АПС, \r\nкроме холодильных камер и помещений с мокрыми процессами', value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae consequuntur hic illo rem! Illum, perferendis, tempora. A atque eius laudantium provident quaerat. Accusamus corporis cumque esse iusto, quibusdam veniam.'},
        {rus_name: 'Наличие на объекте копии исполнительной документации АПС', value: 'Да'}
      ]}
  ];
  constructor(private monObjectInfoListByIndService: MonObjectInfoListByIndService, private route: ActivatedRoute) {
    // const id = ;

    monObjectInfoListByIndService.get(route.snapshot.paramMap.get('id')).subscribe(monObject => {

      if (!monObject) {
        return;
      }
      const d: any = monObject;

      this.data = [
        {
          group_name: 'Основная информация', url: 'main', group: [
            // {rus_name: 'Статус функционирования', value: 'Открыт'},
            {rus_name: 'Номер объекта', value: d.number},
            {rus_name: 'Дата открытия', value: formatDate(d.openDate, 'dd.MM.yyyy', 'ru' )},
            {rus_name: 'Тип объекта', value: d.unitType},
            {rus_name: 'Тип помещения объекта ', value: d.premesisType},
            {rus_name: 'Общая площадь, м2', value: d.totalarea},
            {rus_name: 'Регион', value: d.region},
            // {rus_name: 'Населенный пункт', value: 'Москва'},
            {rus_name: 'Адрес', value: d.address},
            {rus_name: 'Наименование юридического лица', value: d.company},
            // {rus_name: 'Тип собственности', value: 'Собственность'},
            // {rus_name: 'Директор объекта', value: 'Ф.И.О.'},
            {rus_name: 'Телефон объекта рабочий', value: d.phone},
            {rus_name: 'Электронная почта объекта', value: d.email}
          ]
        }
      ];
      // monObjectInd: 173
      // caption: "АТАК 545"
      // salesarea: 0
    });
  }

  ngOnInit() {
  }

}
