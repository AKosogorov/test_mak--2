window.addEventListener('DOMContentLoaded', function() {

  // данные
  const regions = ['Тюменская', 'Курганская', 'Омская', 'Томская'];

  const cityesOfRegions = {
    tyumen: [
      'Тюмень',
      'Сургут',
      'Нижневартовск',
      'Нефтеюганск',
      'Новый Уренгой',
      'Ноябрьск',
      'Тобольск',
      'Ханты-Мансийск',
      'Ишим',
      'Когалым'
    ],

    kurgan: [
      'Курган',
      'Шадринск'
    ],

    omsk: [
      'Омск',
      'Тара'
    ],

    tomsk: [
      'Томск',
      'Северск',
      'Стрежевой'
    ]
  };

  let selectedRegion = 'Тюменская';

  // selects
  const selects = document.querySelectorAll('.select__selected');
  selects.forEach(elem => elem.addEventListener('click', selectToggle));

  const selectRegion = document.querySelector('.select-region');
  const selectCity = document.querySelector('.select-city');

  fillSelectDropdown(selectRegion, regions, 'select-region__option');
  fillSelectDropdown(selectCity, cityesOfRegions.tyumen, 'select-city__option');

  const optionsOfRegion = document.querySelectorAll('.select-region__option');
  optionsOfRegion.forEach(elem => elem.addEventListener('click', choiceRegion));

  function fillSelectDropdown(select, arrValues, className) {
    const dropdown = select.querySelector('.select__dropdown');
    const selectedValue = select.querySelector('.select__selected');

    arrValues.forEach((value, index) => {
      if (index === 0) {
        selectedValue.textContent = value;
      }
      createSelectOption(dropdown, value, className)
    })
  }

  function createSelectOption(dropdown, value, className) {
    
    const li = document.createElement('li');
    li.classList.add('select__option', className);
    li.textContent = value;

    li.addEventListener('click', selectChoiceOption)

    dropdown.append(li);
  }

  function selectToggle() {
    this.parentElement.classList.toggle('is-active')
  }

  function selectChoiceOption() {
    const value = this.textContent;
    const select = this.closest('.select');
    const selectedValue = select.querySelector('.select__selected');

    selectedValue.textContent = value;
    select.classList.remove('is-active');
  }

  function choiceRegion() {    
    const region = this.textContent;
    if(selectedRegion === region) return;
    

    let cityes
    switch(region) {
      case('Курганская'):
        cityes = cityesOfRegions.kurgan;
        break
      case('Тюменская'):
        cityes = cityesOfRegions.tyumen;
        break
      case('Омская'):
        cityes = cityesOfRegions.omsk;
        break
      case('Томская'):
        cityes = cityesOfRegions.tomsk;
    };
    
    const dropdown = document.querySelector('.select-city__dropdown')
    dropdown.innerHTML = '';

    selectedRegion = region;

    fillSelectDropdown(selectCity, cityes, 'select-city__option');
  }

  // кнопки
  const btnAdd = document.querySelector('.btn-add');
  const btnClean = document.querySelector('.btn-clean');
  const list = document.querySelector('.choice-city__list');

  btnAdd.addEventListener('click', () => {

    const city = document.querySelector('.select-city__selected').textContent;

    const li = document.createElement('li');
    li.classList.add('choice-city__item');
    li.textContent = `${selectedRegion} область, г. ${city}`;

    list.append(li);
  });

  btnClean.addEventListener('click', () => {
    list.innerHTML = ''
  });
});
