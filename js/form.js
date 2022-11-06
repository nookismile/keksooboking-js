const form = document.querySelector('.ad-form');
const formInteractive = [...form.children];
const mapFilters = document.querySelector('.map__filters');
const mapFiltersInteractive = [...mapFilters.children];

const addInactiveStay = () => {
  form.classList.add('ad-form--disabled');
  formInteractive.forEach((element) => {
      element.disabled = true;
  });

  mapFilters.classList.add('ad-form--disabled');
  mapFiltersInteractive.forEach((element) => {
      element.disabled = true;
  });
};

const addActiveStay = () => {
    form.classList.remove('ad-form--disabled');
    formInteractive.forEach((element) => {
        element.disabled = false;
    });

    mapFilters.classList.remove('ad-form--disabled');
    mapFiltersInteractive.forEach((element) => {
        element.disabled = false;
    });
};

export { addInactiveStay, addActiveStay };
