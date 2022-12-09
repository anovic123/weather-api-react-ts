import { ChangeEvent } from 'react';
import { optionType } from '../types';

type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

const Search = ({ term, options, onInputChange, onOptionSelect, onSubmit }: Props): JSX.Element => {
  return (
      <section
        className="w-full md:max-w-[500px] p-4 flex flex-col text-center
          items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white
          bg-opacity-20 backgrop-blur-ls rounded drop-shadow-lg text-zinc-700"
      >
        <h1 className="text-4xl font-thin">
          Прогноз <span className="font-black">Погоды</span>
        </h1>
        <p className="text-sm mt-2">
          Введите ниже место, где вы хотите узнать погоду, и выберите вариант из выпадающего списка.
        </p>

        <div className="relative flex mt-10 md:mt-4">
          <input
            type="text"
            value={term}
            onChange={onInputChange}
            className="px-2 py-1 rounded-l-md border-2 border-white"
          />

          <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
            {options.map((option: optionType, index: number) => (
              <li key={option.name + '-' + index}>
                <button
                  className="text-left text-sm w-full hover:bg-zinc-700
                  hover:text-white px-2 py-1 cursor-pointer"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name}, {option.country}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500
            hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer"
            onClick={onSubmit}
          >
            Найти
          </button>
        </div>
      </section>
  );
};

export default Search;
