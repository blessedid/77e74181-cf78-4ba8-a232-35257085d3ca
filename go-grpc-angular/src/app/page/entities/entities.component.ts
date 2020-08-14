import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.sass']
})
export class EntitiesComponent implements OnInit {
  data = [
    {group_name: 'Наименование и адрес', url: 'main', group: [
        {rus_name: 'Полное наименование', value: 'Общество с ограниченной ответственностью "СМИС Эксперт"'},
        {rus_name: 'Сокращенное наименование', value: 'ООО "СМИС Эксперт"'},
        {rus_name: 'Фактический и почтовый адрес', value: '115230, г. Москва, Каширское шоссе, д.12'}
      ]},
    {group_name: 'Сведения о регистрации и учете в налоговом органе', url: 'nalog', group: [
        {rus_name: 'ОГРН', value: '1157746014821'},
        {rus_name: 'Дата регистрации', value: '11.01.2015'},
        {rus_name: 'Юридический адрес', value: '115230, г. Москва, Каширское шоссе, д.12'},
        {rus_name: 'ИНН', value: '7725259211'},
        {rus_name: 'КПП', value: '772401001'},
        {rus_name: 'ОКПО', value: '40148343'}
      ]},
    {group_name: 'Сведения о лице, имеющем право без доверенности действовать от имени юридического лица', url: 'gen', group: [
        {rus_name: 'Ф.И.О.', value: 'Левин Сергей Андреевич'},
        {rus_name: 'Должность', value: 'Генеральный директор'}
      ]},
    {group_name: 'Банковские реквизиты', url: 'bank', group: [
        {rus_name: ' Наименование банка', value: 'ПАО "ПРОМСВЯЗЬБАНК" г. Москва'},
        {rus_name: ' БИК', value: '44525555'},
        {rus_name: ' Корреспондентский счет', value: '30101810400000000000'},
        {rus_name: ' Расчетный счет', value: '40702810900000000000'}
      ]},
    {group_name: 'Контактные данные', url: 'contact', group: [
        {rus_name: 'Телефон', value: '+7 (495) 532-52-62'},
        {rus_name: 'E-mail', value: 'smisexpert@bk.ru'},
        {rus_name: 'Web-site', value: 'link', link: 'www.smis-expert.com'}
      ]}
  ];
  data2 = [
    {group_name: 'Наименование и адрес', url: 'main', group: [
        {rus_name: 'Полное наименование', name: 'name1', type: 1, value: 'Общество с ограниченной ответственностью "СМИС Эксперт"'},
        {rus_name: 'Сокращенное наименование', name: 'name2', type: 1, value: 'ООО "СМИС Эксперт"'},
        {rus_name: 'Фактический и почтовый адрес', name: 'name3', type: 1, value: '115230, г. Москва, Каширское шоссе, д.12'}
      ]},
    {group_name: 'Сведения о регистрации и учете в налоговом органе', url: 'nalog', group: [
        {rus_name: 'ОГРН', name: 'name', type: 1, value: '1157746014821'},
        {rus_name: 'Дата регистрации', name: 'name4', type: 1, value: '11.01.2015'},
        {rus_name: 'Юридический адрес', name: 'name5', type: 1, value: '115230, г. Москва, Каширское шоссе, д.12'},
        {rus_name: 'ИНН', name: 'name6', type: 1, value: '7725259211'},
        {rus_name: 'КПП', name: 'name7', type: 1, value: '772401001'},
        {rus_name: 'ОКПО', name: 'name8', type: 1, value: '40148343'}
      ]},
    {group_name: 'Сведения о лице, имеющем право без доверенности действовать от имени юридического лица', url: 'gen', group: [
        {rus_name: 'Ф.И.О.', name: 'name9', type: 1, value: 'Левин Сергей Андреевич'},
        {rus_name: 'Должность', name: 'name10', type: 1, value: 'Генеральный директор'}
      ]},
    {group_name: 'Банковские реквизиты', url: 'bank', group: [
        {rus_name: ' Наименование банка', name: 'name11', type: 1, value: 'ПАО "ПРОМСВЯЗЬБАНК" г. Москва'},
        {rus_name: ' БИК', name: 'name12', type: 1, value: '44525555'},
        {rus_name: ' Корреспондентский счет', name: 'name13', type: 1, value: '30101810400000000000'},
        {rus_name: ' Расчетный счет', name: 'name14', type: 1, value: '40702810900000000000'}
      ]},
    {group_name: 'Контактные данные', url: 'contact', group: [
        {rus_name: 'Телефон', name: 'name15', type: 4, value: ['+7 (495) 532-52-62']},
        {rus_name: 'E-mail', name: 'name16', type: 4, value: ['smisexpert@bk.ru']},
        {rus_name: 'Web-site', name: 'name17', type: 1, value: 'www.smis-expert.com'}
      ]}
  ];
  isEdit = false;
  param: {[key: string]: number} = {};
  dataSet = [
    {name: 'ООО "СМИС Эксперт"', phone: '+79001234567', email: 'smisexpert@bk.ru', inn: 7725259211, ogrn: 7725259211}
  ];
  constructor(private route: Router, private r: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.url.indexOf('edit') != -1) this.isEdit = true;
    this.param = this.r.snapshot.params;
  }

}
