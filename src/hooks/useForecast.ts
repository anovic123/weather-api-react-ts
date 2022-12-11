import { useState, useEffect, ChangeEvent } from 'react';
import { optionType, forecastType } from './../types/index';

const BASE_URL = 'https://api.openweathermap.org';
const API_KEY = '2b7757efb05d048f385fff21bd97b2f8';

const useForecast = () => {
  const [term, setTerm] = useState<string>('');
  const [city, setCity] = useState<optionType | null>(null);
  const [options, setOptions] = useState<[]>([]);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  const getSearchOptions = (value: string) => {
    fetch(`${BASE_URL}/geo/1.0/direct?q=${value.trim()},&limit=${5}&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setOptions(data))
      .catch((e) => console.log(e));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);

    if (value === '') return;

    getSearchOptions(value);
  };

  const getForecast = (city: optionType) => {
    fetch(
      `${BASE_URL}/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };
        setForecast(forecastData);
      })
      .catch((e) => console.log(e));
  };

  const onSubmit = () => {
    if (!city) return;

    getForecast(city);
  };

  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  };
};

export default useForecast;
